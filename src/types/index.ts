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
