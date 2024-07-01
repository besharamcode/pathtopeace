import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Course from "./pages/Course";
import PathToPeaceCourse from "./pages/PathToPeaceCourse";
import Contact from "./pages/Contact";
import HeaderRoutes from "./components/HeaderRoutes";

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
          path="/course/pathtopeace"
          element={
            <HeaderRoutes>
              <PathToPeaceCourse />
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
