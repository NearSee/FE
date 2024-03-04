import styled from "styled-components";
import Splash from "../../components/splash/Splash";
import { useNavigate } from "react-router-dom";
import Button2 from "../../components/splash/Button2";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;
  overflow: hidden;
`;

const ImgBox = styled.div`
  padding-top: 4.44rem;
  padding-left: 5.6rem;
  margin-top: 2rem;
  width: 100%;
  height: 10rem;
`;

const SplashPage02 = () => {
  const navigate = useNavigate();
  const GoSplash01 = () => {
    navigate("/splash01");
  };
  const GoChoose = () => {
    navigate("/splash_choose");
  };

  //   const handleSwipe = () => {
  //     navigate("/splash02");
  //   };

  //   const handlers = useSwipeable({
  //     onSwipedLeft: handleSwipe, // 왼쪽으로 스와이프할 때
  //   });

  const aboutText = (
    <div>
      답변자는 사람들이 질문을 보내면
      <br />
      빠르게 답변할 수 있습니다.
      <br />
      <br />
      답변을 보내는 순간이 모이면
      <br />
      봉사시간도 받아갈 수 있어요.
    </div>
  );

  return (
    <Background>
      <Splash
        value={aboutText}
        qualify="답변자"
        goLeft={GoSplash01}
        goRight={GoChoose}
        background="#FFC700"
        smallColor="#FF8D5D"
      ></Splash>
      <Button2 />
      <ImgBox>
        <img src="./images/splash_img2.png" width="175rem" />
      </ImgBox>
    </Background>
  );
};
export default SplashPage02;
