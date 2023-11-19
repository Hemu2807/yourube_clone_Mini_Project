import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Test from "../test.jsx";
import Main_page from "./MainPage/Main_page";
import "./ComponentFile.css";
import Videos from "./Videos/Videos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategroiesBar from "./Categories/CategroiesBar.jsx";
import Shorts from "./Sidebar/shorts/Shorts.jsx";

function CompnentFile() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="home-container">
          <Sidebar />
          <div className="routing-page">
            <CategroiesBar />
            <Routes>
              <Route path="/" element={<Main_page />} />
              <Route path="/shorts" element={<Shorts />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default CompnentFile;
