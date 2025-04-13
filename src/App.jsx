import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.css";

function AppLayout() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
    <>
      {/* Show Navbar only if not on landing page */}
      {!isLandingPage && <Navbar />}

      {/* Wrap content in container only if not on landing page */}
      <div className={isLandingPage ? "" : "container mt-5"}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
