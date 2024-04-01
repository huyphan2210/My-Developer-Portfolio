import { FC, useEffect, useRef, useState } from "react";
import "./CompanyCard.scss";
import Utilities from "../../../../utilities";
import TypeWriter from "../../../../components/TypeWriter";

export interface CompanyCardProps {
  companyName: string;
  companyImg: string;
  companyURLs: string;
  startDate: Date;
  endDate?: Date;
}

const formattedDate = (date: Date) =>
  date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const CompanyCard: FC<CompanyCardProps> = ({
  companyName,
  companyImg,
  companyURLs,
  startDate,
  endDate,
}) => {
  const companyCardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkInView = () => {
      if (companyCardRef.current) {
        setIsInView(Utilities.isTopOfElementInView(companyCardRef.current));
      }
    };

    // Attach scroll event listener when the component mounts
    window.addEventListener("scroll", checkInView);

    // Detach scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <article
      className="company-card"
      style={isInView ? { opacity: 1 } : {}}
      ref={companyCardRef}
      onClick={() => window.open(companyURLs, "_blank")}
    >
      <hgroup className="company-card__header">
        <h3>
          {isInView ? (
            <TypeWriter text={companyName} speed={50} />
          ) : (
            "placeholder"
          )}
        </h3>
        <span className="company-card__header__date">
          {formattedDate(startDate)} -{" "}
          {endDate ? formattedDate(endDate) : "Present"}
        </span>
      </hgroup>
      <div className="company-card__body">
        <img src={companyImg} alt={companyName} loading="lazy" />
      </div>
    </article>
  );
};

CompanyCard.defaultProps = {
  endDate: undefined,
};

export default CompanyCard;
