import React from 'react'
import { Link } from 'react-router-dom'
import CodeIcon from '@mui/icons-material/Code';
import LockIcon from '@mui/icons-material/Lock';
// import Cpractical1 from './Cpractical1'
import '../notes/notes.css'

const Cnotes = () => {
  return (
    <>
     <section   id='servicess'>
                <div className="container">
                    <h1 className='sub-title text-center'>NOTES</h1>
                    <div className="services-lists ">
                        <div>
                          
                            {/* here is add icons */}

                            {/* < CodeIcon color= 'error' fontSize='large'/> */}
                            <h2> < CodeIcon color= 'error' fontSize='large'/> C NOTES</h2>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, totam!</p> */}
                             <Link to='/cpractice1'><button className='notesBtn'>VIEW</button> </Link>
                        </div>

                        <div>
                            {/* here is add icons */}
                            <h2>< LockIcon color= 'error' fontSize='large'/> C++ NOTES</h2>
                            <button className='notesBtn'>VIEW</button> 
                        </div>

                        <div>
                            {/* here is add icons */}
                            <h2>< LockIcon color= 'error' fontSize='large'/>  JAVA NOTES</h2>
                            <button className='notesBtn'>VIEW</button> 
                        </div>

                        <div>
                            {/* here is add icons */}
                            <h2>< LockIcon color= 'error' fontSize='large'/> PYTHON NOTES</h2>
                            <button className='notesBtn'>VIEW</button> 
                        </div>

                        <div>
                            {/* here is add icons */}
                            <h2>< LockIcon color= 'error' fontSize='large'/> SQL NOTES</h2>
                            <button className='notesBtn'>VIEW</button> 
                        </div>

                        <div>
                            {/* here is add icons */}
                            <h2>< LockIcon color= 'error' fontSize='large'/> PHP NOTES</h2>
                            <button className='notesBtn'>VIEW</button> 
                        </div>

                        <div>
                            {/* here is add icons */}
                            <h2>< LockIcon color= 'error' fontSize='large'/> JQuery NOTES</h2>
                            <button className='notesBtn'>VIEW</button> 
                        </div>

                        <div>
                            {/* here is add icons */}
                            <h2>< LockIcon color= 'error' fontSize='large'/> PHP NOTES</h2>
                            <button className='notesBtn'>VIEW</button> 
                        </div>
                    </div>
                  
                </div>
            </section>

    </>
  )
}

export default Cnotes