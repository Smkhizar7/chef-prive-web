import React from "react";
import { Layout } from "antd";
import { Header } from "../../components";
import { DownloadSection, Banner } from "./components";
import "./index.css";

function Home() {
  return (
    <div className="layout container">
      <Header />
      <div className="content">
        <Banner />
        <DownloadSection />
      </div>
      {/* <div className="footer">Footer</div> */}
    </div>
  );
}

export default Home;
