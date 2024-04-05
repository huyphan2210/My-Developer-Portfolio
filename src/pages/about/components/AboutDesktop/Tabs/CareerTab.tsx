import { FC } from "react";
import Tab from "../../../../../components/Tab/Tab";
import { AboutTab } from "../../../../../store/AboutStore";
import { observer } from "mobx-react";
import { AboutTabProps } from "../AboutDesktop";

const CareerTab: FC<AboutTabProps> = ({ aboutStore }) => {
  return (
    <Tab
      isActive={aboutStore.currentTab === AboutTab.Career}
      content={AboutTab.Career}
      onClose={() => aboutStore.removeTab(AboutTab.Career)}
      onClick={() => {
        aboutStore.setCurrentTab(AboutTab.Career);
      }}
    />
  );
};

export default observer(CareerTab);
