import React, { Component } from "react";
import PicItem from "./picItem";

class PicsList extends Component {
  state = { pics_ar: [] };

  componentDidMount() {
    let url = "http://fs1.co.il/bus/shop.php";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ pics_ar: data });
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Pics List</h2>
        <div className="row">
          {this.state.pics_ar.map((item) => {
            return <PicItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default PicsList;
