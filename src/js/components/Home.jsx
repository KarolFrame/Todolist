import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-between m-3 text-light">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-1 m-3 vh-100 text-light">
            <SideBar />
          </div>
          <div className="col bg-dark"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
