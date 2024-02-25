import styled from "styled-components";
import Layout from "../components/Layout";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;
`;

const Top = styled.div`
  background: #f88;
`;
const ChoosContainer = styled.div``;
const ChooseBox = styled.div``;
const ExplainContainer = styled.div``;
const ChooseBtn = styled.div``;

const SplashChoosePage = () => {
  return (
    <Background>
      <Top></Top>
      <ChoosContainer>
        <ChooseBox />
      </ChoosContainer>

      <ExplainContainer></ExplainContainer>
      <ChooseBtn></ChooseBtn>
    </Background>
  );
};

export default SplashChoosePage;
