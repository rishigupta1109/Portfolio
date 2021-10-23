import style from "./App.module.css";
import React,{useState} from "react";
import Backdrop from "./components/global/Backdrop";
import Navbar from "./components/global/Navbar";
import LoadingPage from "./components/LoadingPage/Loadingpage";
const App = () => {
  return (
    <div id="App">
      <Navbar page="0"></Navbar>
      <Backdrop></Backdrop>
      <LoadingPage></LoadingPage>
      </div>
    );
}
export default App;