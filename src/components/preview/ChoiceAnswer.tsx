import { Radio } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Question, setSingleAnswer } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { QuestionTitle } from "../common/QuestionTitle";

export const ChoiceAnswer = ({ id, title, isEssential, options }: Question) => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    dispatch(
      setSingleAnswer({
        id: id,
        answerId: 1,
        answer: e.target.value,
      })
    );
  };
  return (
    <CardContainer>
      <QuestionTitle title={title} isEssential={isEssential} />

      {options.map((option, index) => (
        <FlexBox key={`${index}_${id}`} justifyContent="flex-start">
          <Radio
            checked={selectedValue === option.option}
            onChange={onChangeAnswer}
            value={option.option}
            name={`OPTION${option.id}`}
          />
          <label>{option.option}</label>
        </FlexBox>
      ))}
    </CardContainer>
  );
};
