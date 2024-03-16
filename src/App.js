import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import LoginPage from "./pages/login/LoginPage";
import CallbackPage from "./pages/login/CallbackPage";

import SplashPage from "./pages/splash/SplashPage";
import SplashChoosePage from "./pages/splash/SplashChoosePage";

import Q_MainPage from "./pages/senior/Q_MainPage";
import Q_VoicePage from "./pages/senior/Q_VoicePage";
import Q_TextPage from "./pages/senior/Q_TextPage";
import WaitingPage from "./pages/senior/WaitingPage";
import Q_MyPage from "./pages/senior/Q_MyPage";

import A_MainPage from "./pages/answer/A_MainPage";
import A_MorePage from "./pages/answer/A_MorePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="callback" element={<CallbackPage />} />

          <Route path="splash" element={<SplashPage />} />
          <Route path="splash_choose" element={<SplashChoosePage />} />

          <Route path="q_main" element={<Q_MainPage />} />
          <Route path="q_voice" element={<Q_VoicePage />} />
          <Route path="q_text" element={<Q_TextPage />} />
          <Route path="wait" element={<WaitingPage />} />
          <Route path="q_mypage" element={<Q_MyPage />} />

          <Route path="a_main" element={<A_MainPage />} />
          <Route path="a_more" element={<A_MorePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
