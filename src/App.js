import logo from "./logo.svg";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./Home/pages/Home";
import Projects from "./Home/pages/Projects";
import Contact from "./Home/pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="App scroll">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
