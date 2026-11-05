import { BASE } from ".";
import { api } from "../../lib/api";
import type { Stats } from "../../types";
import type { ApiResponse } from "../../types/shared";

export const getStats = async (): Promise<ApiResponse<Stats>> => {
  const response = await api.get(`${BASE}/stats`);

  return response.data;
};
