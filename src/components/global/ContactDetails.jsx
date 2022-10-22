import React from "react";
import style from "../../CSS/About.module.css";
import linkedin from "../../../src/resources/linkedin.png";
import github from "../../../src/resources/github.png";
import insta from "../../../src/resources/insta.png";
export default function ContactDetails() {
  return (
    <div className={style.row}>
      <div className={style.imgbox}>
        <a
          href="https://www.linkedin.com/in/rishi-gupta-027298204"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="li" className={style.icons} />
        </a>
      </div>
      <div className={style.imgbox}>
        <a
          href="https://github.com/rishigupta1109"
          rel="noreferrer"
          target="_blank"
        >
          <img src={github} alt="gi" className={style.icons} />
        </a>
      </div>
      <div className={style.imgbox}>
        <a
          href="https://www.instagram.com/rishi_gupta__11/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={insta} alt="ii" className={style.icons} />
        </a>
      </div>
    </div>
  );
}
