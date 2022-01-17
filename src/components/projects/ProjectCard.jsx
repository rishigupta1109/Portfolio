import style from "../../CSS/ProjectCard.module.css";
import { useState } from "react";
const Front = (props) => {
    return (<div data-aos="flip-right" className={style.front}>
        <img src={props.img} alt={props.name} className={style.img} />
        <h2>{props.name}</h2>
    </div>);
}
const Back = (props) => {
    // console.log(props.link);
    let btn1name = props.hosted ? "Visit Site" : "View Overview";
    return (<div data-aos="flip-left"  className={style.back}>
        <h1>{props.name}</h1>
        <h3>{props.details }</h3>
       
        <a  target="_blank" className={style.NeonBtn} href={props.link} rel="noreferrer"  >{btn1name}<span></span><span></span><span></span><span></span></a>
        <a  target="_blank" className={style.NeonBtn} href={props.code} rel="noreferrer">Visit Code<span></span><span></span><span></span><span></span></a>
        
        
    </div>);
}
const ProjectCard = (props) => {
    const [hovered, setHovered] = useState(false);
    const mouseEnter = () => {
        setHovered(true);
    }
    const mouseLeave = () => {
        setHovered(false);
    }
    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={style.card}>
            {!hovered && <Front  img={props.img} name={props.name}></Front>}
            {hovered&&<Back hosted={props.hosted} link={props.link} code={props.code} details={props.details}  name={props.name}></Back>}
        </div>
    );
}

export default ProjectCard;