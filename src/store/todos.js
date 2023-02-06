import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    // counter for next todo id value
    nextId: 2,
    // data store for all todos
    data: {
      //individual todo item id=1
      1: {
        content: "Content 1",
        completed: false,
      },
    },
  },
  reducers: {
    // add: delete: edit: markAsComplete:
    addTodo: (state, action) => {
      // add new todo into state.data at id nextId. Content pulled from action, set completed to false
      // increase state.nextId by 1
      console.log(
        `ADD - state - ${state.data[1].content}.. action - ${action}`
      );
    },
    //delete remove action id passed object from state.data
    deleteTodo: (state, action) => {
      // get id to delete
      // remove object from state.data
      console.log(`DELETE - state - ${state}.. action - ${action}`);
    },
    // edit - get .data.id from state and passed in id
    editTodo: (state, action) => {
      // state.data(action.id.content) = new action.content string
      console.log(`EDIT - state - ${state}.. action - ${action}`);
    },
    markAsCompleted: (state, action) => {
      // take id from passed in data and mark this todo (state.data."todoid".completed = true)
      //get id
      const id = console.log(
        `COMPLETED - state - ${state}.. action - ${action}`
      );
    },
  },
});

// export actions
export const { addTodo, deleteTodo, editTodo, markAsCompleted } =
  todoSlice.actions;
// export reducer
export default todoSlice.reducer;
