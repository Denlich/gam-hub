import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a63e4c50344d4d05af7767d95ca098d8'
  }
})