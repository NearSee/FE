import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ff8d5d;

  overflow: hidden;

  .logo {
    margin-top: ${({ logoMarginTop }) => logoMarginTop};
    margin-bottom: 10rem;
    width: 9.60744rem;
    height: 6.5625rem;
    transition: margin-top 0.5s ease;
  }
`;

const ButtonRow = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.5s ease;

  img {
    width: 19.375rem;
    height: 3.25706rem;

    cursor: pointer;
  }

  .description {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.83894rem;
    font-style: normal;
    font-weight: 300;

    cursor: default;
  }
`;

function LoginPage() {
  const KAKAO_REST_API_KEY = "4c4574df49704584df5273b4c947b12e";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const [showButtonRow, setShowButtonRow] = useState(false);
  const [logoMarginTop, setLogoMarginTop] = useState("15rem");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtonRow(true);
      setLogoMarginTop("11rem");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Background logoMarginTop={logoMarginTop}>
      <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} />

      <ButtonRow visible={showButtonRow} onClick={handleKakaoLogin}>
        <span className="description">니어씨에 가입하시려면</span>
        <img src={`${process.env.PUBLIC_URL}/images/kakao_btn.png`} />
      </ButtonRow>
    </Background>
  );
}

export default LoginPage;
