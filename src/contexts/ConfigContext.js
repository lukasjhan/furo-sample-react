import React, { createContext } from "react";

export const ConfigContext = createContext(null);

export const ConfigProvider = ({ children, clientId }) => {
  return (
    <ConfigContext.Provider value={clientId !== "YOUR_CLIENT_ID_GOES_HERE"}>
      <>{children}</>
    </ConfigContext.Provider>
  );
};
