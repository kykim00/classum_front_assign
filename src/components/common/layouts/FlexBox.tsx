import styled from "styled-components";

interface FlexBoxStyledProps {
  justifyContent?: string;
}
interface FlexBoxProps extends FlexBoxStyledProps {
  children: React.ReactNode;
}

export const FlexBox = ({
  justifyContent = "space-between",
  children,
}: FlexBoxProps) => {
  return (
    <FlexContainer justifyContent={justifyContent}>{children}</FlexContainer>
  );
};

const FlexContainer = styled.div<FlexBoxStyledProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  margin-bottom: 12px;
`;
