import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function FormFunction() {
  let [user, setUser] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = user;

  //   const handleName = (e) => {
  //     setUser({ name: e.target.value, email, password });
  //     console.log(e.target.value);
  //   };

  //   const handleEmail = (e) => {
  //     setUser({ name, email: e.target.value, password });
  //   };
  //   const handlePassword = (e) => {
  //     setUser({ name, email, password: e.target.value });
  //   };

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            onChange={handleUser}
            type="text"
            name="name"
            value={name}
          ></input>
        </div>
        <div>
          <label>Email: </label>
          <input
            onChange={handleUser}
            type="email"
            name="email"
            value={email}
          ></input>
        </div>
        <div>
          <label>Password: </label>
          <input
            onChange={handleUser}
            type="password"
            name="password"
            value={password}
          ></input>
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default FormFunction;
