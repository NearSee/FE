import styled from "styled-components";

const RoundBox = styled.div`
  position: relative;
  left: -7rem;

  width: 38rem;
  height: 26rem;
  flex-shrink: 0;

  border-radius: 0px 0px 35rem 35rem;
  background: ${(props) => props.background || "#ff8d5d"};
`;

const Right = styled.div`
  position: absolute;
  right: -1rem;
  width: 7rem;
  height: 40rem;
`;
const Left = styled.div`
  position: absolute;
  left: -1rem;
  width: 7rem;
  height: 40rem;
`;

const Logo = styled.div`
  height: 1.5rem;
  width: 100%;
`;
const Qualify = styled.div`
  display: flex;
  height: 4.6rem;
  width: 100%;

  color: #fff;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.4px;

  justify-content: center;
  align-items: center;
  margin-top: 3.4rem;
`;
const SmaillCircle = styled.div`
  height: 0.5rem;
  width: 0.5rem;

  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background: ${(props) => props.background || "#ffd540"};
`;
const About = styled.div`
  height: rem;
  width: 100%;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: -1.2px;

  margin-top: 1.2rem;
`;

export default function Splash(props) {
  return (
    <>
      <RoundBox background={props.background}>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            left: "7.8rem",
            height: "22rem",
            width: "60%",
            textAlign: "center",
          }}
        >
          <Logo>
            <img src="../images/small_logo.png" alt="니어씨" width="9.6%" />
          </Logo>
          <Left onClick={props.goLeft} />
          <Right onClick={props.goRight} />
          <Qualify>
            <SmaillCircle background={props.smallColor} />
            {props.qualify}
            <SmaillCircle background={props.smallColor} />
          </Qualify>
          <About>{props.value}</About>
        </div>
      </RoundBox>
    </>
  );
}
