import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;
`;

const Div = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  height: 3rem;
`;
const Explain01 = styled.div`
  width: 100%;
  height: 3rem;

  margin-top: 5.5rem;

  color: #000;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.8px;

  span {
    color: #ff6d2e;
  }
`;
const ChoosContainer = styled.div`
  display: flex;
  height: 11.6rem;
  gap: 1.6rem;

  margin-top: 1rem;
  text-align: center;
  justify-content: center;
`;

const Explain02 = styled.div`
  height: 5rem;
  margin-top: 6rem;

  color: #7e7c7c;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;
const ChooseBtn = styled.button`
  width: 246px;
  height: 53px;
  flex-shrink: 0;
  border: none;
  border-radius: 30rem;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.8px;

  margin-top: 4.5rem;
  background: #ff6d2e;
`;

const SplashChoosePage = () => {
  const navigate = useNavigate();
  const GoBack = () => {
    navigate("/splash02");
  };
  return (
    <Background>
      <Div>
        <Top>
          <img
            src="./images/go_back.png"
            alt="그 전으로"
            style={{
              marginLeft: "0.2rem",
              marginTop: "0.8rem",
              width: "2.3rem",
              height: "2.3rem",
            }}
            onClick={GoBack}
          />
          <img
            src="./images/small_logo2.png"
            alt="니어씨"
            style={{
              width: "2.1rem",
              height: "1.4rem",
              marginLeft: "8.7rem",
              marginTop: "0.7rem",
            }}
          />
        </Top>
        <Explain01>
          어떤 것을 <span>선택</span>하시나요?
        </Explain01>
        <ChoosContainer>
          <img src="./images/buttonQ.png" alt="질문자 선택 버튼" />
          <img src="./images/buttonA.png" alt="답변자 선택 버튼" />
        </ChoosContainer>

        <Explain02>
          하나를 선택하시면
          <br />
          이후에 <b>바꿀 수 없습니다.</b>
          <br />
          신중히 선택해주세요.
        </Explain02>
        <ChooseBtn>선택 완료</ChooseBtn>
      </Div>
    </Background>
  );
};

export default SplashChoosePage;
