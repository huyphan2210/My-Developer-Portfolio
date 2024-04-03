import { action, makeAutoObservable, observable } from "mobx";

export enum AboutTab {
  Personal,
  Career,
  TechStack,
}

export default class AboutStore {
  constructor() {
    makeAutoObservable(this, {
      currentTab: observable,
      setTab: action,
    });
  }
  
  currentTab: AboutTab = AboutTab.Personal;

  setTab(tab: AboutTab) {
    this.currentTab = tab;
  }
}
