//import components
import Todo from "./Todo";

function Todos() {
  // itterate the state.data object and create a todo from each id (pass as props????? to each Todo)
  return (
    <div>
      <form>
        <label>
          Add new Todo<input type="text"></input>
        </label>
        <button>Add Todo</button>
      </form>
      <h2>ToDo List</h2>
      <Todo />
      <Todo />
    </div>
  );
}

export default Todos;
