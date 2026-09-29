import React from "react";

// Receiving props from parent
function ChildComponent({ userName }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h3>Child Component</h3>
      <p>
        Hello, <strong>{userName}</strong>! This message is from the child
        component.
      </p>
    </div>
  );
}

export default ChildComponent;