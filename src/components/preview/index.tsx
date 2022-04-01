import { useSelector } from "react-redux";
import { questionSelector } from "../../stores/question";
import { PreviewHeader } from "./PreviewHeader";
import { TextAnswer } from "./TextAnswer";
import { ChoiceAnswer } from "./ChoiceAnswer";
import { CheckAnswer } from "./CheckAnswer";
import { DropdownAnswer } from "./DropdownAnswer";
import QUESTION_TYPE from "../../constants/questionType";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Preview = () => {
  const questions = useSelector(questionSelector);
  const renderAnswer = () => {
    const answerList = questions.map((question) => {
      if (question.type === QUESTION_TYPE.MULTIPLE_CHOICE) {
        return <CheckAnswer {...question} />;
      } else if (question.type === QUESTION_TYPE.SINGLE_CHOICE) {
        return <ChoiceAnswer {...question} />;
      } else if (question.type === QUESTION_TYPE.DROPDOWN) {
        return <DropdownAnswer {...question} />;
      }
      return <TextAnswer {...question} />;
    });
    return answerList;
  };
  return (
    <div>
      <PreviewHeader />
      {renderAnswer()}
      <Link to={"/result"}>
        <ButtonWrapper>
          <Button variant="contained">제출하기</Button>
        </ButtonWrapper>
      </Link>
    </div>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
