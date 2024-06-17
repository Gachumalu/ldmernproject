import React, { useState, useEffect } from 'react'
import { Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MailLockRoundedIcon from '@mui/icons-material/MailLockRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


function Contact() {
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

  const userContact = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone, message: data.message });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;


      }

    } catch (err) {

      console.log(err);

    }
  }
  useEffect(() => {
    userContact();
  }, []);

  // we are storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value })
  }

  // send the data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        name, email, phone, message
      })

    });
    const data = await res.json();
    if (!data) {
      console.log("message not send");
      alert("message not send")

    } else {
      alert("message send")
      // console.log("message send");
      setUserData({ ...userData, message: " " });
    }
  }

  return (
    <>
      <section >
        <div className="container ">
          <div className="row d-flex justify-content-around">
            <div className='sub-title text-center'></div>

            <div className="col-md-6 col-lg-4 col-12 text-center ">
              <div className="services-list">
                <div>
                  {/* here is add icons */}
                  <h2>  < PersonAddIcon fontSize='large' />  Velentina B</h2>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12 text-center ">
              <div className="services-list">
                <div>
                  {/* here is add icons */}
                  <h2>  < AddIcCallRoundedIcon fontSize='large'  /> 9137502566  </h2>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12 text-center ">
              <div className="services-list">
                <div>
                  {/* here is add icons */}
                  <p>  < AddLocationAltIcon fontSize='medium' />
                  <span> Bhayander West , Uttan,<br />
                    Pin : 401106 - Mumbai India</span></p>
              </div>
            </div>
          </div>


        </div>
      </div>



      <div className="container">
        <Paper elevation={16} >

          <form method='POST' >

            <div className="row m-4 p-5 mb-5 text-center  ">
              <div className="col-lg-4 mt-3">
                <PersonAddIcon className='mt-4 me-3' />
                <TextField
                  id="filled-read-only-input"
                  // label={userData.name}
                  type="text"
                  name='name'
                  value={userData.name}
                  onChange={handleInputs}

                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />

              </div>

              <div className="col-lg-4 mt-3 ">

                <MailLockRoundedIcon className='mt-4 me-3' />
                <TextField

                  id="filled-read-only-input"
                  // label={userData.email}
                  type="email"
                  name='email'
                  value={userData.email}
                  onChange={handleInputs}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />

              </div>



              <div className="col-lg-4 mt-3">

                <AddIcCallRoundedIcon className='mt-4 me-3' />
                <TextField
                  id="filled-read-only-input"
                  // label={userData.phone}
                  type="numbar"
                  name='phone'
                  value={userData.phone}
                  onChange={handleInputs}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />

              </div>

              <div className=" mt-5 d-flex justify-content-around ">
                <TextField id="demo-helper-text-misaligned-no-helper"
                  label="Message"
                  type="text"
                  name='message'
                  // maxRows={17}
                  size='medium'
                  // value={userData.message}
                  onChange={handleInputs}
                />

              </div>

              <div className=" mt-3 d-flex justify-content-around">
                <Button variant="contained" endIcon={<SendIcon />}
                  onClick={contactForm}>
                  Send Message
                </Button>
              </div>

            </div>

          </form>
        </Paper>

        {/* </Box> */}

      </div>


    </section>


    </>
  )
}

export default Contact