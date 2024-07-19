import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from "axios";
import { storage } from "utils";

export const apiInstance = (config?: CreateAxiosDefaults) => {
  const api = axios.create(config);
  api.interceptors.request.use((config) => {
    return {
      ...config,
      headers: {
        Authorization: `${storage.get<string>("accessToken")}` || "",
      } as unknown as AxiosRequestHeaders,
    };
  });
  return api;
};
