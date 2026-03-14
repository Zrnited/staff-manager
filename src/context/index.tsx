/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Employee, GradeLevel, User } from "../types";
import { getStorage, setStorage } from "../utils";

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
  const [user, setUser] = useState(() => {
    const exisUser: User | null = getStorage("user");
    return exisUser ? exisUser : undefined;
  });

  //employee list state
  const [employees, setEmployees] = useState(() => {
    const exisEmployees: Employee[] | null = getStorage("employees");
    return exisEmployees ? exisEmployees : [];
  });

  //grade level list state
  const [gradeLevels, setGradeLevels] = useState(() => {
    const exisGrades: GradeLevel[] | null = getStorage("gradeLevels");
    return exisGrades ? exisGrades : [];
  });

  //handle user state change sync with local storage
  useEffect(() => {
    if (!user) return;
    setStorage("user", user);
  }, [user]);

  //handle employee state change sync with local storage
  useEffect(() => {
    setStorage("employees", employees);
  }, [employees]);

  //handle grade levels state change sync with local storage
  useEffect(() => {
    setStorage("gradeLevels", gradeLevels);
  }, [gradeLevels]);

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
