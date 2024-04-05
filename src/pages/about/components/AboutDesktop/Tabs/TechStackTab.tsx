import { FC } from "react";
import Tab from "../../../../../components/Tab/Tab";
import { AboutTab } from "../../../../../store/AboutStore";
import { observer } from "mobx-react";
import { AboutTabProps } from "../AboutDesktop";

const TechStackTab: FC<AboutTabProps> = ({ aboutStore }) => {
  return (
    <Tab
      isActive={aboutStore.currentTab === AboutTab.TechStack}
      content={AboutTab.TechStack}
      onClose={() => aboutStore.removeTab(AboutTab.TechStack)}
      onClick={() => {
        aboutStore.setCurrentTab(AboutTab.TechStack);
      }}
    />
  );
};

export default observer(TechStackTab);
