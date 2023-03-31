import React, { useMemo, useState } from "react";

// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

const UseMemo = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const greeting = useMemo(() => {
    return (() => {
      return `Assalam-o-Allaikum! ${username}`;
    })();
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

      <p>{username ? greeting : false}</p>
    </div>
  );
};

export default UseMemo;
