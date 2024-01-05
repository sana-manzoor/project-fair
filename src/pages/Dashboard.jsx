import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Myprojects from '../Components/Myprojects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <div>
      <Header inDashboard={true}/>
      <Row style={{marginTop:'150px',marginBottom:'20px'}}>
          <Col sm={12} md={8}>
          <h1 className='mb-3'>Welcome <span style={{color:'#45888A'}} className='fw-bold'>User</span></h1>
          <Myprojects/>
          </Col>
          <Col sm={12} md={4}>
          <Profile/>
          </Col>
      </Row>
    </div>
  )
}

export default Dashboard