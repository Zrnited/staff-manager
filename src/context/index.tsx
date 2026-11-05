/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Employee, GradeLevel, User } from "../types";

interface AppContextTypes {
  employees: Employee[] | null;
  gradeLevels: GradeLevel[] | null;
  setEmployees: React.Dispatch<React.SetStateAction<Employee[] | null>>;
  setGradeLevels: React.Dispatch<React.SetStateAction<GradeLevel[] | null>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const defaultContextValues: AppContextTypes = {
  employees: null,
  gradeLevels: null,
  setEmployees: () => {},
  setGradeLevels: () => {},
  user: null,
  setUser: () => {},
};

const AppContext = createContext<AppContextTypes>(defaultContextValues);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  //onboarding
  const [user, setUser] = useState<User | null>(null);

  //employee list state
  const [employees, setEmployees] = useState<Employee[] | null>(null);

  //grade level list state
  const [gradeLevels, setGradeLevels] = useState<GradeLevel[] | null>(null);

  const value = {
    employees,
    gradeLevels,
    setEmployees,
    setGradeLevels,
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider.");
  }
  return context;
};
