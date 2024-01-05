import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-3 m-3 me-3'>
        <div>
            <h3 className='text-center'>My Profile</h3>
        </div>
        <div className='mt-3 row justify-content-center'>
            <label htmlFor="profile" className='text-center'>
                <input type="file" className='form-control' id="profile" style={{display:'none'}} />
                <img src="https://th.bing.com/th/id/OIP.OipeUJzND5tgNZVYF91-qgAAAA?w=300&h=300&rs=1&pid=ImgDetMain" width={'100px'} height={'90px'} alt="" />
            </label>
            <div className='mt-3'>
                <input type="text" className='form-control' placeholder='Enter your Username' />
            </div>
            <div className='mt-3'>
                <input type="text" className='form-control' placeholder='Enter your LinkdIn ID' />
            </div> <div className='mt-3'>
                <input type="text" className='form-control' placeholder='Enter your GitHub ID' />
            </div>

        </div>
        
    </div>
  )
}

export default Profile