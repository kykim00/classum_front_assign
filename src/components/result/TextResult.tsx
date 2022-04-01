import { Question } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { QuestionTitle } from "../common/QuestionTitle";
import { TextInput } from "../common/TextInput";

export const TextResult = ({ title, answers, isEssential }: Question) => (
  <CardContainer>
    <QuestionTitle title={title} isEssential={isEssential} />
    <TextInput
      value={answers[0].answer}
      border={true}
      placeholder="내 답변"
      disabled
    />
  </CardContainer>
);
