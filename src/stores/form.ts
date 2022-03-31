import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from ".";

export interface Form {
  title: string;
  desc: string;
}

const initialState: Form = {
  title: "제목없는 설문지",
  desc: "설문지 설명",
};

const form = createSlice({
  name: "formReducer",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<Form>) => {
      state.title = action.payload.title;
      state.desc = action.payload.desc;
    },
  },
});

export const { setForm } = form.actions;
export const questionSelector = (state: rootState) => state.form;
export default form;
