/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

type User = {
  department: string;
  email: string;
  id: string;
  name: string;
};

interface AppContextTypes {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  bearerToken: string;
  setBearerToken: React.Dispatch<React.SetStateAction<string>>;
}

const defaultContextValues: AppContextTypes = {
  user: undefined,
  setUser: () => {},
  bearerToken: "",
  setBearerToken: () => {},
};

const AppContext = createContext<AppContextTypes>(defaultContextValues);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  //onboarding
  const [user, setUser] = useState<User | undefined>();
  const [bearerToken, setBearerToken] = useState<string>("");

  const value = {
    user,
    setUser,
    bearerToken,
    setBearerToken,
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
