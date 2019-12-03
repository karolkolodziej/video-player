import axios from "axios";

const KEY = "AIzaSyDEw76dMP4dj27Q5PeXNQSnlrAel9eYOuc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxRsults: 5,
    key: KEY
  }
});
