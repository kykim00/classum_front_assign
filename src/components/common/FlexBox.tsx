import styled from "styled-components";

interface FlexBoxProps {
  children: React.ReactNode;
}

export const FlexBox = ({ children }: FlexBoxProps) => {
  return <FlexContainer>{children}</FlexContainer>;
};

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
