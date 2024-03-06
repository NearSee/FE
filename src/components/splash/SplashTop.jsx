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

  background: ${({ active }) =>
    active
      ? "#FF8D5D"
      : "radial-gradient(50% 50% at 50% 50%, #FFD540 0%, #FFC700 100%)"};

  z-index: 1000;

  svg {
    position: absolute;
    left: 1.12rem;

    width: 2.125rem;
    height: 2.125rem;
    flex-shrink: 0;
  }

  img {
    width: 2.54244rem;
    height: 1.75rem;
    flex-shrink: 0;
  }
`;

const SplashTop = ({ active }) => {
  return (
    <Layout active={active}>
      <img src={`${process.env.PUBLIC_URL}/images/logo_transparent.png`} />
    </Layout>
  );
};

export default SplashTop;
