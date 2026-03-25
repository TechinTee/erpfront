import API from "./api";
import type { AxiosResponse } from "axios";

export const getComingSoon = (): Promise<AxiosResponse<string>> => {
  return API.get<string>("/commingsoon");
};