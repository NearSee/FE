import styled from "styled-components";
import TopBar from "../components/mypage/TopBar";
import My_Info from "../components/mypage/My_Info";
import Question from "../components/mypage/Question";
import { useState } from "react";

const RoundBox = styled.div`
  position: relative;
  left: -7rem;

  width: 38rem;
  height: 24rem;
  flex-shrink: 0;

  border-radius: 0px 0px 35rem 35rem;
  background: #ff8d5d;
`;

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #eff0f2;
  overflow: hidden;
`;

const CountBox = styled.div`
  position: absolute;
  top: 15rem;
  width: 100%;
  height: 3.2rem;

  div#question-text {
    display: inline-block;
    margin-left: 4.6rem;
    margin-top: 0.3rem;
    color: #fff;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.02px;
  }

  span#count-text {
    position: absolute;
    right: 2.3rem;
    color: #fff;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.5px;
  }

  hr {
    width: 83%;
    margin-top: 1rem;
    border: none;
    border-top: 1.2px solid #fff;
  }

  img {
    position: absolute;
    left: 2.3rem;
    width: 1.8rem;
  }
`;

const QuestionContainer = styled.div`
  position: absolute;
  padding: 0rem 1.8rem;
  top: 19.2rem;
  width: 100%;
  height: 62%;

  overflow-y: auto;
`;

const Q_MyPage = () => {
  const [name, setName] = useState("김순심");
  const [value, setValue] = useState("질문자");
  const [countQ, setCountQ] = useState(0);

  return (
    <Background>
      <TopBar />
      <RoundBox>
        <My_Info name={name} value={value} />
      </RoundBox>
      <CountBox>
        <img src="../images/question_icon.png" />
        <div id="question-text">질문</div>
        <span id="count-text">{countQ}건</span>
        <hr />
      </CountBox>
      <QuestionContainer>
        <Question />
        <Question />
        <Question />
        <Question />
      </QuestionContainer>
    </Background>
  );
};

export default Q_MyPage;
