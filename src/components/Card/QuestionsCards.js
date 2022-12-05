import ClosedCard from "./ClosedCard";
import FlipedQuestion from "./FlipedQuestion";

export default function QuestionsCards(props) {
  const { id, Q, R, fliped } = props.questions;
  const { status } = props;

  const { ChangeToSecondCard, ChandeAnswer } = props;
  return (
    <>
      {fliped ? (
        <FlipedQuestion
          ChangeToSecondCard={ChangeToSecondCard}
          questions={Q}
          answer={R}
          ChandeAnswer={ChandeAnswer}
        />
      ) : (
        <ClosedCard
          id={id}
          ChangeToSecondCard={ChangeToSecondCard}
          status={status}
        />
      )}
    </>
  );
}
