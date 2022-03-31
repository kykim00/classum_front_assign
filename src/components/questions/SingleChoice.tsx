import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RemoveIcon } from "../../assets";
import {
  addOption,
  changeEssential,
  changeOption,
  changeTitle,
  questionSelector,
  removeOption,
} from "../../stores/question";
import { CardContainer } from "../common/CardContainer";
import { FlexBox } from "../common/FlexBox";
import { OptionList } from "../common/OptionList";
import { QuestionFooter } from "../common/QuestionFooter";
import { TextInput } from "../common/TextInput";

export const SingleChoice = () => {
  const questions = useSelector(questionSelector);
  console.log(questions);
  const { id, type, options, title, isEssential } = questions[0];
  const dispatch = useDispatch();
  const onClickAddOption = () => {
    dispatch(addOption({ id: id }));
  };
  const onClickRemoveOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeOption({ id: id, optionId: +e.currentTarget.name }));
  };
  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    dispatch(
      changeOption({
        id: id,
        optionId: +e.target.name,
        option: e.target.value,
      })
    );
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTitle({ id: id, title: e.target.value }));
  };
  const onToggleEssential = () => {
    dispatch(changeEssential({ id: id, isEssential: !isEssential }));
  };
  return (
    <CardContainer>
      <FlexBox>
        <TextInput
          onChange={onChangeTitle}
          value={title}
          width="50%"
          placeholder="질문"
        />
        <OptionList />
      </FlexBox>
      {questions[0].options.map(({ option, id }, index) => {
        return (
          <FlexBox justifyContent="flex-start" key={`${index}_${id}`}>
            <RadioImage />
            <TextInput
              value={option}
              width="70%"
              fontSize="14px"
              onChange={onChangeOption}
              optionId={id}
            />
            <button onClick={onClickRemoveOption} name={id.toString()}>
              <img src={RemoveIcon} alt="Remove Option" />
            </button>
          </FlexBox>
        );
      })}
      <div onClick={onClickAddOption}>
        <TextInput
          value="옵션 추가"
          width="50%"
          fontSize="14px"
          disabled={true}
        />
      </div>
      <QuestionFooter isEssential={isEssential} onToggle={onToggleEssential} />
    </CardContainer>
  );
};

const RadioImage = styled.span`
  width: 16px;
  height: 16px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: solid 2px;
  border-color: rgba(0, 0, 0, 0.54);
  margin-right: 10px;
`;
