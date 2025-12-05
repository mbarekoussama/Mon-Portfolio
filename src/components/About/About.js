import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.png";
import { SKILLS, TOOLS } from "../../Constants";

const aboutStyles = `
  .about-section {
    padding: 50px 0;
  }

  .about-img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ! important;
  }

  . img-container {
    width: 100%;
    max-width: 450px;
    padding: 0 20px;
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 25px;
    aspect-ratio: 3/4;
    box-shadow: 
      0 15px 50px rgba(0, 0, 0, 0.25),
      0 0 1px rgba(155, 89, 182, 0.5);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .image-style {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 25px;
    display: block;
  }

  .img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(155, 89, 182, 0.3) 0%,
      rgba(155, 89, 182, 0.1) 50%,
      transparent 100%
    );
    border-radius: 25px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .img-wrapper:hover .image-style {
    transform: scale(1.08) rotate(2deg);
    filter: brightness(1.1);
  }

  .img-wrapper:hover .img-overlay {
    opacity: 1;
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .img-container {
    animation: slideInRight 0.8s ease-out;
  }

  @media (max-width: 768px) {
    .about-img {
      margin-top: 40px;
      order: 2;
    }

    .img-container {
      max-width: 380px;
    }

    .img-wrapper {
      aspect-ratio: 3/4;
    }
  }

  @media (max-width: 576px) {
    .img-container {
      max-width: 300px;
      padding: 0 15px;
    }

    .img-wrapper {
      border-radius: 20px;
      box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.2),
        0 0 1px rgba(155, 89, 182, 0.5);
    }

    .img-overlay {
      border-radius: 20px;
    }

    .image-style {
      border-radius: 20px;
    }
  }

  .skill-tools-wrapper {
    margin-top: 60px;
    gap: 20px;
  }

  . skill-wrapper {
    background: rgba(155, 89, 182, 0.05);
    padding: 30px;
    border-radius: 15px;
    border: 1px solid rgba(155, 89, 182, 0.15);
    transition: all 0.3s ease;
  }

  .skill-wrapper:hover {
    background: rgba(155, 89, 182, 0.1);
    border-color: rgba(155, 89, 182, 0. 3);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(155, 89, 182, 0.15);
  }

  .project-heading {
    font-size: 1.8em;
    margin-bottom: 25px;
    text-align: center;
    color: #333;
  }

  .tool-name {
    list-style: none;
    padding: 10px 0;
    margin: 10px 0;
    border-bottom: 1px solid rgba(155, 89, 182, 0.1);
    transition: all 0.3s ease;
  }

  . tool-name:hover {
    color: #764ba2;
    padding-left: 10px;
    border-color: rgba(155, 89, 182, 0.3);
  }

  .tool-name li {
    padding: 8px 0;
  }
`;

function About() {
  return (
    <>
      <style>{aboutStyles}</style>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px", alignItems: "center" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="purple">About Me</strong>
              </h1>
              <Aboutcard />
            </Col>

            <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
              <div className="img-container">
                <div className="img-wrapper">
                  <img 
                    src={developer} 
                    alt="Mbarek Oussama - Developer" 
                    className="image-style" 
                    loading="lazy"
                  />
                  <div className="img-overlay"></div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="skill-tools-wrapper">
            <Col className="skill-wrapper">
              <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
              </h1>
              {SKILLS.map((skill, index) => (
                <Techstack
                  name={skill.name}
                  initialRating={skill.initialRating}
                  key={index}
                />
              ))}
            </Col>
           
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;