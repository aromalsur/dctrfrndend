import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>

<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="http://www.gifss.com/profesiones/doctores/doctor-05.gif"
              width="70"
              height="80"
              className="d-inline-block align-top"
            />{' '}
           <span style={{padding:'50px', marginTop:'100px', fontSize:'45px'}}> Hello Doctor</span> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header