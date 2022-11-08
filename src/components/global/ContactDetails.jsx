import React from "react";
import style from "../../CSS/About.module.css";
import linkedin from "../../../src/resources/linkedin.png";
import github from "../../../src/resources/github.png";
import insta from "../../../src/resources/insta.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function ContactDetails() {
  return (
    <div className={style.row}>
      <div className={style.imgbox}>
        <a
          href="https://www.linkedin.com/in/rishi-gupta-027298204"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon className={style.icons} />
          {/* <img src={LinkedInIcon} alt="li" className={style.icons} /> */}
        </a>
      </div>
      <div className={style.imgbox}>
        <a
          href="https://github.com/rishigupta1109"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon className={style.icons} />
          {/* <img src={GitHubIcon} alt="gi" className={style.icons} /> */}
        </a>
      </div>
      <div className={style.imgbox}>
        <a
          href="https://www.instagram.com/rishi_gupta__11/"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon className={style.icons} />
          {/* <img src={InstagramIcon} alt="ii" className={style.icons} /> */}
        </a>
      </div>
    </div>
  );
}
