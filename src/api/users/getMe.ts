import { BASE } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const getMe = async (): Promise<ApiResponse<any>> => {
  const response = await api.get(`${BASE}/whoami`);

  return response.data;
};
