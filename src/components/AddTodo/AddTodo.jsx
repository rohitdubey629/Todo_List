import { useContext, useState } from "react";
import TodoDispatchContext from "../context/TodoDispatchContext";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add your next todo"
      />
      <button
        onClick={() => {
          dispatch({ type: "add_todo", payload: { todoText: inputText } });
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
