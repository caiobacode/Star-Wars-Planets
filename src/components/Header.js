import React from "react";
import '../css/Header.css'
import gitHubImg from '../Media/github-purple.png'
import linkedinImg from '../Media/linkedin.png'


function Header() {
  return (
    <div className="header">
      <button
          className="github-btn-header"
          type="button"
          onClick={() => window.open('https://github.com/caiobacode/')} 
          >
            <img className="github-img-header" alt="github-img" src={gitHubImg}/>
        </button>
        <button
          className="linkedin-btn-header"
          type="button"
          onClick={() => window.open('https://www.linkedin.com/in/caio-oliveira-de-sousa/')} 
          >
            <img 
              className="linkedin-img-header"
              alt="linkedin-img" 
              src={linkedinImg}
              />
          </button>
      <div className="title-div">
      <h1 className="star-wars-title">Star Wars Planets</h1>
      </div>
    </div>
  )
}

export default Header