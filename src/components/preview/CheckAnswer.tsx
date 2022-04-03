import { Checkbox } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  Question,
  removeAnswer,
  setMultipleAnswer,
} from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { QuestionTitle } from "../common/QuestionTitle";

const CheckAnswer = ({
  id,
  title,
  isEssential,
  options,
  answers,
}: Question) => {
  const dispatch = useDispatch();

  const onChangeAnswer = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      dispatch(
        setMultipleAnswer({
          id: id,
          answerId: +e.target.name.slice(-1),
          answer: e.target.value,
        })
      );
    else dispatch(removeAnswer({ id: id, answerId: +e.target.name.slice(-1) }));
  }, []);

  return (
    <CardContainer>
      <QuestionTitle title={title} isEssential={isEssential} />

      {options.map((option, index) => (
        <FlexBox key={`${index}_${id}`} justifyContent="flex-start">
          <Checkbox
            onChange={onChangeAnswer}
            value={option.option}
            name={`OPTION${option.id}`}
            checked={answers.some((answer) => answer.answer === option.option)}
          />
          <label>{option.option}</label>
        </FlexBox>
      ))}
    </CardContainer>
  );
};

export default React.memo(CheckAnswer);