import { MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

export const OptionList = () => {
  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <Select defaultValue={30}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
