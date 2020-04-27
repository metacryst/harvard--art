import React, { Component } from "react";

class Art extends Component {
    render() {
        const arts = this.props.artData
        for(let i=0; i< arts.length; i++) {
            if(this.props.match.params.name === arts[i].name) {
                let art = arts[i];
                return (
                  <div>
                    <img src={art.image} className="singleImage" alt={art.name}></img>
                      <div id="text">
                        <h1>{art.name}</h1>
                        <h2>{`(${art.genus})`}</h2>
                        <div className="conservationStatus">
                          <h3>Conservation Status</h3>
                          <p className="conservationStatusText">{art.conservationStatus}</p>
                        </div>
                        <div>
                          <a className="readMore"href={art.homepage}>Read More</a>
                        </div>
                      </div>
                  </div>
                )
            }
        }
    }
}

export default Art;  