import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Route, Routes, NavLink, Navigate, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />



        <Routes>
          <Route path="/" element = {<Home />}></Route>
          <Route path="/about" element = {<About />}></Route>
          <Route path="/projects" element = {<Projects />}></Route>
        </Routes>
    </Router>


  );
}

export default App;
