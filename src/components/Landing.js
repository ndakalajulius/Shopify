import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
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
          <a class="btn red" href="#">Learn More</a>
          <a class="btn blue" href="#">Subscribe</a>
        </div>
        <div class="i-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sUmM_PFpsvQ"
            title="YouTube video player"
            frameborder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div class="stand-1"></div>
          <div class="stand-2"></div>
        </div>
      </section>

      <div className="main-landing">
        <h1 className="main-title text-center">login / register page</h1>
        <p className="main-para text-center">
          join us now and don't waste time
        </p>
        <div className="buttons text-center">
          <Link to="Signin/">
            <button className="primary-button">log in</button>
          </Link>
          <Link to="/Signup">
            <button className="primary-button" id="reg_btn">
              <span>register </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
