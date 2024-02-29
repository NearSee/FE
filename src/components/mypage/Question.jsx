import styled from "styled-components";

const WhiteBox = styled.div`
  position: relative;
  width: 72%;
  height: 8rem;
  flex-shrink: 0;

  padding: 1.6rem 1.5rem;
  margin-bottom: 0.6rem;

  border-radius: 20px;
  background: #fff;
`;
const Text = styled.div`
  width: 3.3rem;
  height: 1.6rem;
  flex-shrink: 0;

  border-radius: 10px;
  background: #ff6d2e;

  color: #fff;
  text-align: center;
  padding-top: 0.3rem;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.02px;
`;
const Content = styled.div`
  width: 17rem;
  height: 2rem;

  overflow-wrap: break-word;
  overflow-y: hidden;

  text-align: center;
  padding: 1rem 0rem;

  color: #434343;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.2px;
`;
const CheckBtn = styled.button`
  position: absolute;
  left: 35%;
  margin-top: 0.6rem;
  width: 107px;
  height: 34px;
  flex-shrink: 0;

  border-radius: 20px;
  border: 0.12rem solid #ff6d2e;
  background: #fff;
`;

const Question = () => {
  return (
    <WhiteBox>
      <Text>질문</Text>
      <Content>
        gjksldjfklsdjfklsajflksjdflkajslkdfjlksdsdfjsㅇ너라ㅣㅓㄴ라ㅣㅓㅁ니ㅏ러ㅏ민어라ㅣ너라ㅣㅓ나ㅣ러ㅏㅣㄴ
      </Content>
      <CheckBtn>답변 확인</CheckBtn>
    </WhiteBox>
  );
};

export default Question;
