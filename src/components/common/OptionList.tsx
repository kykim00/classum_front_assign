import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import QUESTION_TYPE from "../../constants/questionType";
import { changeType, questionSelector } from "../../stores/question";

export const OptionList = () => {
  const questions = useSelector(questionSelector);
  const { id, type } = questions[0];
  const dispatch = useDispatch();
  const onClickMenuItem = (e: SelectChangeEvent) => {
    dispatch(changeType({ id: id, type: e.target.value }));
  };

  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <Select
          defaultValue={QUESTION_TYPE.SINGLE_CHOICE}
          onChange={onClickMenuItem}
        >
          <MenuItem value={QUESTION_TYPE.SHORT_ANSWER}>단답형</MenuItem>
          <MenuItem value={QUESTION_TYPE.LONG_ANSWER}>장문형</MenuItem>
          <MenuItem value={QUESTION_TYPE.SINGLE_CHOICE}>객관식 질문</MenuItem>
          <MenuItem value={QUESTION_TYPE.MULTIPLE_CHOICE}>체크박스</MenuItem>
          <MenuItem value={QUESTION_TYPE.DROPDOWN}>드롭다운</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
