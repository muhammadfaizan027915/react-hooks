import React, { useReducer } from "react";

const actionTypes = {
  USER: "user",
  USERNAME: "username",
};

const initialState = {
  user: {
    username: "",
    email: "",
    phone: "",
  },

  username: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER:
      return {
        ...state,
        user: { ...state.user, [action.payload.name]: action.payload.value },
      };

    case actionTypes.USERNAME:
      return {
        username: action.payload.value,
        user: { ...state.user },
      };

    default:
      new Error();
  }
};

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target }) => {
    dispatch({
      type: actionTypes.USER,
      payload: { name: target.name, value: target.value },
    });
  };

  const handleClick = () => {
    dispatch({
      type: actionTypes.USERNAME,
      payload: { value: state.user.username },
    });
  };

  return (
    <div>
      <label htmlFor="username">
        Username:{" "}
        <input
          type="text"
          name="username"
          id="username"
          value={state.user.username}
          onChange={handleChange}
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
          value={state.user.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label htmlFor="phone">
        Phone:{" "}
        <input
          type="tel"
          name="phone"
          id="phone"
          value={state.user.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <button onClick={handleClick}>Submit</button>

      {state.username ? (
        <p>{`Assalam-o-Allaikum! ${state.username}`}</p>
      ) : (
        false
      )}
    </div>
  );
};

export default Usereducer;
