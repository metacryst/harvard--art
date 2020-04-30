import React, { Component } from "react";
import { Link } from "react-router-dom";

class Arts extends Component {
  render() {
    let list = this.props.artData.map((item) => {
      if (item.primaryimageurl != null) {
        return (
          <div className="Arts" key={item.title}>
            <Link to={"/Art/" + item.title}>
              <img
                className="galleryPiece"
                src={item.primaryimageurl}
                alt={item.title}
              ></img>
            </Link>
          </div>
        );
      }
    });
    return <div>{list}</div>;
  }
}

export default Arts;
