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

const QuestionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9375rem 1.1875rem;

  border-radius: 0.80169rem;
  background: #fff;
  box-shadow: 1.425px 1.425px 8.199px 0px rgba(137, 137, 137, 0.35);

  color: #ff6d2e;
  text-align: center;
  font-family: Inter;
  font-size: 1.02488rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0615rem;
`;

const AnswerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 100%;

  .profile-image {
    position: relative;
    width: 6.59906rem;
    height: 6.59906rem;
    flex-shrink: 0;

    border-radius: 6.59906rem;
    background: #cdcdcd;
  }

  .character {
    position: absolute;
    top: 0;
    right: 0;

    width: 1.75rem;
    height: 1.75rem;
  }

  .profile-name {
    color: #000;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 1.15888rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .orange {
    color: #ff6d2e;
  }
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 18.75rem;
  height: 21.875rem;
  flex-shrink: 0;

  border-radius: 1.64756rem;
  background: #f1f2f6;

  .icon-container {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;

    width: 16rem;
  }

  .like {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    width: 2.5625rem;
    height: 1.30738rem;
    flex-shrink: 0;

    border-radius: 0.52294rem;
    background: #fff;

    color: #b4b9bf;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.78188rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    cursor: pointer;
  }

  .answer {
    padding: 1rem;

    color: rgba(0, 0, 0, 0.79);
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Q_ReceivedPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Background>
      <TopBar hideSVG={true} />

      <QuestionBox>
        <span>키오스트에서 결제는 어떻게 하나요? 궁금해요.</span>
      </QuestionBox>

      <AnswerProfile>
        <div className="profile-image">
          <svg
            className="character"
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="69"
            viewBox="0 0 69 69"
            fill="none"
          >
            <circle
              cx="34.5"
              cy="34.5"
              r="34.5"
              fill="url(#paint0_linear_1060_1718)"
            />
            <circle cx="24.6853" cy="33.0132" r="7.43535" fill="white" />
            <circle cx="42.5301" cy="33.013" r="7.43535" fill="white" />
            <circle cx="25.8761" cy="34.2026" r="3.86638" fill="black" />
            <circle cx="41.9367" cy="34.2026" r="3.86638" fill="black" />
            <path
              d="M28.2554 44.3148C30.139 46.0001 34.9174 48.3596 38.9623 44.3148"
              stroke="#8E3514"
              stroke-width="2.97414"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1060_1718"
                x1="62.1595"
                y1="27.6595"
                x2="101.716"
                y2="67.2155"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFD540" />
                <stop offset="1" stop-color="#FF6D2E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="profile-name">
          멍청이 <span className="orange">니어씨</span>
        </span>
      </AnswerProfile>

      <AnswerBox>
        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
          >
            <circle cx="6.81395" cy="11.4651" r="5.81395" fill="#E1E4E9" />
            <circle cx="20.186" cy="11.2925" r="5.81395" fill="#E1E4E9" />
            <path
              d="M10.5931 1.29076C4.54658 0.127974 1.00006 7.85218 1.29076 11.4652L8.26751 8.8489C5.70937 5.82564 8.752 2.55045 10.5931 1.29076Z"
              fill="#E1E4E9"
              stroke="#E1E4E9"
              stroke-width="0.581395"
              stroke-linecap="round"
            />
            <path
              d="M23.9652 1.11804C17.9186 -0.0447556 14.3721 7.67945 14.6628 11.2924L21.6396 8.67617C19.0814 5.65291 22.1241 2.37772 23.9652 1.11804Z"
              fill="#E1E4E9"
              stroke="#E1E4E9"
              stroke-width="0.581395"
              stroke-linecap="round"
            />
          </svg>
          <div className="like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <path
                d="M10.4919 4.99901C10.4919 4.75491 10.3949 4.5208 10.2223 4.34819C10.0497 4.17558 9.81562 4.07861 9.57151 4.07861H6.66302L7.10482 1.97547C7.11402 1.92945 7.11863 1.87883 7.11863 1.82821C7.11863 1.63952 7.04039 1.46465 6.91614 1.34039L6.42832 0.857178L3.40018 3.88532C3.2299 4.0556 3.12866 4.2857 3.12866 4.53881V9.14085C3.12866 9.38496 3.22563 9.61907 3.39824 9.79168C3.57085 9.96429 3.80496 10.0613 4.04906 10.0613H8.1909C8.57287 10.0613 8.89962 9.83116 9.03768 9.49981L10.4275 6.25537C10.4689 6.14952 10.4919 6.03908 10.4919 5.91942V4.99901ZM0.367432 10.0613H2.20825V4.53881H0.367432V10.0613Z"
                fill="#B4B9BF"
              />
            </svg>
            {count}
          </div>
        </div>

        <span className="answer">
          저는 어쩌구 저쩌구가 필요하다고그래서
          ㅇ러어리아러ㅏ어라수어한어ㅣ넝라ㅓㄴ이러ㅏㅣㄴ어리언라ㅓㄴ아러너아러ㅏㅣㄴ어라ㅣㄴ어라ㅣㄴ어ㅏ리ㅓㄴ아ㅣ런ㄹㄴㄹ저는
          어쩌구 저쩌구가 필요하다고저는 어쩌구 저쩌구가 필요하다고저는 어쩌구
          저쩌구가 필요하다고저는 어쩌구 저쩌구가 필요하다고저는 어쩌구 저쩌구가
          필요하다고저는 어쩌구 저쩌구가 필요하다고저는 어쩌구 저쩌구가
          필요하다고저는 어쩌구 저쩌구가 필요하다고저는 어쩌구 저쩌구가 필저는
          어쩌구 저쩌구가 필요
        </span>
      </AnswerBox>
    </Background>
  );
};

export default Q_ReceivedPage;
