import "./Card.css";

import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <div className="main">
        
        <div  className="data">Name: {props.name}</div>
        <div className="data">Address: {props.address}</div>
        <div className="data">Job: {props.job}</div>
        <div className="data">Salary: {props.salary}</div>
      </div>
    </div>
  );
};
