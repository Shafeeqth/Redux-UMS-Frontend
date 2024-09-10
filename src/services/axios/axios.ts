import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";


export const instance = axios.create({
  baseURL: "http://localhost:3000",//import.meta.env.BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 2000,
});

export type { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders };
