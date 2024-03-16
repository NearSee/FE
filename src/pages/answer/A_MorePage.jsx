import styled from "styled-components";
import TopBar from "../../components/TopBar";
import Question from "../../components/answer/more/MoreQuestion";
import AddComment from "../../components/answer/more/MoreAddComment";

import { useState } from "react";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;

  #waiting-text {
    margin-left: 2rem;
    margin-top: 0.5rem;
    color: #443c53;
    font-family: Inter;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.08rem;
  }
`;

const QuestionsContainer = styled.div`
  position: relative;
  overflow: ${(props) => (props.click ? "hidden" : "auto")};
  margin-top: 1rem;
  padding-top: 0.03rem;

  width: 100%;
  height: 40rem;
  background: rgba(255, 109, 46, 0.12);
`;

const A_MorePage = () => {
  const [click, setClick] = useState(false);
  const [expandQuestion, setExpandQuestion] = useState(null);
  const expand = (question) => {
    setClick(true);
    setExpandQuestion(question);
  };

  const questionData = [
    {
      status: "답변 대기",
      question:
        "키오크스 이거 결제는 어떻게 하나요? 지금 나 잘 모르겠는데 알려주쇼로롤로로롤롤로노아조로루피원피스",
      name: "김순심",
      total: 0,
      time: "2분전",
      look: 0,
      like: 53,
      method: "speak",
    },
    {
      status: "답변 대기",
      question: "키오스크에서 결제는 어떻게 하나요?",
      name: "김순심",
      total: 1,
      time: "3분전",
      look: 0,
      like: 53,
      method: "speak",
    },
    {
      status: "답변 대기",
      question: "키오스크에서 결제는 어떻게 하나요?",
      name: "홍민우",
      total: 1,
      time: "3분전",
      look: 0,
      like: 53,
      method: "speak",
    },
    {
      status: "답변 대기",
      question: "키오스크에서 결제는 어떻게 하나요?",
      name: "김순심",
      total: 1,
      time: "3분전",
      look: 0,
      like: 53,
      method: "text",
    },
  ];
  return (
    <Background>
      <TopBar />
      <div id="waiting-text">🔥 답변을 기다리는 질문</div>
      <QuestionsContainer click={click}>
        {questionData.map((question, index) => (
          <Question
            question={question}
            index={index}
            onClick={() => expand(question, index)}
          />
        ))}
      </QuestionsContainer>
      {click && <AddComment expandQuestion={expandQuestion} />}
    </Background>
  );
};

export default A_MorePage;
