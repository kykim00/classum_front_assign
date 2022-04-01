import { useSelector } from "react-redux";
import { questionSelector } from "../../stores/question";
import { PreviewHeader } from "../preview/PreviewHeader";
import { CheckResult } from "./CheckResult";
import { ChoiceResult } from "./ChoiceResult";
import { DropdownResult } from "./DropdownResult";
import { TextResult } from "./TextResult";

export const Result = () => {
  const questions = useSelector(questionSelector);
  const renderResults = () => {
    const resultList = questions.map((question) => {
      const { type } = question;
      if (type === "single_choice") {
        return <ChoiceResult {...question} />;
      } else if (type === "multiple_choice") {
        return <CheckResult {...question} />;
      } else if (type === "dropdown") {
        return <DropdownResult {...question} />;
      }
      return <TextResult {...question} />;
    });
    return resultList;
  };
  return (
    <div>
      <PreviewHeader />
      {renderResults()}
    </div>
  );
};
