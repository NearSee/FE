import styled from "styled-components";

const WhiteBox = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  width: 21rem;
  height: 10rem;
  flex-shrink: 0;

  border-radius: 10px;
  background: #fff;

  .vertical-line {
    display: inline-block;
    border-left: 0.14rem solid black;
    margin: 0rem 0.4rem;
    height: 0.9rem;
  }

  .state-box {
    display: flex;
    align-items: center;
  }

  .name-total-box {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .line {
    margin-top: 0.8rem;
    border: none;
    height: 0.1rem;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .time-look-like-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #b0b0b0;
    font-family: Pretendard;
    font-size: 0.96rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.9px;
  }
`;
const State = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.9rem;
  height: 1.8rem;

  border-radius: 0.6rem;
  background: rgba(255, 109, 46, 0.2);

  color: #ff6d2e;
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.02rem;
`;
const QuestionContent = styled.div`
  margin-top: 0.8rem;
  height: 2.73rem;
  overflow: hidden;

  color: #000;
  font-family: Pretendard;
  font-size: 1.16rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.08px;
`;
const Name = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.9px;
`;
const Total = styled.span`
  color: #c2c2c2;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.9px;
`;
const Time = styled.span`
  margin-right: 2rem;
`;

const MoreQuestion = ({ question, index, onClick }) => {
  return (
    <WhiteBox key={index} onClick={onClick}>
      <section class="state-box">
        <State>{question.status}</State>
        {question.method === "speak" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <g clip-path="url(#clip0_1142_754)">
              <path
                d="M21.9235 15.5735L19.8134 14.3549C19.7787 14.335 19.7405 14.3222 19.7008 14.3171C19.6612 14.3121 19.621 14.3148 19.5824 14.3253C19.5439 14.3358 19.5078 14.3538 19.4762 14.3782C19.4446 14.4026 19.4181 14.4331 19.3982 14.4677L19.0175 15.1277C18.9334 15.2731 18.9831 15.4606 19.1285 15.5448L21.2386 16.7634C21.2733 16.7833 21.3115 16.7961 21.3511 16.8012C21.3908 16.8062 21.431 16.8035 21.4695 16.793C21.5081 16.7825 21.5442 16.7645 21.5758 16.7401C21.6074 16.7156 21.6339 16.6852 21.6537 16.6505L22.0344 15.9905C22.1186 15.8451 22.067 15.6577 21.9235 15.5735ZM19.3963 8.03985C19.4162 8.07452 19.4426 8.10494 19.4742 8.12938C19.5058 8.15382 19.542 8.17179 19.5805 8.18227C19.6191 8.19275 19.6593 8.19554 19.6989 8.19047C19.7385 8.1854 19.7768 8.17257 19.8115 8.15272L21.9216 6.9341C22.067 6.84993 22.1167 6.66244 22.0325 6.51705L21.6537 5.85896C21.6339 5.82429 21.6074 5.79386 21.5758 5.76943C21.5442 5.74499 21.5081 5.72702 21.4695 5.71654C21.431 5.70605 21.3908 5.70327 21.3511 5.70834C21.3115 5.71341 21.2733 5.72624 21.2386 5.74609L19.1285 6.96471C19.0586 7.00544 19.0077 7.07218 18.9869 7.15033C18.9661 7.22848 18.9771 7.31169 19.0175 7.38176L19.3963 8.03985ZM22.725 10.5651H20.2763C20.108 10.5651 19.9702 10.7028 19.9702 10.8712V11.6364C19.9702 11.8048 20.108 11.9425 20.2763 11.9425H22.725C22.8934 11.9425 23.0311 11.8048 23.0311 11.6364V10.8712C23.0311 10.7028 22.8934 10.5651 22.725 10.5651ZM16.8309 3.65894C16.718 3.65894 16.6032 3.68954 16.498 3.76033L9.71622 8.19289H6.5788C6.41045 8.19289 6.27271 8.33064 6.27271 8.49898V14.0086C6.27271 14.177 6.41045 14.3147 6.5788 14.3147H9.71622L16.498 18.7473C16.6032 18.8161 16.7199 18.8487 16.8309 18.8487C17.1504 18.8487 17.445 18.5942 17.445 18.2346V4.27303C17.445 3.91337 17.1504 3.65894 16.8309 3.65894Z"
                fill="#FF6D2E"
              />
            </g>
            <defs>
              <clipPath id="clip0_1142_754">
                <rect width="23" height="23" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </section>
      <QuestionContent>{question.question}</QuestionContent>

      <section class="name-total-box">
        <Name>{question.name}</Name>
        <div class="vertical-line" />
        <Total>{question.total}건 질문</Total>
      </section>

      <hr class="line" />

      <section class="time-look-like-box">
        <Time>{question.time}</Time>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "4.6rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M11.1469 3.73109C11.1308 3.69416 10.737 2.82079 9.85745 1.94126C9.04135 1.12612 7.63922 0.153809 5.58573 0.153809C3.53224 0.153809 2.13011 1.12612 1.31401 1.94126C0.434487 2.82079 0.040641 3.69274 0.0245463 3.73109C0.00836281 3.76744 0 3.80679 0 3.84659C0 3.88638 0.00836281 3.92574 0.0245463 3.96209C0.040641 3.99854 0.434487 4.87192 1.31401 5.75144C2.13011 6.56659 3.53224 7.53842 5.58573 7.53842C7.63922 7.53842 9.04135 6.56659 9.85745 5.75144C10.737 4.87192 11.1308 3.99996 11.1469 3.96209C11.1631 3.92574 11.1715 3.88638 11.1715 3.84659C11.1715 3.80679 11.1631 3.76744 11.1469 3.73109ZM5.58573 6.97038C4.10029 6.97038 2.80324 6.42979 1.73011 5.36422C1.28025 4.91714 0.899576 4.40548 0.600641 3.84612C0.89949 3.28684 1.28018 2.77532 1.73011 2.32848C2.80324 1.26245 4.10029 0.721856 5.58573 0.721856C7.07117 0.721856 8.36821 1.26245 9.44135 2.32848C9.89128 2.77532 10.272 3.28684 10.5708 3.84612C10.2693 4.4241 8.75733 6.97038 5.58573 6.97038ZM5.58573 1.6686C5.15506 1.6686 4.73406 1.79631 4.37597 2.03558C4.01788 2.27485 3.73878 2.61493 3.57397 3.01282C3.40916 3.41071 3.36604 3.84853 3.45006 4.27093C3.53408 4.69332 3.74146 5.08132 4.04599 5.38585C4.35053 5.69038 4.73852 5.89777 5.16092 5.98179C5.58331 6.06581 6.02114 6.02269 6.41903 5.85788C6.81692 5.69307 7.157 5.41397 7.39627 5.05588C7.63554 4.69779 7.76324 4.27679 7.76324 3.84612C7.76249 3.26883 7.53284 2.71541 7.12464 2.30721C6.71643 1.89901 6.16301 1.66935 5.58573 1.6686ZM5.58573 5.45558C5.26741 5.45558 4.95623 5.36119 4.69156 5.18434C4.42688 5.00749 4.22059 4.75612 4.09878 4.46203C3.97696 4.16794 3.94509 3.84433 4.00719 3.53212C4.06929 3.21992 4.22258 2.93314 4.44766 2.70805C4.67275 2.48296 4.95953 2.32968 5.27174 2.26757C5.58394 2.20547 5.90755 2.23735 6.20165 2.35916C6.49574 2.48098 6.7471 2.68727 6.92395 2.95194C7.1008 3.21662 7.1952 3.52779 7.1952 3.84612C7.1952 4.27297 7.02563 4.68235 6.72379 4.98418C6.42196 5.28602 6.01259 5.45558 5.58573 5.45558Z"
              fill="#A1A1A1"
            />
          </svg>
          {question.look}
          <svg
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
          {question.like}
        </span>
      </section>
    </WhiteBox>
  );
};

export default MoreQuestion;
