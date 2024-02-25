import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 3rem;
`;

const Top = () => {
  const navigate = useNavigate();
  const GoBack = () => {
    navigate("/splash02");
  };

  return (
    <Container>
      <img
        src="./images/go_back.png"
        alt="그 전으로"
        style={{
          marginLeft: "0.2rem",
          marginTop: "0.8rem",
          width: "2.3rem",
          height: "2.3rem",
        }}
        onClick={GoBack}
      />
      <img
        src="./images/small_logo2.png"
        alt="니어씨"
        style={{
          width: "2.1rem",
          height: "1.4rem",
          marginLeft: "8.7rem",
          marginTop: "0.7rem",
        }}
      />
    </Container>
  );
};

export default Top;
