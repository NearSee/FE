import styled from "styled-components";

const Question = styled.div`
  display: flex;
  text-align: center;

  margin-top: 1rem;
  padding: 1rem 1.7rem;
  height: 1.88rem;
  border-radius: 0.9rem;

  ${({ id }) => {
    const opacity = 0.9 - id * 0.2;
    return `background: rgba(255, 141, 93, ${opacity});`;
  }}

  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const Content = styled.div`
  background: #555;
  margin-left: 1.2rem;
  overflow: hidden;

  color: #fff;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.78px;
`;

const MainQuestion = ({ id, content, method }) => {
  return (
    <Question id={id}>
      {method ? (
        <img src="../images/speak.png" alt="음성인식" />
      ) : (
        <img src="../images/text.png" alt="타이핑" />
      )}
      <Content>{content}</Content>
    </Question>
  );
};

export default MainQuestion;
