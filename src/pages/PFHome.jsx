import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import designerImg from '../Assets/webdev.png'
import Homeprojects from '../Components/Homeprojects'
import { Link } from 'react-router-dom'

function PFHome() {

  const [isLogged,setIsLogged]=useState(false)

  return (

    <>
    <div className='container-fluid  ' style={{width:'100%',height:'100vh',backgroundColor:'#45888A'}}>
        <Row className='align-items-center p-5 h-100'>
            <Col sm='12' md='6'>
                <h1 style={{fontSize:'60px'}}>
                <i className="fa-solid fa-diagram-project fa-beat-fade fa-lg" style={{color: '#121212'}}></i>
                    Project Fair</h1>
                <p className='mt-4 text-dark'>One stop destination for projects.Any user can add and manage their projects and can access any other projects created by others.Easy access to all the variety of projecrs if you are a user.So,what are you waiting for??!!</p>
                {/* <button className='btn mt-5 btn-dark text-light'>Start to Explore <i className="fa-solid fa-arrow-right fa-lg" style={{color:'#f9fafa'}}></i></button> */}
              {
                isLogged?
                <Link to={'/Dashboard'} className='btn text-light mt-5' style={{backgroundColor:'black'}}>Manage Your Projects <i className='fa-solid fa-arrow-right'></i></Link>
                :
                <Link to={'/Login'} className='btn text-light mt-5' style={{backgroundColor:'black'}}>Start To Explore <i className='fa-solid fa-arrow-right'></i></Link>
              }
            </Col>
            <Col sm='12' md='6'>
              <img src={designerImg} className=' mt-5' style={{height:'370px',marginLeft:'95px'}} alt="" />
            </Col>

        </Row>

    </div>
    <div className='pt-3 pb-5' style={{backgroundColor:'#45888A'}}>
      <h1 className='text-center mt-3 mb-4'>Some Of Our Projects</h1><br />
      <marquee behavior="alternate" direction="right">
        <Homeprojects/>
        </marquee>
        <div className='d-flex justify-content-center mt-4'>
        <Link to='/Projects' className='fw-bold btn m-3 ' style={{backgroundColor:'black',color:'white'}}>See More</Link>
        </div>

    </div>
    
    
    
    </>
  )
}

export default PFHome