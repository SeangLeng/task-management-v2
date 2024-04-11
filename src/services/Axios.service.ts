import { baseURL } from "@/app/service/baseUrl.service";
import axios from "axios";

export const useAxiosClient = axios.create({
  baseURL: baseURL(),
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
  },
});
