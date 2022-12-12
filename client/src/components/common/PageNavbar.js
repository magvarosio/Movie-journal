
import { Link, useNavigate } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function PageNavbar() {


  const navigate = useNavigate()


  return (
    <Navbar expand="sm">
      <Container>

        <Navbar.Brand as={Link} to="/">
          <img
            src="https://res.cloudinary.com/ddy4ifl5i/image/upload/v1670792872/MovieJournalLogo2_ni0gul.jpg"
            width="155px"
            height="62px"
            className="d-inline-block align-top"
            alt="Movie Journal Logo"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar