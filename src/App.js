import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Arts from "./components/Arts.js"
import Art from "./components/Art.js"
import About from "./components/About.js"

const artData = []

function App() {
  
  

  return (
    <div className='wrapper'>
    <BrowserRouter>
      <nav>
        <Link to="/">
          <h1 id="header">"Harvard Art"</h1>
        </Link>
      </nav>
      <main>
        <Route path="/" exact={true} render={() => {
          return <Arts artData={artData} />
        }} />  
        <Route 
        path="/Bird/:name" 
        render={(routerProps) => {
          return (
            <Art 
              match={routerProps.match}
              artData={artData}
              handleClick={this.handleClick}
            />
          );
        }} />
      </main>
    </BrowserRouter>
  </div>
  );
}

export default App;
