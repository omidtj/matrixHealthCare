import axios from "axios";
const absoluteURL = `${process.env.NEXT_PUBLIC_BASEURL}`;
export default axios.create({
  baseURL: absoluteURL,
});
