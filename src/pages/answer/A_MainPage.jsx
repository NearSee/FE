import styled from "styled-components";
import TopBar from "../../components/TopBar";
import NotifiBox from "../../components/answer/main/MainNotify";
import TimeBox from "../../components/answer/main/MainTime";
import Question from "../../components/answer/main/MainQuestion";

import { useState } from "react";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;

  #waiting-text {
    margin-top: 2.2rem;
    color: #443c53;
    font-family: Inter;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.08rem;
  }
`;

const Wrap = styled.div`
  position: relative;
  padding: 0rem 2.5rem;
`;

const QuestionContainer = styled.section`
  height: 14rem;
`;

const Button = styled.button`
  display: block;
  margin: 0.9em auto;
  width: 6.8rem;
  height: 2.9rem;
  border-radius: 1.8rem;
  border: 0.1rem solid #ff6d2e;
  background: #fff;

  color: #000;
  font-family: Inter;
  font-size: 1.14rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const A_MainPage = () => {
  const [name, setName] = useState("정민지");
  const [month_time, setMonthTime] = useState(0);
  const [total_answer, setTotalAnswer] = useState(0);
  const [total_time, setTotalTime] = useState(0);
  const [method, setMethod] = useState(true);

  return (
    <Background>
      <TopBar />
      <Wrap>
        <NotifiBox name={name} />
        <TimeBox
          month_time={month_time}
          total_answer={total_answer}
          total_time={total_time}
        />
        <div id="waiting-text">🔥 답변을 기다리는 질문</div>
        <QuestionContainer>
          <Question
            id={0}
            method={method}
            content={
              "입금하고 싶은데 어떻게 해야 하는건지 모르겠어. 모바일 뱅킹?"
            }
          />
          <Question
            id={1}
            method={method}
            content={
              "입금하고 싶은데 어떻게 해야 하는건지 모르겠어. 모바일 뱅킹?"
            }
          />
          <Question
            id={2}
            method={method}
            content={
              "입금하고 싶은데 어떻게 해야 하는건지 모르겠어. 모바일 뱅킹?"
            }
          />
        </QuestionContainer>
        <Button>더보기</Button>
      </Wrap>
    </Background>
  );
};

export default A_MainPage;
