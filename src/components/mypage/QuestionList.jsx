import styled from "styled-components";

const WhiteBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.4rem 1.3rem;

  width: 17.5rem;
  height: 8rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  background: #fff;

  .Q {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 1.6875rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #ff6d2e;

    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.06375rem;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  height: 6.5rem;
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;

  width: 100%;

  text-align: center;
  color: #434343;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.075rem;
`;

const CheckBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.6875rem;
  height: 2.125rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  border: 1px solid #ff6d2e;
  background: #fff;

  cursor: pointer;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.05625rem;
`;

const QuestionList = () => {
  return (
    <WhiteBox>
      <span className="Q">질문</span>
      <ContentBox>
        <Content>
          이거는 어떻게 하나요 선생님? 안녕하세요 호호 인생 정말 재밌어요 ^^
        </Content>
        <CheckBtn>답변 확인</CheckBtn>
      </ContentBox>
    </WhiteBox>
  );
};

export default QuestionList;
