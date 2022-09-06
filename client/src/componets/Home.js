// import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Cnotes from '../notes/Cnotes'
import '../componets/homePage.css'
import WebProres from '../webProgres/WebProgres';
import Course from '../cource/Course';
import Language from '../courseLanguage/Language';
import Footer from '../footer/Footer';

// import Navbar from './Navbar';

function Home() {
  const [userData, setUserData] = useState('');
  // const [show, setShow] = useState(false)

  const gachu = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      // console.log(data);
      setUserData(data);
      // setShow(true)
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;


      }

    } catch (err) {

      console.log(err);

    }
  }
  useEffect(() => {
    gachu();

  }, []);
  return (
    <>
      <div className="homePage ">


        <section className='header-section text-center'>
         <div className="container">
         <div className="row">
          <div className="col-md  homeM">
          <div className="homeM">
            <h2 className='LDH'><span className='LDHome'>L&D </span> <span className='LDHome1'> infotech</span></h2>
            <p className="LDpra">Build Your Career With Experience IT Trainer</p>
          <h3 className="LDpra2">IT Training Computer Institute</h3>
          <p className="LDpra3">ISO 9001 : 2015 Certified Computer Institute</p>

          </div>
          </div>
         </div>
         </div>
        </section>
            {/* <h2><span>hii{userData.name}</span>{show ?  "happy to see you" : "welcome to mern website"}</h2> */}

      </div>



      {/* ******************************** NOTES  C **************************** */}

      <div>{userData.UserID ? <div>

        <Cnotes />

      </div> : ""} </div>



      {/* *************************________________________************************ */}

      <WebProres />


      {/* *************************________________________************************ */}

      <Course />
      {/* *************************________________________************************ */}

      <Language />

      {/* *************************________________________************************ */}

      <Footer />



    </>
  )
}

export default Home