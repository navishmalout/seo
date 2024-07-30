import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const cx = 'd7d61cf29d8334b3f'; // Replace with your CSE ID
    const gcseScript = document.createElement('script');
    gcseScript.type = 'text/javascript';
    gcseScript.async = true;
    gcseScript.src = `https://cse.google.com/cse.js?cx=${cx}`;
    document.body.appendChild(gcseScript);
  }, []);

  const performSearch = (event) => {
    event.preventDefault();

    const keyword = event.target.keyword.value;
    const country = event.target.country.value;
    const language = event.target.language.value;

    // Constructing the search query
    const query = `${keyword} language:${language} country:${country}`;

    // Update the CSE query
    const cseInput = document.querySelector('.gsc-input');
    if (cseInput) {
      cseInput.value = query;
      const searchButton = document.querySelector('.gsc-search-button');
      if (searchButton) {
          searchButton.click();
      }
    }
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      <div>
        <h1>Google Custom Search Form</h1>
        <form onSubmit={performSearch}>
          <label htmlFor="country">Select Country: </label>
          <select id="country" name="country">
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
            {/* Add more countries as needed */}
          </select><br /><br />

          <label htmlFor="language">Select Language: </label>
          <select id="language" name="language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            {/* Add more languages as needed */}
          </select><br /><br />

          <label htmlFor="keyword">Enter Keyword: </label>
          <input type="text" id="keyword" name="keyword" required /><br /><br />

          <button type="submit">Search</button>
        </form>
      </div>
      <div class="gcse-searchbox"></div>

      <div style={{ minHeight: "500px", height: "auto"}}>

        <div class="gcse-searchresults-only"></div>
      </div>

       <iframe id="if1" width="100%" height="254" style={{visibility:"visible"}} src="https://www.google.ca/search?q=addidas&glp=1&adtest=on&hl=EN&tci=g:2124&uule=w+CAIQICIGQ2FuYWRh&safe=images&safe=high&adtest-useragent=Mozilla/5.0%20(Linux;%20U;%20Android-4.0.3;%20en-us;%20Xoom%20Build/IML77)%20AppleWebKit/535.7%20(KHTML,%20like%20Gecko)%20CrMo/16.0.912.75%20Safari/535.7#"></iframe> 

    </div>
  );
}

export default App;