import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const value = {
    isAuthorized,
    setIsAuthorized,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
