import { BASE, type GradeLevel } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const getGradeLevel = async (id: string): Promise<ApiResponse<GradeLevel>> => {
  const response = await api.get(`${BASE}/${id}`);

  return response.data;
};
