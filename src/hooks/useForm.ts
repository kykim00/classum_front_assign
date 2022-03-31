import { useState } from "react";

export const useForm = () => {
  const [title, setTitle] = useState("제목없는 설문지");
  const [desc, setDesc] = useState("설문지 설명");
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  return {
    title,
    desc,
    onTitleChange,
    onDescChange,
  };
};
