import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import PostShare from "../PostShare/PostShare";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <PostShare />
    </div>
  );
};

export default MainDash;
