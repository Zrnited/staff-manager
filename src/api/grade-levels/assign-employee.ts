import { BASE } from ".";
import { api } from "../../lib/api";
import type { GradeLevel } from "../../types";
import type { ApiResponse } from "../../types/shared";
import type { Employee } from "../employees";

interface AssignResponseData extends GradeLevel {
  employees: Employee[];
}

export const assignEmployee = async (
  gradeLevelId: string,
  employeeId: string,
): Promise<ApiResponse<AssignResponseData>> => {
  const response = await api.patch(
    `${BASE}/${gradeLevelId}/employees/${employeeId}`,
  );
  return response.data;
};
