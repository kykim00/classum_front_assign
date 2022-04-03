import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { RemoveIcon } from "../../assets";
import { useOption } from "../../hooks/useOption";
import { Question } from "../../stores/question";
import { FlexBox } from "../common/layouts/FlexBox";
import { TextInput } from "../common/TextInput";
import { QuestionBase } from "./QuestionBase";

const MultipleChoice = ({ question }: { question: Question }) => {
  const { id, options } = question;
  const { onChangeOption, onClickRemoveOption } = useOption(id);

  return (
    <QuestionBase question={question}>
      {options.map(({ option, id }, index) => {
        return (
          <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <FlexBox justifyContent="flex-start" key={`${index}_${id}`}>
                  <CheckBoxImage />
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
              </div>
            )}
          </Draggable>
        );
      })}
    </QuestionBase>
  );
};

const CheckBoxImage = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: solid 2px;
  border-color: rgba(0, 0, 0, 0.54);
  margin-right: 10px;
`;

export default React.memo(MultipleChoice);
