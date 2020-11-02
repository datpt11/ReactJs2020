import React from "react";

export default function FunctionClick() {
  function handleClick() {
    console.log("function click");
  }
  return <button onClick={handleClick}>Function click</button>;
}
