import React, { useEffect, useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm.tsx';

function App() {
  const [url,setUrl]=useState("https://www.google.ae/search?igu=1&q=Swarovski&glp=1&adtest=on&hl=EN&tci=g:2784&uule=w+CAIQICIUVW5pdGVkIEFyYWIgRW1pcmF0ZXM&safe=images&safe=high");
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ width: "20%", padding:"15px" }}>
        <SearchForm setUrl={setUrl}></SearchForm>
      </div>
      <div style={{ width: "80%", padding:"10px"  }}>
        <iframe id="if1" width="100%" height="1000" style={{ visibility: "visible", border: "1px solid lightgrey", borderRadius:"5px" }} src={url}></iframe>
      </div>

    </div>
  );
}

export default App;