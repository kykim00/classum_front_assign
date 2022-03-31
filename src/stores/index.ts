import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import form from "./form";
import question from "./question";

const rootReducer = combineReducers({
  question: question.reducer,
  form: form.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default store;
