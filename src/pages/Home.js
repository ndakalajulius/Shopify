import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";

import SignInPage from "../components/SignInPage";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <SignInPage />
      <Footer/>
    </>
  );
};

export default Home;
