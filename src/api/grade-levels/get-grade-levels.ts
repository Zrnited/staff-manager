import { BASE } from ".";
import { api } from "../../lib/api";
import type { ApiListResponse } from "../../types/shared";
import type { GradeLevel } from "../../types";

export const getGradeLevels = async (): Promise<
  ApiListResponse<GradeLevel>
> => {
  const response = await api.get(`${BASE}`);

  return response.data;
};
