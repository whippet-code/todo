// make store accessable in componenet
import { useDispatch } from "react-redux";

// import actions
import { deleteTodo, editTodo, markAsCompleted } from "../store/todos";

// Todo Component - takes props (id & content)
function Todo(props) {
  // make variable for just todo data
  //const todos = useSelector((state) => state.todos.data);
  //set up useDispatch() hook for actions to be callable
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col self-center w-80 p-10 border-gray-50 border-2 mt-8">
      <h4>{props.content}</h4>
      <form className="flex flex-col self-center w-80">
        <button type="button" onClick={() => dispatch(deleteTodo(props.id))}>
          Delete
        </button>
        <button
          type="button"
          onClick={() => dispatch(markAsCompleted(props.id))}
        >
          Completed
        </button>
        <br></br>
        <label>
          <input type="text" value=""></input>
        </label>
        <button type="button" onClick={console.log("")}>
          Edit todo
        </button>
      </form>
    </div>
  );
}

export default Todo;
