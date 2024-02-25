import styled from "styled-components";
import Modal from "../components/splash/Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Top from "../components/splash/Top";

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
  padding-left: 3rem;
  display: flex;
  height: 11.8rem;
  gap: 2rem;

  margin-top: 1rem;
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
  background: ${(props) =>
    props.select ? "#FF6D2E" : "rgba(89, 89, 89, 0.44)"};
`;

const SplashChoosePage = () => {
  const [select, setSelect] = useState(0);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const IsOpen = () => {
    setIsOpen(true);
  };

  const SelectQ = () => {
    setSelect(1);
    setValue("질문자");
  };
  const SelectA = () => {
    setSelect(1);
    setValue("답변자");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Background>
      <Div>
        <Top />
        <Explain01>
          어떤 것을 <span>선택</span>하시나요?
        </Explain01>
        <ChoosContainer>
          <img
            onClick={SelectQ}
            src={
              value === "답변자"
                ? "./images/gray_buttonQ.png"
                : "./images/buttonQ.png"
            }
            alt="질문자 선택 버튼"
          />
          <img
            onClick={SelectA}
            src={
              value === "질문자"
                ? "./images/gray_buttonA.png"
                : "./images/buttonA.png"
            }
            alt="답변자 선택 버튼"
          />
        </ChoosContainer>

        <Explain02>
          하나를 선택하시면
          <br />
          이후에 <b>바꿀 수 없습니다.</b>
          <br />
          신중히 선택해주세요.
        </Explain02>
        <ChooseBtn onClick={IsOpen} select={select}>
          선택 완료
        </ChooseBtn>
      </Div>
      {isOpen && <Modal isOpen={isOpen} onClose={closeModal} value={value} />}
    </Background>
  );
};

export default SplashChoosePage;
