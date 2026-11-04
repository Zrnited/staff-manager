import { BASE, type Employee } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const getEmployee = async (id: string): Promise<ApiResponse<Employee>> => {
  const response = await api.get(`${BASE}/${id}`);

  return response.data;
};
