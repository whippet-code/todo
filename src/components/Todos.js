import { useState, useRef, useEffect } from "react";

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

  // auto focus on new todo input field
  let inputRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Input field and add todo.
  // itterate the state.data object and create a todo from each id (pass as props????? to each Todo)
  return (
    <div className="flex flex-col self-center bg-slate-500 p-4 w-100 h-screen rounded">
      <h1 className="text-gray-100 font-light text-4xl">
        Todo List - React Redux v.1
      </h1>
      <form
        className="flex self-center content-center w-100 mb-1 p-2"
        onSubmit={(e) => {
          e.preventDefault(); // prevent page render upon submit
          e.target[0].value = ""; //clear out the input field text
        }}
      >
        <input
          type="text"
          className="pl-1"
          id="inputField"
          ref={inputRef}
          name="value"
          placeholder="new task"
          onChange={(e) => setUserInput(e.target.value)} //when user types into box update the userInput state
          value={userInput}
        ></input>
        <button
          type="submit"
          className="bg-green-900 h-8 w-8 rounded text-white border-x-yellow-50 border-2"
          onClick={(e) => dispatch(addTodo(userInput))}
        >
          +
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
