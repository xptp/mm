import React, { useState } from "react";

const Counter = (props) => {
  const { id, value, name, onDelete, handleIncrement, handleDecrement } = props;

  const formaValue = () => {
    return value === 0 ? "empty" : value;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span>{name}</span>
      <span className={getBageClasses()}>{formaValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleIncrement(id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleDecrement(id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
