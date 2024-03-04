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

const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.92513rem 2.22956rem 1.002rem 2.1875rem;

  border-radius: 0.80169rem;
  background: #fff;
  box-shadow: 1.425px 1.425px 8.199px 0px rgba(137, 137, 137, 0.35);

  color: #000;
  font-family: Inter;
  font-size: 1.02488rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0615rem;

  .orange {
    color: #ff6d2e;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 13rem;

  .icon {
    position: absolute;
    z-index: 1000;
  }

  .wave-svg {
    animation: wave 1.5s infinite;
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
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.02125rem;

  .orange {
    color: #ff6d2e;
    font-weight: 600;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

const SimilarQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17.9375rem;
  height: 7.875rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  background: rgba(255, 109, 46, 0.76);

  cursor: pointer;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.03375rem;

  .big {
    font-size: 1.5625rem;
    font-weight: 800;
    letter-spacing: -0.04688rem;
  }
`;

const WaitingPage = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount % 3) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (count) {
      case 1:
        return (
          <span>
            현재 니어씨에 접속해 있는 <br />
            모두에게 <span className="orange">알림</span>을 보냈어요.
          </span>
        );
      case 2:
        return (
          <span>
            앞으로 어떤 상황이 와도
            <br />
            <span className="orange">니어씨</span>가 답을 알려줄게요.
          </span>
        );
      case 3:
        return (
          <span>
            잠시만요. <br />
            <span className="orange"> 답변</span>이 작성되고 있어요!
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Background>
      <TopBar hideSVG={true} />
      <Status>
        <span>
          <span className="orange">답변</span>을 기다리는 중입니다.
        </span>
      </Status>

      <IconContainer>
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="135"
          height="135"
          viewBox="0 0 135 135"
          fill="none"
        >
          <g filter="url(#filter0_d_1003_910)">
            <circle cx="67.4989" cy="67.4998" r="63.1018" fill="white" />
            <circle
              cx="67.4989"
              cy="67.4998"
              r="63.1018"
              fill="url(#paint0_linear_1003_910)"
            />
          </g>
          <circle cx="49.5474" cy="64.7792" r="13.5995" fill="white" />
          <circle cx="82.1863" cy="64.7792" r="13.5995" fill="white" />
          <circle cx="51.7248" cy="66.9552" r="7.07176" fill="black" />
          <circle cx="81.0998" cy="66.9552" r="7.07176" fill="black" />
          <path
            d="M56.0765 85.4507C59.5218 88.5332 68.2617 92.8488 75.6599 85.4507"
            stroke="#8E3514"
            stroke-width="5.43979"
            stroke-linecap="round"
          />
          <defs>
            <filter
              id="filter0_d_1003_910"
              x="0.0452662"
              y="0.0461206"
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
                result="effect1_dropShadow_1003_910"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1003_910"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1003_910"
              x1="118.089"
              y1="54.9882"
              x2="190.439"
              y2="127.338"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD540" />
              <stop offset="1" stop-color="#969696" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="492"
          height="77"
          viewBox="0 0 492 77"
          fill="none"
        >
          <path
            d="M2 61.8329C6.97184 55.2834 6.43234 55.6425 14.6893 47.8624C24.7465 38.3861 41.3244 23.8307 52.6352 16.3222C63.4828 9.12111 74.6899 3.28885 87.8358 2.10778C95.7748 1.39451 110.917 4.36673 118.278 6.74425C143.467 14.8801 166.213 30.9898 188.191 45.2392C190.644 46.8294 216.56 64.0063 220.036 65.8593C237.771 75.313 253.881 76.4991 273.417 72.0209C302.362 65.386 328.275 49.975 356.446 41.0298C379.849 33.5986 405.448 29.3548 429.806 34.5021C452.452 39.2877 476.624 51.3513 490.111 70.6178"
            stroke="#FFDBCB"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <svg
          className="wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="492"
          height="77"
          viewBox="0 0 492 77"
          fill="none"
        >
          <path
            d="M2 61.8329C6.97184 55.2834 6.43234 55.6425 14.6893 47.8624C24.7465 38.3861 41.3244 23.8307 52.6352 16.3222C63.4828 9.12111 74.6899 3.28885 87.8358 2.10778C95.7748 1.39451 110.917 4.36673 118.278 6.74425C143.467 14.8801 166.213 30.9898 188.191 45.2392C190.644 46.8294 216.56 64.0063 220.036 65.8593C237.771 75.313 253.881 76.4991 273.417 72.0209C302.362 65.386 328.275 49.975 356.446 41.0298C379.849 33.5986 405.448 29.3548 429.806 34.5021C452.452 39.2877 476.624 51.3513 490.111 70.6178"
            stroke="#FFB99A"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </IconContainer>

      <Description>{renderContent()}</Description>

      <DotsContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <circle cx="6" cy="6" r="6" fill="#FF6D2E" fill-opacity="0.38" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#FF6D2E" fill-opacity="0.38" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#FF6D2E" fill-opacity="0.38" />
        </svg>
      </DotsContainer>

      <SimilarQuestion>
        <span>
          기다리는 동안 <br />
          <span className="big">
            유사한 다른 질문
            <br />
            확인하기{" "}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M1.52145 0.146718C1.0502 -0.141271 0.434707 0.00729547 0.146718 0.47855C-0.141271 0.949805 0.00729547 1.56529 0.47855 1.85328L1.52145 0.146718ZM19.2346 12.9721C19.7715 12.8425 20.1017 12.3022 19.9721 11.7654L17.8603 3.01662C17.7307 2.47975 17.1905 2.14959 16.6536 2.27918C16.1167 2.40877 15.7866 2.94904 15.9162 3.4859L17.7933 11.2626L10.0166 13.1397C9.47975 13.2693 9.14959 13.8095 9.27918 14.3464C9.40877 14.8833 9.94903 15.2134 10.4859 15.0838L19.2346 12.9721ZM0.47855 1.85328L18.4786 12.8533L19.5215 11.1467L1.52145 0.146718L0.47855 1.85328Z"
              fill="white"
            />
          </svg>
        </span>
      </SimilarQuestion>
    </Background>
  );
};

export default WaitingPage;
