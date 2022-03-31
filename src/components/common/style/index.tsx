import styled from "styled-components";

export const HeaderPurpleLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const QuestionTitle = styled.h3`
  margin-bottom: 20px;
`;

export const RedPoint = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
