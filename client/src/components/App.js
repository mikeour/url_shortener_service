import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios.get("/api/all").then(({ data: results }) => setUrls(results));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/api/add", { fullUrl: url }).then(({ data: results }) => {
      console.log("Heres results! ", results);
    });
  };

  const handleChange = e => {
    setUrl(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter full URL here..."
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {urls &&
        urls.map(({ fullUrl, code }) => (
          <a href={fullUrl} style={{ display: "block" }}>
            {code}
          </a>
        ))}
    </>
  );
};
