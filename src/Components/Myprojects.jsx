import React from 'react'
import Addprojects from './Addprojects'

function Myprojects() {
  return (
    <div className='card shadow p-3 m-2'>
        <div className='d-flex justify-content-between'>
          <h2 className='mt-2'>My Projects</h2>
          <Addprojects/>

        </div>
        <div className='mt-3'>
          {/* user added projects */}
          <div className='border shadow rounded m-3'>
            <div className='d-flex justify-content-between p-3'>
                <h4>Project Title</h4>
                <div>
                  <button className='btn'><i className="fa-brands fa-github fa-2x" style={{color:'black'}}></i></button>
                  <button className='btn'><i className="fa-solid fa-pen-to-square fa-2x" style={{color:'black'}}></i></button>
                  <button className='btn'><i className="fa-solid fa-trash fa-2x" style={{color:'black'}}></i></button>
                </div>
            </div>

          </div>
          <h4 className='m-4 text-danger' >No Projects Uploaded!!</h4>
        </div>
    </div>
  )
}

export default Myprojects