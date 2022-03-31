import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AddIcon, PreviewIcon } from "../../assets";
import { Form, setForm } from "../../stores/form";
import { addQuestion } from "../../stores/question";

interface SideMenuProps extends Form {
  length: number;
}
export const SideMenu = ({ title, desc, length }: SideMenuProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickAddQuestion = () => {
    dispatch(addQuestion({ id: length + 1 }));
  };
  const onClickPreview = () => {
    dispatch(setForm({ title, desc }));
    navigate("/preview");
  };
  return (
    <SideMenuContainer>
      <Button onClick={onClickAddQuestion}>
        <img src={AddIcon} alt="Add Question"></img>
      </Button>
      <Button onClick={onClickPreview}>
        <img src={PreviewIcon} alt="Preview"></img>
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
