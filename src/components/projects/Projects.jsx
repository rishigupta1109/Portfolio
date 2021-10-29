import style from "../../CSS/Projects.module.css";
import ProjectCard from "./ProjectCard";
import ttt from "../../resources/Tictactoe.PNG";
import dnb from "../../resources/dotsandboxes.PNG";
import ct from "../../resources/coronatracker.PNG";
import fs from "../../resources/foodstore.PNG";
import cb from "../../resources/contestbuddy.PNG";
import av from "../../resources/algorithmvisualiser.PNG";
const Projects = () => {
    let projectsList = [{
        name: "tic tac toe",
        img:ttt,
        details: "This is a game made using HTML,CSS and JS",
        link: "https://rishigupta1109.github.io/tictaktoe",
        code:"https://github.com/rishigupta1109/tictaktoe",
    },{
        name: "Dots and Boxes",
        img:dnb,
        details: "This is a game made using HTML,CSS and JS",
        link: "https://rishigupta1109.github.io/Dots-Boxes",
        code:"https://github.com/rishigupta1109/Dots-Boxes",
    },
    {
        name: "Corona Tracker",
        img:ct,
        details: "This is a web application which shows stats of corona.It is made using ReactJS,CSS and covidAPI",
        link: "https://rishigupta1109.github.io/CoronaTracker",
        code:"https://github.com/rishigupta1109/CoronaTracker",
    },
    {
        name: "FoodBaZinga",
        img:fs,
        details: "This is Food ordering web app made using ReactJS,MongoDB and NodeJS",
        link: "https://www.linkedin.com/posts/rishi-gupta-027298204_webdevelopment-learning-reactjs-activity-6814595111528353792-OW1H",
        code:"https://github.com/rishigupta1109/FoodApp",
        },
        {
            name: "Algorithm Visualiser",
            img:av,
        details: "This is a algorithm visualiser made using HTML,CSS and JS",
        link: "https://rishigupta1109.github.io/algorithm_visualiser/",
        code:"https://github.com/rishigupta1109/algorithm_visualiser",
        },
        {
            name: "Contest Buddy",
            img:cb,
        details: "This is a Chrome extension ehich shows stats of user on codeforces made using HTML,CSS,codeforcesAPI and JS",
        link: "https://www.linkedin.com/posts/rishi-gupta-027298204_connections-chromeextension-competitiveprogramming-activity-6852170088955674624-XKie",
        code:"https://github.com/rishigupta1109/contestBuddy",
    }]
    return (
        <div data-aos="fade-up" className={style.projectssection}>
            <div className={style.head}>var projects;</div>
            <div className={style.container}>
               
                {projectsList.map((object) => {
                    return (
                        <ProjectCard key={object.name} img={object.img} name={object.name} details={object.details} link={object.link} code={object.code}></ProjectCard>
                   )
               })}
            </div>
        </div>
    );
}
export default Projects;