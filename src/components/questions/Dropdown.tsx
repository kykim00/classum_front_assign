import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { RemoveIcon } from "../../assets";
import {
  addOption,
  changeOption,
  changeTitle,
  Question,
  removeOption,
} from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { OptionList } from "../common/OptionList";
import { QuestionFooter } from "../common/QuestionFooter";
import { TextInput } from "../common/TextInput";

const Dropdown = ({ question }: { question: Question }) => {
  const { id, title, options } = question;
  const dispatch = useDispatch();
  const onClickAddOption = () => {
    dispatch(addOption({ id: id }));
  };
  const onClickRemoveOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeOption({ id: id, optionId: +e.currentTarget.name }));
  };
  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      {options.map(({ option, id }, index) => {
        return (
          <FlexBox justifyContent="flex-start" key={`${index}_${id}`}>
            <IndexNumber>{`${index + 1}. `}</IndexNumber>
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
      <QuestionFooter question={question} />
    </CardContainer>
  );
};

const IndexNumber = styled.span`
  margin-right: 10px;
`;

export default React.memo(Dropdown);
