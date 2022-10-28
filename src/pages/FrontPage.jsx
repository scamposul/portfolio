import React from "react";

const FrontPage = () => {
  return (
    <div className="frontPage">
      <h1>
        <i class="fa-solid fa-code"></i>
      </h1>
      <h2>Sebastián Campo Sulvarán</h2>
      <span className="webDeveloper">FRONT-END DEVELOPER</span>
      <div className="switch-button">
        <input
          type="checkbox"
          name="switch-button"
          id="switch-label"
          className="switch-button__checkbox"
        />
        <label htmlFor="switch-label" className="switch-button__label">
          <div className="icons">
            <i class="fa-solid fa-sun" id="sun"></i>
            <i class="fa-solid fa-moon" id="moon"></i>
          </div>
        </label>
        <br />
        <div className="flags">
          <div className="eng">
            <span class="fi fi-gb" id="engFlag"><p className="engText">ENG</p></span>
          </div>
          <div className="esp">
            <span class="fi fi-co" id="espFlag"><p className="espText">ESP</p></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
