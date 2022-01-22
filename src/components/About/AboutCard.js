import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naman Garg </span>
            from <span className="purple"> India.</span>
            <br />I am a student learning different programming languages ​​with passion.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX Designing
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Naman Garg</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
