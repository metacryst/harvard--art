import React, { Component } from "react";

// Hou comment: would the functional pattern work for this component since it does not rely on state? 
class Art extends Component {
    render() {
        const arts = this.props.artData
        // Hou comment: how would you refactor lines 8 - 24 with .map?
        /** 
          const result = arts.map(art => {
            if(this.props.match.params.title === art.title) {
                return (
                  <div className="singleDisplay">
                    <a className="readMore" href={art.url} target="_blank"><img src={art.primaryimageurl} className="singleImage" alt={art.title}></img></a>
                      <div id="text">
                        <h1 id="artTitle">{art.title}</h1>
                        <h2 id="artist">{art.people[0].name}</h2>
                        <div className="medium">
                          <p id="mediumText">{art.medium}</p>
                        </div>
                      </div>
                  </div>
                )
            }
          })

          return result;
        */
        for(let i=0; i< arts.length; i++) {
            if(this.props.match.params.title === arts[i].title) {
                let art = arts[i];
                return (
                  <div className="singleDisplay">
                    <a className="readMore" 
                    onClick={() => {
                      {window.open(art.url, '_blank')} 
                    }}
                    rel="noopener noreferrer"
                    >
                        <img src={art.primaryimageurl} className="singleImage" alt={art.title}></img>
                    </a>
                      <div id="text">
                        <h1 id="artTitle">{art.title}</h1>
                        <h2 id="artist">{art.people[0].name}</h2>
                        <div className="medium">
                          <p id="mediumText">{art.medium}</p>
                        </div>
                      </div>
                  </div>
                )
            }
        }
    }
}

export default Art;  