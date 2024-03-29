import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Signup" element={<SignUpPage />} />
          <Route path="/Signin" element={<SignInPage />} />
          <Route path="/" element={ <Landing />}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
