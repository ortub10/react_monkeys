import React from "react";

function PicItem(props) {
  return (
    <div key={props.item.id} className="col-lg-6 border">
      <img src={props.item.image} className="w-25 float-start mr-2 " alt="#" />
      <h2>{props.item.name}</h2>
      <div>Price: {props.item.price}</div>
    </div>
  );
}

export default PicItem;
