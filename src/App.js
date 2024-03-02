import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import LoginPage from "./pages/login/LoginPage";
import CallbackPage from "./pages/login/CallbackPage";

import SplashPage01 from "./pages/splash/SplashPage01";
import SplashPage02 from "./pages/splash/SplashPage02";
import SplashChoosePage from "./pages/splash/SplashChoosePage";

import Q_MainPage from "./pages/senior/Q_MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="callback" element={<CallbackPage />} />
          <Route path="splash01" element={<SplashPage01 />} />
          <Route path="splash02" element={<SplashPage02 />} />
          <Route path="splash_choose" element={<SplashChoosePage />} />
          <Route path="q_main" element={<Q_MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
