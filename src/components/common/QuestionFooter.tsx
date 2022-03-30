import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { CopyIcon, TrashIcon } from "../../assets";
import { FlexBox } from "./FlexBox";
import { Toggle } from "./ToggleButton";

export const QuestionFooter = () => {
  const [isEssential, setIsEssential] = useState(false);

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEssential(!isEssential);
  };

  const onCopyButtonClick = () => {
    console.log("add question");
  };
  return (
    <Footer>
      <UnderLine />
      <FlexBox justifyContent="flex-end">
        <Button onClick={onCopyButtonClick}>
          <img src={CopyIcon} alt="add" />
        </Button>
        <Button>
          <img src={TrashIcon} alt="add" />
        </Button>
        <Toggle onToggle={onToggle} checked={isEssential} />
      </FlexBox>
    </Footer>
  );
};

const Footer = styled.div`
  width: 100%;
`;

const UnderLine = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: transparent;
  text-shadow: 0 0 0 #2196f3;
`;
