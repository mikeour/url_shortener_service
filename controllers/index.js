const URL = require("../database/models/Url");
const shortid = require("shortid");

module.exports = {
  urls: {
    get: async code => {
      const url = await URL.findOne({ code });
      return url;
    },
    add: async long => {
      const code = shortid.generate();
      const short = `localhost:3071/${code}`;
      const newURL = await URL.create({ long, short, code });
      return newURL;
    }
  }
};
