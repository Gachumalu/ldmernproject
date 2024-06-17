import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { Button, Paper, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { UserContext } from '../App';

const Signin =() =>{
  const {state,dispatch} = useContext( UserContext);
  const navigate = useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const loginUser =async (e)=>{
  e.preventDefault();
  const res = await fetch('/signin',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    
  });
  const data =res.json();
  if(res.status === 400 || !data){
    window.alert("Invalid Login");
      console.log("Invalid Login");
    } else {
      dispatch({type:'User',payload:true})
      window.alert("Login Succcessfull");
      console.log("Login Succcessfull");
      navigate('/');
  }
}

  return (
   <>

<div className="container formMarging mt-5 mb-5">
        
          <div className="row pt-4  mx-auto text-center">
            <div className="col-lg-8 mx-auto test-center">

        
        <Paper elevation={7} >
         

            <h2 className='text-center pt-4'>SIGN IN</h2>
              <form method='POST' className='gachu ' >
            <div className="row">

                
                <div className="form-group mt-3 ">
                  <label htmlFor="name" className='col-1 mt-3'>
                    <MarkunreadIcon  />
                  </label>
                  <TextField className='.col-10 col-sm-10 col-md-6 col-lg-6 ms-2' variant="standard" type="text" name='email' id='email standard-basic' autoCom
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  plete='off' label="Email" />
                </div>
                </div>

                

                <div className="form-group mt-3">
                  <label htmlFor="name" className='col-1 mt-3'>
                    < LockIcon fontSize='medium'/>
                  </label>
                  <TextField className='.col-10 col-sm-10 col-md-6 col-lg-6 ms-2' variant="standard" type="password" name='cpassword' id='cpassword standard-basic' autoComplete='off'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  label="Confirm password" />
                </div>

                <Button color="primary" className='mx-auto .col-10 col-xs-8 col-sm-8 col-md-6 col-lg-2 mb-5 mt-5 '
                value='Login'

                onClick={loginUser}
                variant="contained">Submit</Button>


            
              </form>
            

        </Paper >
        </div>
          </div>
        </div>
      

  
   
   </>
  )
}

export default Signin