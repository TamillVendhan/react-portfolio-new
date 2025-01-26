import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import SkillSet from "./SkillSet";

function About() {
  return (
    <Container fluid className="about-section" name="skillset">
      <Particle />
      <Container >
        <SkillSet/>
      </Container>
    </Container>
  );
}

export default About;
