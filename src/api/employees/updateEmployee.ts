import { BASE, type Employee } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const updateEmployee = async (
  id: string,
  data: Partial<Omit<Employee, "createdAt" | "updatedAt" | "id">>,
): Promise<ApiResponse<any>> => {
  const response = await api.patch(`${BASE}/${id}`, data);
  return response.data;
};
