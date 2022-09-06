import React from 'react'

import PersonIcon from '@mui/icons-material/Person';
import { Button, Paper, TextField } from '@mui/material';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import DevicesIcon from '@mui/icons-material/Devices';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img1 from '../img/Img1.jpeg'
import Img3 from '../img/Img3.jpeg'


function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '', email: '', phone: '', work: '', password: '', cpassword: ''
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })

  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    
    const data = await res.json();
    if(res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registraction");
    } else {
      window.alert("Registraction Succcessfull");
      console.log("Registraction Succcessfull");
      navigate('/signin');
      
    }
  }


  return (
    <>
      <div className="container formMarging ">
        <Paper elevation={7} >

          <div className="row pt-4  mx-auto text-center">


            <div className="col-md-6 ">
              <h2 className='text-center'>SingUp</h2>
              <form method='POST' className='gachu ' >

                <div className="row">
                  <div className="form-group mt-3 ">
                    <label htmlFor="name" className='col-1 mt-3'>
                      <PersonIcon />
                    </label>
                    <TextField className='col-sm-8 col-md-10 col-lg-8  ms-2' variant="standard" type="text" name='name' id='name standard-basic' autoComplete='off'
                      value={user.name}
                      onChange={handleInputs}
                      label=" Your Name" />
                  </div>
                </div>

                <div className="form-group mt-3 ">
                  <label htmlFor="name" className='col-1 mt-3'>
                    <MarkunreadIcon />
                  </label>
                  <TextField className='col-sm-8 col-md-10 col-lg-8 ms-2' variant="standard" type="email" name='email' id='email standard-basic' autoComplete='off'
                    value={user.email}
                    onChange={handleInputs}
                    label="Email" />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="name" className='col-1 mt-3'>
                    < CallIcon />
                  </label>
                  <TextField className='col-sm-8 col-md-10 col-lg-8 ms-2' variant="standard" type="text" name='phone' id='phone standard-basic' autoComplete='off'
                    value={user.phone}
                    onChange={handleInputs}
                    label="Phone Number" />
                </div>


                <div className="form-group mt-3">
                  <label htmlFor="name" className='col-1 mt-3'>
                    <  DevicesIcon />
                  </label>
                  <TextField className='col-sm-8 col-md-10 col-lg-8 ms-2' variant="standard" type="text" name='work' id='work standard-basic' autoComplete='off'
                    value={user.work}
                    onChange={handleInputs}
                    label="Course" />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="name" className='col-1 mt-3'>
                    < LockIcon />
                  </label>
                  <TextField className='col-sm-8 col-md-10 col-lg-8 ms-2' variant="standard" type="password" name='password' id='password standard-basic' autoComplete='off'
                    value={user.password}
                    onChange={handleInputs}
                    label="Password" />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="name" className='col-1 mt-3'>
                    < LockIcon />
                  </label>
                  <TextField className='col-sm-8 col-md-10 col-lg-8 ms-2' variant="standard" type="password" name='cpassword' id='cpassword standard-basic' autoComplete='off'
                    value={user.cpassword}
                    onChange={handleInputs}
                    label="Confirm password" />
                </div>

                <Button color="secondary" className='col-xs-10 col-sm-10 col-md-6 mb-5 mt-5 ' variant="contained" onClick={PostData}>Submit</Button>

              </form>

            </div>
            <div className="col-md-6 " >

              <img className="fromimage mx-auto" src={Img3} alt="fromImage" />
              <img className="fromimage2 mt-3 mx-auto" src={Img1} alt="fromImage" />

            </div>

          </div>
        </Paper >
    
      <div className="gachu3">

      </div>
      </div>


    </>
  )
}

export default Signup