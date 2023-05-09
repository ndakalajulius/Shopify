import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/career' element={<Career/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/welcome' element={<Home/>} />
      </Routes>
      </Router>   
     
  );
}

export default App;