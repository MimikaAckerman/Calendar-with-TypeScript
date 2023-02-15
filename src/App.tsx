import React from 'react';
import '../src/style/style.css';
import  Calendar  from './components/Calendar';

function App() {
 const result = new Date().valueOf()
 console.log(result);
 


  return (
   <>
   <div className="App">
    <h1 style={{textAlign:"center"}}>Calendar Typescript</h1>
  <Calendar timeStamp ={1676393978728}/>
  </div>

  
   </>
  );
}

export default App;
