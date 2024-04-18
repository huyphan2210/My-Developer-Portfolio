import { createContext, useContext } from "react";
import { action, makeAutoObservable, observable } from "mobx";

export default class ProjectStore {
  constructor() {
    makeAutoObservable(this, {
      selectedTechs: observable,
      addTech: action,
      removeTech: action,
    });
  }

  selectedTechs: string[] = [];

  addTech(tech: string) {
    this.selectedTechs = [...this.selectedTechs, tech];
  }

  removeTech(tech: string) {
    const techIndex = this.selectedTechs.indexOf(tech);
    if (techIndex > -1) {
      this.selectedTechs.splice(techIndex, 1);
    }
  }
}

export const ProjectStoreContext = createContext<ProjectStore | null>(null);

export const useProjectStore = () => {
  const store = useContext(ProjectStoreContext);
  if (!store) {
    throw new Error(
      "useProjectStore must be used within an ProjectStoreProvider"
    );
  }
  return store;
};
