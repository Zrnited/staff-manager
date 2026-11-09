import { BASE } from ".";
import { api } from "../../lib/api";
import type { ApiListResponse } from "../../types/shared";

export type ChartMetrics = {
  level: string;
  employeeCount: number;
};

export const getChartMetrics = async (): Promise<
  ApiListResponse<ChartMetrics>
> => {
  const response = await api.get(`${BASE}/chart-metrics`);

  return response.data;
};
