import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Arts from "./components/Arts.js"
import Art from "./components/Art.js"
import About from "./components/About"

function App() {
  
  useEffect(() => {
    getartData();
    // console.log('gi');
    // console.log(images);
    
    
  }, []);
  
  const [artData, setartData] = useState([]);
  
  function getartData() {    
    const url = `https://api.harvardartmuseums.org/object?classification=Paintings&sort=random&hasimage=1&apikey=${process.env.REACT_APP_KEY}`
        
    let fetchData = async(url) => {
      let response = await fetch(url);
      let results = await response.json()
      setartData(results.records)
      console.log(results.records);
      // console.log(artData);
      
      }
      
    fetchData(url);
    // console.log(artData);
    
    }
  
    function handleClick() {
      console.log('click');
    }
    
    
    
  return (
    <div className='wrapper'>
      <main>
        <Route path="/" exact={true} render={() => {
          return (
            <>
              <a href=''><h1 className="header" onClick={getartData}>"Harvard Art"</h1></a>
              <Link to="/about">
                <h2 className="about">about</h2>
                </Link>
              <Arts artData={artData} />
            </>
          )
        }} />  
        <Route 
        path="/Art/:title" 
        render={(routerProps) => {
          return (
            <>
              <Link to="/">
                <h1 className="header">"Harvard Art"</h1>
              </Link>
              <Link to="/about">
                <h2 className="about">about</h2>
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