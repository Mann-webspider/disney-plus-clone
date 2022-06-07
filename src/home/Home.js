import React from "react";
import Nav from "../Nav";
import "../styles/Home.css";
import Courosoul from "./Courosoul";
import Rows from "./Rows";
import Viewers from "./Viewers";

function Home() {
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
