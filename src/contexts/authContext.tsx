import Helper from "@helper/helpers";
import { navigate } from "@navigation/NavigationService";
import { AUTH_ROUTE } from "@navigation/route";
import React, { createContext, useContext, useState } from "react";
import { IUser } from "src/dto";

interface AuthContextValue {
  user: IUser | null;
  enumData: any;
  login: (data: { user: IUser; enumData: any }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface PropsType {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: PropsType) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [enumData, setEnumData] = useState<any>(null);

  const login = (data: { user: IUser; enumData: any }) => {
    setUser(data.user);
    setEnumData(data.enumData);
  };

  const logout = async () => {
    setUser(null);
    setEnumData(null);
    await Helper.clearDataLogin();
    navigate(AUTH_ROUTE.INTRO);
  };

  return (
    <AuthContext.Provider value={{ user, enumData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
