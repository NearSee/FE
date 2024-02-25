import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;
const WhiteBox = styled.div`
  margin: 0px auto;
  margin-top: 11.4rem;
  padding-top: 3rem;
  width: 20rem;
  height: 15.5rem;
  border-radius: 20px;
  background: #fff;
`;
const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  span {
    color: #ff6d2e;
  }
`;

const BaseBtn = styled.button`
  width: 10rem;
  height: 4rem;
  flex-shrink: 0;
  margin-top: 3.9rem;
  border: none;
  border-top: 1px solid rgba(128, 128, 128, 0.23);
  border-right: 1px solid rgba(128, 128, 128, 0.23);
  background: #fff;
  color: #363636;
  text-align: center;
  font-family: Pretendard;
  font-size: 22.667px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 150% */
  letter-spacing: -1.36px;
`;

const YesBtn = styled(BaseBtn)`
  border-radius: 0px 0px 0px 20px;
`;

const NoBtn = styled(BaseBtn)`
  border-radius: 0px 0px 20px 20px;
`;

const Modal = ({ isOpen, onClose, value }) => {
  const navigate = useNavigate();
  //   이부분 수정하기_세민 답변자가 맞으면 답변자 페이지로 아니면 질문자 페이지로
  const GoMain = () => {
    navigate(value === "답변자" ? "/" : "/splash02");
  };
  const CloseModal = () => {
    onClose();
  };

  return (
    <Background>
      <WhiteBox>
        <img src="../images/modal_img.png" alt="가운데 이미지" width="58rem" />
        <Text>
          <span>{value}</span>로<br />
          확정하시겠습니까?
        </Text>
        <YesBtn onClick={GoMain}>네</YesBtn>
        <NoBtn onClick={CloseModal}>아니오</NoBtn>
      </WhiteBox>
    </Background>
  );
};

export default Modal;
