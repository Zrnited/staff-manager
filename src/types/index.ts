import type { IconType } from "react-icons/lib";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type NavLinks = {
  iconName: IconType;
  title: string;
  path: string;
};

export type Employee = {
  id: string;
  name: string;
  position: string;
  department: string;
  country: string;
  state: string;
  address: string;
  gradeLevel: { id: string; name: string } | null;
  createdAt: string;
  updatedAt: string;
};

export type EmployeeForm = {
  name: string;
  role: string;
  department: string;
  country: string;
  state: string;
  address: string;
  gradeLevelId: string;
};

export type GradeLevel = {
  id: string;
  name: string;
  description: string | null;
  employees: { id: string; name: string }[] | null;
  createdAt: string;
  updatedAt: string;
};

export type EmployeePageModals = {
  addEmployee: boolean;
  viewEmployee: boolean;
  deleteEmployee: boolean;
};

export type GradeLevelsModals = {
  assignEmployee: boolean;
  createGradeLevel: boolean;
  deleteGradeLevel: boolean;
};

export type GradeLevelForm = {
  name: string;
  description: string;
};

export type Country = {
  country: string;
  geonameid: number;
  name: string;
  subcountry: string;
};

export type SearchFunctionality = {
  keyword: string;
  grade: string;
};

export type Stats = {
  numOfEmployees: number;
  numOfGradeLevels: number;
  deptCount: number;
  assignedEmployees: number;
  totalEmployees: number;
  unassignedEmployees: number;
};
