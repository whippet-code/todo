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
        content: "Sample Todo",
        completed: false,
      },
    },
  },
  reducers: {
    // add: delete: edit: markAsComplete:

    addTodo: (state, action) => {
      // add new todo into state.data at id nextId. Content pulled from action, set completed to false
      // get id for this new todo (nextId)
      const id = state.nextId;
      // build new todo object for data
      const newTodo = {
        content: action.payload,
        completed: false,
      };
      // append todos with new todo
      state.data[id] = newTodo;

      // increase state.nextId by 1
      state.nextId = state.nextId + 1;
    },

    //delete remove action, id passed in via action.payload
    deleteTodo: (state, action) => {
      // remove object from state.data
      delete state.data[action.payload];
    },

    // edit - get .data.id from state and passed in id
    editTodo: (state, action) => {
      //prompt user for new todo text
      let newTodo = prompt(
        "Edit todo note. Press return with no input to cancel edit."
      );
      // only edit if a value is entered
      if (newTodo !== "") {
        state.data[action.payload].content = newTodo;
      }
    },

    markAsCompleted: (state, action) => {
      // take id from passed in action.payload and mark this todo (state.data."todoid".completed = true)
      state.data[action.payload].completed =
        !state.data[action.payload].completed;
    },
  },
});

// export actions
export const { addTodo, deleteTodo, editTodo, markAsCompleted } =
  todoSlice.actions;
// export reducer
export default todoSlice.reducer;
