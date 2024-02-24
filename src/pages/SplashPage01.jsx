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
  background: #ff8d5d;
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
  background-color: #ffd540;
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

const SplashPage01 = () => {
  const navigate = useNavigate();
  const GoSplash02 = () => {
    navigate("/splash02");
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
            질문자
            <SmaillCircle />
          </Qualify>
          <About>
            질문자는 일상 속에서 접한
            <br /> 어려움을 질문할 수 있습니다.
            <br />
            <br />
            질문을 말하는 순간
            <br /> 모든 니어씨 답변자에게 전송돼요!
          </About>
          <ButtonContainer>
            <Button01 />
            <Button02 onClick={GoSplash02} />
          </ButtonContainer>
        </div>
      </RoundBox>
      <ImgBox>
        <img src="./images/splash_question.png" width="40rem" />
        <img src="./images/smil_face.png" width="160rem" />
      </ImgBox>
    </Background>
  );
};
export default SplashPage01;
