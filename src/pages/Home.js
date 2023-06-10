import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpPage from "../components/SignUpPage";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <SignUpPage />
      <Footer />
    </div>
  );
};

export default Home;
