import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "@/types/Task";

type TasksList = Task[];

const initialDataState: TasksList = [];

export const tasksSlice = createSlice({
  name: "tasksList",
  initialState: initialDataState,
  reducers: {
    addTask(state: TasksList, action: PayloadAction<Task>) {
      state.push(action.payload);
    },
    deleteTask(state: TasksList, action: PayloadAction<Task>) {
      state.push(action.payload);
    },
    editTask(state: TasksList, action: PayloadAction<Task>) {
      state.push(action.payload);
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice;
