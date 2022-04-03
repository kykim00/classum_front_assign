import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeOption, removeOption } from "../stores/question";

export const useOption = (questionId: number) => {
  const dispatch = useDispatch();

  const onClickRemoveOption = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(
        removeOption({ id: questionId, optionId: +e.currentTarget.name })
      );
    },
    []
  );

  const onChangeOption = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        changeOption({
          id: questionId,
          optionId: +e.target.name,
          option: e.target.value,
        })
      );
    },
    []
  );

  return {
    onClickRemoveOption,
    onChangeOption,
  };
};
