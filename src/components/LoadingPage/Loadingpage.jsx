import style from "../../CSS/Loadingpage.module.css";
import reactLogo from "../../resources/reactlogo.jpg";
import cross from "../../resources/cross.png";
import { useRef } from "react";
const LoadingPage = () => {
   
    let script = useRef();
    return (
        <div className={style.loadingpage}>
            <div style={{alignItems:"center"}} className={style.row}>
                <img src={reactLogo} className={style.reactlogo} alt="rl" />
                <h2>About.jsx</h2>
                <img src={cross} className={style.crosslogo} alt="x" />
                <div className={style.greystrip}></div>
            </div>
            <div className={style.row}>
                <div className={style.column}>
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                    <h2>4</h2>
                    <h2>5</h2>
                    <h2>8</h2>
                    <h2>9</h2>
                    <h2>10</h2>
                </div>
                <div className={style.column}>
                    <div className={style.fscript} ref={script}>
                        <h3 style={{color:"purple"}}>import</h3>
                        <h3 style={{color:"lightblue"}}>About</h3>
                        <h3 style={{color:"purple"}}>from</h3>
                        <h3 style={{color:"brown"}}>"Rishi"</h3>
                        <h3>;</h3>
                    </div>
                </div>
            </div>
            <div className={style.terminal}>
                <div className={style.row}>
                    <h2 style={{textDecoration:"underline"}}>Terminal</h2>
                </div>
                <div className={style.row}>
                <div style={{width:"20%"}}>
                <h2>PS C:Portfolio &gt;</h2>
                    </div>
                   
                    <div className={style.fscripttwo}>
                        <h2>npm</h2>
                        <h2>&#160;start</h2>
                    </div>
                </div>

            </div>
            
            
        </div>
    );
}
export default LoadingPage;