import { useDispatch, useSelector } from "react-redux";
import {
  addOption,
  changeEssential,
  changeOption,
  changeTitle,
  questionSelector,
  removeOption,
} from "../stores/question";

export default function useQuestion(questionId: number) {
  const questions = useSelector(questionSelector);
  const { id, type, options, title, isEssential } = questions[questionId];
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
  const onToggleEssential = () => {
    dispatch(changeEssential({ id: id, isEssential: !isEssential }));
  };
}
