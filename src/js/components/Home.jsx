import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import DashBoard from "./DashBoard";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-between text-light p-3">
            <Header />
          </div>
        </div>
        <div className="row flex-nowrap">
          <div className="col-auto position-sticky top-0 start-0 text-light p-3">
            <SideBar />
          </div>
          <div className="col ps-3 pe-0 overflow-auto">
            <DashBoard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
