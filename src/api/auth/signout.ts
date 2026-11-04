import { AUTH_BASE } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const signout = async (): Promise<ApiResponse<any>> => {
  const response = await api.post(`${AUTH_BASE}/signout`);
  return response.data;
};
