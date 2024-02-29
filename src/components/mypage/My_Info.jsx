import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  left: 9.6rem;

  width: 51%;
  height: 8rem;

  margin-top: 1rem;

  img#pencil {
    position: absolute;
    left: 17rem;
    top: 6rem;
    width: 2rem;
  }
`;

const Img = styled.div`
  position: absolute;
  right: 0rem;
  width: 8rem;
  height: 8rem;

  border-radius: 8rem;

  background: #cdcdcd;
`;

const PersonContainer = styled.div`
  position: absolute;
  top: 3.8rem;
  width: 8.5rem;
  height: 4.3rem;
`;
const Name = styled.span`
  margin-right: 0.6rem;
  color: #fff;
  font-family: Pretendard;
  font-size: 25.254px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -1.515px;
`;
const Value = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 25.254px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -1.515px;
`;

const KakaoContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 0.3rem;
  width: 8rem;
  height: 24px;

  text-align: center;
  justify-content: center;
  padding-top: 0.3rem;
  margin-top: 0.5rem;
  flex-shrink: 0;
  border-radius: 0.7rem;
  background: rgb(255, 255, 255, 0.38);

  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.9px;
`;

const My_Info = ({ name, value }) => {
  return (
    <Div>
      <Img></Img>
      <img id="pencil" src="../images/pencil.png" alt="프로필 수정" />
      <PersonContainer>
        <Name>{name}</Name>
        <Value>{value}</Value>
        <KakaoContainer>
          <img
            src="../images/kakao.png"
            alt="카카오"
            width="20rem"
            height="20rem"
          />
          카카오 인증완료
        </KakaoContainer>
      </PersonContainer>
    </Div>
  );
};

export default My_Info;
