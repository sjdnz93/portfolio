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
            <Link className='nav-link' activeClass="active" to="hero" spy={true} smooth={true} offset={-106} duration={600}>Hero</Link>
            <Link className='nav-link' activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={600}>About</Link>
            <Link className='nav-link' activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={600}>Skills</Link>
            <Link className='nav-link' activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={600}>Projects</Link>
            <Link className='nav-link' activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={600}>Experience</Link>
            <Link className='nav-link' activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={600}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar