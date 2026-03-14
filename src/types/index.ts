import type { IconType } from "react-icons/lib";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
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
  role: string;
  department: string;
  country: string;
  state: string;
  address: string;
  grade: string;
  createdAt: string;
};

export type EmployeeForm = {
  name: string;
  role: string;
  department: string;
  country: string;
  state: string;
  address: string;
  grade: string;
};

export type GradeLevel = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
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
