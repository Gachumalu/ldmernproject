import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import aboutImg from '../img/aboutPage.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

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
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;


      }

    } catch (err) {
      navigate('/signin');
      console.log(err);

    }
  }
  useEffect(() => {
    gachu();

  }, []);
  return (
    <>
      <section className="contactBG">

        
        <div className="container ">
          <div className="row d-flex justify-content-around">
            <div className='sub-title text-center'></div>

            <div className="col-md-6 col-lg-4 col-12 text-center ">
              <div className="services-list">
                <div>
                  {/* here is add icons */}
                  <p>  < PersonAddIcon />  {userData.name}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12 text-center ">
              <div className="services-list">
                <div>
                  {/* here is add icons */}
                  <p>  < AddIcCallRoundedIcon fontSize='medium' />  {userData.phone}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12 text-center ">
              <div className="services-list">
                <div>
                  {/* here is add icons */}
                  <p>  < AddLocationAltIcon fontSize='medium' />  {userData.email}</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="container mt-5">

          <h2 className='text-center aboutusp'>AboutUs</h2>
          <div className="row">
            <div className="col-md-6 mt-4">

              <p> L&D Infotech  is a leading Skill and Best It Training Institute located in India(Mumbai) providing Web Designing, Software Developing, Digital Marketing and many more courses . The Training Institute, which was set up in 2015 to help the nascent IT industry overcome its human resource challenges, today ranks among the world’s leading training companies owing to its vast and comprehensive array of talent development programs.</p>

              <ul className="sci mt-3">
                <li><a href="https://www.facebook.com/lndinfotech">< FacebookIcon /></a></li>
                <li><a href="https://www.instagram.com/lndinfo_tech/">< InstagramIcon /></a></li>
                <li><a href="tel:8286448170">< WhatsAppIcon /></a></li>

              </ul>
            </div>
            <div className="col-md-6 mt-4">
              <img src={aboutImg} className='img-fluid rounded' alt="aboutimg" />


            </div>
            <div className="col-12 text-center mt-4 mb-5">


             



              {/* <span className='m-2'><FacebookIcon fontSize='large' color='error' /></span>
              <span className='m-2'><FacebookIcon fontSize='large' color='error' /></span>
              <span className='m-2'><FacebookIcon fontSize='large' color='error' /></span>
         */}




            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About