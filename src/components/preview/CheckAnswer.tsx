import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  Question,
  removeAnswer,
  setMultipleAnswer,
} from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { QuestionTitle } from "../common/QuestionTitle";

export const CheckAnswer = ({ id, title, isEssential, options }: Question) => {
  const dispatch = useDispatch();

  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      dispatch(
        setMultipleAnswer({
          id: id,
          answerId: +e.target.name.slice(-1),
          answer: e.target.value,
        })
      );
    else dispatch(removeAnswer({ id: id, answerId: +e.target.name.slice(-1) }));
  };
  return (
    <CardContainer>
      <QuestionTitle title={title} isEssential={isEssential} />

      {options.map((option, index) => (
        <FlexBox key={`${index}_${id}`} justifyContent="flex-start">
          <Checkbox
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
