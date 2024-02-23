import styled from "styled-components";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;
`;

const RoundBox = styled.div`
  margin-left: -6rem;
  margin-top: -10rem;
  width: 578px;
  height: 578px;
  flex-shrink: 0;
  z-index: 0;

  border-radius: 578px;
  background: #ff8d5d;
`;

const Logo = styled.div`
  height: 10rem;
  background: #ff0;
`;
const Qualify = styled.div`
  height: 3rem;
  background: #446;
`;
const About = styled.div`
  height: 5rem;
  background: #112;
`;
const ButtonContainer = styled.div`
  height: 5rem;
  background: #099;
`;
const Button = styled.div`
  height: 5rem;
  background: #004;
`;

const SplashPage = () => {
  return (
    <Background>
      <RoundBox>
        <div style={{ marginTop: "10rem" }}>
          <Logo></Logo>
          <Qualify></Qualify>
          <About></About>
          <ButtonContainer>
            <Button />
            <Button />
          </ButtonContainer>
        </div>
      </RoundBox>
    </Background>
  );
};
export default SplashPage;
