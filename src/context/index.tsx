/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Employee, GradeLevel, User } from "../types";
import { setStorage } from "../utils";

interface AppContextTypes {
  employees: Employee[];
  gradeLevels: GradeLevel[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  setGradeLevels: React.Dispatch<React.SetStateAction<GradeLevel[]>>;
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const defaultContextValues: AppContextTypes = {
  employees: [],
  gradeLevels: [],
  setEmployees: () => {},
  setGradeLevels: () => {},
  user: undefined,
  setUser: () => {},
};

const AppContext = createContext<AppContextTypes>(defaultContextValues);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  //onboarding
  const [user, setUser] = useState<User>();
  console.log(user);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [gradeLevels, setGradeLevels] = useState<GradeLevel[]>([]);

  //initialize states to database
  useEffect(() => {
    if (!user) return;
    setStorage("employees", employees);
    setStorage("gradeLevels", gradeLevels);
  }, [user]);

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
    throw new Error("useAppContext must be used within a MyContextProvider");
  }
  return context;
};
