import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SignInPage from "../components/SignInPage";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <SignInPage />
      <Footer />
    </div>
  );
};

export default Home;
