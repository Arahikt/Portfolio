import logo from "./logo.svg";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home/pages/Home";
import Projects from "./Home/pages/Projects";
import Contact from "./Home/pages/Contact";
import Footer from "./shared/UIElement/Footer";
import Header from "./shared/UIElement/Header";
import Research from "./Home/pages/Research";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
