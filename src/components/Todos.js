import { useState, useRef } from "react";

//import components
import Todo from "./Todo";

// make store accessable in componenet
import { useSelector, useDispatch } from "react-redux";

// import actions
import { addTodo } from "../store/todos";

function Todos() {
  // setup store "data" in this component
  //grab just the todos from store
  // object of todos, each has ID from 1->
  const todos = useSelector((state) => state.todos.data);
  const keys = Object.keys(todos);

  //set up useDispatch() hook
  const dispatch = useDispatch();

  // set up state for userInput in add To box
  let [userInput, setUserInput] = useState("");

  ////////////
  //////////////
  // HERE - setting up useRef and useEffect to track userInput, focus? clear input field upon submit

  let inputRef = useRef("");

  // Input field and add todo.
  // itterate the state.data object and create a todo from each id (pass as props????? to each Todo)
  return (
    <div className="flex flex-col bg-slate-500 p-6">
      <h1>ToDo List</h1>
      <form className="flex flex-col self-center w-80">
        <input
          type="text"
          name="value"
          onBlur={(e) => {
            setUserInput(e.target.value);
            e.target.value = "";
          }}
          value={userInput}
        ></input>
        <button type="button" onClick={() => dispatch(addTodo(userInput))}>
          Add Todo
        </button>
      </form>
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
