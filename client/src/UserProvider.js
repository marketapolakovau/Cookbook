import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isAuthorize, setIsAutorize] = useState(false);
  const handleEditMode = () => {
    setIsAutorize(!isAuthorize);
  };
  const value = { isAuthorize, handleEditMode };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
