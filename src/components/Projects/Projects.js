import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import omnifood from "../../Assets/Projects/omnifood.png";
import eat_n_split from "../../Assets/Projects/eat_n_split.png";
import worldwise from "../../Assets/Projects/worldwise.png";
import usepopcorn from "../../Assets/Projects/usepopcorn.png";
import faraway from "../../Assets/Projects/faraway.png";
import pizzamenu from "../../Assets/Projects/pizzamenu.png";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Projects() {
  return (
    <Container fluid className="project-section" name="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldwise}
              isBlog={false}
              title="Worldwise"
              description="WorldWise is a website where you can keep notes about the city or, to keep track of all the places on the world map that you have visited. This is a test application running on mock Api. This project helped me to get familiar with the Context Api, React Query and different usecases of React Router Dom v6 like putting app state in url."
              ghLink="https://github.com/TamillVendhan/Worldwise"
              demoLink="https://worldwise-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eat_n_split}
              isBlog={false}
              title="Eat & Split"
              description="React app to split bills with your friends easily and find out Who owes whom and how much?"
              ghLink="https://github.com/TamillVendhan/eat-and-split"
              demoLink="https://eat-and-split-tamil.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usepopcorn}
              isBlog={false}
              title="UsePopcorn"
              description="UsePopcorn is a React application that helps users to discover movies, rate them, and maintain a personalized list of watched films. Using the Open Movie Database API, user can access comprehensive movie details such as genre, cast, director, ratings, and more. This application is an educational project as part of a course offered by Jonas Schmedtmann."
              ghLink="https://github.com/TamillVendhan/usepopcorn"
              demoLink="https://usepopcorn-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faraway}
              isBlog={false}
              title="Far Away"
              description="Far Away is a travel list website that allows you to create and manage your packing list for your upcoming trips. With Far Away, you can easily add items to your list, delete items, mark items as packed, delete all items at once, and sort the list based on description and packed status. This project is built using React, a popular JavaScript library for building user interfaces."
              ghLink="https://github.com/TamillVendhan/Far-away"
              demoLink="https://travel-list-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzamenu}
              isBlog={false}
              title="Pizzamenu"
              description="The Pizza Menu App is a simple React.js application that displays a static menu for a pizza restaurant. It showcases a variety of pizzas along with their descriptions, ingredients, and prices."
              ghLink="https://github.com/TamillVendhan/pizza-menu"
              demoLink="https://pizza-menu-tamil.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omnifood}
              isBlog={false}
              title="Omnifood"
              description="Welcome to the Omni-Food project repository! This is a responsive food delivery landing page created using HTML and CSS. The purpose of this project is to showcase my front-end web development skills and provide an example of a visually appealing and interactive website."
              ghLink="https://github.com/TamillVendhan/Omnifood-"
              demoLink="https://omnifood-tamilvendhan.netlify.app/"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TamillVendhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/tamilvendhan-murugesan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tamilvendhanmurugesan789@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
