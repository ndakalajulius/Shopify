import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    < >
    <div className='main-landing'>
    <h1 className="main-title text-center">login / register page</h1>
    <p className="main-para text-center">join us now and don't waste time</p>
    <div className="buttons text-center">
        <Link to="/login">
            <button className="primary-button">log in</button>
        </Link>
        <Link to="/register">
            <button className="primary-button" id="reg_btn"><span>register </span></button>
        </Link>
    </div>
    </div>
    </>
  )
}

export default Landing