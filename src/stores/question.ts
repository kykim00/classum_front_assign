import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import QUESTION_TYPE from "../constants/questionType";
import { rootState } from ".";

interface Option {
  id: number;
  option: string;
}

export interface Question {
  id: number;
  type: string;
  title: string;
  isEssential: boolean;
  options: Option[];
}

const initialState: Question[] = [
  {
    id: 1,
    type: QUESTION_TYPE.SINGLE_CHOICE,
    title: "제목없는 질문",
    isEssential: false,
    options: [
      {
        id: 1,
        option: "옵션 1",
      },
    ],
  },
];

const question = createSlice({
  name: "questionReducer",
  initialState,
  reducers: {
    changeType: (state, action) => {
      const { id, type } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.type = type);
    },
    changeTitle: (state, action) => {
      const { id, title } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.title = title);
    },
    changeEssential: (state, action) => {
      const { id, isEssential } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.isEssential = isEssential);
    },
    addOption: (state, action) => {
      const { id } = action.payload;
      const question = state.find((item) => item.id === id);
      question &&
        question.options.push({
          id: question.options.length + 1,
          option: `옵션 ${question.options.length + 1}`,
        });
    },
    removeOption: (state, action) => {
      const { id, optionId } = action.payload;
      const question = state.find((item) => item.id === id);
      question &&
        question.options.splice(
          question.options.findIndex((item) => item.id === optionId),
          1
        );
    },
    changeOption: (state, action) => {
      const { id, optionId, option } = action.payload;
      const question = state.find((item) => item.id === id);
      question &&
        question.options.splice(
          question.options.findIndex((item) => item.id === optionId),
          1,
          {
            id: optionId,
            option,
          }
        );
    },
    addQuestion: (state, action) => {
      const { id } = action.payload;
      state.push({
        ...initialState[0],
        id: id,
      });
    },
    removeQuestion: (state, action) => {
      const { id } = action.payload;
      state.splice(
        state.findIndex((item) => item.id === id),
        1
      );
    },
    copyQuestion: (state, action: PayloadAction<Question>) => {
      const { id } = action.payload;
      const question = state.find((item) => item.id === id)!;
      console.log(question);
      state.unshift({
        ...question,
        id: state.length + 1,
      });
    },
  },
});

export const {
  changeType,
  changeTitle,
  changeEssential,
  addOption,
  removeOption,
  changeOption,
  addQuestion,
  removeQuestion,
  copyQuestion,
} = question.actions;
export const questionSelector = (state: rootState) => state.question;
export default question;
