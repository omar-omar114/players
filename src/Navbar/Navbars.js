import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css'


function Navbars() {
  



  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: '#ffc720' }} href="#">Players-app</Navbar.Brand>
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ Height: '50px' }}
            
          >
            <Nav.Link style={{ color: 'white' }} href="#action1">Home</Nav.Link>
         
          </Nav>
          <Form className="d-flex">
            <div className='search-bar'>
              <Form.Control
                style={{ width: '400px'}}
                type="search"
                placeholder="Find a player"
                className="me-2"
                aria-label="Search"
              />
              <div className='div-icon'><i className=" search-icon fa-solid fa-magnifying-glass"></i></div>
            </div>
            
            
            <Button variant="warning" style={{ width: '150px' }}> SIGNIN <i className="fa-solid fa-right-to-bracket"></i></Button>
          </Form>
        
      </Container>
    </Navbar>
  );
}

export default Navbars;