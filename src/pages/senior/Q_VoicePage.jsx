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
  gap: 0.5rem;

  background: #fff;

  .icon {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 50%;
      cursor: pointer;
    }
  }
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

  .voice {
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

  .orange {
    color: #ff6d2e;
    font-weight: 800;
  }

  .bold {
    font-weight: 800;
  }
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.3rem;

  width: 100%;
  flex-shrink: 0;

  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  font-family: Inter;
  font-size: 13.613px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.817px;
`;

const QuestionBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.4rem 1.3rem;

  width: 19.6875rem;
  height: 10.625rem;
  flex-shrink: 0;

  border-radius: 0.625rem;
  background: rgba(255, 141, 93, 0.04);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25) inset;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.05625rem;

  .status {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3.81894rem;
    height: 1.33663rem;
    flex-shrink: 0;

    border-radius: 0.47738rem;
    background: #ff6d2e;

    text-align: center;
    color: #fff;
    font-family: Inter;
    font-size: 0.66619rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.04rem;
  }
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
    background: linear-gradient(
        0deg,
        rgba(89, 89, 89, 0.44) 0%,
        rgba(89, 89, 89, 0.44) 100%
      ),
      #fff;

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 1.30894rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.07856rem;

    cursor: pointer;
  }
`;

const Q_VoicePage = () => {
  const [iconClicked, setIconClicked] = useState(false);

  const handleIconClick = () => {
    setIconClicked((prevClick) => !prevClick);
  };

  return (
    <Background>
      <TopBar hideSVG={true} />
      <Title>
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
          <span className="voice">음성</span>으로 질문하기
        </span>
      </Title>

      <div className="icon" onClick={handleIconClick}>
        {iconClicked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="239"
            height="239"
            viewBox="0 0 239 239"
            fill="none"
          >
            <g filter="url(#filter0_f_1141_425)">
              <circle
                cx="119.5"
                cy="119.5"
                r="89.213"
                fill="#FF6D2E"
                fill-opacity="0.06"
              />
              <circle
                cx="119.5"
                cy="119.5"
                r="87.713"
                stroke="#FF6D2E"
                stroke-opacity="0.2"
                stroke-width="3"
              />
            </g>
            <g filter="url(#filter1_d_1141_425)">
              <circle
                cx="119.499"
                cy="119.102"
                r="63.1018"
                fill="url(#paint0_linear_1141_425)"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter2_f_1141_425)">
              <circle
                cx="119.5"
                cy="119.5"
                r="116"
                stroke="#FF6D2E"
                stroke-opacity="0.1"
                stroke-width="3"
              />
            </g>
            <circle cx="101.548" cy="116.779" r="13.5995" fill="white" />
            <circle cx="134.186" cy="116.779" r="13.5995" fill="white" />
            <circle cx="103.725" cy="118.955" r="7.07176" fill="black" />
            <circle cx="133.1" cy="118.955" r="7.07176" fill="black" />
            <path
              d="M108.076 137.451C111.522 140.533 120.262 144.849 127.66 137.451"
              stroke="#8E3514"
              stroke-width="5.43979"
              stroke-linecap="round"
            />
            <defs>
              <filter
                id="filter0_f_1141_425"
                x="29.1989"
                y="29.1986"
                width="180.602"
                height="180.602"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.543979"
                  result="effect1_foregroundBlur_1141_425"
                />
              </filter>
              <filter
                id="filter1_d_1141_425"
                x="52.0454"
                y="51.6482"
                width="134.907"
                height="134.907"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2.17591" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1141_425"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1141_425"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_f_1141_425"
                x="0.912043"
                y="0.912043"
                width="237.176"
                height="237.176"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.543979"
                  result="effect1_foregroundBlur_1141_425"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1141_425"
                x1="170.089"
                y1="106.59"
                x2="242.439"
                y2="178.94"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF8D5D" />
                <stop offset="1" stop-color="#969696" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="239"
            height="239"
            viewBox="0 0 239 239"
            fill="none"
          >
            <g filter="url(#filter0_f_999_847)">
              <circle
                cx="119.5"
                cy="119.5"
                r="89.213"
                fill="#FF6D2E"
                fill-opacity="0.06"
              />
              <circle
                cx="119.5"
                cy="119.5"
                r="87.713"
                stroke="#FF6D2E"
                stroke-opacity="0.2"
                stroke-width="3"
              />
            </g>
            <g filter="url(#filter1_d_999_847)">
              <circle
                cx="119.499"
                cy="119.102"
                r="63.1018"
                fill="url(#paint0_linear_999_847)"
                shape-rendering="crispEdges"
              />
            </g>
            <g filter="url(#filter2_f_999_847)">
              <circle
                cx="119.5"
                cy="119.5"
                r="116"
                stroke="#FF6D2E"
                stroke-opacity="0.1"
                stroke-width="3"
              />
            </g>
            <circle cx="101.548" cy="116.779" r="13.5995" fill="white" />
            <circle cx="134.186" cy="116.779" r="13.5995" fill="white" />
            <circle cx="103.725" cy="118.955" r="7.07176" fill="black" />
            <circle cx="133.1" cy="118.955" r="7.07176" fill="black" />
            <path
              d="M108.076 137.451C111.522 140.533 120.262 144.849 127.66 137.451"
              stroke="#8E3514"
              stroke-width="5.43979"
              stroke-linecap="round"
            />
            <defs>
              <filter
                id="filter0_f_999_847"
                x="29.1989"
                y="29.1986"
                width="180.602"
                height="180.602"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.543979"
                  result="effect1_foregroundBlur_999_847"
                />
              </filter>
              <filter
                id="filter1_d_999_847"
                x="52.0454"
                y="51.6482"
                width="134.907"
                height="134.907"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2.17591" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_999_847"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_999_847"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_f_999_847"
                x="0.912043"
                y="0.912043"
                width="237.176"
                height="237.176"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.543979"
                  result="effect1_foregroundBlur_999_847"
                />
              </filter>
              <linearGradient
                id="paint0_linear_999_847"
                x1="170.089"
                y1="106.59"
                x2="242.439"
                y2="178.94"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFD540" />
                <stop offset="1" stop-color="#969696" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      <Description>
        {iconClicked ? (
          <span>
            <span className="orange">질문 중</span>입니다.
            <br />
            중단하려면 다시 니어씨를 누르세요.
          </span>
        ) : (
          <span>
            아이콘을 눌러서
            <br />
            <span className="orange">니어씨</span>에게{" "}
            <span className="bold">질문</span>해주세요.
          </span>
        )}
      </Description>

      {iconClicked ? (
        <Timer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.94794 16.5802C13.6107 16.5802 16.58 13.611 16.58 9.94819C16.58 6.28542 13.6107 3.31616 9.94794 3.31616C6.28518 3.31616 3.31592 6.28542 3.31592 9.94819C3.31592 13.611 6.28518 16.5802 9.94794 16.5802Z"
              fill="black"
              fill-opacity="0.25"
            />
            <path
              d="M9.94775 5.80322V9.74099C9.94775 9.85539 10.0406 9.94824 10.155 9.94824H12.4348"
              stroke="black"
              stroke-width="0.829003"
              stroke-linecap="round"
            />
          </svg>
          00 : 00 : 03
        </Timer>
      ) : (
        <Timer> </Timer>
      )}

      <QuestionBox>
        <span className="status">질문 전</span>
      </QuestionBox>
      <ButtonArea>
        <button>질문하기</button>
      </ButtonArea>
    </Background>
  );
};

export default Q_VoicePage;
