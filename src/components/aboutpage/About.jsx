import style from "../../CSS/About.module.css";
import pic from "../../resources/Profilephoto.png";
import linkedin from "../../../src/resources/linkedin.png";
import github from "../../../src/resources/github.png";
import insta from "../../../src/resources/insta.png";
const About = () => {
    
    return (
        <div data-aos="fade-up" className={style.about}>
            <div className={style.head}>const about;</div>
            <div className={style.row}>
            <div data-aos="zoom-in" className={style.photobox}>
                
                <img src={pic} alt="Pic" className={style.pic} />
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
                <div data-aos="fade-left" className={style.name}>
                    Rishi Gupta
                </div>
                <div className={style.subheading}>
                    <div className={style.statictxt}>I`m a</div>
                    <ul className={style.dyanamictxts}>
                        <li className={style.li}><span>Web developer</span></li>
                        <li className={style.li}><span>competitive programmer</span></li>
                    </ul>
                    </div>

                <div className={style.detail}>
                    I am a second year student persuing bachelor of engineering in electronics and telecommunication <a href="http://ietdavv.edu.in">@IETDAVV</a> .
                    I am a coding enthusiast who likes to learn and apply things in real world.
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;