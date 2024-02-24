import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;
`;

const RoundBox = styled.div`
  position: relative;
  left: -7rem;

  width: 38rem;
  height: 26rem;
  flex-shrink: 0;

  border-radius: 0px 0px 35rem 35rem;
  background: #ffc700;
`;

const Logo = styled.div`
  height: 1.5rem;
  width: 100%;
`;
const Qualify = styled.div`
  display: flex;
  height: 4.6rem;
  width: 100%;

  color: #fff;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.4px;

  justify-content: center;
  align-items: center;
  margin-top: 3.4rem;
`;
const SmaillCircle = styled.div`
  height: 0.5rem;
  width: 0.5rem;

  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 141, 93, 1);
`;
const About = styled.div`
  height: rem;
  width: 100%;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: -1.2px;

  margin-top: 1.2rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  height: 1.8rem;
  width: 100%;

  margin-top: 3.4rem;
  justify-content: center;
`;
const Button01 = styled.div`
  width: 1.3rem;
  height: 0.7rem;
  flex-shrink: 0;

  margin-left: 0.5rem;
  border-radius: 0.9rem;
  background: #fff;
`;
const Button02 = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 0.5rem;

  border: none;
  border-radius: 0.7rem;
  background: #fff;
`;
const ImgBox = styled.div`
  text-align: center;
  padding-top: 5rem;
  margin-top: 2.3rem;
  width: 100%;
  height: 10rem;
`;

const SplashPage02 = () => {
  const navigate = useNavigate();
  const GoSplash01 = () => {
    navigate("/splash01");
  };

  return (
    <Background>
      <RoundBox>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            left: "7.8rem",
            height: "25rem",
            width: "60%",
            textAlign: "center",
          }}
        >
          <Logo>
            <img src="../images/small_logo.png" alt="니어씨" width="9.6%" />
          </Logo>
          <Qualify>
            <SmaillCircle />
            답변자
            <SmaillCircle />
          </Qualify>
          <About>
            답변자는 사람들이 질문을 보내면
            <br />
            빠르게 답변할 수 있습니다.
            <br />
            <br /> 답변을 보내는 순간이 모이면
            <br /> 봉사시간도 받아갈 수 있어요.
          </About>
          <ButtonContainer>
            <Button02 />
            <Button01 onClick={GoSplash01} />
          </ButtonContainer>
        </div>
      </RoundBox>
      <ImgBox>
        <img src="./images/smil_face.png" width="160rem" />
      </ImgBox>
    </Background>
  );
};
export default SplashPage02;
