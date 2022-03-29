import styled from "styled-components";

interface CardContainerProps {
  children: React.ReactNode;
}

export const CardContainer = ({ children }: CardContainerProps) => {
  return <CardContainerStyles>{children}</CardContainerStyles>;
};

const CardContainerStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto 12px;
  max-width: 90vw;
  width: 640px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 24px;
  page-break-inside: avoid;
  word-wrap: break-word;
`;
