import React from "react";
import "../styles/projects.css";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

const Projects = ({ theme }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="carousel" id="projects" data-theme={theme}>
      <h2>{t("projects.projects")}</h2>
      <Carousel className="projects" slide="true">
        <Carousel.Item className="item1">
          <img
            className="d-block w-100"
            src="src\images\ecommerce.png"
            alt="First slide"
            width="80%"
          />
          <Carousel.Caption className="ecommerce">
            <h3>
              <a
                href="https://scampodevecommerce.netlify.app/"
                className="projectTitle"
              >
                eCommerce
              </a>
            </h3>
            <h4>React | Redux | React Router | Bootstrap</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item2">
          <img
            className="d-block w-100"
            src="src\images\pokedex.png"
            alt="Second slide"
            width="80%"
          />
          <Carousel.Caption className="pokedex">
            <h3><a href="https://scpokedex.netlify.app" className="projectTitle">Pokedex</a></h3>
            <h4>React | Redux | React Router | Axios</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item3">
          <img
            className="d-block w-100"
            src="src\images\weatherApp.png"
            alt="Third slide"
            width="80%"
          />
          <Carousel.Caption className="weatherApp">
            <h3><a href="https://scpokedex.netlify.app" className="projectTitle">Weather App</a></h3>
            <h4>React | Hooks | {t("projects.api-consumption")} | Axios</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item4">
          <img
            className="d-block w-100"
            src="src\images\rmapi.png"
            alt="Fourth slide"
            width="80%"
          />
          <Carousel.Caption className="rmapi">
            <h3><a href="https://scampodevrm.netlify.app" className="projectTitle">Rick and Morty Wiki</a></h3>
            <h4>React | Hooks | {t("projects.api-consumption")} | Axios</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Projects;
