// Todo Component - takes props (id & content)
function Todo(props) {
  return (
    <div>
      <h3>Individual todo</h3>
      <h4>{props.content}</h4>
      <form>
        <button>Delete</button>
        <button>Completed</button>
        <br></br>
        <label>
          <input type="text"></input>
        </label>
        <button>Edit todo</button>
        <button
          type="button"
          onClick={() => console.log(props.id) /*dispatch(addTodo(e.key))*/}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default Todo;
