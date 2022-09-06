import React from 'react'
import '../cource/cource.css'

const Course = () => {
  return (
    <>
      <section className="pricing " id='pricingdiv'>
                <div className="container headings text-center">
                    <h1 className='text-center font-weight-blod text-white'>
                        Diplome Course offered
                    </h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5">
                            <div className="card text-center ">
                                <div className="card-header">SOFTWARE ENGINEERING</div>
                                <div className="card-body">
                                    <li>$<span className='money'>90</span>Course</li>
                                    <li>software engineering from top universities . software engineering courses today and start advancing your career.</li>

                                </div>

                                <div className="card-footer"><button className='courseBtn'>JOIN</button> </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5">
                            <div className="card text-center ">
                                <div className="card-header">JAVA SPECIALIZATION</div>
                                <div className="card-body">
                                    <li>$<span className='money'>120</span>Course</li>
                                  <li>Start here to learn fundamental Java concepts and see what you can do with this versatile language.</li>

                                </div>

                                <div className="card-footer"><button className='courseBtn'>JOIN</button> </div>

                            </div>
                        </div>



                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5">
                            <div className="card text-center ">
                                <div className="card-header">WEB DESIGNING</div>
                                <div className="card-body">
                                    <li>$<span className='money'>100</span>Course</li>
                                    <li>Web design encompasses many different skills and disciplines in the production and maintenance of websites. </li>

                                </div>

                                <div className="card-footer"><button className='courseBtn'>JOIN</button> </div>

                            </div>
                        </div>



                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5">
                            <div className="card text-center ">
                                <div className="card-header">JAVA DEVELOPMENT</div>
                                <div className="card-body">
                                    <li>$<span className='money'>120</span>Course</li>
                                  <li>The Full Stack Java Developer Program is an intense bootcamp offering a complete suite of software development skills.</li>

                                </div>

                                <div className="card-footer"><button className='courseBtn'>JOIN</button> </div>

                            </div>
                        </div>






                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Course