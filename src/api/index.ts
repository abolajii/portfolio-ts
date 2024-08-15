import axios from "axios";

const AJAuth = axios.create({
  baseURL: "https://app-ts-opal.vercel.app/api/v1/",
});

const AJNoAuth = axios.create({
  baseURL: "https://app-ts-opal.vercel.app/api/v1/",
});

export { AJAuth, AJNoAuth };
