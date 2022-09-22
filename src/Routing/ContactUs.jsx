import React from "react";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Us Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        magnam natus nulla quos atque? Non facere maxime temporibus deserunt
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        magnam natus nulla quos atque? Non facere maxime temporibus deserunt
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        magnam natus nulla quos atque? Non facere maxime temporibus deserunt
        sint?
      </p>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default ContactUs;
