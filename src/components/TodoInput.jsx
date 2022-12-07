import React, { useState } from "react";

export default function TodoInput({ todos, setTodos }) {
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const addItem = () => {
    const newTodo = {
      id: Math.random() * Math.random(),
      title: titleValue,
      text: textValue,
      isDone: true,
    };

    setTodos([...todos, newTodo]);
    setTitleValue("");
    setTextValue("");
  };

  const onsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form" onSubmit={onsubmit}>
      <div className="form-input">
        <label className="form-label" htmlFor="title">
          제목{" "}
        </label>
        <input
          className="input"
          id="title"
          value={titleValue}
          type="text"
          onChange={(event) => setTitleValue(event.target.value)}
        />
        <label className="form-label" htmlFor="text">
          내용{" "}
        </label>
        <input
          className="input"
          id="text"
          value={textValue}
          type="text"
          onChange={(event) => setTextValue(event.target.value)}
        />
      </div>
      <button className="form-button" onClick={addItem}>
        Click
      </button>
    </form>
  );
}
