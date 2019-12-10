import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <button onClick = {() => props.displayOperator(props.operator.value)}>
      {props.operator.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
