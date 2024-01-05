import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header(inDashboard) {
  return (
    <Navbar className="position-fixed top-0 w-100" style={{backgroundColor:'#45888A',zIndex:1}}>
    <Container >
        <Link to={'/'} style={{textDecoration:'none'}}>
      <Navbar.Brand style={{fontSize:'28px'}}>
      <i className="fa-solid fa-diagram-project mx-3 "></i>
      {' '}
        Project Fair
      </Navbar.Brand>
      </Link>
      {
        inDashboard&&
        <div className='ms-auto btn text-light text-center' style={{backgroundColor:'black'}}>
          Log Out {' '}
          <i className="fa-solid fa-right-long"></i>
        </div>
      }
    </Container>
  </Navbar>
  )
}

export default Header