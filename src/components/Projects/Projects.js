import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import starkweb from "../../Assets/Projects/starkweb.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
import particles from "../../Assets/Projects/particlesjs.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={particles}
              isBlog={false}
              title="Particles.Js"
              description="A demo project which shows how you can also use particles.js which is a javascript library this library is mainly used for creating backgrounds of hero sections of websites have a look and don't forget to give a star on github."
              link="https://github.com/Designatory/Particles.js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starkweb}
              isBlog={false}
              title="StarkWeb"
              description="Recently I hhave created a website for my friend using different different frameworks like bootstrap and other coding languages like HTML, CSS and JavaScript. You can check that website by clicking below and also don't forget to give a star."
              link="https://github.com/Designatory/starkweb"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
