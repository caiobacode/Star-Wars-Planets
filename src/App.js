import React from 'react';
import './App.css';
import Prov from './context/Mycontext';
import Table from './components/Table';
import Filters from './components/Filters';
import Header from './components/Header';
import gitHubImg from './Media/github-purple.png'
import linkedinImg from './Media/linkedin.png'



function App() {
  return (
    <Prov>
      <div className='mobile-div'>
        <p className='mobile-text'>Oops, this application is only available for devices with a width greater than 1000 pixels</p>
        <div className="social-div">
        <button
          className="github-btn"
          type="button"
          onClick={() => window.open('https://github.com/caiobacode/')} 
          >
            <img className="github-img" alt="github-img" src={gitHubImg}/>
        </button>
          <button
          className="linkedin-btn"
          type="button"
          onClick={() => window.open('https://www.linkedin.com/in/caio-oliveira-de-sousa/')} 
          >
            <img 
              className="linkedin-img"
              alt="linkedin-img" 
              src={linkedinImg}
              />
          </button>
      </div>
      </div>
      <Header />
      <Filters />
      <Table />
    </Prov>
  );
}

export default App;
