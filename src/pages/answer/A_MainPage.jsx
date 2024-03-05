import styled from "styled-components";
import TopBar from "../../components/TopBar";
import Top from "../../components/splash/Top";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;
`;

const NotifiConntainer = styled.div`
  position: relative;
  background: #754;

  margin: 0rem auto;

  width: 84%;
  height: 7rem;
`;
const HelloText = styled.div`
  position: absolute;
  background: #126;
  color: #ff6d2e;
  font-family: Pretendard;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const BigText = styled.div`
  position: absolute;
  top: 2rem;
  background: #412;
  color: #443c53;
  font-family: Pretendard;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  span {
    color: #443c53;
    font-family: Pretendard;
    font-size: 1.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const ImgBox = styled.div`
  position: absolute;
  right: 0rem;
  width: 7rem;
  height: 7rem;
  background: #fff;
`;
const TimeContainer = styled.div`
  background: #fff4ef;
  margin-top: 1rem;
  margin: 0rem auto;
  padding: 1rem 1.6rem;
  width: 71.4%;
  height: 10rem;
  border-radius: 10px;
`;

const TimeText = styled.div`
  color: #ff6d2e;
  font-family: Inter;
  font-size: 11.57px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.668px; /* 170% */
  letter-spacing: -0.578px;
`;
const MonthTotalTime = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20.825px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.668px; /* 94.444% */
`;
const TotalTime = styled.div``;
const QuestionContainer = styled.div`
  background: #912;
  margin: 0rem auto;
  width: 84%;
  height: 10rem;
`;
const A_MainPage = () => {
  return (
    <Background>
      <TopBar />
      <NotifiConntainer>
        <HelloText>
          안녕하세요! <span>정민지</span>
          <b> 답변자</b>님
        </HelloText>
        <BigText>
          <span>오늘 질문</span>에<br />
          <span>답변</span>해볼까요?
        </BigText>
        <ImgBox>
          <img
            src="../images/main_icon.png"
            alt="메인 아이콘 이미지"
            width="100%"
          />
        </ImgBox>
      </NotifiConntainer>
      <TimeContainer>
        <TimeText>이번 달 누적 봉사시간</TimeText>
        <MonthTotalTime>3시간</MonthTotalTime>
        지금까지 질문에 58번 답변했고, 총 누적 12시간 봉사했어요
      </TimeContainer>
      <QuestionContainer></QuestionContainer>
    </Background>
  );
};

export default A_MainPage;
