import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
    <Header/>
    <div style={{marginTop:'100px'}}>
        <div className='text-center mx-2 mb-3 border rounded'>
          <h2 className='mt-2'>All Projects</h2>
          {/* search field */}
            <div className='d-flex mt-5 justify-content-center w-100'>
              <div className='d-flex align-items-center border rounded w-50'>
                  <input type="text" placeholder='Enter Technology to Search' className='form-control rounded' />
                    <div className='mx-3 ps-3'>
                       <i className="fa-solid fa-magnifying-glass fa-lg"></i>

                    </div>
                </div>
          </div>
          {/* projects */}
          <div className='container-fluid'>
            <Row className='my-5'>
              <Col sm={12} md={6} lg={4}>
                <ProjectCard/>
              </Col>
            </Row>
          </div>
        </div>

    </div>
    </div>
    )
}

export default Projects