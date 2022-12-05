import styled from "styled-components";
import logo from "../../assets/img/logo.png";
export default function Welcome({ setWelcomepage }) {
  return (
    <>
      <Container>
        <img src={logo} alt={logo} />
        <Namestyle>ZapRecall</Namestyle>
        <Welcomebutton onClick={() => setWelcomepage(true)}>
          Iniciar Recall!
        </Welcomebutton>
      </Container>
    </>
  );
}
const Container = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
const Namestyle = styled.h1`
  font-family: "Righteous", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #ffffff;
  margin-left: 20px;
`;
const Welcomebutton = styled.button`
  width: 246px;
  height: 54px;
  background: #ffffff;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  text-align: center;

  color: #d70900;
`;
