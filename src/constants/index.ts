import type { Employee, NavLinks } from "../types";
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

const fakeEmployees: Employee[] = [
  {
    id: "1",
    name: "Kolawole Mayowa",
    role: "Skit Maker",
    department: "Engineering",
    location: "Abia, Nigeria",
    grade: "-",
    createdAt: "2025:10:11TNZ11R5T",
  },
  {
    id: "2",
    name: "Adekunle Ajasin",
    role: "Skit Maker",
    department: "Engineering",
    location: "Abia, Nigeria",
    grade: "-",
    createdAt: "2025:10:11TNZ11R5T",
  },
  {
    id: "3",
    name: "Joshua Jacobs",
    role: "Skit Maker",
    department: "Technology",
    location: "Lagos, Nigeria",
    grade: "-",
    createdAt: "2025:10:11TNZ11R5T",
  },
  {
    id: "4",
    name: "Joshua Jacobs",
    role: "Skit Maker",
    department: "Technology",
    location: "Lagos, Nigeria",
    grade: "-",
    createdAt: "2025:10:11TNZ11R5T",
  },
  {
    id: "5",
    name: "Joshua Jacobs",
    role: "Skit Maker",
    department: "Technology",
    location: "Lagos, Nigeria",
    grade: "-",
    createdAt: "2025:10:11TNZ11R5T",
  },
];

export { navLinks, fakeEmployees };
