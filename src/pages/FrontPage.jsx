import React from "react";
import { useTranslation } from "react-i18next";

const FrontPage = ({ theme, switchTheme }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="frontPage" id="home" data-theme={theme}>
      <h1>
        <i class="fa-solid fa-code"></i>
      </h1>
      <h2>Sebastián Campo Sulvarán</h2>
      <span className="webDeveloper">{t("fp.fedev")}</span>
      <div className="switch-button">
        <input
          type="checkbox"
          name="switch-button"
          id="switch-label"
          className="switch-button__checkbox"
          onClick={switchTheme}
        />
        <label htmlFor="switch-label" className="switch-button__label">
          <div className="icons">
            <i class="fa-solid fa-moon" id="moon"></i>
            <i class="fa-solid fa-sun" id="sun"></i>
          </div>
        </label>
        <br />
        <div className="flags">
          <div className="eng">
            <span class="fi fi-gb" id="engFlag">
              <p className="engText" onClick={() => i18n.changeLanguage("en")}>
                ENG
              </p>
            </span>
          </div>
          <div className="esp">
            <span class="fi fi-co" id="espFlag">
              <p className="espText" onClick={() => i18n.changeLanguage("es")}>
                ESP
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontPage;
