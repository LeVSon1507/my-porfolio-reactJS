import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">StrawMan - Le Van Son </span>
            from <span className="purple"> Danang, VietNam.</span>
            <br />I am a junior developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tea
            </li>
            <li className="about-activity">
              <ImPointRight /> Bartending
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">StrawMan - Le V. Son</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
