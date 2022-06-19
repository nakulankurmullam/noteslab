import React, { useContext, useState, createContext } from "react";

const userGenContext = createContext();

export function UserGenContextProvider({ children }) {
  const [usrType, setUserType] = useState(null);
  return (
    <userGenContext.Provider value={{ usrType, setUserType }}>
      {children}
    </userGenContext.Provider>
  );
}

export const useUsrGen = () => {
  return useContext(userGenContext);
};
