import type { NavLinks } from "../types";
import { MdOutlineDashboard } from "react-icons/md";

const navLinks: NavLinks[] = [
  {
    iconName: MdOutlineDashboard,
    title: "Dashboard",
    path: "/d",
  },
  {
    iconName: MdOutlineDashboard,
    title: "employees",
    path: "/d/employees",
  },
  {
    iconName: MdOutlineDashboard,
    title: "grade levels",
    path: "/d/grade-levels",
  },
];

export { navLinks };
