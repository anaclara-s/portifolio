import { FaNodeJs, FaDartLang, FaFlutter } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { SiMobx } from "react-icons/si";

const iconMap = {
  "Dart": <FaDartLang />,
  "Flutter": <FaFlutter />,
  "Node.js": <FaNodeJs />,
  "PostgreSQL": <DiPostgresql />,
  "MobX": <SiMobx />,
};

const TechIcons = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <span key={index} className="tech-icon" title={tag}>
          {iconMap[tag]}
        </span>
      ))}
    </>
  );
};

export default TechIcons;
