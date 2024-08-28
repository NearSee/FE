import styled from "styled-components";
import Question from "./MoreQuestion";
import Comment from "./MoreComment";
import { useState } from "react";

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

const DropDownBox = styled.div`
  position: absolute;
  z-index: 1;
  right: 1.5rem;
  width: 4.4rem;
  height: 6rem;

  font-family: Inter;
  font-size: 0.8rem;
  font-weight: 700;
  color: #404040;

  ul {
    list-style-type: none;
    margin-top: 0rem;
    padding-left: 0rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4.4rem;
    height: 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #fafafa;
  }
`;
const Sort = styled.div`
  width: 4.4rem;
  height: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

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

  margin-top: 2.2rem;
  background-color: #fff;
`;

const InputBox = styled.input`
  width: 16rem;
  height: 39.965px;
  padding-left: 1rem;
  margin-right: 1rem;

  border: none;
  border-radius: 0.9rem;
  background: rgba(217, 217, 217, 0.5);

  :placeholder {
    color: #c8c8c8;
    font-family: Inter;
    font-size: 0.92rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
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
  const [isDropDownView, setDropDownView] = useState(false);

  const handleDropDownClick = () => {
    setDropDownView(!isDropDownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropDownView(false);
    }, 200);
  };

  return (
    <SelectContainer>
      <Question question={expandQuestion} />
      <WhiteBox>
        <DropDownBox>
          <Sort onClick={handleDropDownClick} onBlur={handleBlurContainer}>
            {isDropDownView ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
              >
                <path
                  d="M5.36603 7.5C4.98113 8.16667 4.01887 8.16667 3.63397 7.5L0.602886 2.25C0.217986 1.58333 0.699111 0.749998 1.46891 0.749998L7.53109 0.749999C8.30089 0.749999 8.78202 1.58333 8.39711 2.25L5.36603 7.5Z"
                  fill="#404040"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="8"
                viewBox="0 0 9 8"
                fill="none"
              >
                <path
                  d="M3.63397 0.500001C4.01887 -0.166666 4.98113 -0.166666 5.36603 0.500001L8.39711 5.75C8.78201 6.41667 8.30089 7.25 7.53109 7.25L1.46891 7.25C0.699111 7.25 0.217985 6.41667 0.602885 5.75L3.63397 0.500001Z"
                  fill="#404040"
                />
              </svg>
            )}
            좋아요순
          </Sort>
          {isDropDownView && (
            <ul>
              <li>좋아요순</li>
              <li>최신순</li>
            </ul>
          )}
        </DropDownBox>
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
