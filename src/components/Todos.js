import { useState } from "react";

//import components
import Todo from "./Todo";

// make store accessable in componenet
import { useSelector, useDispatch } from "react-redux";

// import actions
import { addTodo, deleteTodo, editTodo, markAsCompleted } from "../store/todos";

function Todos() {
  // setup store "data" in this component
  //grab just the todos from store
  // object of todos, each has ID from 1->
  const todos = useSelector((state) => state.todos.data);
  const keys = Object.keys(todos);

  const nextTodoId = useSelector((state) => state.todos.nextId);

  //set up useDispatch() hook
  const dispatch = useDispatch();

  // set up state for userInput in add To box
  let [userInput, setUserInput] = useState("");

  // Input field and add todo.
  // itterate the state.data object and create a todo from each id (pass as props????? to each Todo)
  return (
    <div>
      <form>
        <label>
          Add new Todo
          <input
            type="text"
            name="value"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          ></input>
          <button type="button" onClick={() => dispatch(addTodo(userInput))}>
            Add Todo
          </button>
        </label>
      </form>
      <h2>ToDo List</h2>
      {
        //Find id's of todos in store (keys in todos)
        // map this array and for each key, render it's <Todo />. Passing props
        keys.map((key, index) => {
          return <Todo key={index} id={key} content={todos[key].content} />;
        })
      }
    </div>
  );
}

export default Todos;
