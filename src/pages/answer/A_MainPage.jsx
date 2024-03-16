import styled from "styled-components";
import TopBar from "../../components/TopBar";
import NotifiBox from "../../components/answer/main/MainNotify";
import TimeBox from "../../components/answer/main/MainTime";
import Question from "../../components/answer/main/MainQuestion";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const GoMorePage = () => {
    navigate("/a_more");
  };

  const questionData = [
    { id: 0, method: true, content: "내가 어저구 하고 싶은데 어ㅈ떻라지?" },
    { id: 1, method: false, content: "올리브영 많이 사고 싶은데 어떻하지?" },
    { id: 2, method: true, content: "내가 게으른걸 어떻하지?" },
    { id: 3, method: true, content: "과외가기 싫은데 어떻하지?" },
  ];

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
          {questionData.slice(0, 3).map((question) => (
            <Question question={question} />
          ))}
        </QuestionContainer>
        <Button onClick={GoMorePage}>더보기</Button>
      </Wrap>
    </Background>
  );
};

export default A_MainPage;
