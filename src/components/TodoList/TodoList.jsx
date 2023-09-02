import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../context/TodoContext";
import TodoDispatchContext from "../context/TodoDispatchContext";

const TodoList = () => {
  const { list, setList } = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);

  function onFinished(todo, isFinished) {
    dispatch({
      type: "finished_todo",
      payload: { todo, isFinished: isFinished },
    });
  }

  function onDelete(todo) {
    dispatch({ type: "delete_todo", payload: { todo } });
  }

  function onEdit(todo, todoText) {
    dispatch({ type: "edit_todo", payload: { todo, todoText } });
  }

  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            deleteItem={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          ></Todo>
        ))}
    </div>
  );
};

export default TodoList;
