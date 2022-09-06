import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {
    const {state,dispatch} = useContext( UserContext);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
              },
              credentials:"include"
        }).then((res)=>{
            dispatch({type:'User',payload:false})
            navigate('/signin',{replace:true});
            if(!res.status ===200){
                const error = new Error (res.error);
                throw error;
            }

        }).catch((error)=>{
            console.log(error);
        });
    });

  return (
   <>
   <h1>logout Page..</h1>
   </>
  )
}

export default Logout