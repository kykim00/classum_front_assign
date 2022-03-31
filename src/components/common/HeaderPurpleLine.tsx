import styled from "styled-components";

const HeaderPurpleLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export default HeaderPurpleLine;
