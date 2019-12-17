import React from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => { 
  console.log(props);
  // STEP 2 - add the imported data to state
  return (
    <div className = "operators">
      {
        operators.map(op => <OperatorButton operator = {op} displayOperator = {props.displayOperator} />)
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
