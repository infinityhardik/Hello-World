import React, { useState, useEffect } from "react";

export default function Effects() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hi");

  const onClickHandler = () => {
    if (count !== 7) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  const onClickHandler2 = () => {
    if (text === "Hi") {
      setText("Hello");
    } else {
      setText("Hi");
    }
  };

  useEffect(() => {
    // Any Render makes a Call to useEffect Hook without Dependency or []
    console.log("Without [] useEffect", "useEffect called on All/Every Render made ");
  });

  useEffect(() => {
    // Page Load and After Page Load useEffect is called for empty dependency array []
    console.log(
      "Called Twice only after First Page Load and Before Load",
      "useEffect with []"
    );
  }, []);

  useEffect(() => {
    // useEffect is called based on Dependency array variables [..]
    console.log(
      "Called only when there is a change in the Dependencies",
      "useEffect with [count]"
    );
  }, [count]);

  return (
    <>
      <h1>&nbsp; &nbsp;{count}</h1>
      <br />
      <br />
      <button onClick={onClickHandler}>Count Change</button>
      <br />
      <br />
      <h1>&nbsp; &nbsp;{text}</h1>
      <button onClick={onClickHandler2}>TEXT Change</button>
    </>
  );
}
