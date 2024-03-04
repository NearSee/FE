import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/TopBar";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.7rem;

  background: #fff;
`;

const Title = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  text-align: center;
  color: #000;
  font-family: Inter;
  font-size: 1.30894rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.07856rem;

  .text {
    color: #ff6d2e;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  text-align: center;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.30894rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.07856rem;

  .bold {
    font-weight: 800;
  }
`;

const QuestionBox = styled.textarea`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.4rem 1.3rem;

  width: 19.6875rem;
  min-height: 24rem;
  flex-shrink: 0;

  border-radius: 0.625rem;
  background: rgba(255, 141, 93, 0.04);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25) inset;

  border: none;
  outline: none;
  resize: none;

  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.9px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1.5rem;

  width: 100%;

  button {
    width: 8.375rem;
    height: 2.5625rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    border: none;
    background: ${({ active }) =>
      active
        ? "#ff6d2e"
        : "linear-gradient(0deg, rgba(89, 89, 89, 0.44) 0%, rgba(89, 89, 89, 0.44) 100%), #FFF;"};

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 1.30894rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.07856rem;

    cursor: ${({ active }) => (active ? "pointer" : "default")};
  }
`;

const Q_TextPage = () => {
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();

  const isEmpty = () => {
    return textValue.trim() === "";
  };

  const gotoAsk = () => {
    navigate("/wait");
  };

  return (
    <Background>
      <TopBar hideSVG={true} />
      <Title>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
        >
          <path
            d="M7.4921 6.25161C8.56337 6.25161 9.45754 5.53455 9.45754 4.3956C9.45754 3.31569 8.72356 2.60655 7.7196 2.60655C7.20484 2.60655 6.80851 2.80921 6.56409 3.19726C6.82543 1.99928 7.72788 1.20662 8.95142 1.15587C9.28043 1.13895 9.51657 0.911086 9.51657 0.590712C9.51657 0.202303 9.20448 0 8.78259 0C6.88447 0 5.19728 1.61987 5.19728 3.75449C5.19728 5.27285 6.20952 6.25161 7.49174 6.25161M2.32796 6.25161C3.39959 6.25161 4.29376 5.53455 4.29376 4.3956C4.29376 3.31569 3.5515 2.60655 2.54754 2.60655C2.04142 2.60655 1.63645 2.80921 1.39167 3.19726C1.65301 1.99928 2.56446 1.2149 3.78764 1.15587C4.10801 1.13895 4.35279 0.911086 4.35279 0.590712C4.35279 0.202303 4.03242 0 3.61053 0C1.71241 0 0.0248642 1.61987 0.0248642 3.75449C0.0248642 5.27285 1.04574 6.25161 2.32796 6.25161ZM11.5922 1.28186H16.3503C16.7131 1.28186 17 1.0036 17 0.640748C17 0.286177 16.7131 0.0079193 16.3506 0.0079193H11.5918C11.5085 0.00710076 11.4258 0.0229132 11.3487 0.0544304C11.2716 0.0859477 11.2015 0.132536 11.1426 0.191469C11.0837 0.250401 11.0372 0.320492 11.0057 0.397638C10.9742 0.474783 10.9585 0.557433 10.9593 0.640748C10.9593 1.0036 11.2376 1.28186 11.5922 1.28186ZM11.5922 5.70265H16.3503C16.7131 5.70265 17 5.4244 17 5.06191C17 4.70734 16.7131 4.42872 16.3506 4.42872H11.5918C11.5085 4.4279 11.4258 4.44371 11.3487 4.47523C11.2716 4.50675 11.2015 4.55334 11.1426 4.61227C11.0837 4.6712 11.0372 4.74129 11.0057 4.81844C10.9742 4.89558 10.9585 4.97823 10.9593 5.06155C10.9593 5.4244 11.2376 5.70265 11.5922 5.70265ZM0.641134 10.1242H16.3503C16.4351 10.1251 16.5194 10.1092 16.5981 10.0773C16.6767 10.0455 16.7484 9.99845 16.8088 9.93881C16.8692 9.87918 16.9172 9.80817 16.95 9.72988C16.9828 9.6516 16.9998 9.56759 17 9.48271C17 9.1285 16.7131 8.84988 16.3506 8.84988H0.641134C0.278284 8.84988 2.63036e-05 9.1285 2.63036e-05 9.48271C2.63036e-05 9.83728 0.278284 10.1242 0.640774 10.1242M0.640774 14.5363H16.3499C16.7127 14.5363 16.9996 14.2581 16.9996 13.9039C16.9996 13.5493 16.7127 13.2624 16.3503 13.2624H0.641134C0.556712 13.2617 0.472991 13.2778 0.394859 13.3098C0.316727 13.3418 0.24575 13.389 0.186068 13.4487C0.126387 13.5084 0.0791985 13.5794 0.0472563 13.6576C0.0153141 13.7357 -0.00074167 13.8194 2.63036e-05 13.9039C2.63036e-05 14.2581 0.278284 14.5363 0.640774 14.5363Z"
            fill="#FF6D2E"
          />
        </svg>
        <span>
          <span className="text">글자</span>로 질문하기
        </span>
      </Title>

      <Description>
        <span>
          원하는 질문을 <span className="bold">작성</span>해주세요.
        </span>
      </Description>

      <QuestionBox
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />

      <ButtonArea active={!isEmpty()}>
        <button onClick={gotoAsk}>질문하기</button>
      </ButtonArea>
    </Background>
  );
};

export default Q_TextPage;
