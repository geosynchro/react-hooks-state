import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;


// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//     console.log(count)
//     setCount(count + 1);
//     console.log(count)
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);

  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;