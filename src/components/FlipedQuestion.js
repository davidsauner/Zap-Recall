import { useState } from "react";
import styled from "styled-components";
import setavirar from "../assets/img/seta_virar.png";
import AwButton from "./AwButton";
export default function FlipedQuestion({ questions, answer, ChandeAnswer }) {
  const [showanswer, setShowAnswer] = useState(false);
  return (
    <>
      {showanswer ? (
        <FlipedQuestionContainer>
          <h1>{answer}</h1>
          <AwButton ChandeAnswer={ChandeAnswer} />
        </FlipedQuestionContainer>
      ) : (
        <FlipedQuestionContainer>
          <h1>{questions}</h1>
          <img
            onClick={() => setShowAnswer(true)}
            src={setavirar}
            alt={setavirar}
          />
        </FlipedQuestionContainer>
      )}
    </>
  );
}

const FlipedQuestionContainer = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
