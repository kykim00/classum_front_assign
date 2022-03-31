import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CopyIcon, TrashIcon } from "../../assets";
import { copyQuestion, questionSelector } from "../../stores/question";
import { FlexBox } from "./FlexBox";
import { Toggle } from "./ToggleButton";

interface FooterProps {
  isEssential: boolean;
  onToggle: () => void;
}

export const QuestionFooter = ({ isEssential, onToggle }: FooterProps) => {
  const questions = useSelector(questionSelector);
  const { id, type, options, title } = questions[0];
  const dispatch = useDispatch();
  const onClickCopyQuestion = () => {
    dispatch(copyQuestion({ ...questions[0], id: id }));
  };
  return (
    <Footer>
      <UnderLine />
      <FlexBox justifyContent="flex-end">
        <Button onClick={onClickCopyQuestion}>
          <img src={CopyIcon} alt="Copy Question" />
        </Button>
        <Button>
          <img src={TrashIcon} alt="Delete Question" />
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
