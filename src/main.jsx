import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";


import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
