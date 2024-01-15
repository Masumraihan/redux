import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PRIORIRY } from "./todoConstant";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: "High" | "Medium" | "Low";
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false, priority: PRIORIRY.medium });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    todoComplete: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo!.isCompleted = !todo?.isCompleted;
      if (todo) {
        if (todo.isCompleted) {
          state.todos.splice(state.todos.indexOf(todo), 1);
          state.todos.push(todo);
        } else {
          state.todos.splice(state.todos.indexOf(todo), 1);
          state.todos.unshift(todo);
        }
      }
    },
    todoFilterByPriority: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.priority === action.payload);
    },
    updateTodo: (state, action: PayloadAction<Partial<TTodo>>) => {
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload.id ? { ...todo, ...action.payload } : todo;
      });
    },
  },
});

export const { addTodo, removeTodo, todoComplete, todoFilterByPriority, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
