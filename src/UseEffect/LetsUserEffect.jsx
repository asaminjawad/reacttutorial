import React, { useState, useEffect } from "react";

function LetsUserEffect() {
  const [todos, setTodos] = useState(null);
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw Error("Unsuccessfull fetching");
        } else {
          return response.json();
        }
      })
      .then((data) => setTodos(data), seterror(null), setisLoading(false))
      .catch((error) => {
        seterror(error.message);
        setisLoading(false);
      });
  }, []);

  const loadingMessage = <p>Data is loading</p>;

  let todoElement =
    todos &&
    todos.map((todo) => {
      return (
        <p key={todo.id}>
          <h6>{todo.id}</h6> - {todo.title}
        </p>
      );
    });

  return (
    <div>
      <h1>Fetch Data</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todoElement}
    </div>
  );
}

export default LetsUserEffect;
