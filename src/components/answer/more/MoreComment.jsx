import styled from "styled-components";

const CommentBox = styled.div`
  width: 18rem;
  padding: 1rem;
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

const MoreComment = () => {
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
        </Content>
      </CommentBox>
    </>
  );
};

export default MoreComment;
