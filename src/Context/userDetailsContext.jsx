import React, { createContext, useContext } from "react";

const userDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {
  return (
    <userDetailsContext.Provider value={null}>
      {children}
    </userDetailsContext.Provider>
  );
}
