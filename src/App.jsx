import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import HeaderRoutes from "./components/HeaderRoutes";
import Tajweed from "./pages/Tajweed";
import Translation from "./pages/Translation";
import IslamSection from "./pages/IslamSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HeaderRoutes>
              <Home />
            </HeaderRoutes>
          }
        />
        <Route
          path="/course"
          element={
            <HeaderRoutes>
              <Course />
            </HeaderRoutes>
          }
        />
        <Route
          path="/tajweed"
          element={
            <HeaderRoutes>
              <Tajweed />
            </HeaderRoutes>
          }
        />
        <Route
          path="/translation"
          element={
            <HeaderRoutes>
              <Translation />
            </HeaderRoutes>
          }
        />
        <Route
          path="/i.s.l.a.m."
          element={
            <HeaderRoutes>
              <IslamSection />
            </HeaderRoutes>
          }
        />
        <Route
          path="/contact"
          element={
            <HeaderRoutes>
              <Contact />
            </HeaderRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
