import React, { useState } from "react";
import Backdrop from "./components/global/Backdrop";
import Navbar from "./components/global/Navbar";
import LoadingPage from "./components/LoadingPage/Loadingpage";
import About from "./components/aboutpage/About";
import Skills from "./components/skillspage/Skills.jsx";
import Projects from "./components/projects/Projects";
import Contact from "./components/conatctform/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./App.module.css";
import Footer from "./components/global/Footer";
AOS.init();
const App = () => {
  let [pageNo, setpageNo] = useState(4);
  let [Loading, setLoading] = useState(true);
  let [LoadingPageNo, setLoadingPageNo] = useState(0);
  let [mobilemenu, setmobilemenu] = useState(false);
  const changePage = (number) => {
    setLoadingPageNo(Number(number));
    setpageNo(5);
    setLoading(true);
  };
  const completeLoading = () => {
    setLoading(false);
    setpageNo(LoadingPageNo);
  };
  return (
    <div className={style.App}>
      <Navbar
        mobilemenu={mobilemenu}
        setmobilemenu={setmobilemenu}
        page={pageNo}
        changePage={changePage}
      ></Navbar>
      {Loading && <Backdrop></Backdrop>}
      {Loading && (
        <LoadingPage
          completeLoading={completeLoading}
          page={LoadingPageNo}
        ></LoadingPage>
      )}
      {pageNo === 0 && !mobilemenu && <About></About>}
      {pageNo === 1 && !mobilemenu && <Skills></Skills>}
      {pageNo === 2 && !mobilemenu && <Projects></Projects>}
      {pageNo === 3 && !mobilemenu && <Contact></Contact>}
      {/* {!Loading&&<Footer></Footer>} */}
    </div>
  );
};
export default App;
