import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HeaderRoutes from "./components/HeaderRoutes";
import { lazy } from "react";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Blogs = lazy(() => import("./pages/Blogs"));
  const Contact = lazy(() => import("./pages/Contact"));
  const Tajweed = lazy(() => import("./pages/Tajweed"));
  const Translation = lazy(() => import("./pages/Translation"));
  const IslamSection = lazy(() => import("./pages/IslamSection"));
  const AddBlog = lazy(() => import("./pages/admin/AddBlog"));
  const AdminAuth = lazy(() => import("./pages/admin/AdminAuth"));
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
          path="/blogs"
          element={
            <HeaderRoutes>
              <Blogs />
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
        <Route
          path="/adminauth"
          element={
            <HeaderRoutes>
              <AdminAuth />
            </HeaderRoutes>
          }
        />
        <Route
          path="/admin/addblog"
          element={
            <HeaderRoutes>
              <AddBlog />
            </HeaderRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
