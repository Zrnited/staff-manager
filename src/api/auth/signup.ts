import { AUTH_BASE } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
): Promise<ApiResponse<any>> => {
  const data = {
    firstName,
    lastName,
    email,
    password,
  };

  const response = await api.post(`${AUTH_BASE}/signup`, data);
  return response.data;
};
