import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;

  background-color: black;
`;

const LogoContainer = styled.div`
  max-width: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo__description {
    position: relative;

    padding: 0;
    margin: 1rem 0 0 0;

    color: #bfbfbf;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Logo = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 24.375rem;
  height: 100%;

  overflow-y: auto;
`;

function Layout() {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <Container>
      {!isMobile && (
        <LogoContainer>
          <Logo>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} />
          </Logo>
          {/* <h3 className="logo__description">니어씨</h3>*/}
        </LogoContainer>
      )}
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Container>
  );
}

export default Layout;
