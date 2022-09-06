import React from 'react'
// import imagec from '../img/homePage.jpg'
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import BrushIcon from '@mui/icons-material/Brush';

import '../webProgres/webprogres.css'

const WebProres = () => {
    return (
        <>

            <section className="serviceoffers " id='servicediv'>
                <div className="container headings text-center ">
                    <h1 className='text-center font-weight-blod'>Services Offered</h1>
                    {/* <p className='text-center'>
                        Lorem, ipsumcepturi reiciendis eum ab unde quos similique non.
                    </p> */}

                </div>
                <div className="container">
                    <div className="row">


                        <div className="col-lg-6 col-md-12 col-12 offset-1 offset-lg-0">
                            <div className="names my-4">
                                <h1>HTML</h1>
                                <div className ="progress w-75">
                                    <div className ="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>100%</div>
                                </div>
                            </div>

                            <div className ="names my-5">
                                <h1>CSS</h1>
                                <div className ="progress w-75">
                                    <div className ="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "97%" }}>97%</div>
                                </div>
                            </div>

                            <div className ="names my-5">
                                <h1>JAVA SCRIPT</h1>
                                <div className ="progress w-75">
                                    <div className ="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "99%" }}>99%</div>
                                </div>
                            </div>



                            <div className ="names my-5">
                                <h1>REACT.JS</h1>
                                <div className ="progress w-75">
                                    <div className ="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>95%</div>
                                </div>
                            </div>


                            <div className ="names my-5">
                                <h1>NODE.JS</h1>
                                <div className ="progress w-75">
                                    <div className ="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "92%" }}>92%</div>
                                </div>
                            </div>

                        </div>



                        <div className="col-lg-6 col-md-12 col-12 servicediv">
                            <div className="row mt-3">

                                <div className="col-lg-3 col-md-4 col-4 service-img mt-4 text-center ">
                                    <DesktopMacOutlinedIcon fontSize='large' color='error' />
                                    <h2>Website Design</h2>
                                    {/* <img src={imagec} alt="imagec" className='service-img-w' /> */}

                                </div>

                                <div className="col-lg-9 col-md-8 col-8 mt-3 ">

                                    <p className='webP'>Good business needs a great website, we come with years of experience in various sectors and believe in creating innovative websites to empower businesses around the world.</p>
                                </div>

                            </div>

                            <div className="row mt-3">

                                <div className="col-lg-3 col-md-4 col-4 service-img mt-4 text-center ">
                                    < BrushIcon fontSize='large' color='error' />
                                    <h2>Graphic Design</h2>
                                    {/* <img src={imagec} alt="imagec" className='service-img-w' /> */}

                                </div>

                                <div className="col-lg-9 col-md-8 col-8 mt-3 ">

                                    <p className='webP'>We believe in creating designs that inspire. A touch of innovation in every design helps us stand apart from the rest. A good design not only amplifies your brand but gives it a personality of its own.</p>
                                </div>

                            </div>

                            <div className="row mt-3">

                                <div className="col-lg-3 col-md-4 col-4 service-img mt-4 text-center ">
                                    <AutoGraphOutlinedIcon fontSize='large' color='error' />
                                    <h2>Digital Marketing</h2>
                                    {/* <img src={imagec} alt="imagec" className='service-img-w' /> */}

                                </div>

                                <div className="col-lg-9 col-md-8 col-8 mt-3  ">

                                    <p className='webP'>We offer customised marketing solutions to meet your business goals. Boost your business with Industry experts. SEO, SMM, Web Design. We guarantee 100% results</p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WebProres