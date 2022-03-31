import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AddIcon } from "../../assets";
import { addQuestion, questionSelector } from "../../stores/question";

export const SideMenu = () => {
  const questions = useSelector(questionSelector);
  const { id, type } = questions[0];
  const dispatch = useDispatch();
  const onClickAddQuestion = () => {
    dispatch(addQuestion({ id: questions.length + 1 }));
  };

  return (
    <SideMenuContainer>
      <Button onClick={onClickAddQuestion}>
        <img src={AddIcon} alt="Add Question"></img>
      </Button>
    </SideMenuContainer>
  );
};

const SideMenuContainer = styled.aside`
  position: fixed;
  top: 148px;
  right: calc(50% - 420px);
  width: 90px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 10px;
`;
