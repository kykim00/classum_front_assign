import styled from "styled-components";
import { Question } from "../../stores/question";

export const QuestionTitle = ({ title, isEssential }: Question) => {
  return (
    <QuestionTitleContainer>
      {title} {isEssential && <RedPoint>*</RedPoint>}
    </QuestionTitleContainer>
  );
};

const QuestionTitleContainer = styled.h3`
  margin-bottom: 20px;
`;

const RedPoint = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
