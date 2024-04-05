import { action, makeAutoObservable, observable } from "mobx";
import { createContext, useContext } from "react";

export enum AboutTab {
  Bio = "Bio",
  Profession = "Profession",
  Career = "Career",
  TechStack = "Tech Stack",
}

export default class AboutStore {
  constructor() {
    makeAutoObservable(this, {
      openTabs: observable,
      currentTab: observable,
      pushTab: action,
      removeTab: action,
      setCurrentTab: action,
    });
  }

  currentTab: AboutTab = AboutTab.Bio;

  openTabs: AboutTab[] = [AboutTab.Bio];

  pushTab(tab: AboutTab) {
    const isExisted = !!this.openTabs.find((existedTab) => existedTab === tab);
    if (!isExisted) {
      this.openTabs = [...this.openTabs, tab];
    }

    this.setCurrentTab(tab);
  }

  removeTab(tab: AboutTab) {
    const tabIndex = this.openTabs.indexOf(tab);
    if (tabIndex > -1) {
      this.openTabs.splice(tabIndex, 1);
    }
  }

  setCurrentTab(tab: AboutTab) {
    if (this.openTabs.indexOf(tab) > -1) {
      this.currentTab = tab;
    }
  }
}

export const AboutStoreContext = createContext<AboutStore | null>(null);

export const useAboutStore = () => {
  const store = useContext(AboutStoreContext);
  if (!store) {
    throw new Error("useAboutStore must be used within an AboutStoreProvider");
  }
  return store;
};
