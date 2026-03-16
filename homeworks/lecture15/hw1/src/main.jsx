import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import GithubProfiles from "./components/GithubProfiles.jsx";
import Profile from "./components/GithubProfile.jsx";
import ProtectedRoute from "./components/ProtectedComponent.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<GithubProfiles />} />
        <Route
          path="/users/:login"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
