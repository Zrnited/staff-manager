import { AUTH_BASE } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const signin = async (
  email: string,
  password: string,
): Promise<ApiResponse<any>> => {
  const data = {
    email: email,
    password: password,
  };

  const response = await api.post(`${AUTH_BASE}/signin`, data);
  return response.data;
};
