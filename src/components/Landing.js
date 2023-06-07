import React from "react";
import "./Landing.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import landing from "./images/landing.jpg";
const Landing = () => {
  return (
    <>
      <div className="hero1">
        <Navbar />
        <section class="hero">
          <div class="intro-text">
            <h1>
              <span class="hear"> You can Hear the Jabs </span> <br />
              <span class="connecting"> Connecting</span>
            </h1>
            <p>
              An online streaming platform for boxing matches <br />
              We also dedicate some special time to throwbacks cuz old is gold
            </p>
            <a class="btn red" href="./about">
              Learn More
            </a>
            <a class="btn blue" href="./Signup">
              Join Us
            </a>
          </div>
          <div class="i-frame"></div>

          <div class="stand-1"></div>
          <div class="stand-2"></div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
