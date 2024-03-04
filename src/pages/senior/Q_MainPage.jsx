import { useState, useRef } from "react";
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

  background: #fff;
`;

const Introduce = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;

  width: 100%;
  height: 8rem;
  flex-shrink: 0;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  .name {
    font-size: 0.9375rem;
    color: #ff6d2e;
  }

  .suggestion {
    font-size: 1.61413rem;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  img {
    width: 5.5625rem;
    height: 5.5625rem;
  }
`;

const WaytoQuestion = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  height: 7.5rem;

  cursor: pointer;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 17.8125rem;
  height: 3.4375rem;
  border-radius: 0.625rem;
  background: #fff4ef;

  font-family: Pretendard;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MyQuestionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  width: 100%;
  height: 21.8rem;

  .asked {
    padding: 0 2.5rem;
    color: #443c53;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.075rem;
  }

  .scroll-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    align-items: center;

    height: 21rem;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 19.0625rem;
  height: 18.6875rem;
  flex-shrink: 0;

  border-radius: 1.15344rem;
  background: #ff8d5d;

  .question {
    margin: 1rem 1rem;
    height: 7rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #fff;
    font-family: Inter;
    font-size: 1.834rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .hr {
    margin: 0 auto;
    width: 16.3605rem;
  }

  .question-time {
    margin: 0.5rem 1.2rem;
    color: rgba(255, 255, 255, 0.65);
    font-family: Inter;
    font-size: 0.93156rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.05588rem;
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.7rem;
  margin-left: 0.7rem;

  width: 4.65781rem;
  height: 1.63025rem;
  flex-shrink: 0;

  border-radius: 0.58225rem;
  background: #ff6d2e;

  color: #fff;
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
`;

const ProfileArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 3rem;
  margin-top: 0.5rem;

  color: #fff;
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  .profile-image {
    margin-left: 1rem;
    width: 2.79469rem;
    height: 2.79469rem;
    border-radius: 2.79469rem;
    background: #fff;
  }

  .info {
    margin-left: 1rem;
  }
`;

const DotsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  left: 10.5rem;
  bottom: 11rem;
`;

const Dots = styled.div`
  width: 1.1875rem;
  height: 0.25rem;
  transform: rotate(90deg);
  flex-shrink: 0;

  border-radius: 0.1875rem;
  background: ${({ active }) => (active ? "#ff6d2e" : "#D9D9D9")};

  transition: all 0.2s ease-in-out;
`;

const Q_MainPage = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const questionscrollRef = useRef();
  const navigate = useNavigate();

  const handleDotClick = (index) => {
    setActiveDotIndex(index);

    const questionBoxHeight =
      questionscrollRef.current.scrollHeight / questionData.length;

    questionscrollRef.current.scrollTo({
      top: index * questionBoxHeight,
      behavior: "smooth",
    });
  };

  const handleQuestionScroll = () => {
    const scrollTop = questionscrollRef.current.scrollTop;
    const questionBoxHeight = questionscrollRef.current.firstChild.offsetHeight;
    const index = Math.round(scrollTop / questionBoxHeight);

    setActiveDotIndex(index);
  };

  const gotoVoice = () => {
    navigate("/q_voice");
  };

  const gotoText = () => {
    navigate("/q_text");
  };

  const questionData = [
    {
      status: "답변 수령",
      info: "빠르게 대답을 받았어요!",
      age: "23세",
      role: "봉사자",
      question: "키오스크에서 결제는 어떻게 하나요?",
      time: "2023.11.30 질문 게시",
    },
    {
      status: "답변 대기",
      info: "빠르게 대답을 받았어요!",
      age: "24세",
      role: "봉사자",
      question:
        "음 즐거운 악몽이지 우리는 시소에 올라 또 오르락내리락 도통 이해가 안 되는 일이지",
      time: "2024.01.07 질문 게시",
    },
    {
      status: "답변 수령",
      info: "빠르게 대답을 받았어요!",
      age: "21세",
      role: "봉사자",
      question: "뒷짐을 진채 따라갈래 그녀의 긴 발자국",
      time: "2024.02.20 질문 게시",
    },
  ];

  return (
    <Background>
      <TopBar />
      <Introduce>
        <Description>
          <span className="name">
            안녕하세요! <span style={{ fontWeight: "700" }}>김순심 질문자</span>
            님
          </span>
          <br />
          <span className="suggestion">
            <span style={{ fontWeight: "700" }}>모르는 것</span>을
            <br />
            <span style={{ fontWeight: "700" }}>질문</span>해볼까요?
          </span>
        </Description>
        <Icon>
          <img src={`${process.env.PUBLIC_URL}/images/icon.png`} />
        </Icon>
      </Introduce>

      <WaytoQuestion>
        <Button onClick={gotoVoice}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M15.8764 12.0863L13.7358 10.8501C13.7007 10.83 13.6619 10.817 13.6217 10.8118C13.5815 10.8067 13.5407 10.8095 13.5016 10.8201C13.4625 10.8308 13.4258 10.849 13.3938 10.8738C13.3617 10.8986 13.3349 10.9294 13.3147 10.9646L12.9285 11.6341C12.8432 11.7816 12.8936 11.9718 13.0411 12.0572L15.1816 13.2934C15.2168 13.3135 15.2556 13.3265 15.2958 13.3317C15.336 13.3368 15.3768 13.334 15.4159 13.3234C15.455 13.3127 15.4916 13.2945 15.5237 13.2697C15.5557 13.2449 15.5826 13.2141 15.6027 13.1789L15.9889 12.5094C16.0743 12.3619 16.0219 12.1717 15.8764 12.0863ZM13.3128 4.44406C13.3329 4.47924 13.3598 4.5101 13.3918 4.53489C13.4239 4.55968 13.4605 4.57791 13.4996 4.58854C13.5387 4.59917 13.5796 4.602 13.6197 4.59685C13.6599 4.59171 13.6987 4.5787 13.7339 4.55856L15.8744 3.32237C16.0219 3.23699 16.0724 3.0468 15.987 2.89931L15.6027 2.23173C15.5826 2.19656 15.5557 2.1657 15.5237 2.14091C15.4916 2.11612 15.455 2.09789 15.4159 2.08726C15.3768 2.07663 15.336 2.0738 15.2958 2.07895C15.2556 2.08409 15.2168 2.0971 15.1816 2.11724L13.0411 3.35342C12.9702 3.39474 12.9186 3.46244 12.8975 3.54172C12.8764 3.621 12.8876 3.70541 12.9285 3.77648L13.3128 4.44406ZM16.6895 7.00571H14.2055C14.0347 7.00571 13.895 7.14543 13.895 7.31621V8.09247C13.895 8.26324 14.0347 8.40297 14.2055 8.40297H16.6895C16.8603 8.40297 17 8.26324 17 8.09247V7.31621C17 7.14543 16.8603 7.00571 16.6895 7.00571ZM10.7104 0C10.5959 0 10.4795 0.0310503 10.3727 0.102854L3.49315 4.59931H0.310502C0.139726 4.59931 0 4.73904 0 4.90982V10.4989C0 10.6696 0.139726 10.8094 0.310502 10.8094H3.49315L10.3727 15.3058C10.4795 15.3757 10.5978 15.4087 10.7104 15.4087C11.0345 15.4087 11.3333 15.1506 11.3333 14.7857V0.622945C11.3333 0.258105 11.0345 0 10.7104 0Z"
              fill="#FF6D2E"
            />
          </svg>
          <span>
            <span style={{ fontWeight: "800" }}>음성</span>으로 질문하기
          </span>
        </Button>
        <Button onClick={gotoText}>
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
            <span style={{ fontWeight: "800" }}>글자</span>로 질문하기
          </span>
        </Button>
      </WaytoQuestion>

      <MyQuestionArea>
        <span className="asked">🔥 내가 했던 질문</span>
        <div
          className="scroll-container"
          ref={questionscrollRef}
          onScroll={handleQuestionScroll}
        >
          {questionData.slice(0, 3).map((question, index) => (
            <QuestionBox key={index}>
              <Status>{question.status}</Status>
              <ProfileArea>
                <div className="profile-image" />
                <span className="info">
                  {question.info} <br />
                  {question.age}, {question.role}
                </span>
              </ProfileArea>
              <span className="question">{question.question}</span>
              <svg
                className="hr"
                xmlns="http://www.w3.org/2000/svg"
                width="262"
                height="2"
                viewBox="0 0 262 2"
                fill="none"
              >
                <path
                  d="M0.192383 0.682495H261.96"
                  stroke="white"
                  strokeWidth="0.931559"
                />
              </svg>
              <span className="question-time">{question.time}</span>
            </QuestionBox>
          ))}
        </div>
      </MyQuestionArea>

      <DotsContainer>
        {questionData.map((_, index) => (
          <Dots
            key={index}
            onClick={() => handleDotClick(index)}
            active={index === activeDotIndex}
          />
        ))}
      </DotsContainer>
    </Background>
  );
};

export default Q_MainPage;
