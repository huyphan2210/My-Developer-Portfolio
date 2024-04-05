import { FC } from "react";
import Tab from "../../../../../components/Tab/Tab";
import { AboutTab } from "../../../../../store/AboutStore";
import { observer } from "mobx-react";
import { AboutTabProps } from "../AboutDesktop";

const BioTab: FC<AboutTabProps> = ({ aboutStore }) => {
  return (
    <Tab
      isActive={aboutStore.currentTab === AboutTab.Bio}
      content={AboutTab.Bio}
      onClose={() => aboutStore.removeTab(AboutTab.Bio)}
      onClick={() => {
        aboutStore.setCurrentTab(AboutTab.Bio);
      }}
    />
  );
};

export default observer(BioTab);
