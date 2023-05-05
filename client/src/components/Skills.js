import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { DiBootstrap, DiCss3, DiDjango, DiGithubBadge, DiHtml5, DiJsBadge, DiMongodb, DiNodejsSmall, DiNpm, DiPostgresql, DiPython, DiReact, DiSass, DiTrello } from 'react-icons/di'
import { SiExpress, SiInsomnia, SiTypescript } from 'react-icons/si'
import { AiOutlineApi, AiOutlineTeam, AiOutlineUnlock, AiOutlineComment } from 'react-icons/ai'
import { VscVersions } from 'react-icons/vsc'
import { GiWireframeGlobe, GiTeamIdea } from 'react-icons/gi'
import { GrCircleAlert } from 'react-icons/gr'
import { RiTeamLine } from 'react-icons/ri'
import { TbWritingSign } from 'react-icons/tb'

import Mongoose from '../images/Mongoose.js.svg'

const Skills = () => {

  return (
    <section className='content-block' id='skills'>

      <div className='skills-h2-container'>
        <h2>.skills</h2>
      </div>

      <Container className='skills-content-container'>
        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Front-end:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiReact size='100px'></DiReact>
              <p>React</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiJsBadge size='100px'></DiJsBadge>
              <p>JavaScript</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiHtml5 size='100px'></DiHtml5>
              <p>HTML</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiCss3 size='100px'></DiCss3>
              <p>CSS</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiSass size='100px'></DiSass>
              <p>Sass</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiBootstrap size='100px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Back-end:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiPython size='100px'></DiPython>
              <p>Python</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiDjango size='100px'></DiDjango>
              <p>Django</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiPostgresql size='100px'></DiPostgresql>
              <p>PostgreSQL</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiMongodb size='100px'></DiMongodb>
              <p>MongoDB</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <Image src={Mongoose} size='100px' />
              <p>Mongoose.js</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <SiExpress size='100px'></SiExpress>
              <p>Express.js</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiNodejsSmall size='100px'></DiNodejsSmall>
              <p>Node.js</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Other:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <SiInsomnia size='100px'></SiInsomnia>
              <p>Insomnia</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <AiOutlineApi size='100px'></AiOutlineApi>
              <p>RESTful APIs</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiGithubBadge size='100px'></DiGithubBadge>
              <p>GitHub</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <VscVersions size='100px'></VscVersions>
              <p>Version control</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <AiOutlineTeam size='100px'></AiOutlineTeam>
              <p>Pair-programming</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <AiOutlineUnlock size='100px'></AiOutlineUnlock>
              <p>Authentications & permissions</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <GiWireframeGlobe size='100px'></GiWireframeGlobe>
              <p>Wireframing</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Soft skills:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <DiTrello size='100px'></DiTrello>
              <p>Project management</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <GrCircleAlert size='100px'></GrCircleAlert>
              <p>Problem solving</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <RiTeamLine size='100px'></RiTeamLine>
              <p>Leadership</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <AiOutlineComment size='100px'></AiOutlineComment>
              <p>Communication</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <GiTeamIdea size='100px'></GiTeamIdea>
              <p>Collaboration</p>
            </Col>

            <Col xs={4} sm={4} md={2} lg={2} xl={2}>
              <TbWritingSign size='100px'></TbWritingSign>
              <p>Creative writing</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Currently learning:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col>
              <SiTypescript size='100px'></SiTypescript>
              <p>Bootstrap</p>
            </Col>

          </Row>

        </Row>

      </Container>



    </section>
  )
}

export default Skills