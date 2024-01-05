import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <div style={{height:'400px',width:'100%',backgroundColor:'black',color:'white', overflowY:'hidden'}}>
    <Row className='p-5'>
      <Col md='4'>
      <h4 className='text-center text-light'  style={{overflowY:'hidden'}}><i className="fa-solid fa-diagram-project mx-3 " style={{color: 'white'}}></i>PROJECT FAIR</h4><br />
      <p style={{textAlign:'justify',color:'white'}}>A project management application is a software tool for tracking and managing projects. These applications are designed to help project managers plan, coordinate, and execute tasks that need to be completed to make progress on the project at hand.Project management applications are beneficial for project managers who need to keep track of what's going on in their projects.</p>

      </Col>
      <Col md='4' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden',color:'white'}}>Links</h3>
        <Link to={'./'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Landing Page</Link>
        <Link to={'./Login'} style={{textDecoration:'none',color:'white'}}className='pt-2 pb-2'>Login</Link>
        <Link to={'./Register'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Register</Link>
        <Link to={'./Dashboard'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Dashboard</Link>
        <Link to={'./Projects'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Projects</Link>



      </Col>
      <Col md='4' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden',color:'white'}}>Guides</h3>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}} className='pt-3 pb-2'> React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}className='pt-3 pb-2'>React-Bootstrap</Link>
        <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'white'}} className='pt-3 pb-2'>Fontawesome</Link>

      </Col>
    <div>
      <br /><br />
     <p className='text-center' style={{color:'white'}}>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p> 
  </div>
    </Row>
    </div>
  </div>
    )
}

export default Footer