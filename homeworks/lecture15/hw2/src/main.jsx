import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Hw2 from "./Hw2.jsx";
import Component from "./components/Component.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Hw2 />}>
          <Route path="/:order" element={<Component />} />
        </Route> */}
        <Route path="/" element={<Hw2 />} />
        <Route path="/:order" element={<Component />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
