import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import LoginPage from "./pages/LoginPage";
import CallbackPage from "./pages/CallbackPage";
import SplashPage from "./pages/SplashPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="callback" element={<CallbackPage />} />
          <Route path="splash" element={<SplashPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
