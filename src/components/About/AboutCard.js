import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaReact, FaFlutter, FaDatabase, FaCloud, FaPython } from "react-icons/fa";
import { SiDjango, SiNodedotjs, SiSpringBoot } from "react-icons/si";

const aboutCardStyles = `
  . quote-card-view {
    border: none;
    background: linear-gradient(135deg, rgba(155, 89, 182, 0.05) 0%, rgba(155, 89, 182, 0.02) 100%);
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-left: 5px solid #b359b6;
    transition: all 0.3s ease;
  }

  .quote-card-view:hover {
    box-shadow: 0 12px 30px rgba(155, 89, 182, 0.15);
    transform: translateY(-5px);
  }

  .quote-card-view . card-body {
    padding: 35px;
  }

  . quote-card-view .blockquote {
    font-size: 1em;
    line-height: 1.8;
    color: #333;
  }

  .quote-card-view p {
    margin-bottom: 15px;
    text-align: justify;
  }

  .purple {
    color: #b359b6;
    font-weight: 600;
  }

  /* Section Technical Skills */
  .skills-section {
    background: linear-gradient(135deg, rgba(155, 89, 182, 0.08) 0%, transparent 100%);
    padding: 25px;
    border-radius: 15px;
    margin: 20px 0;
    border-left: 4px solid #b359b6;
  }

  .skills-section-title {
    font-weight: 700;
    font-size: 1.15em;
    color: #333;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .skills-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skills-list li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(155, 89, 182, 0.1);
    display: flex;
    align-items: flex-start;
    gap: 12px;
    transition: all 0.3s ease;
  }

  .skills-list li:last-child {
    border-bottom: none;
  }

  .skills-list li:hover {
    padding-left: 10px;
    color: #b359b6;
  }

  .skill-category {
    font-weight: 600;
    color: #b359b6;
    min-width: 90px;
  }

  . skill-content {
    color: #555;
    flex: 1;
  }

  /* Section Professional Interests */
  .interests-section {
    background: linear-gradient(135deg, rgba(100, 200, 255, 0.08) 0%, transparent 100%);
    padding: 25px;
    border-radius: 15px;
    margin: 20px 0;
    border-left: 4px solid #64c8ff;
  }

  . interests-section-title {
    font-weight: 700;
    font-size: 1. 15em;
    color: #333;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  . interests-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  . interests-list li {
    padding: 12px 15px;
    background: white;
    border-radius: 10px;
    border: 1px solid rgba(100, 200, 255, 0.2);
    transition: all 0.3s ease;
    text-align: center;
    font-weight: 500;
    color: #555;
  }

  .interests-list li:hover {
    background: linear-gradient(135deg, rgba(100, 200, 255, 0.1) 0%, transparent 100%);
    border-color: #64c8ff;
    color: #64c8ff;
    transform: translateY(-3px);
  }

  /* Section Activities */
  .activities-section {
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, transparent 100%);
    padding: 25px;
    border-radius: 15px;
    margin-top: 20px;
    border-left: 4px solid #4caf50;
  }

  .activities-title {
    font-weight: 700;
    font-size: 1.15em;
    color: #333;
    margin-bottom: 15px;
  }

  .activities-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .about-activity {
    padding: 10px 0;
    display: flex;
    align-items: center;
    gap: 12px;
    color: #555;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(76, 175, 80, 0.1);
  }

  .about-activity:last-child {
    border-bottom: none;
  }

  .about-activity:hover {
    padding-left: 10px;
    color: #4caf50;
    font-weight: 500;
  }

  . about-activity svg {
    color:rgb(255, 255, 255);
    flex-shrink: 0;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .quote-card-view . card-body {
      padding: 25px;
    }

    . interests-list {
      grid-template-columns: 1fr;
    }

    .skills-section,
    .interests-section,
    .activities-section {
      padding: 20px;
    }
  }
`;

function AboutCard() {
  return (
    <>
      <style>{aboutCardStyles}</style>
      <Card className="quote-card-view">
        <Card. Body>
          <blockquote className="blockquote mb-0">
            {/* Introduction */}
            <p>
              Hi Everyone, I am <span className="purple">Mbarek Oussama </span>
              from <span className="purple">Sousse, Tunisia. </span>
            </p>

            <p>
              Computer Science student at the Faculty of Sciences of Monastir, 
              passionate about web development, mobile applications, and innovative technologies. 
            </p>

            <p>
              Motivated Software Engineer who transforms ideas into reality using code, 
              with expertise in:
            </p>

            {/* Technical Skills Section */}
            <div className="skills-section">
              <div className="skills-section-title">
                <strong> Technical Skills</strong>
              </div>
              <ul className="skills-list">
                <li>
                  <span className="skill-category">Frontend:</span>
                  <span className="skill-content">React. js, Flutter, HTML5, CSS3, JavaScript</span>
                </li>
                <li>
                  <span className="skill-category">Backend:</span>
                  <span className="skill-content">Django, Node.js, Spring Boot, REST API</span>
                </li>
                <li>
                  <span className="skill-category">Mobile:</span>
                  <span className="skill-content">Flutter for cross-platform applications</span>
                </li>
                <li>
                  <span className="skill-category">Cloud:</span>
                  <span className="skill-content">AWS (EC2, CloudFormation)</span>
                </li>
                <li>
                  <span className="skill-category">Databases:</span>
                  <span className="skill-content">MySQL, PostgreSQL, MongoDB, SQLite</span>
                </li>
              </ul>
            </div>

            {/* Professional Interests Section */}
            <div className="interests-section">
              <div className="interests-section-title">
                <strong>Professional Interests</strong>
              </div>
              <ul className="interests-list">
                <li> Web & Mobile Development</li>
                <li>Artificial Intelligence</li>
                <li>Cloud Computing & DevOps</li>
                <li>Technological Innovation</li>
                <li>Collaborative Problem-Solving</li>
              </ul>
            </div>

            {/* Activities Section */}
            <div className="activities-section">
              <p className="activities-title">
                Apart from coding, some other activities that I love to do! 
              </p>
              <ul className="activities-list">
                <li className="about-activity">
                  <ImPointRight /> Playing Games
                </li>
                <li className="about-activity">
                  <ImPointRight /> Writing Tech Blogs
                </li>
                <li className="about-activity">
                  <ImPointRight /> Travelling
                </li>
                <li className="about-activity">
                  <ImPointRight /> Watching Movies
                </li>
              </ul>
            </div>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}

export default AboutCard;