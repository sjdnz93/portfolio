import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-scroll'




const NavBar = () => {

  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Container>
        <Navbar.Toggle aria-controls='crate-nav' />
        <Navbar.Collapse id='crate-nav' className='justify-content-end'>
          <Nav>
            <Link activeClass="active" to="hero" spy={true} smooth={true} offset={50} duration={500}>Hero</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar