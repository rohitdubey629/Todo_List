import Todo from "../Todo/Todo";

const TodoList = ({ list, setList }) => {
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
          ></Todo>
        ))}
    </div>
  );
};

export default TodoList;
