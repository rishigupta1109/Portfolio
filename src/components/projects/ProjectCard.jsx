import style from "../../CSS/ProjectCard.module.css";
import { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
const Front = (props) => {
  return (
    <div className={style.front}>
      <img src={props.img} alt={props.name} className={style.img} />
      {/* <h2>{props.name}</h2> */}
    </div>
  );
};
const Back = (props) => {
  // console.log(props.link);
  let btn1name = props.hosted ? "Visit Site" : "View Overview";
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-inset="100"
      className={style.back}
    >
      <h1>{props.name}</h1>
      <h3>{props.details}</h3>
      <div>
        <a
          target="_blank"
          className={style.NeonBtn}
          href={props.link}
          rel="noreferrer"
        >
          <LinkIcon></LinkIcon>
          {/* <img src={LinkIcon} /> */}
        </a>
        <a
          target="_blank"
          className={style.NeonBtn}
          href={props.code}
          rel="noreferrer"
        >
          <CodeIcon></CodeIcon>
          {/* <img src={CodeIcon} /> */}
        </a>
      </div>
    </div>
  );
};
const ProjectCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => {
    setHovered(true);
  };
  const mouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={style.card}
    >
      {!hovered && <Front img={props.img} name={props.name}></Front>}
      {hovered && (
        <Back
          hosted={props.hosted}
          link={props.link}
          code={props.code}
          details={props.details}
          name={props.name}
        ></Back>
      )}
    </div>
  );
};

export default ProjectCard;
