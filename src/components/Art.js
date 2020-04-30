import React, { Component } from "react";

class Art extends Component {
    render() {
        const arts = this.props.artData
        for(let i=0; i< arts.length; i++) {
            if(this.props.match.params.title === arts[i].title) {
                let art = arts[i];
                return (
                  <div>
                    <img src={art.primaryimageurl} className="singleImage" alt={art.title}></img>
                      <div id="text">
                        <h1>{art.title}</h1>
                        <h2>{`(${art.people[0].name})`}</h2>
                        <div className="conservationStatus">
                          <h3>Medium</h3>
                          <p className="conservationStatusText">{art.medium}</p>
                        </div>
                        <div>
                          <a className="readMore"href={art.url}>Read More</a>
                        </div>
                      </div>
                  </div>
                )
            }
        }
    }
}

export default Art;  