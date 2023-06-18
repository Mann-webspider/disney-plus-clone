import React from "react";
import Nav from "../Nav";
import "../styles/Home.css";
import Courosoul from "./Courosoul";
import Rows from "./Rows";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigation = useNavigate();
  useEffect(()=>{
    if(!window.localStorage.getItem("accessKey")){
      navigation("/login")
    }else{
      navigation("/")
    }
  },[])
  return (
    <>
      <Nav />
      <div className="background">
        <Courosoul />
        <Viewers />
        <Rows title="recommend" />
        <Rows title="original" />
        <Rows title="trending" />
        <Rows title="new" />
        {/* <Rows title="marvels" /> */}
      </div>
    </>
  );
}

export default Home;
