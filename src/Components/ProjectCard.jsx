import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import projectImg1 from '../Assets/projimg1.png'
import { Modal,Button,Row,Col } from 'react-bootstrap';


function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '16rem',height:'200px' }} onClick={handleShow} className='border border-dark shadow'>
      <Card.Img variant="top" src={projectImg1} style={{height:'150px'}} />
      <Card.Body className='bg-dark'>
        <Card.Title className='text-center text-light'>Media Player</Card.Title>
        
      </Card.Body>
    </Card>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img src={projectImg1} className='img-fluid' alt="" />
            </Col>
            <Col sm={12} md={6}>
              <h5>Media Player</h5>
              <p>It is a free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project. VLC is available for desktop. </p>
              <p style={{fontSize:'16px'}}><span className='fw-bold'>Languages Used:</span>HTML,CSS,JS</p>
              <div>
                <a target='_blank' href="https://github.com/sana-manzoor/mediaplayer.git">
                <i className="fa-brands fa-github fa-2x"></i>
                </a>
                <a className='ms-3' target='_blank' href="">
                <i className="fa-solid fa-link fa-2x"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard