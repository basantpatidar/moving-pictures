import axios from "axios";

// const KEY = "AIzaSyB_qnwH5HxTzpSQQpamcnpAdn6-dYvi-X4";
//API is on the App.js page

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
  // params: { part: "snippet", maxResult: 5, key: KEY }
});
