import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { questionSelector } from "../../stores/question";
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
  const renderQuestion = () => {
    const questionList = questions.map((question) => {
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
    });
    return questionList;
  };
  return (
    <>
      <Header {...formData} />
      {renderQuestion()}
      <SideMenu {...formData} length={questions.length} />
    </>
  );
};
