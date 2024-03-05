import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import LoginPage from "./pages/LoginPage";
import CallbackPage from "./pages/CallbackPage";
import SplashPage01 from "./pages/SplashPage01";
import SplashPage02 from "./pages/SplashPage02";
import SplashChoosePage from "./pages/SplashChoosePage";
import Q_MyPage from "./pages/Q_MyPage";
import A_MainPage from "./pages/answer/A_MainPage";

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
          <Route path="q_mypage" element={<Q_MyPage />} />
          <Route path="a_main" element={<A_MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
