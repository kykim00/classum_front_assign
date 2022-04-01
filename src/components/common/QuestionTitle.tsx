import styled from "styled-components";

interface QuestionTitleProps {
  title: string;
  isEssential: boolean;
}
export const QuestionTitle = ({ title, isEssential }: QuestionTitleProps) => {
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
