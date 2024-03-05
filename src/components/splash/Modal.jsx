import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

import withModalBackground from "../../components/withModalBackground";

const ModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  width: 19.4375rem;
  height: 18.1875rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  background: #fff;

  z-index: 1000;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: Center;

  padding-top: 2rem;
`;

const Confirm = styled.div`
  width: 100%;

  text-align: center;
  color: #000;
  font-family: Pretendard;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  .orange {
    color: #ff6d2e;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 9.63rem;
  height: 3.64875rem;
  flex-shrink: 0;

  border-radius: 0rem 0rem 0rem 1.25rem;
  border-top: 1.5px solid rgba(128, 128, 128, 0.23);
  border-right: 2px solid rgba(128, 128, 128, 0.23);
  background: #fff;

  color: #363636;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.41669rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.125rem; /* 150% */
  letter-spacing: -0.085rem;

  cursor: pointer;
  z-index: 1000;
`;

const Modal = ({ onCloseModal, value }) => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate(value === "질문자" ? "/q_main" : "#");
  };

  return (
    <ModalOverlay>
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="69"
          height="69"
          viewBox="0 0 69 69"
          fill="none"
        >
          <circle
            cx="34.5"
            cy="34.5"
            r="34.5"
            fill="url(#paint0_linear_1060_1718)"
          />
          <circle cx="24.6853" cy="33.0132" r="7.43535" fill="white" />
          <circle cx="42.5301" cy="33.013" r="7.43535" fill="white" />
          <circle cx="25.8761" cy="34.2026" r="3.86638" fill="black" />
          <circle cx="41.9367" cy="34.2026" r="3.86638" fill="black" />
          <path
            d="M28.2554 44.3148C30.139 46.0001 34.9174 48.3596 38.9623 44.3148"
            stroke="#8E3514"
            stroke-width="2.97414"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1060_1718"
              x1="62.1595"
              y1="27.6595"
              x2="101.716"
              y2="67.2155"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFD540" />
              <stop offset="1" stop-color="#FF6D2E" />
            </linearGradient>
          </defs>
        </svg>
      </Icon>

      <Confirm>
        <span>
          <span className="orange">{value}</span>로<br />
          확정하시겠습니까?
        </span>
      </Confirm>

      <ButtonContainer>
        <Button onClick={gotoMain}>네</Button>
        <Button
          onClick={onCloseModal}
          style={{ borderRadius: "0rem 0rem 1.25rem 0rem" }}
        >
          아니오
        </Button>
      </ButtonContainer>
    </ModalOverlay>
  );
};

export default withModalBackground(Modal);
