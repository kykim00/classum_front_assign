import { Checkbox } from "@mui/material";
import { Question } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { QuestionTitle } from "../common/QuestionTitle";

export const CheckResult = ({
  title,
  answers,
  isEssential,
  options,
}: Question) => (
  <CardContainer>
    <QuestionTitle title={title} isEssential={isEssential} />
    {options.map((option, index) => (
      <FlexBox key={`${index}`} justifyContent="flex-start">
        <Checkbox
          value={option.option}
          name={`OPTION${option.id}`}
          checked={answers.some((answer) => answer.answer === option.option)}
          disabled
        />
        <label>{option.option}</label>
      </FlexBox>
    ))}
  </CardContainer>
);
