import styled from "styled-components";
import colors from "../../data/colors";
import Icon from "../../data/Icon";
export default function ClosedCard({ id, ChangeToSecondCard, status }) {
  const { VERDE, AMARELO, VERMELHO, CINZA } = colors;
  function ChoseColor() {
    switch (status) {
      case "error":
        return VERMELHO;
      case "half":
        return AMARELO;
      case "zap":
        return VERDE;
      default:
        return CINZA;
    }
  }

  return (
    <CardContainer id={id} onClick={() => ChangeToSecondCard(id)}>
      <ColorQuestion color={ChoseColor()} status={status}>
        Pergunta {id}
      </ColorQuestion>
      <Icon status={status} />
    </CardContainer>
  );
}
const CardContainer = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;
const ColorQuestion = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(p) => p.color};

  text-decoration: ${(props) => props.status !== "none" && "line-through"};
`;
