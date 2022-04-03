/* eslint-disable react-hooks/exhaustive-deps */
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Question, setSingleAnswer } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { QuestionTitle } from "../common/QuestionTitle";

const DropdownAnswer = ({
  id,
  title,
  isEssential,
  options,
  answers,
}: Question) => {
  const dispatch = useDispatch();
  const onClickAnswer = useCallback((e: SelectChangeEvent) => {
    dispatch(
      setSingleAnswer({
        id: id,
        answerId: 1,
        answer: e.target.value,
      })
    );
  }, []);

  return (
    <CardContainer>
      <QuestionTitle title={title} isEssential={isEssential} />
      <Box sx={{ minWidth: 220 }}>
        <FormControl fullWidth>
          <Select
            defaultValue=""
            onChange={onClickAnswer}
            value={answers[0].answer}
          >
            {options.map((option, index) => (
              <MenuItem key={`${index}_${id}`} value={option.option}>
                {option.option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </CardContainer>
  );
};

export default React.memo(DropdownAnswer);
