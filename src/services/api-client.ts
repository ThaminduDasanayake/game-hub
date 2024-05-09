import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "508776796d824b07baf77f93343190e8",
  },
});
