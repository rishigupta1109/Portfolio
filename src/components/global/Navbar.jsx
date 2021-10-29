import style from "../../CSS/Navbar.module.css";
import Logo from "../../resources/R logo.gif"
const Navbar = (props) => {
    let headings = ["About", "Skills", "Projects", "Contact Me"];
    let classes = ["", "", "", ""];
    classes[Number(props.page)] = "active";
    headings[Number(props.page)] = "<" + headings[Number(props.page)] + "/>";
    const clickHandler = (e) => {
        if (Number(e.target.id) !== Number(props.page)) {
            props.changePage(e.target.id);
        }
    }
    return (
        <div className={style.navbar}>
            <img className={style.logo} alt="Logo" src={Logo}></img>
            <h2 onClick={clickHandler} id="0" className={style[`${classes[0]}`]}>{headings[0]}</h2>
            <h2 onClick={clickHandler} id="1" className={style[`${classes[1]}`]}>{headings[1]}</h2>
            <h2 onClick={clickHandler} id="2" className={style[`${classes[2]}`]}>{headings[2]}</h2>
            <h2 onClick={clickHandler} id="3" className={style[`${classes[3]}`]}>{headings[3]}</h2>
        </div>
    );
}

export default Navbar;