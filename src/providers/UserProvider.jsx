import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [useInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ useInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
