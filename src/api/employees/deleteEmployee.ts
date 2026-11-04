import { BASE } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const deleteEmployee = async (id: string): Promise<ApiResponse<any>> => {
  const response = await api.delete(`${BASE}/${id}`);
  return response.data;
};
