const URL = require("../database/models/Url");
const validUrl = require("valid-url");
const shortid = require("shortid");
const baseUri = process.env.BASE_URI;

module.exports = {
  urls: {
    get: async code => {
      // User is retrieving long url from code provided.
      const url = await URL.findOne({ code });
      return url;
    },
    add: async fullUrl => {
      // If a user attempts to store an invalid URL
      if (!validUrl.isUri(fullUrl)) {
        return { error: "Invalid full URL." };
      }

      // Search database to determine if that URL has already been saved
      const url = await URL.findOne({ fullUrl });

      // If a user attempts to store a URL that's already been saved
      if (url) {
        return url;
      } else {
        // If a user attempts to store a URL for the first time
        const code = shortid.generate();
        const shortenedUrl = `${baseUri}/${code}`;
        const newURL = await URL.create({ code, fullUrl, shortenedUrl });
        return newURL;
      }
    }
  }
};
