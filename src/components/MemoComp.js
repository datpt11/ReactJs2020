import React from "react";

function MemoComp({ name }) {
  console.log("memo comp");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
