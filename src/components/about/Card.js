import React from "react";
import { ReactPropTypes } from "react";


const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="https://github.com/saileshadh">
          <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default Card;
