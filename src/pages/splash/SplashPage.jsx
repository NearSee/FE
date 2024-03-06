import { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SplashTop from "../../components/splash/SplashTop";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;
  overflow: hidden;
`;

const RoundBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  gap: 3rem;

  width: 38rem;
  height: 24rem;

  border-radius: 0px 0px 35rem 35rem;

  background: ${({ active }) =>
    active
      ? "#FF8D5D"
      : "radial-gradient(50% 50% at 50% 50%, #FFD540 0%, #FFC700 100%)"};

  .scroll-container {
    display: flex;

    align-items: center;
    column-gap: 1.5rem;

    position: relative;
    width: 100%;
    height: 15.5rem;

    overflow-y: hidden;
    overflow-x: scroll;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    width: 100%;
    flex-shrink: 0;
  }
`;

const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  flex-shrink: 0;

  color: #fff;
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.15rem;

  .mini-dot {
    width: 0.4375rem;
    height: 0.4375rem;
    flex-shrink: 0;

    border-radius: 0.4375rem;
    background: ${({ active }) => (active ? "#FFD540" : "#FF8D5D")};
  }
`;

const Guide = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem; /* 150% */
  letter-spacing: -0.075rem;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  flex-shrink: 0;

  column-gap: 0.7rem;
`;

const Dots = styled.div`
  display: flex;
  flex-shrink: 0;

  width: ${({ active }) => (active ? "1.3125rem" : "0.75rem")};
  height: 0.75rem;
  border-radius: ${({ active }) => (active ? "1.3125rem" : "0.75rem")};
  background-color: ${({ active }) =>
    active ? "#FFF" : "rgba(255, 255, 255, 0.50)"};

  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  img {
    position: relative;

    width: 13.17281rem;
    height: 13.3125rem;
    flex-shrink: 0;

    cursor: pointer;
  }
`;

const SplashPage = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const positionscrollRef = useRef();
  const navigate = useNavigate();

  const handleDotClick = (index) => {
    if (index === 0) {
      positionscrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else if (index === 1) {
      const scrollRight =
        positionscrollRef.current.scrollWidth -
        positionscrollRef.current.clientWidth;
      positionscrollRef.current.scrollTo({
        left: scrollRight,
        behavior: "smooth",
      });
    }
  };

  const handlePositionScroll = () => {
    const scrollLeft = positionscrollRef.current.scrollLeft;
    const positionBoxWidth = positionscrollRef.current.firstChild.offsetWidth;
    const index = Math.round(scrollLeft / positionBoxWidth);

    setActiveDotIndex(index);
  };

  const gotoChoose = () => {
    navigate("/splash_choose");
  };

  const positionData = [
    {
      position: "질문자",
      guide: (
        <span>
          질문자는 일상 속에서 접한
          <br />
          어려움을 질문할 수 있습니다.
          <br />
          <br />
          질문을 말하는 순간
          <br />
          모든 니어씨 답변자에게 전송돼요!
        </span>
      ),
    },
    {
      position: "답변자",
      guide: (
        <span>
          답변자는 사람들이 질문을 보내면
          <br />
          빠르게 답변할 수 있습니다.
          <br />
          <br />
          답변을 보내는 순간이 모이면
          <br />
          봉사시간도 받아갈 수 있어요.
        </span>
      ),
    },
  ];

  return (
    <Background>
      <SplashTop active={activeDotIndex === 0} />

      <RoundBox active={activeDotIndex === 0}>
        <div
          className="scroll-container"
          ref={positionscrollRef}
          onScroll={handlePositionScroll}
        >
          {positionData.slice(0, 2).map((data, index) => (
            <div className="description" key={index}>
              <Position active={activeDotIndex === 0}>
                <div className="mini-dot" />
                <span className="value">{data.position}</span>
                <div className="mini-dot" />
              </Position>
              <Guide>{data.guide}</Guide>
            </div>
          ))}
        </div>

        <DotsContainer>
          {positionData.map((_, index) => (
            <Dots
              key={index}
              onClick={() => handleDotClick(index)}
              active={index === activeDotIndex}
            />
          ))}
        </DotsContainer>
      </RoundBox>

      <Icon onClick={gotoChoose}>
        {activeDotIndex === 0 ? (
          <img src={`${process.env.PUBLIC_URL}/images/question_mark.png`} />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/images/exclamation_mark.png`} />
        )}
      </Icon>
    </Background>
  );
};
export default SplashPage;
