import { useState } from "react";
import { CardContainer } from "../common/CardContainer";
import { FlexBox } from "../common/FlexBox";
import { TextInput } from "../common/TextInput";
import { OptionList } from "../common/OptionList";
import { QuestionFooter } from "../common/QuestionFooter";

export const ShortQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("제목없는 질문");

  const onQuestionTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionTitle(e.target.value);
  };
  return (
    <CardContainer>
      <FlexBox>
        <TextInput
          onChange={onQuestionTitleChange}
          value={questionTitle}
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
      <QuestionFooter />
    </CardContainer>
  );
};
