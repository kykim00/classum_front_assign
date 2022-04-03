/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { questionSelector, resetAllAnswers } from "../../stores/question";
import { PreviewHeader } from "./PreviewHeader";
import TextAnswer from "./TextAnswer";
import ChoiceAnswer from "./ChoiceAnswer";
import CheckAnswer from "./CheckAnswer";
import DropdownAnswer from "./DropdownAnswer";
import QUESTION_TYPE from "../../constants/questionType";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCallback } from "react";

export const Preview = () => {
  const questions = useSelector(questionSelector);
  const dispatch = useDispatch();

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

  const onClickResetAnswers = useCallback(() => {
    dispatch(resetAllAnswers());
  }, []);

  return (
    <div>
      <PreviewHeader />
      {renderAnswer()}
      <ButtonWrapper>
        <Link to={"/result"}>
          <Button variant="contained">제출하기</Button>
        </Link>
        <Button variant="contained" onClick={onClickResetAnswers}>
          양식 지우기
        </Button>
      </ButtonWrapper>
    </div>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;
