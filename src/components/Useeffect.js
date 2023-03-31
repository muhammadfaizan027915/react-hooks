import React, { useEffect, useState } from "react";

// Use Effect Hook is used to manage the react life cyle
const Useeffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default Useeffect;
