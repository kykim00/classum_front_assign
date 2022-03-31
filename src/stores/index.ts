import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import question from "./question";

const rootReducer = combineReducers({
  question: question.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default store;
