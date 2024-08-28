import { useState } from "react";
import styled from "styled-components";

const CommentBox = styled.div`
  position: relative;
  width: 18rem;
  padding: 1rem 1rem 1.6rem 1rem;
  margin-bottom: 0.8rem;
  border-radius: 10px;
  background: #f2f2f2;

  color: #000;
  font-family: Pretendard;
  font-size: 13.263px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.796px;
`;
const Img = styled.div`
  width: 1.6rem;
  height: 1.6rem;

  margin-right: 0.7rem;
  border-radius: 1rem;

  background-color: #f99;
`;
const User = styled.div`
  font-weight: 700;
`;
const Content = styled.div`
  margin-top: 0.4rem;
`;
const LikeBox = styled.div`
  position: absolute;
  right: 0.8rem;
  bottom: 0.6rem;

  color: #c2c2c2;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.9px;

  .like-svg {
    margin-right: 0.6rem;
  }
`;

const MoreComment = () => {
  const [like, setLike] = useState(0);

  const isLikeClicked = () => {
    setLike(like + 1);
  };

  return (
    <>
      <CommentBox>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Img />
          <User>닉네임</User>
        </div>
        <Content>
          댓글인가 이것은
          멍리ㅏ먼이ㅏ러민ㅇ러ㅣㅏㄴ어라넝라ㅣ머이ㅏ러마ㅣㄴ어라ㅣ먼ㅇ라ㅣㅓㅁㄴ아리ㅓ마ㅣㄴㅇ러ㅏㅣ머
          가나다라마바사
          아자차카ㅏㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ나러ㅏㅁㄴ어라ㅣㅓㄴㅇ리ㅏㅓㅁ니ㅏ러마ㅣㄴ어리ㅏ먼ㅇ리ㅏㅓㅁ니ㅏㄹ엄나ㅣ러ㅏ미넝리ㅏ먼ㅇ리
        </Content>
        <LikeBox onClick={isLikeClicked}>
          <svg
            class="like-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M9.63073 4.56931C9.63073 4.34081 9.53996 4.12168 9.37839 3.96011C9.21682 3.79854 8.99769 3.70777 8.76919 3.70777H6.04673L6.46027 1.73915C6.46889 1.69608 6.47319 1.64869 6.47319 1.60131C6.47319 1.42469 6.39996 1.261 6.28365 1.14469L5.82704 0.692383L2.99258 3.52684C2.83319 3.68623 2.73842 3.90161 2.73842 4.13854V8.44623C2.73842 8.67472 2.82919 8.89386 2.99076 9.05543C3.15233 9.217 3.37147 9.30777 3.59996 9.30777H7.47689C7.83442 9.30777 8.14027 9.09238 8.2695 8.78223L9.57042 5.74531C9.60919 5.64623 9.63073 5.54284 9.63073 5.43084V4.56931ZM0.153809 9.30777H1.87689V4.13854H0.153809V9.30777Z"
              fill="#A9A9A9"
            />
          </svg>
          {like}
        </LikeBox>
      </CommentBox>
    </>
  );
};

export default MoreComment;
