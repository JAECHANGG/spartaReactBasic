import React from "react";
import { useState } from "react";

export default function TodoItem({
  id,
  title,
  text,
  deleteTodoHandler,
  isdone,
  todos,
  setTodos,
}) {
  const changeIsDone = (event) => {
    const newTodos = [];
    todos.forEach((todo) => {
      console.log(todo);
      if (todo.id === Number(event.target.value)) {
        newTodos.push({ ...todo, isDone: !todo.isDone });
      } else {
        newTodos.push({ ...todo });
      }
    });
    setTodos(newTodos);
  };
  return (
    <div className="todo-item">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="button-box">
        <button onClick={() => deleteTodoHandler(id)} className="delete-button">
          삭제
        </button>
        <button
          onClick={() => changeIsDone(event)}
          value={id}
          className="isdone-button"
        >
          {isdone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}
