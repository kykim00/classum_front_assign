import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Question, setSingleAnswer } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { TextInput } from "../common/TextInput";

export const TextAnswer = ({ title, isEssential, answers }: Question) => {
  const dispatch = useDispatch();
  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSingleAnswer({ id: 1, answerId: 1, answer: e.target.value }));
  };
  return (
    <CardContainer>
      <QuestionTitle>
        {title} {isEssential && <RedPoint>*</RedPoint>}
      </QuestionTitle>
      <TextInput
        value={answers[0].answer}
        onChange={onChangeAnswer}
        border={true}
        placeholder="내 답변"
      />
    </CardContainer>
  );
};

const QuestionTitle = styled.h3`
  margin-bottom: 20px;
`;
const RedPoint = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
