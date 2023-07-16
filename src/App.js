import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Route, Routes, NavLink, Navigate, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <Router>
      <Navbar />



        <Routes>
          <Route path="/" element = {<LandingPage/>}></Route>
          <Route path="/about" element = {<About />}></Route>
          <Route path="/projects" element = {<Portfolio />}></Route>

        </Routes>
    </Router>


  );
}

export default App;
