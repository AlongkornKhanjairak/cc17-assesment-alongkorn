// import React from 'react'
import { createContext, useState } from "react";
import * as userAPI from "../apis/userApi";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const response = await userApi.getUserById();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
