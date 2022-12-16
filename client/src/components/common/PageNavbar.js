
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, handleLogout } from '../../helpers/auth'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function PageNavbar() {


  const navigate = useNavigate()


  return (

    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid>
        {/* logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://res.cloudinary.com/ddy4ifl5i/image/upload/v1670792872/MovieJournalLogo2_ni0gul.jpg"
            width="155px"
            height="62px"
            className="d-inline-block align-top"
            alt="Movie Journal Logo"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="justify-content-end flex-grow-1 pe-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {isAuthenticated() ?
              <>
                {/* <Nav.Link as={Link} to="/bread/new">Add Bread</Nav.Link> */}
                <span className='nav-link' onClick={() => handleLogout(navigate)}>Logout</span>
              </>
              :
              <>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            }
            <Nav.Link as={Link} to="/search">Search</Nav.Link>

          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar
