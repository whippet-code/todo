// make store accessable in componenet
import { useDispatch } from "react-redux";

// import actions
import { deleteTodo, editTodo, markAsCompleted } from "../store/todos";

// Todo Component - takes props (id & content)
function Todo(props) {
  //set up useDispatch() hook for actions to be callable
  const dispatch = useDispatch();

  // each todo has a completed, edit & delete button. Use props.id to call dispatch with id as payload
  return (
    <div className="flex flex-col self-center w-80 mb-1 rounded">
      <div className="flex justify-between text-gray-100 bg-gray-600 border-2 border-gray-700 rounded pl-1">
        <h4 id={props.id}>{props.content}</h4>
        <div>
          <button
            className="bg-green-900 h-8 w-8 rounded text-white"
            type="button"
            onClick={(e) => {
              dispatch(markAsCompleted(props.id));
              document
                .getElementById(props.id)
                .classList.toggle("line-through");
            }}
          >
            &#10003;
          </button>
          <button
            className="bg-yellow-600 h-8 w-8 rounded text-white"
            type="button"
            onClick={() => dispatch(editTodo(props.id))}
          >
            &#128393;
          </button>
          <button
            className="bg-red-900 h-8 w-8 rounded text-white"
            type="button"
            onClick={() => dispatch(deleteTodo(props.id))}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
