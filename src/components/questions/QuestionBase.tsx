import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import {
  addOption,
  changeTitle,
  Question,
  reorderOption,
} from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { FlexBox } from "../common/layouts/FlexBox";
import { OptionList } from "../common/OptionList";
import { QuestionFooter } from "../common/QuestionFooter";
import { TextInput } from "../common/TextInput";

interface QuestionBaseProps {
  question: Question;
  children: React.ReactNode;
}

export const QuestionBase = ({ question, children }: QuestionBaseProps) => {
  const { id, title, options } = question;
  const dispatch = useDispatch();
  const onClickAddOption = () => {
    dispatch(addOption({ id: id }));
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
              {children}
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
