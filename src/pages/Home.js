import React from 'react'
import "./Home.css";
import Navbar from "../components/Navbar"
import home from '../components/images/download5.jpeg';


const Home = () => {
  return (<>
    <Navbar/>
    <div className='mainhomepage'>
    <div className='homepage'>
    <img src={home} alt="React home" width="393" height="330" />
    </div>
    </div>
  
    
    
    
    
    </>
  )
}

export default Home


