import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { Question } from "../../stores/question";
import { CardContainer } from "../common/layouts/CardContainer";
import { QuestionTitle } from "../common/QuestionTitle";

export const DropdownResult = ({ title, answers, isEssential }: Question) => (
  <CardContainer>
    <QuestionTitle title={title} isEssential={isEssential} />
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <Select defaultValue={answers[0].answer} disabled>
          <MenuItem value={answers[0].answer} disabled>
            {answers[0].answer}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  </CardContainer>
);
