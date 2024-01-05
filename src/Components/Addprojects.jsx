import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap';

function Addprojects() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button  onClick={handleShow}>
         Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label htmlFor="project">
                            <input type="file" id='project' style={{display:'none'}} />
                            <img src="https://th.bing.com/th/id/R.66754ec538a650d7f0058a92dfa87c2c?rik=zxjjfdK4GJNkbg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_234957.png&ehk=Fi1SrQ6CCna9G4YthIa%2fPeLqp2EuDeiIUU7VEihDa1E%3d&risl=&pid=ImgRaw&r=0" className='img-fluid p-3' alt="" />
                        </label>
                        </div>

                        <div className='col-lg-6'>
                            <input type="text" className='form-control mb-2 rounded' placeholder='Project Title'/>
                            <input type="text" className='form-control mb-2 rounded' placeholder='Project OverView' />
                            <input type="text" className='form-control mb-2 rounded' placeholder='Languages Used'/>
                            <input type="text" className='form-control mb-2 rounded' placeholder='GitHub URL'/>
                            <input type="text" className='form-control mb-2 rounded'  placeholder='Demo URL'/>
                        </div>

                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Addprojects