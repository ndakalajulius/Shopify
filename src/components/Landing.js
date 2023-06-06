import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Landing = () => {
  return (
    <>
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
          <a class="btn blue" href="./contact">
            Contact
          </a>
        </div>
        <div class="i-frame">
          <div className="main-landing">
            <p className="main-para text-center">
              Join us now and don't waste time
            </p>
            <div className="buttons text-center">
              <Link to="Signin/">
                <button className="primary-button">
                  {" "}
                  <span> Log in</span>
                </button>
              </Link>
              <Link to="/Signup">
                <button className="primary-reg-button" id="reg_btn">
                  <span>Register </span>
                </button>
              </Link>
            </div>
          </div>
          <div class="stand-1"></div>
          <div class="stand-2"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
