import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

function Auth({register}) {
    
    const registerForm=register?true:false

  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
        <div className='container w-75 fw-bolder'>
            <Link to={'/'} style={{textDecoration:'none'}} className='d-flex align-items-center'>
            <i class="fa-solid fa-arrow-left"></i>
           <span className='btn text-center p-0 m-0 ' style={{color:'black'}}>Back To Home</span>
        </Link>
        <div className='p-5 rounded' style={{backgroundColor:'#45888A'}}>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <img src="https://th.bing.com/th/id/R.ad4103e17c7cf7f6508e0ef41371eaac?rik=9Hc5bMtnkbondg&riu=http%3a%2f%2fwww.dcicomp.com%2fuser-login-icon-png-79.png&ehk=afztvWY%2bS2pubFee4pAMxF%2b%2fvXn8c%2fMiFeD%2f5AV61%2fM%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className='col-lg-6'>
                    <div className='d-flex align-items-center flex-column'>
                      <div className='d-flex mt-2'>
                         <i className="fa-solid fa-diagram-project fa-2x " style={{color:'black'}}></i>
                         <span className='fw-bolder h1'>PROJECT FAIR</span> 
                      </div>
                        <h4 >
                            {
                              registerForm?'Sign Up for Project Fair':'Sign In for Project Fair'
                            }

                        </h4>
                        <form  className='w-100  mt-4'>
                            {
                                registerForm &&
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label style={{color:'black'}}>Username:</Form.Label>
                                  <Form.Control type="text" placeholder="Enter Your Name" />
                               </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label style={{color:'black'}}>E-Mail::</Form.Label>
                                  <Form.Control type="text" placeholder="Enter Your Email" />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label style={{color:'black'}}>Password:</Form.Label>
                                  <Form.Control type="password" placeholder="Enter Your Password" />
                               </Form.Group>


                        </form>
                        {
                          registerForm ?
                          <div> <Button className='btn text-center mt-4' type='submit'>Sign Up</Button><br />
                          <Link to={'/Login'} className='mt-3'>Already A User?Sign In..</Link>
                          </div>
                          :
                          <div><Button className='btn text-center mt-4' type='submit'>Sign In</Button><br />
                          <Link to={'/REgister'} className='mt-5'>New User?Sign Up..</Link>
                          </div>

                        }

                    </div>
                </div>
            </div>

        </div>
        </div>
        
    </div>
  )
}

export default Auth