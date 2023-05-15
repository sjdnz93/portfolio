import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { DiBootstrap, DiCss3, DiDjango, DiGithubBadge, DiHtml5, DiJsBadge, DiMongodb, DiNodejsSmall, DiNpm, DiPostgresql, DiPython, DiReact, DiSass, DiTrello } from 'react-icons/di'
import { SiExpress, SiInsomnia, SiTypescript } from 'react-icons/si'
import { GrCircleAlert } from 'react-icons/gr'
import { RiTeamLine } from 'react-icons/ri'
import { AiOutlineComment } from 'react-icons/ai'
import { GiTeamIdea } from 'react-icons/gi'
import { TbWritingSign } from 'react-icons/tb'

import Mongoose from '../images/Mongoose.js.svg'


const Skills = () => {

  return (
    <section className='content-block' id='skills'>
      


      <div className='skills-h2-container'>
        <h2>technical skills</h2>
      </div>

      <Container className='skills-content-container'>
        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Front-end:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiReact size='50px'></DiReact>
              <p>React</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiJsBadge size='50px'></DiJsBadge>
              <p>JavaScript</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiHtml5 size='50px'></DiHtml5>
              <p>HTML</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiCss3 size='50px'></DiCss3>
              <p>CSS</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiSass size='50px'></DiSass>
              <p>Sass</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiBootstrap size='50px'></DiBootstrap>
              <p>Bootstrap</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Back-end:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiPython size='50px'></DiPython>
              <p>Python</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiDjango size='50px'></DiDjango>
              <p>Django</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiPostgresql size='50px'></DiPostgresql>
              <p>PostgreSQL</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiMongodb size='50px'></DiMongodb>
              <p>MongoDB</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Image src={Mongoose} size='50px' />
              <p>Mongoose.js</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <SiExpress size='50px'></SiExpress>
              <p>Express.js</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiNodejsSmall size='50px'></DiNodejsSmall>
              <p>Node.js</p>
            </Col>

          </Row>

        </Row>

        {/* <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Other:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <SiInsomnia size='50px'></SiInsomnia>
              <p>Insomnia</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <AiOutlineApi size='50px'></AiOutlineApi>
              <p>RESTful APIs</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiGithubBadge size='50px'></DiGithubBadge>
              <p>GitHub</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <VscVersions size='50px'></VscVersions>
              <p>Version control</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <AiOutlineTeam size='50px'></AiOutlineTeam>
              <p>Pair-programming</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <AiOutlineUnlock size='50px'></AiOutlineUnlock>
              <p>Authentications & permissions</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <GiWireframeGlobe size='50px'></GiWireframeGlobe>
              <p>Wireframing</p>
            </Col>

          </Row>

        </Row> */}

        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Soft skills:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <DiTrello size='50px'></DiTrello>
              <p>Project management</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <GrCircleAlert size='50px'></GrCircleAlert>
              <p>Problem solving</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <RiTeamLine size='50px'></RiTeamLine>
              <p>Leadership</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <AiOutlineComment size='50px'></AiOutlineComment>
              <p>Communication</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <GiTeamIdea size='50px'></GiTeamIdea>
              <p>Collaboration</p>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <TbWritingSign size='50px'></TbWritingSign>
              <p>Creative writing</p>
            </Col>

          </Row>

        </Row>

        <Row className='skills-row'>

          <Col className='h3-col'>
            <h3>Currently learning:</h3>
          </Col>

          <Row className='skills-row-wrapper'>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <SiTypescript size='50px'></SiTypescript>
              <p>TypeScript</p>
            </Col>

          </Row>

        </Row>

      </Container>



    </section>
  )
}

export default Skills