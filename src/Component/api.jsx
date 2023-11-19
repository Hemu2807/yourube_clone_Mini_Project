import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: process.env.yt_api_key,
  },
});
export default request;