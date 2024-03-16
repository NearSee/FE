import styled from "styled-components";
import Question from "./MoreQuestion";
import Comment from "./MoreComment";

const SelectContainer = styled.div`
  position: absolute;
  top: 7.4rem;
  
  height: 40.2rem;
  width: 100%;
  background: rgba(255,109,46, 0.12);
  animation: fadein 0.6s ease-in-out;

  @keyframes fadein{
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  
`;

const WhiteBox = styled.div`
  height: 100%;
  width: 100%;

  padding-top: 1.2rem;

  background: #fff;
`;
const Sort = styled.div`
  width: 3.4rem;
  height: 1.6rem;

  margin-left: 20.3rem;
  border-radius: 0.4rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #fafafa;
`;
const CommentContainer = styled.div`
  display: grid;
  justify-content: center;
  overflow: auto;

  width: 100%;
  height: 17.8rem;

  margin-top: 0.8rem;
  background-color: #fff;
`;

const InputBox = styled.input`
  width: 16rem;
  height: 39.965px;
  padding-left: 1rem;
  margin-right: 1rem;

  border: none;
  border-radius: 13.941px;
  background: rgba(217, 217, 217, 0.5);

  :placeholder {
    color: #c8c8c8;
    font-family: Inter;
    font-size: 14.951px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.897px;
  }

  color: #000;
`;
const SendBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 2.5rem;

  background-color: #000;
`;

const MoreAddComment = ({ expandQuestion }) => {
  return (
    <SelectContainer>
      <Question question={expandQuestion} />
      <WhiteBox>
        <Sort />
        <CommentContainer>
          <Comment />
          <Comment />
          <Comment />
        </CommentContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <InputBox placeholder="답변 작성하기" />
          <SendBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9H17V7H1V9Z"
                fill="white"
              />
            </svg>
          </SendBtn>
        </div>
      </WhiteBox>
    </SelectContainer>
  );
};

export default MoreAddComment;
