import { CardContainer } from "../common/CardContainer";
import { FlexBox } from "../common/FlexBox";
import { TextInput } from "../common/TextInput";
import { OptionList } from "../common/OptionList";
import { QuestionFooter } from "../common/QuestionFooter";
import { useDispatch } from "react-redux";
import { changeTitle, Question } from "../../stores/question";
import React from "react";

const LongQuestion = ({ question }: { question: Question }) => {
  const { id, title } = question;
  const dispatch = useDispatch();
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTitle({ id: id, title: e.target.value }));
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
        <OptionList {...question} />
      </FlexBox>
      <TextInput
        value="장문형 텍스트"
        width="50%"
        fontSize="14px"
        disabled={true}
      />
      <QuestionFooter question={question} />
    </CardContainer>
  );
};

export default React.memo(LongQuestion);
