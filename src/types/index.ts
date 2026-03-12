import type { IconType } from "react-icons/lib";

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
  location: string;
  grade: string;
  createdAt: string;
};
