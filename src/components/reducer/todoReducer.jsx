const todoReducer = (state, action) => {
  const ADD_TODO = "add_todo";
  const DELETE_TODO = "delete_todo";
  const EDIT_TODO = "edit_todo";

  if (action.type == ADD_TODO) {
    let todoText = action.payload.todoText;
    return [
      ...state,
      { id: state.length + 1, todoData: todoText, finished: false },
    ];
  } else if (action.type === DELETE_TODO) {
    let todo = action.payload.todo;
    const updateList = state.filter((t) => t.id !== todo.id);
    return updateList;
  } else if (action.type === EDIT_TODO) {
    let todo = action.payload.todo;
    let todoText = action.payload.todoText;
    const updateList = state.map((t) => {
      if (t.id === todo.id) {
        todo.todoData = todoText;
      }
      return t;
    });
    return updateList;
  } else if (action.type === "finished_todo") {
    let todo = action.payload.todo;
    let isFinished = action.payload.isFinished;
    const updateList = state.map((t) => {
      if (t.id === todo.id) {
        todo.finished = isFinished;
      }
      return t;
    });
    return updateList;
  }
};

export default todoReducer;
