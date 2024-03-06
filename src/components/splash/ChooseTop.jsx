import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Layout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  flex-shrink: 0;

  z-index: 1000;

  svg {
    position: absolute;
    left: 1.12rem;

    width: 2.125rem;
    height: 2.125rem;
    flex-shrink: 0;

    cursor: pointer;
  }

  img {
    width: 2.54244rem;
    height: 1.75rem;
    flex-shrink: 0;
  }
`;

const ChooseTop = () => {
  const navigate = useNavigate();

  const gotoSplash = () => {
    navigate("/splash");
  };

  return (
    <Layout>
      <svg
        onClick={gotoSplash}
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <path
          d="M19.8333 28.3333L8.5 17L19.8333 5.66666L21.8365 7.66982L12.5063 17L21.8365 26.3302"
          fill="#373737"
          fill-opacity="0.35"
        />
      </svg>

      <img
        src={`${process.env.PUBLIC_URL}/images/logo_transparent_orange.png`}
      />
    </Layout>
  );
};

export default ChooseTop;
