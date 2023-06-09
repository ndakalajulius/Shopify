import React from "react";
import Landing from "../components/Landing";
import SignInPage from "../components/SignInPage";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
    <Navbar/>
      <SignInPage/>
    </div>
  );
};

export default Home;
