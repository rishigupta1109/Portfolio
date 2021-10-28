import style from "../../CSS/Skills.module.css";
import cppIcon from "../../resources/cpp_icon.png";
import htmlIcon from "../../resources/HTML5_logo.svg.png";
import cssIcon from "../../resources/CSS3_logo.svg.png";
import jsIcon from "../../resources/js_icon.png";
import reactIcon from "../../resources/React-icon.svg.png";
const Skills = () => {
    return (
        <div className={style.skillcontainer}>
            <div className={style.head}>var skillStack;</div> 
        <div className={style.skillsection}>
                <div className={style.skillcircle}>
                    <div className={style.outer}>
                        <div className={style.inner}>
                            <img className={style.skillimage} src={cppIcon} alt="" />
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#09ceff" />
                             <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle className={style.cpp} cx="120" cy="120" r="110" strokeLinecap="round" />
                    </svg>
            </div>
                <div className={style.skillcircle}>
                <div className={style.outer}>
                        <div className={style.inner}>
                <img className={style.skillimage} src={htmlIcon} alt="" />
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#09ceff" />
                             <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle className={style.html} cx="120" cy="120" r="110" strokeLinecap="round" />
                    </svg>
                    
            </div>
            <div className={style.skillcircle}>
                    <div className={style.outer}>
                        <div className={style.inner}>
                <img className={style.skillimage} src={cssIcon} alt="" />
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#09ceff" />
                             <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle className={style.css} cx="120" cy="120" r="110" strokeLinecap="round" />
                    </svg>
            </div>
            <div className={style.skillcircle}>
                    <div className={style.outer}>
                        <div className={style.inner}>
                <img className={style.skillimage} src={jsIcon} alt="" />
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#09ceff" />
                             <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle className={style.js} cx="120" cy="120" r="110" strokeLinecap="round" />
                    </svg>
            </div>
            <div className={style.skillcircle}>
                    <div className={style.outer}>
                        <div className={style.inner}>
                <img className={style.skillimage} src={reactIcon} alt="" />
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="240px" height="240px">
                        <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#09ceff" />
                             <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                        </defs>
                        <circle className={style.reactic} cx="120" cy="120" r="110" strokeLinecap="round" />
                    </svg>
            </div>
            </div>
            </div>
    );
}
export default Skills;