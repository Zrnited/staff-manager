export * from "./createEmployee";
export * from "./deleteEmployee";
export * from "./getEmployee";
export * from "./getEmployees";
export * from "./updateEmployee";

export const BASE = "/employees";

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  country: string;
  state: string;
  address: string;
  gradeLevel: null | string;
  createdAt: string;
  updatedAt: string;
}
