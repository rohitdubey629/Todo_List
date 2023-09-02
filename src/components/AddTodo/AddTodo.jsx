import { useState } from "react";

const AddTodo = ({ updateList }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add your next todo"
      />
      <button onClick={() => updateList(inputText)}>Add</button>
    </div>
  );
};

export default AddTodo;
