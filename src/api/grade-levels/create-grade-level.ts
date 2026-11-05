import { BASE } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";
import type { GradeLevel } from "../../types";

export const createGradeLevel = async (
  name: string,
  description: string,
): Promise<ApiResponse<GradeLevel>> => {
  const data = {
    name,
    description,
  };

  const response = await api.post(`${BASE}`, data);
  return response.data;
};
