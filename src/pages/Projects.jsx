import React from "react";
import "../styles/projects.css";
import Carousel from "react-bootstrap/Carousel";

const Projects = () => {
  return (
    <div className="carousel">
      <h2>PROJECTS</h2>
      <Carousel className="projects" slide="true">
        <Carousel.Item className="item1">
          <img
            className="d-block w-100"
            src="src\images\ecommerce.png"
            alt="First slide"
            width="80%"
          />
          <Carousel.Caption className="ecommerce">
            <h3>eCommerce</h3>
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
            <h3>Pokedex</h3>
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
            <h3>Weather App</h3>
            <h4>React | Hooks | API consumption | Axios</h4>
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
            <h3>Rick and Morty Wiki</h3>
            <h4>React | Hooks | API consumption | Axios</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
