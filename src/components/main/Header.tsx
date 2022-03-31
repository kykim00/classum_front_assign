import styled from "styled-components";
import { Form } from "../../stores/form";
import { CardContainer } from "../common/CardContainer";
import { TextInput } from "../common/TextInput";

interface HeaderProps extends Form {
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({
  title,
  onTitleChange,
  desc,
  onDescChange,
}: HeaderProps) => {
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
