import styled from "styled-components";
import colors from "../../data/colors";
export default function AwButton({ ChandeAnswer }) {
  const { VERMELHO, AMARELO, VERDE } = colors;
  return (
    <>
      <ContainerButton>
        <ButtonClass color={VERMELHO} onClick={() => ChandeAnswer("error")}>
          Não lembrei
        </ButtonClass>
        <ButtonClass color={AMARELO} onClick={() => ChandeAnswer("half")}>
          Quase não lembrei
        </ButtonClass>
        <ButtonClass color={VERDE} onClick={() => ChandeAnswer("zap")}>
          Zap!
        </ButtonClass>
      </ContainerButton>
    </>
  );
}
const ContainerButton = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  border-color: white;
`;
const ButtonClass = styled.button`
  width: 90px;
  height: 40px;
  margin: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(p) => p.color};
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;
