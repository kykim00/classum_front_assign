import { useDispatch } from "react-redux";
import { Question, setSingleAnswer } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { QuestionTitle } from "../common/QuestionTitle";
import { TextInput } from "../common/TextInput";

export const TextAnswer = ({ id, title, isEssential, answers }: Question) => {
  const dispatch = useDispatch();
  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSingleAnswer({ id: id, answerId: 1, answer: e.target.value }));
  };
  return (
    <CardContainer>
      <QuestionTitle title={title} isEssential={isEssential} />

      <TextInput
        value={answers[0].answer}
        onChange={onChangeAnswer}
        border={true}
        placeholder="내 답변"
      />
    </CardContainer>
  );
};
