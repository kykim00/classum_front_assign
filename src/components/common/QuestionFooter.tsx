import { Button } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CopyIcon, TrashIcon } from "../../assets";
import { changeEssential, copyQuestion, Question } from "../../stores/question";
import { FlexBox } from "./layouts/FlexBox";
import { Toggle } from "./ToggleButton";

export const QuestionFooter = ({ question }: { question: Question }) => {
  const { id, isEssential } = question;
  const dispatch = useDispatch();
  const onClickCopyQuestion = () => {
    dispatch(copyQuestion({ ...question, id: id }));
  };
  const onChangeEssential = useCallback(() => {
    dispatch(changeEssential({ id: id, isEssential: !isEssential }));
  }, [dispatch, id, isEssential]);
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
        <Toggle onToggle={onChangeEssential} checked={isEssential} />
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
