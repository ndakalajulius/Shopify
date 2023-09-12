import React from "react";
import "./Landing.css";
import Products from "./Products";
const Landing = () => {
  return (
<>
    <Products/>
    <div className="landingmain">
      <div className="heading ">
        {" "}
        WELCOME TO <br></br>MOOD BOOST{" "}
      </div>
      <div className="text">
        {" "}
        <i>
          We are on a mission to boost mental health by celebrating feel good
          moods every month This month we are hoping to help every one feel more
          curious{" "}
        </i>
      </div>
      <div className="getstarted">
        <a href="/home" class="button">
          Get started
        </a>
      </div>
    </div>
    </>
  );
};

export default Landing;
