import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { DiBootstrap, DiCss3, DiDjango, DiGithubBadge, DiHtml5, DiJsBadge, DiMongodb, DiNodejsSmall, DiNpm, DiPostgresql, DiPython, DiReact, DiSass } from 'react-icons/di'
import { SiExpress, SiInsomnia, SiTypescript } from 'react-icons/si'

const Skills = () => {

  return (
    <section className='content-block' id='skills'>

      <div className='skills-h2-container'>
        <h2>.skills</h2>
      </div>

      <Container className='skills-content-container'>
        <Row className='skills-row'>

          <Col>
            <h3>Front-end:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col>
            <h3>Back-end:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col>
            <h3>Soft skills:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col>
            <h3>Currently learning:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

            <Col>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

          </Row>

        </Row>

      </Container>



    </section>
  )
}

export default Skills