import { BASE, type Employee } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const updateEmployee = async (
  id: string,
  data: Partial<
    Omit<Employee, "createdAt" | "updatedAt" | "id" | "gradeLevel">
  >,
  gradeLevelId: null | string,
): Promise<ApiResponse<any>> => {
  const payload = { ...data, gradeLevelId };
  const response = await api.patch(`${BASE}/${id}`, payload);
  return response.data;
};
