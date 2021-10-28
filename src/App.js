import style from "./App.module.css";
import React,{useState} from "react";
import Backdrop from "./components/global/Backdrop";
import Navbar from "./components/global/Navbar";
import LoadingPage from "./components/LoadingPage/Loadingpage";
import About from "./components/aboutpage/About";
import Skills from "./components/skillspage/Skills.jsx";
const App = () => {
  return (
    <div id="App">
      <Navbar page="0"></Navbar>
      {/* <Backdrop></Backdrop> */}
      {/* <LoadingPage></LoadingPage> */}
      {/* <About></About> */}
      <Skills></Skills>
      </div>
    );
}
export default App;