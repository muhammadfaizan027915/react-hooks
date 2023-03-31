import React, { useCallback, useState } from "react";

// Usememo and UseCallback are almost work in a similar way but the difference is usememo returns a momoized value and usecallback returns a memoized function

const Usecallback = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const greet = useCallback(() => {
    return `Asslam-o-Allaikum! ${username}`;
  }, [username]);

  return (
    <div>
      <label htmlFor="username">
        Username:{" "}
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>
      <br />
      <br />
      <label htmlFor="email">
        Email:{" "}
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>

      <p>{username ? greet() : false}</p>
    </div>
  );
};

export default Usecallback;
