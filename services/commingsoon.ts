import API from "./api";
import type { AxiosResponse } from "axios";

type ComingSoonResponse = {
  status: string;
  data: {
    textname: string;
  };
  message: string;
};

export const getComingSoon = (): Promise<AxiosResponse<ComingSoonResponse>> => {
  return API.get<ComingSoonResponse>("/commingsoon");
};