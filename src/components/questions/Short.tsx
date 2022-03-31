import { useState } from "react";
import { CardContainer } from "../common/CardContainer";
import { FlexBox } from "../common/FlexBox";
import { TextInput } from "../common/TextInput";
import { OptionList } from "../common/OptionList";
import { QuestionFooter } from "../common/QuestionFooter";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEssential,
  changeTitle,
  questionSelector,
} from "../../stores/question";

export const ShortQuestion = () => {
  const questions = useSelector(questionSelector);
  console.log(questions);
  const { id, type, title, isEssential } = questions[0];
  const dispatch = useDispatch();
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
      <TextInput
        value="단답형 텍스트"
        width="50%"
        fontSize="14px"
        disabled={true}
      />
      <QuestionFooter isEssential={isEssential} onToggle={onToggleEssential} />
    </CardContainer>
  );
};
