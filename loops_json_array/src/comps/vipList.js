import React, { Component } from "react";
import { vip_ar } from "../data/vip.js";

class VipList extends Component {
  state = { vip_arr: vip_ar };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.vip_arr.map((item) => {
            return (
              <div key={item.name} className="col-lg-6 border">
                <img
                  src={item.image}
                  className="w-25 float-left mr-2 "
                  alt="#"
                />
                <h2>{item.name}</h2>
                <div>Company:{item.source}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default VipList;
