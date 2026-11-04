import { BASE, type Employee } from ".";
import { api } from "../../lib/api";
import type { ApiResponse } from "../../types/shared";

export const createEmployee = async (
  name: string,
  position: string,
  department: string,
  country: string,
  state: string,
  address: string,
  gradeLevelId?: string,
): Promise<ApiResponse<Employee>> => {
  const data = {
    name,
    position,
    department,
    country,
    state,
    address,
    gradeLevelId,
  };

  const response = await api.post(`${BASE}`, data);
  return response.data;
};
