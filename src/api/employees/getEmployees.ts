import { BASE, type Employee } from ".";
import { api } from "../../lib/api";
import type { ApiListResponse } from "../../types/shared";

export const getEmployees = async (): Promise<ApiListResponse<Employee>> => {
  const response = await api.get(`${BASE}`);

  return response.data;
};
