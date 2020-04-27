import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Birds extends Component {
  
    render() {
    let list = this.props.artData.map(item => {
      return (
        <div className="Arts" key={item.name}>
            <Link to={"/Art/"+ item.name}><img src={item.image} alt={item.name}></img></Link>
        </div>
      );
    });
    return (
        <div>
          {list}
        </div>
    )
  }
}

export default Birds;
