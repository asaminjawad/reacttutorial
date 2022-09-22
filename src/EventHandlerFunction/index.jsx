import React, { useState } from "react";
import { Button } from "react-bootstrap";

function EventHandlerFunction() {
  const [count, dealWithCount] = useState("Ahmed");

  const onClick = () => {
    count === "Ahmed" ? dealWithCount("Ahmed samin") : dealWithCount("Ahmed");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <Button onClick={onClick}> Increase 5</Button>
      </div>
    </div>
  );
}

export default EventHandlerFunction;
