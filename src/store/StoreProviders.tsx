import React from "react";
import AboutStore, { AboutStoreContext } from "./AboutStore";

interface StoreProvidersProps {
  children: React.ReactNode;
}

const StoreProviders: React.FC<StoreProvidersProps> = ({ children }) => {
  const aboutStore = new AboutStore();

  return (
    <AboutStoreContext.Provider value={aboutStore}>
      {children}
    </AboutStoreContext.Provider>
  );
};

export default StoreProviders;
