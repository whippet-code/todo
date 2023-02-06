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
  const nextTodoId = useSelector((state) => state.todos.nextId);

  //set up useDispatch() hook
  const dispatch = useDispatch();

  // itterate the state.data object and create a todo from each id (pass as props????? to each Todo)
  return (
    <div>
      <form>
        <label>
          Add new Todo<input type="text"></input>
        </label>
        <button onClick={() => dispatch(addTodo())}>Add Todo</button>
      </form>
      <h2>ToDo List</h2>
      <Todo />
      <Todo />
    </div>
  );
}

export default Todos;
