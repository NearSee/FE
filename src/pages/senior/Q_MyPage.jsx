import { useState } from "react";
import styled from "styled-components";

import UserProfile from "../../components/mypage/UserProfile";
import QuestionList from "../../components/mypage/QuestionList";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #eff0f2;
  overflow: hidden;
`;

const TopBar = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #ff8d5d;

  img {
    margin: 0 1.3rem;

    width: 3.375rem;
    height: 1.58231rem;
  }

  svg {
    margin: 0 1.3rem;

    width: 1.1875rem;
    height: 1.1875rem;

    cursor: pointer;
  }
`;

const RoundBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  gap: 3rem;

  width: 38rem;
  height: 24rem;

  border-radius: 0px 0px 35rem 35rem;

  background: #ff8d5d;
`;

const CountArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 19.9375rem;

  color: #fff;
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;

  .count-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .question-mark {
    display: flex;
    gap: 0.5rem;

    font-size: 1.0625rem;
    font-weight: 400;
    letter-spacing: -0.06375rem;
  }

  .count {
    font-size: 1.5625rem;
    font-weight: 700;
    letter-spacing: -0.09375rem;
  }
`;

const QuestionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -10rem;
  gap: 0.7rem;

  width: 100%;
  min-height: 27rem;

  overflow-y: auto;
`;

const Q_MyPage = () => {
  const [name, setName] = useState("김순심");
  const [value, setValue] = useState("질문자");
  const [count, setCount] = useState(5);

  return (
    <Background>
      <TopBar>
        <img src={`${process.env.PUBLIC_URL}/images/logo_white.png`} />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M9.5 9.5C8.19375 9.5 7.07552 9.0349 6.14531 8.10469C5.2151 7.17448 4.75 6.05625 4.75 4.75C4.75 3.44375 5.2151 2.32552 6.14531 1.39531C7.07552 0.465104 8.19375 0 9.5 0C10.8062 0 11.9245 0.465104 12.8547 1.39531C13.7849 2.32552 14.25 3.44375 14.25 4.75C14.25 6.05625 13.7849 7.17448 12.8547 8.10469C11.9245 9.0349 10.8062 9.5 9.5 9.5ZM0 19V15.675C0 15.0021 0.173375 14.3838 0.520125 13.8201C0.866875 13.2565 1.32683 12.8258 1.9 12.5281C3.12708 11.9146 4.37396 11.4546 5.64062 11.1482C6.90729 10.8419 8.19375 10.6883 9.5 10.6875C10.8062 10.6875 12.0927 10.8411 13.3594 11.1482C14.626 11.4554 15.8729 11.9154 17.1 12.5281C17.674 12.825 18.1343 13.2557 18.4811 13.8201C18.8278 14.3846 19.0008 15.0029 19 15.675V19H0Z"
            fill="white"
          />
        </svg>
      </TopBar>

      <RoundBox>
        <UserProfile name={name} value={value} />
        <CountArea>
          <div className="count-box">
            <div className="question-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="white" />
                <path
                  d="M16 9.79421C16.0009 8.95911 15.6962 8.14711 15.1332 7.48435C14.5703 6.8216 13.7806 6.34517 12.8869 6.12909C11.9931 5.91301 11.0453 5.96936 10.1907 6.28939C9.33606 6.60942 8.62245 7.17522 8.16069 7.8989C8.00157 8.1478 7.95851 8.44355 8.04098 8.72109C8.12346 8.99864 8.32471 9.23525 8.60047 9.37887C8.87624 9.52249 9.20391 9.56135 9.51143 9.48691C9.81894 9.41247 10.0811 9.23083 10.2402 8.98194C10.3986 8.73504 10.626 8.53005 10.8998 8.38748C11.1736 8.24492 11.4841 8.16981 11.8002 8.16966C12.2775 8.16966 12.7353 8.34082 13.0729 8.64548C13.4105 8.95014 13.6001 9.36335 13.6001 9.79421C13.6001 10.2251 13.4105 10.6383 13.0729 10.9429C12.7353 11.2476 12.2775 11.4188 11.8002 11.4188H11.7966C11.7192 11.4258 11.6428 11.4399 11.5686 11.461C11.488 11.4684 11.4084 11.4829 11.331 11.5043C11.2651 11.5368 11.2028 11.5749 11.145 11.618C11.0761 11.652 11.0109 11.6919 10.9506 11.7372C10.8966 11.7954 10.8496 11.8586 10.8102 11.9256C10.7663 11.9744 10.7274 12.0266 10.6938 12.0816C10.6677 12.1563 10.6504 12.2332 10.6422 12.3112C10.6216 12.3734 10.6075 12.4372 10.6002 12.5018V13.5848L10.6026 13.5967V14.1285C10.6032 14.4154 10.7299 14.6903 10.9549 14.8929C11.1799 15.0956 11.4847 15.2094 11.8026 15.2094H11.8062C11.9637 15.2091 12.1197 15.1808 12.2652 15.1261C12.4106 15.0714 12.5427 14.9914 12.6539 14.8906C12.7652 14.7899 12.8533 14.6703 12.9133 14.5388C12.9733 14.4073 13.004 14.2664 13.0037 14.1242L13.0013 13.4072C13.8649 13.1757 14.6228 12.6992 15.1629 12.0485C15.7031 11.3977 15.9966 10.6073 16 9.79421ZM10.9566 17.148C10.7881 17.2988 10.6729 17.4914 10.6257 17.7013C10.5784 17.9112 10.6012 18.129 10.6911 18.3273C10.781 18.5255 10.934 18.6952 11.1308 18.815C11.3275 18.9347 11.5592 18.9991 11.7966 19C12.1146 18.9975 12.4195 18.8851 12.6485 18.6859C12.8713 18.4805 12.9961 18.2044 12.9961 17.917C12.9961 17.6295 12.8713 17.3535 12.6485 17.148C12.4188 16.9548 12.1165 16.8474 11.8026 16.8474C11.4886 16.8474 11.1863 16.9548 10.9566 17.148Z"
                  fill="#FF6D2E"
                />
              </svg>
              <span>질문</span>
            </div>
            <span className="count">{count}건</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="321"
            height="2"
            viewBox="0 0 321 2"
            fill="none"
          >
            <path
              d="M1 1H320"
              stroke="#EDEDED"
              stroke-width="1.33333"
              stroke-linecap="round"
            />
          </svg>
        </CountArea>
      </RoundBox>

      <QuestionContainer>
        <QuestionList />
        <QuestionList />
        <QuestionList />
        <QuestionList />
      </QuestionContainer>
    </Background>
  );
};

export default Q_MyPage;
