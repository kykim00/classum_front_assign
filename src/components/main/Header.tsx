import { useState } from "react";
import styled from "styled-components";
import { CardContainer } from "../common/CardContainer";
import { TextInput } from "../common/input";

export const Header = () => {
  const [title, setTitle] = useState("제목없는 설문지");
  const [desc, setDesc] = useState("설문지 설명");
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  return (
    <CardContainer>
      <PurpleLine />
      <TextInput
        fontSize="32px"
        value={title}
        onChange={onTitleChange}
        placeholder="설문지 제목"
      />
      <TextInput
        fontSize="14px"
        value={desc}
        onChange={onDescChange}
        placeholder="설문지 설명"
      />
    </CardContainer>
  );
};

const PurpleLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
`;
