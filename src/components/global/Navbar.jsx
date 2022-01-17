import style from "../../CSS/Navbar.module.css";
import Logo from "../../resources/R logo.gif"
import { useState,useEffect,useRef } from "react";
const Navbar = (props) => {
    let [mobileview, setmobileview] = useState(false);
    let [mobilemenu, setmobilemenu] = useState(false);
    const resize= () => {
        if (window.innerWidth > 500) {
            if (mobileview) {
                setmobileview(false);
            }
        }
        else {
            if (!mobileview) {
                
                setmobileview(true);
            }
        }
    }
    let Line1 = useRef();
    let Line2 = useRef();
    let Line3 = useRef();
    const menuHandler = () => {
        
        if(!mobilemenu){
            setmobilemenu(true);
        Line3.current.style.transform=` rotate(
            45deg) translate(-12px, -11px)`;
        Line1.current.style.transform=  ` rotate( 
            135deg) translate(14px, -11px)`;
            Line2.current.style.transform = ` translate(-55px, 0px)`;
        }
        else {
            setmobilemenu(false);
            Line3.current.style.transform=` rotate(
                0deg) translate(0px, 0px)`;
            Line1.current.style.transform=  ` rotate( 
                0deg) translate(0px, 0px)`;
                Line2.current.style.transform = ` translate(0px, 0px)`;
        }
    }
    window.onresize = resize;
    useEffect(() => {
       resize() 
    },[])
    let headings = ["About", "Skills", "Projects", "Contact Me"];
    let classes = ["", "", "", ""];
    classes[Number(props.page)] = "active";
    headings[Number(props.page)] = "<" + headings[Number(props.page)] + "/>";
    const clickHandler = (e) => {
        if (mobileview) {
            menuHandler();
        }
        if (Number(e.target.id) !== Number(props.page)) {
            props.changePage(e.target.id);
        }
    }
    return (
        <div className={style.nav}>
            <div  className={style.navbar}>
            <img className={style.logo} onClick={clickHandler} id="0" alt="Logo" src={Logo}></img>
            {!mobileview&&headings.map((element, index) => {
                if (index === 5||index===4) {
                    return;
                }
                return (
                    <h2 key={index} onClick={clickHandler} id={index} className={style[`${classes[index]}`]}>{headings[index]}</h2>
                );
            })}
            {
                mobileview &&
                <div onClick={menuHandler} className={style.menubtnbox}>
                        <div className={style.line1} ref={Line1}></div>
                        <div className={style.line2} ref={Line2}></div>
                        <div className={style.line3} ref={Line3}></div>
                </div>
            }
            
            </div>
            {mobilemenu && mobileview &&
                <div data-aos="fade-left" className={style.mobilemenu}>
                    {headings.map((element, index) => {
                if (index === 5||index===4) {
                    return;
                }
                return (
                    <h2 key={index} onClick={clickHandler} id={index} className={style[`${classes[index]}`]}>{headings[index]}</h2>
                );
            })}
            </div>
          }

        </div>
    );
}

export default Navbar;