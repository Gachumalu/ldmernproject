import React from 'react'
import '../footer/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailLockIcon from '@mui/icons-material/MailLock';

const Footer = () => {
    return (
        <>

            <section className="section">



                <footer >
                    <div className="containers">
                        {/* <div className="row"> */}
                            {/* <div className="col-md-4 col-12"> */}

                                <div className="sec aboutus">
                                    <h2>About Us</h2>
                                    <p>Lorem ipsum dolor sit  ratione aspernatur exercitationem eum!</p>

                                    <ul className="sci">
                                        <li><a href="https://www.facebook.com/lndinfotech">< FacebookIcon /></a></li>
                                        <li><a href="https://www.instagram.com/lndinfo_tech/">< InstagramIcon /></a></li>
                                        <li><a href="tel:8286448170">< TwitterIcon /></a></li>
                                        <li><a href="tel:8286448170">< WhatsAppIcon /></a></li>

                                    </ul>
                                </div>

                            {/* </div> */}
                            {/* <div className="col-md-4 col-12"> */}
                                <div className="sec quickLinks">
                                    <h2>Quick Links</h2>
                                    <ul>
                                
                                        <li><a href="/home">About</a></li>
                                        <li><a href="/home">FAQ</a></li>
                                        <li><a href="/home">Privacy policy</a></li>
                                        <li><a href="/home">Help</a></li>
                                        <li><a href="/contact">Contect</a></li>
                                    </ul>
                                </div>

                            {/* </div> */}
                            {/* <div className="col-md-4 col-12"> */}
                                <div className="sec contact">
                                    <h2>contact Info</h2>
                                    <ul className="info">
                                        <li>

                                            <span className='a'> <LocationOnIcon fontSize='large' color='error' /></span>
                                            <span>Bhayander West , Uttan,<br />
                                               Pin : 401106 - Mumbai <br />India</span>

                                        </li>


                                        <li>
                                            <span className='mt-3'><li><AddIcCallIcon fontSize='large' color='error' /></li></span>
                                            <p><a href="tel:9286448170">9286448170</a><br />
                                                <a href="tel:9137502566">9137502566</a>
                                            </p>
                                        </li>

                                        <li>
                                            <span className='mt-3'><li><MailLockIcon  fontSize='medium' color='error' /></li></span>
                                            <p className='contmail'><a href="mailto:Indinfotech.212@gmail.com">Indinfotech.212@gmail.com</a></p>
                                        </li>
                                    </ul>

                                </div>

                    </div>
                </footer>
                <div className="copyrightText">
                    <p>L&D infotech 100% pleacement</p>
                </div>
            </section>
        </>
    )
}

export default Footer