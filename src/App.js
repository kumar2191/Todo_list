import { useState } from "react";
import "./styles.css";
import { setNestedObjectValues } from "formik";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "green", isCompleted: false },
    { text: "blue", isCompleted: false },
    { text: "orange", isCompleted: false }
  ]);
  const [value, setValue] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    const newtodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newtodos);
    setValue("");
  }

  function removeItem(e) {
    var index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <>
      {todos.map((item, i) => (
        <div className="todo" key={i} id={i} onClick={removeItem}>
          {item.text}
        </div>
      ))}
      <form onSubmit={addItem}>
        <input
          type="text"
          className="input"
          placeholder="Add item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
}
