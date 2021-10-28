import style from "../../CSS/About.module.css";
import pic from "../../resources/Profilephoto.png";
import linkedin from "../../../src/resources/linkedin.png";
import github from "../../../src/resources/github.png";
import insta from "../../../src/resources/insta.png";
const About = () => {
    
    return (
        <div className={style.about}>
            <div className={style.head}>const about;</div>
            <div className={style.row}>
            <div className={style.photobox}>
                
                <img src={pic} alt="Pic" className="pic" />
                <div className={style.row}>
                    <div className={style.imgbox}>
                        <a href="https://www.linkedin.com/in/rishi-gupta-027298204" rel="noreferrer" target="_blank">
                            <img src={linkedin} alt="li" className={style.icons} />
                            </a>
                    </div>
                    <div className={style.imgbox}>
                        <a href="https://github.com/rishigupta1109" rel="noreferrer" target="_blank">
                            <img src={github} alt="gi" className={style.icons} />
                            </a>
                    </div>
                    <div className={style.imgbox}>
                        <a href="https://www.instagram.com/rishi_gupta__11/" rel="noreferrer" target="_blank">
                            <img src={insta} alt="ii" className={style.icons} />
                            </a>
                    </div>
                </div>
            </div>
            <div className={style.infobox}>
                <div className={style.name}>
                    Rishi Gupta
                </div>
                <div className={style.subheading}>
                    <div className={style.statictxt}>I`m a</div>
                    <ul className={style.dyanamictxts}>
                        <li className={style.li}><span>Web developer</span></li>
                        <li className={style.li}><span>competitive programmer</span></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;