import { useDispatch, useSelector } from "react-redux";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useForm } from "../../hooks/useForm";
import {
  Question,
  questionSelector,
  reorderQuestion,
} from "../../stores/question";
import { SideMenu } from "../common/SideMenu";
import Dropdown from "../questions/Dropdown";
import LongQuestion from "../questions/LongAnswer";
import MultipleChoice from "../questions/MultipleChoice";
import ShortQuestion from "../questions/Short";
import SingleChoice from "../questions/SingleChoice";
import { Header } from "./Header";

export const Main = () => {
  const formData = useForm();
  const questions = useSelector(questionSelector);
  const dispatch = useDispatch();

  const renderQuestion = (question: Question) => {
    if (question.type === "short_answer") {
      return <ShortQuestion question={question} />;
    } else if (question.type === "long_answer") {
      return <LongQuestion question={question} />;
    } else if (question.type === "single_choice") {
      return <SingleChoice question={question} />;
    } else if (question.type === "multiple_choice") {
      return <MultipleChoice question={question} />;
    }
    return <Dropdown question={question} />;
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
    const newQuestions = Array.from(questions);
    const [removed] = newQuestions.splice(source.index, 1);
    newQuestions.splice(destination.index, 0, removed);
    dispatch(reorderQuestion({ newQuestions: newQuestions }));
  };

  return (
    <>
      <Header {...formData} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {questions.map((question, index) => {
                return (
                  <Draggable draggableId={question.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {renderQuestion(question)}
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

      <SideMenu {...formData} length={questions.length} />
    </>
  );
};
