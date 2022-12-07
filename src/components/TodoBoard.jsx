import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function TodoBoard() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("db/todo.json")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  return (
    <div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <h1>Working.. 🔥</h1>
      <div className="wrap-list">
        {todos.map(
          (todo) =>
            todo.isDone && (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                text={todo.text}
                isdone={todo.isDone}
                deleteTodoHandler={deleteTodoHandler}
                todos={todos}
                setTodos={setTodos}
              />
            )
        )}
      </div>
      <h1>Done..! 🎉</h1>
      <div className="wrap-list">
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                text={todo.text}
                isdone={todo.isDone}
                deleteTodoHandler={deleteTodoHandler}
                todos={todos}
                setTodos={setTodos}
              />
            )
        )}
      </div>
    </div>
  );
}
