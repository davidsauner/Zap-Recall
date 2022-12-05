import styled from "styled-components";
import Logo from "./Logo";
import QuestionsCards from "./QuestionsCards";
import Footer from "./Footer";
import { flashquestions } from "../data/flashquestions";
import { useState } from "react";
let question = flashquestions.map((value) => ({ ...value, fliped: false }));
export default function Screen() {
  const [questions, setQuestions] = useState(question);
  const [questionanswer, setQuestionAnswer] = useState();
  const [answeredarray, setAnsweredarray] = useState([]);

  function ChandeAnswer(status) {
    console.log("no change");
    console.log(questionanswer);
    const newarray = [...answeredarray, { id: questionanswer, status: status }];
    setAnsweredarray(newarray);
    ChangeToSecondCard(0);
  }
  function FindStatus(i) {
    const data = answeredarray.find((value) => value.id === i);
    if (data !== null && data !== undefined) {
      return data.status;
    } else {
      return "none";
    }
  }
  function ChangeToSecondCard(cardid) {
    const newquestions = questions.map((value) => {
      if (value.id === cardid) {
        return { ...value, fliped: true };
      }
      return { ...value, fliped: false };
    });
    setQuestions(newquestions);
    setQuestionAnswer(cardid);
  }

  return (
    <>
      <ScreenContainer>
        <Logo />
        {questions.map((value, i) => (
          <QuestionsCards
            key={i}
            questions={value}
            ChangeToSecondCard={ChangeToSecondCard}
            status={FindStatus(value.id)}
            ChandeAnswer={ChandeAnswer}
          />
        ))}
      </ScreenContainer>
      <Footer
        ChandeAnswer={ChandeAnswer}
        questions={questions}
        countanswer={answeredarray}
      />
    </>
  );
}

const ScreenContainer = styled.div`
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
