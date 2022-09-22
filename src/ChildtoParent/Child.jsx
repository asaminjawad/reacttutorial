import React from "react";

function Child(props) {
  const data = " He is a good man";
  props.getDataFromChild(data);

  return <div>Hello {props.name},</div>;
}

export default Child;
