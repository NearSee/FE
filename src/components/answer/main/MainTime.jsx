import styled from "styled-components";

const TimeContainer = styled.section`
  background: #fff4ef;
  padding: 1.12rem 1.7rem;
  margin-top: 1rem;
  height: 6.2rem;
  border-radius: 0.9rem;
`;

const MonthNotifiText = styled.div`
  color: #ff6d2e;
  font-family: Inter;
  font-size: 0.72rem;
  font-style: normal;
  font-weight: 700;

  letter-spacing: -0.04rem;
`;
const MonthTotalTime = styled.div`
  margin-top: 0.4rem;
  color: #000;
  font-family: Inter;
  font-size: 1.46rem;
  font-style: normal;
  font-weight: 600;
`;
const TotalText = styled.div`
  margin-top: 0.6rem;
  color: #363636;
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3rem;

  span {
    color: #ff6d2e;
    font-weight: 700;
  }
`;

const MainTime = ({ month_time, total_answer, total_time }) => {
  return (
    <TimeContainer>
      <MonthNotifiText>이번 달 누적 봉사시간</MonthNotifiText>
      <MonthTotalTime>{month_time}시간</MonthTotalTime>
      <TotalText>
        지금까지 질문에 <span>{total_answer}번</span> 답변했고,
        <br /> 총 누적 <span>{total_time}시간</span>
        봉사했어요
      </TotalText>
    </TimeContainer>
  );
};

export default MainTime;
