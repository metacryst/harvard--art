import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Arts from "./components/Arts.js"
import Art from "./components/Art.js"
import About from "./components/About"

// Hou comment: nice job using functional components and hooks throughout your codebase!
function App() {
  
  useEffect(() => {
    // Hou comment: correct camel casing format for the function on line 13 is getArtData()
    getartData();
  }, []);
  
  const [artData, setartData] = useState([]);
  const [error, setError] = useState('')
  
  function getartData() {    
    const url = `https://api.harvardartmuseums.org/object?classification=Paintings&sort=random&size=8&hasimage=1&apikey=${process.env.REACT_APP_KEY}`
        
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setartData(response.records);
      })
      .catch(function(error) {
        setError(error);
      })
    }

    // Hou comment: remove this trivial click handler  
    function handleClick() {
      console.log('click');
    }
    
    
    
  return (
    <div className='wrapper'>
      <main>
        <Route path="/" exact={true} render={() => {
          return (
            <>
              {/* Hou comment: consider creating a reusable Header component that you can use for every page instead of repeating the code for every page */}
              <a href=''>
                <h1 className="header" onClick={getartData}>"Harvard Art"</h1>
              </a>
              <Link to="/about">
                <h2 className="about">about</h2>
              </Link>
              <Arts artData={artData} error={error}/>
            </>
          )
        }} />  
        <Route 
        path="/Art/:title" 
        render={(routerProps) => {
          return (
            <>
              {/* Hou comment: consider creating a reusable Header component that you can use for every page instead of repeating the code for every page */}  
              <Link to="/">
                <h1 className="header" id="artHeader">"Harvard Art"</h1>
              </Link>
              <Art 
                match={routerProps.match}
                artData={artData}
                handleClick={handleClick}
              />
            </>
          );
        }} />
        <Route path="/about" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">"Harvard Art"</h1>
              </Link>
              <About />
            </>
          )
        }}
        />
      </main>
  </div>
  );
}

export default App;

/*

URL:
for basic 10 paintings:
`https://api.harvardartmuseums.org/object?classification=Paintings&sort=random&hasimage=1&apikey=038ebf20-87f7-11ea-8c88-97e5b91498c3`


*/