import type { NavLinks } from "../types";
import { MdOutlineDashboard } from "react-icons/md";
import { LuUsers, LuAward } from "react-icons/lu";

const navLinks: NavLinks[] = [
  {
    iconName: MdOutlineDashboard,
    title: "Dashboard",
    path: "/d",
  },
  {
    iconName: LuUsers,
    title: "employees",
    path: "/d/employees",
  },
  {
    iconName: LuAward,
    title: "grade levels",
    path: "/d/grade-levels",
  },
];

export { navLinks };
