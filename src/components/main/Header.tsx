import { Form } from "../../stores/form";
import { CardContainer } from "../common/layouts/CardContainer";
import { HeaderPurpleLine } from "../common/HeaderPurpleLine";
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
      <HeaderPurpleLine />
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
