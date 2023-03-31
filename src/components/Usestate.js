import React, { useState } from "react";

// Use state hook is used to manage the states of values in applicaiton
// It takes values and on any chanage in state, it re-renders the application

const initialState = {
  username: "",
  email: "",
  phone: "",
};

const Usestate = () => {
  const [user, setUser] = useState(initialState);
  const [username, setUsername] = useState("");

  const handleChange = ({ target }) => {
    setUser((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleClick = () => {
    setUsername(() => user.username);
  };

  return (
    <div>
      <label htmlFor="username">
        Username:{" "}
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label htmlFor="email">
        Email:{" "}
        <input type="email" name="email" id="email" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label htmlFor="phone">
        Phone:{" "}
        <input type="tel" name="phone" id="phone" onChange={handleChange} />
      </label>
      <br />
      <br />
      <button onClick={handleClick}>Submit</button>

      <p>{username}</p>
    </div>
  );
};

export default Usestate;
