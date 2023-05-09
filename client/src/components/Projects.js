import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import crate from '../images/crate.png'
import hagl from '../images/hagl.png'
import game from '../images/game-library.png'
import battleships from '../images/battleships.png'


const Projects = () => {

  return (
    <section className='content-block' id='projects'>

      <div className='projects-h2-container'>
        <h2>projects</h2>
        <p>Here&apos;s a snapshot of the projects that I worked on while I was enrolled in General Assembly&apos;s three-month Software Engineering Immersive Course. Given that I only knew some super basic HTML, CSS and JavaScript at the beginning of the course, I&apos;m pretty stoked with how these turned out, and that three months later I can now build full-stack applications from scratch.</p>
      </div>

      <Container className='projects-content-container'>
        <Row className='projects-row-wrapper'>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className='project-card'>
              {/* <div style={{ backgroundImage: `url('${crate}')` }} className="thumbnail"></div> */}
              <Card.Img variant="top" src={crate} />
              <Card.Body>
                <Card.Title>CRATE</Card.Title>
                <Card.Subtitle>Solo project - 1.5 weeks</Card.Subtitle>
                <Card.Text>Crate is a full-stack web application that allows users to catalogue their
                  physical music collections digitally. It uses React to dynamically render
                  content stored in a Postgres database, accessed through a Django API
                  constructed using the Django REST framework. Full CRUD functionality
                  allows users to follow other users, add records to the public database,
                  populate their collections and more.</Card.Text>
                <div>
                  <Card.Link href='https://crate.herokuapp.com/' target='_blank'>Check it out</Card.Link>
                </div>
                <div>
                  <Card.Link href='#' target='_blank'>Here&apos;s the ReadMe</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className='project-card'>
              {/* <div style={{ backgroundImage: `url('${hagl}')` }} className="thumbnail"></div> */}
              <Card.Img variant="top" src={hagl} />
              <Card.Body>
                <Card.Title>HAGL</Card.Title>
                <Card.Subtitle>Group project - 1.5 weeks</Card.Subtitle>
                <Card.Text>Hagl is a full-stack MERN application with full CRUD functionality. We
                  created this online marketplace for swapping &apos;junk&apos; items as a group, all
                  working across the full stack. I played an integral role in figuring out how
                  we&apos;d implement our swap logic on the back-end, and was in the driving
                  seat for most of the site&apos;s design and layout.</Card.Text>
                <div>
                  <Card.Link href='https://hagl-project-3.herokuapp.com/' target='_blank'>Check it out</Card.Link>
                </div>
                <div>
                  <Card.Link href='#' target='_blank'>Here&apos;s the ReadMe</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className='project-card'>
              {/* <div style={{ backgroundImage: `url('${game}')` }} className="thumbnail"></div> */}
              <Card.Img variant="top" src={game} />
              <Card.Body>
                <Card.Title>FREE GAME LIBRARY</Card.Title>
                <Card.Subtitle>Pair project - 2 days</Card.Subtitle>
                <Card.Text>Working in a pair, we built a React app that was powered by a third-party
                  API. Building this library of online games provided my first taste of pair
                  programming, and also helped to solidify the fundamentals of React. I&apos;m
                  now confident in using asynchronous functions to access API information
                  and then use it to render content dynamically. It also helped reinforce my
                  knowledge of props, routing, Bootstrap and SCSS.</Card.Text>
                <div>
                  <Card.Link href='https://react-game-library.netlify.app/' target='_blank'>Check it out</Card.Link>
                </div>
                <div>
                  <Card.Link href='#' target='_blank'>Here&apos;s the ReadMe</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className='project-card'>
              {/* <div style={{ backgroundImage: `url('${battleships}')` }} className="thumbnail"></div> */}
              <Card.Img variant="top" src={battleships} />
              <Card.Body>
                <Card.Title>BATTLESHIPS</Card.Title>
                <Card.Subtitle>Solo project - 1 week</Card.Subtitle>
                <Card.Text>Using a combination of JavaScript, HTML and CSS I built a reimagined
                  version of the classic board game Battleships. It was an incredibly
                  rewarding challenge that really pushed me, and which helped to deepen
                  my love of programming.</Card.Text>
                <div>
                  <Card.Link href='https://sjdnz93.github.io/battleships/' target='_blank'>Check it out</Card.Link>
                </div>
                <div>
                  <Card.Link href='#' target='_blank'>Here&apos;s the ReadMe</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

    </section>
  )
}

export default Projects