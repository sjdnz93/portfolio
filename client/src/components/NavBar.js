import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-scroll'
import Image from 'react-bootstrap/Image'
import logo from '../images/icons/logo-no-background.png'




const NavBar = () => {

  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Container>
        <Navbar.Toggle aria-controls='crate-nav' />
        <Navbar.Collapse id='site-nav' className='justify-content-end'>
          <Nav>
            <Link className='nav-link' activeClassName="active" to="about" spy={true} smooth={true} offset={-50} duration={600}>about</Link>
            <Link className='nav-link' activeClassName="active" to="skills" spy={true} smooth={true} offset={-50} duration={600}>skills</Link>
            <Link className='nav-link' activeClassName="active" to="hero" spy={true} smooth={true} offset={-106} duration={600}><Image src={logo} alt='logo' id='logo-nav'></Image></Link>
            <Link className='nav-link' activeClassName="active" to="projects" spy={true} smooth={true} offset={-50} duration={600}>projects</Link>
            <Link className='nav-link' activeClassName="active" to="footer" spy={true} smooth={true} offset={-50} duration={600}>contact</Link>
            {/* <Link className='nav-link' activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={600}>Experience</Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar