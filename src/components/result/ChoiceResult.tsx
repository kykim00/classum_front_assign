import { Radio } from "@mui/material";
import { Question } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { QuestionTitle } from "../common/QuestionTitle";

export const ChoiceResult = ({
  title,
  answers,
  isEssential,
  options,
}: Question) => (
  <CardContainer>
    <QuestionTitle title={title} isEssential={isEssential} />
    {options.map((option, index) => (
      <FlexBox key={`${index}_${index}`} justifyContent="flex-start">
        <Radio
          checked={answers[0].answer === option.option}
          value={option.option}
          name={`OPTION${option.id}`}
          disabled
        />
        <label>{option.option}</label>
      </FlexBox>
    ))}
  </CardContainer>
);
