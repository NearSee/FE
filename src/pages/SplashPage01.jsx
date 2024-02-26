import styled from "styled-components";
import Splash from "../components/splash/Splash";
import Button1 from "../components/splash/Button1";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;
`;

const ImgBox = styled.div`
  padding-top: 4rem;
  padding-left: 8rem;
  margin-top: 2rem;
  width: 100%;
  height: 10rem;
`;

const aboutText = (
  <div>
    질문자는 일상 속에서 접한
    <br />
    어려움을 질문할 수 있습니다.
    <br />
    <br />
    질문을 말하는 순간
    <br />
    모든 니어씨 답변자에게 전송돼요!
  </div>
);

const SplashPage01 = () => {
  const navigate = useNavigate();
  const GoSplash02 = () => {
    navigate("/splash02");
  };

  const handlers = useSwipeable({
    onSwipedRight: GoSplash02, // 오른쪽으로 스와이프할 때 GoSplash02 함수 실행
  });

  return (
    <Background>
      <Splash
        value={aboutText}
        qualify="질문자"
        goRight={GoSplash02}
        {...handlers}
      ></Splash>
      <Button1 />
      <ImgBox>
        <img src="./images/splash_img1.png" width="175rem" />
      </ImgBox>
    </Background>
  );
};
export default SplashPage01;
