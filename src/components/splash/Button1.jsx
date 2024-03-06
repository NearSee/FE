import styled from "styled-components";

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  height: 1.8rem;
  width: 100%;

  top: 24rem;
  justify-content: center;
`;
const Button01 = styled.div`
  width: 1.3rem;
  height: 0.7rem;
  flex-shrink: 0;

  margin-left: 0.5rem;
  border-radius: 0.9rem;
  background: #fff;
`;
const Button02 = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 0.5rem;

  border: none;
  border-radius: 0.7rem;
  background: rgba(255, 255, 255, 0.5);
`;

const Button1 = () => {
  return (
    <ButtonContainer>
      <Button01 />
      <Button02 />
    </ButtonContainer>
  );
};

export default Button1;