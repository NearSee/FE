import styled from "styled-components";

const NotifiContainer = styled.section`
  position: relative;
  margin-top: 2.4rem;
  height: 6.9rem;
`;
const HelloText = styled.div`
  position: absolute;

  color: #ff6d2e;
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const BigText = styled.div`
  position: absolute;
  top: 1.6rem;

  color: #443c53;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  span {
    color: #443c53;
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

const MainNotify = ({ name }) => {
  return (
    <NotifiContainer>
      <HelloText>
        안녕하세요! <span>{name}</span>
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
          width="97rem"
        />
      </ImgBox>
    </NotifiContainer>
  );
};

export default MainNotify;
