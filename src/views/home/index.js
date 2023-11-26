import React from "react";
import { Footer, Header } from "../../components";
import {
  DownloadSection,
  Banner,
  PopularSection,
  CategorySection,
  ReviewSection,
} from "./components";
import "./index.css";

function Home() {
  return (
    <div className="layout">
      <Header />
      <div className="content container mx-auto">
        <Banner />
        <DownloadSection />
        <PopularSection />
        <CategorySection />
        <ReviewSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
