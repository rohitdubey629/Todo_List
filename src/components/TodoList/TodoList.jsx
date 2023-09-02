import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { list, setList } = useContext(TodoContext);
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => {
              const updateList = list.map((t) => {
                if (t.id === todo.id) {
                  todo.finished = isFinished;
                }
                return t;
              });
              return setList(updateList);
            }}
            deleteItem={() => {
              setList([...list].filter(({ id }) => id !== todo.id));
            }}
            onEdit={(todoText) => {
              const updateList = list.map((t) => {
                if (t.id === todo.id) {
                  todo.todoData = todoText;
                }
                return t;
              });
              return setList(updateList);
            }}
          ></Todo>
        ))}
    </div>
  );
};

export default TodoList;
