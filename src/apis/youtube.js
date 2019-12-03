import axios from "axios";
//insert KEY
const KEY = "";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxRsults: 5,
    key: KEY
  }
});
