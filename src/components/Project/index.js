import React from "react";
import { Row, Col, Container, Image, } from "react-bootstrap";
import { FaGithub, FaKeyboard } from "react-icons/fa";

function Project() {
  
  /* const project = [
    {
      name: "Typing Test",
      caption: "Improving your typing skills with custom speed and difficulty",
      url: "https://amhum.github.io/typingTest/",
      github: "https://github.com/AmHum/typingTest",
      description:
        "This app was designed to test my javascript skills and to provide a useful application for the average developer. ",
    },
    {
      name: "The Matrix Experience",
      caption:
        "The concept was to build the basis for which a gaming and virtual reality experience will be built.",
      url: "https://the-matrix-experience.herokuapp.com/",
      github: "https://github.com/AmHum/The-Matrix-Experience",
      description:
        "The concept was to build the basis for which a gaming and virtual reality experience will be built. We created the 'pip-boy' that will guide the user through the gaming experience, making decisions and exploring a new world",
    },
    {
      name: "Pard's EQ React SPA",
      caption:
        "A rebuilt e-commerce site for a local business",
      url: "https://pards-eq.herokuapp.com/",
      github: "https://github.com/AmHum/pards-react",
      description:
        "The magic is in the back-end conversion software. This site allows for the company to upload an extremely large number of products, parsing them from CSV and uploading the data to the mongo database. ",
    },
  ]; */

  return (
    <Container fluid="md" className="my-5">
      <Row className="align-items-center">
        <Col sm={4} className="p-5">
          <Image
            fluid
            src={require(`.//pards_products.png`)}
            alt="Aaron Humelsine"
          />
        </Col>
        <Col sm={8} className="p-5 mb-5">
          <h1 id="about">Pard's EQ React SPA</h1>
          <div>
          &nbsp;&nbsp;&nbsp;
          <p className="">A rebuilt e-commerce site for a local business.</p>
            <p>
            The magic is in the back-end conversion software. This site allows for the company to upload an extremely large number of products, 
            parsing them from CSV and uploading the data to the mongo database. 
            </p>
            &nbsp;&nbsp;&nbsp;
            <Row>
              <Col><a
              className="m-3 icons"
              href="https://github.com/AmHum/pards-react"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={25} />GitHub
            </a>
            <a
                  className="m-3 icons"
                  href="https://pards-eq.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaKeyboard size={25} />Deployed Page
                </a>
            </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col sm={8} className="p-5 mb-5">
          <h1 id="about">The Matrix Experience</h1>
          <div>
          &nbsp;&nbsp;&nbsp;
          <p className="align-center">The concept was to build the basis for which a gaming and virtual reality experience will be built.</p>
            <p>
            The basis for which a gaming and virtual reality experience will be built. We created the 'pip-boy'
             that will guide the user through the gaming experience, making decisions and exploring a new world.
            </p>
            &nbsp;&nbsp;&nbsp;
            <Row>
              <Col>
                <a
                  className="m-3 icons"
                  href="https://github.com/AmHum/The-Matrix-Experience"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={25} />GitHub
                </a>
                <a
                  className="m-3 icons"
                  href="https://github.com/AmHum/typingTest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaKeyboard size={25} />Deployed Page
                </a>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={4} className="p-5">
          <Image
            fluid
            src={require(`.//matrix_home.png`)}
            alt="Aaron Humelsine"
          />
        </Col>
      </Row>
      <Row className="align-items-center">
      <Col sm={4} className="p-5">
          <Image
            fluid
            src={require(`.//Ka-chow_Typing_Test.png`)}
            alt="Aaron Humelsine"
          />
        </Col>
        <Col sm={8} className="p-5 mb-5">
          <h1 id="about">KA-Chow Typing Test</h1>
          <div>
          &nbsp;&nbsp;&nbsp;
          <p className="align-center">Improving your typing skills with custom speed and difficulty.</p>
            <p>
            This app was designed to test my javascript skills and to provide a useful application for the average developer. Multiple setting and testing types allow the user to continuously improve their typing skills.
            </p>
            &nbsp;&nbsp;&nbsp;
            <Row>
              <Col>
                <a
                  className="m-3 icons"
                  href="https://github.com/AmHum/typingTest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={25} />GitHub
                </a>
                <a
                  className="m-3 icons"
                  href="https://github.com/AmHum/typingTest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaKeyboard size={25} />Deployed Page
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
  /* return (
    // eslint-disable-next-line react/jsx-no-undef
    <Container fluid="md" className="mb-5">
      <h1 id="portfolio" className="mt-5">
        Recent Projects
      </h1>
    
      <Row
        key={project.name + "-project"}
        xs={1}
        sm={2}
        className="g-0 mx-3 mt-1"
      >
        <Col className="mx-0 my-4">
          <Card>
            <Card.Img
              variant="top"
              src={require(`../../assets/small/${project.name}.jpg`)}
              alt={project.name}
              style={{ cursor: "pointer" }}
            />
          </Card>
        </Col>
        <Col className="my-auto px-3">
          <Card border="light">
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.caption}</Card.Text>
              {project}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> 
  ); */  
}
export default Project;