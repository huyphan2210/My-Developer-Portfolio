import React from "react";
import AboutStore, { AboutStoreContext } from "./AboutStore";
import ProjectStore, { ProjectStoreContext } from "./ProjectStore";

interface StoreProvidersProps {
  children: React.ReactNode;
}

const StoreProviders: React.FC<StoreProvidersProps> = ({ children }) => {
  const aboutStore = new AboutStore();
  const projectStore = new ProjectStore();

  return (
    <AboutStoreContext.Provider value={aboutStore}>
      <ProjectStoreContext.Provider value={projectStore}>
        {children}
      </ProjectStoreContext.Provider>
    </AboutStoreContext.Provider>
  );
};

export default StoreProviders;
