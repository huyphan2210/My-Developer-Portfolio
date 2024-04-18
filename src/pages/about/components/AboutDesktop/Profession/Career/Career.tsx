import { FC, useEffect, useState } from "react";
import "./Career.scss";
import CompanyCard, {
  CompanyCardProps,
} from "../../../CompanyCard/CompanyCard";
import AboutStore, { AboutTab } from "../../../../../../store/AboutStore";
import { observer } from "mobx-react";
import TypeWriter from "../../../../../../components/TypeWriter";

interface CareerProps {
  professionParagraph: string;
  careerParagraph: string;
  companies: CompanyCardProps[];
  aboutStore: AboutStore;
}

const Career: FC<CareerProps> = ({
  companies,
  careerParagraph,
  aboutStore,
  professionParagraph,
}) => {
  const [isCurrentTab, setIsCurrentTab] = useState(false);
  const [isProfessionDone, setIsProfessionDone] = useState(false);
  const speed = 10;

  useEffect(() => {
    if (aboutStore.currentTab === AboutTab.Career) {
      setIsCurrentTab(true);
    }
  }, [aboutStore.currentTab]);
  return (
    <div
      className="about__content__page--career"
      style={{
        display: aboutStore.currentTab === AboutTab.Career ? "block" : "none",
      }}
    >
      <p className="about__content__page--career__intro">
        <TypeWriter
          text={professionParagraph}
          speed={speed}
          setIsDone={setIsProfessionDone}
        />
        {isProfessionDone && (
          <>
            <br />
            <br />
            <TypeWriter text={careerParagraph} speed={speed} />
          </>
        )}
      </p>
      <div
        className="about__content__page--career__companies"
        style={{ opacity: isCurrentTab ? 1 : 0 }}
      >
        {companies.map(
          (
            {
              companyName,
              companyImg,
              companyURLs,
              startDate,
              endDate,
              companySummary,
              companyProjects,
            },
            index
          ) => (
            <CompanyCard
              key={index + companyName}
              companyName={companyName}
              companyImg={companyImg}
              companyURLs={companyURLs}
              startDate={startDate}
              endDate={endDate}
              companySummary={companySummary}
              isFromDesktop
              companyProjects={companyProjects}
            />
          )
        )}
      </div>
    </div>
  );
};

export default observer(Career);
