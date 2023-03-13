import React, { createContext, useEffect, useState } from 'react';

export const ConfigContext = createContext(null);

export const ConfigProvider = ({ children, clientId }) => {
  const [hasClientId, setHasClientId] = useState(false);

  useEffect(() => {
    setHasClientId(clientId !== 'YOUR_CLIENT_ID_GOES_HERE');
  }, [clientId]);

  return (
    <ConfigContext.Provider value={{ hasClientId, clientId }}>
      <>{children}</>
    </ConfigContext.Provider>
  );
};
