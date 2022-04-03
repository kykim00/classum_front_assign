import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { RemoveIcon } from "../../assets";
import {
  addOption,
  changeOption,
  changeTitle,
  Question,
  removeOption,
  reorderOption,
} from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { OptionList } from "../common/OptionList";
import { QuestionFooter } from "../common/QuestionFooter";
import { TextInput } from "../common/TextInput";

const SingleChoice = ({ question }: { question: Question }) => {
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

  const onDragEnd = ({ destination, source }: DropResult): void => {
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newOptions = Array.from(options);
    const [removed] = newOptions.splice(source.index, 1);
    newOptions.splice(destination.index, 0, removed);
    dispatch(reorderOption({ id: id, newOptions: newOptions }));
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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {options.map(({ option, id }, index) => {
                return (
                  <Draggable draggableId={id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <FlexBox
                          justifyContent="flex-start"
                          key={`${index}_${id}`}
                        >
                          <RadioImage />
                          <TextInput
                            value={option}
                            width="70%"
                            fontSize="14px"
                            onChange={onChangeOption}
                            optionId={id}
                          />
                          <button
                            onClick={onClickRemoveOption}
                            name={id.toString()}
                          >
                            <img src={RemoveIcon} alt="Remove Option" />
                          </button>
                        </FlexBox>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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

const RadioImage = styled.span`
  width: 16px;
  height: 16px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: solid 2px;
  border-color: rgba(0, 0, 0, 0.54);
  margin-right: 10px;
`;

export default React.memo(SingleChoice);
