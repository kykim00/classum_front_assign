import { useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState("");
  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return { inputValue, onInputValueChange };
};
