import React, { useEffect, useState } from 'react'
import '../notes/notes.css'
import img1 from '../notes/Cimg/img1.jpeg'
import img2 from '../notes/Cimg/img2.jpeg'
import img3 from '../notes/Cimg/img3.jpeg'
import img4 from '../notes/Cimg/img4.jpeg'
import img5 from '../notes/Cimg/img5.jpeg'
import img6 from '../notes/Cimg/img6.jpeg'
import img7 from '../notes/Cimg/img7.jpeg'
import img8 from '../notes/Cimg/img8.jpeg'
import img9 from '../notes/Cimg/img9.jpeg'
import img10 from '../notes/Cimg/img10.jpeg'



const Cpractical1 = () => {

    const [userData, setUserData] = useState('');
    // const [show , setShow]=useState(false)

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
            <section className="container">


                <div>{userData.UserID ? <div>

                    <div class="row  mt-5">
                        <div class=" col-md-4 col-lg-2">
                            <div id="list-example" class="list-group notes ">
                                <a class="list-group-item list-group-item-action text-center  listGroup" href="#list-item-1">Chapter 1</a>
                                <a class="list-group-item list-group-item-action text-center  listGroup" href="#list-item-2">Chapter 2</a>
                                {/* <a class="list-group-item list-group-item-action text-center listGroup" href="#list-item-3">Item 3</a>
                                <a class="list-group-item list-group-item-action text-center listGroup" href="#list-item-4">Item 4</a> */}
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-10">
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                                <h1 id="list-item-1" className='text-center mt-3 chapter' >Chapter 1</h1>
                                <h4>Introduction to C Programming</h4>
                                <p>C language is a general purpose and structured programming language developed by
                                    'Dennis Ritchie' at AT &T's Bell Laboratories in the 1972s in USA. <br /> <br />
                                    It is also called as <b>'Procedure oriented programming language.'</b> <br /> <br />
                                    C is not specially designed for specific applications areas like COBOL (Common BusinessOriented Language) or FORTRAN (Formula Translation). It is well suited for business
                                    and scientific applications. It has some various features like control structures, looking
                                    statements, arrays, required for these applications. <br /> <br />
                                    In 1972, the Unix Operating system was being developed. During this time, the concept
                                    of a system programming language having attributes of both “low level” and “high level”
                                    languages also developed. System programming languages have advantages of a high
                                    level language but allow the programmer to take control of the underlying hardware if
                                    desired.
                                </p>
                                <h4>Languages is categorized as Low-Level Languages (LLL) and High Level Language (HLL)</h4>
                                <p>1. The LLL (Assembly Languages) offer better machine Efficiency since they
                                    understand the machine better and are able to exploit its capability more
                                    effectively. Also these languages have all the features and instruction to interact
                                    with the hardware.</p>
                                <p>2. The HLL (Machine Languages) offers better programming Efficiency but it doesn’t
                                    have facilities and instruction to interact with the hardware.
                                </p>
                                <p>3. C is good mix of both means C is also called as Middle-Level Language.</p>
                                <p>4. Learning C language is similar to learning English language.</p>

                                <h4>Steps to learn English language</h4>
                                <h5>Execution of C Program:</h5><br />
                                <img src={img1} alt="img1" className='img-fluid' />
                                <h5>Creating a Program</h5>
                                <p>An editor is used to create a C program. This file contains a source code which consists
                                    of executable code. The file should be saved as '*.c' extension only.</p>

                                <h5> Compiling the program :
                                </h5>
                                <p>The next step is to compile the program. The code is compiled by using compiler.
                                    Compiler converts executable code to binary code i.e. object code.
                                </p>
                                <h5> Linking a program to library :</h5>
                                <p>The object code of a program is linked with libraries that are needed for execution of a
                                    program. The linker is used to link the program with libraries. It creates a file
                                    with '*.exe' extension.
                                </p>
                                <h5> Execution of C program :</h5>

                                <p>The final executable file is then run by dos command prompt or by any other software.</p>
                                <h4>History of C language</h4>
                                <img src={img2} alt="img2" className='img-fluid' />
                                <img src={img3} alt="img3" className='img-fluid' />

                                <h6><br /><b>Algol-60 (1963): </b><br />
                                    ALGOL is an acronym for Algorithmic Language. It was the first structured procedural
                                    programming language, developed in the late 1950s and once widely used in Europe.
                                    But it was too abstract and too general structured language.
                                    <br /><br /><b> CPL (1963): </b><br />
                                    CPL is an acronym for Combined Programming Language. It was developed at
                                    Cambridge University.
                                    <br /><br /><b>BCPL (1967):</b><br />
                                    BCPL is an acronym for Basic Combined Programming Language. It was developed by
                                    Martin Richards at Cambridge University in 1967. BCPL was not so powerful. So, it was
                                    failed.
                                    <br /><br /><b> B (1970): </b><br />
                                    B language was developed by Ken Thompson at AT & T Bell Laboratories in 1970. It was
                                    machine dependent. So, it leads to specific problems.
                                    <br /><br /><b> C (1972): </b><br />
                                    'C' Programming Language was developed by Dennis Ritchie at AT & T Bell Laboratories
                                    in 1972. This is general purpose, compiled, structured programming language. Dennis
                                    Ritchie studied the BCPL, then improved and named it as 'C' which is the second letter of
                                    BCPL.</h6>

                                <h4>Basic Structure of C Programming</h4>
                                <img src={img4} alt="img4" className='img-fluid' />

                                <p><b>What is compile: </b>  Means Convert sources code into Machine language because
                                    computer understand only binary language i.e. 0 and 1
                                </p>

                                <h4>Basic Assignment</h4>
                                <b>
                                    <p className='ms-5 piramet font-weight-bold'>*</p>
                                    <p className='ms-5 piramet font-weight-bold'>**</p>
                                    <p className='ms-5 piramet font-weight-bold'>***</p>
                                    <p className='ms-5 piramet font-weight-bold'>****</p>
                                    <p className='ms-5 piramet font-weight-bold'>*****</p>
                                </b>





                                <h1 id="list-item-2" className='chapter'> chapter 2</h1>
                                <h4>Defining Variables, Identifier, Keywords and Constant</h4>
                                <h5> Variables</h5>
                                <p>Name given to the Memory Location it means location Name. Variable name should be
                                    meaningful</p>
                                <h5> Rules for Declaring Variables Name:</h5>
                                <p>1.  First character should be letter or alphabet.</p>
                                <p>2.  Keywords are not allowed to use as a variable name.</p>
                                <p>3.  White space is not allowed</p>
                                <p>4.  Only underscore, special symbol is allowed between two characters</p>
                                <p>5.  The length of identifier may be up to 31 characters but only the first 8 characters are
                                    significant by compiler</p>

                                <h5>Character Set:</h5>
                                <p>A character refers to the digit, alphabet or special symbol used to data representation.</p>
                                <p>1. Alphabets : A-Z, a-z</p>
                                <p>2. Digits : 0-9</p>
                                <h5>Special Characters :</h5>
                                <img src={img5} alt="img3" className='img-fluid' />

                                <h5>Identifier:</h5>
                                <p>Identifier is the name of a variable that is made up from combination of alphabets, digits
                                    and underscore.</p>
                                <h5>Keywords:</h5>
                                <p>1. Keywords are the system defined identifiers.</p>
                                <p>2. All keywords have fixed meanings that do not change.</p>
                                <p>3. White spaces are not allowed in keywords.</p>
                                <p>4. Keyword may not be used as an identifier.</p>
                                <h3 className="boxbor">Note: There are totally <b>32(Thirty Two)</b>  keywords used in a C programming.</h3>
                                <img src={img6} alt="img3" className='img-fluid' />
                                <h5>Escape Sequence Characters (Backslash Character Constants):</h5>
                                <img src={img7} alt="img3" className='img-fluid' />
                                <h5> Constants:</h5>
                                <p>A constant is an entity that doesn't change during the execution of a program.
                                    Followings are the different types of constants:</p>
                                <h5>1. Real Constant:
                                </h5>
                                <p>It must have at least one digit.</p>
                                <p>It must have a decimal point which may be positive or negative</p>
                                <p>Use of blank space and comma is not allowed between real constants.</p>
                                <p>Example: +194.143, -416.41</p>
                                <h2>2. Integer Constant:</h2>
                                <p>It must have at least one digit</p>
                                <p> It should not contain a decimal place</p>
                                <p>It can be positive or negative.</p>
                                <p>Use of blank space and comma is not allowed between integer constants.</p>
                                <p>Example: 1990, 194, -394</p>
                                <h5>3. Character Constant:</h5>
                                <p>It is a single alphabet or a digit or a special symbol enclosed in a single
                                    quote.</p>
                                <p>Maximum length of a character constant is 1.</p>

                                <p>Example: 'T', '9', '$'</p>
                                <h5>4. String Constant:</h5>
                                <p>It is collection of characters enclosed in double quotes.</p>
                                <p>It may contain letters, digits, special characters and blank space.</p>
                                <p>Example: "Welcome to C Programming”</p>
                                <h5>Data types: </h5>
                                <p>It means type of Data in which format user wants to store data in a
                                    memory</p>
                                <img src={img8} alt="img3" className='img-fluid' />


                                <h5>Comments: </h5>
                                <p>Comments gives extra inform about function and line</p>
                                <p>Single line Comment: //</p>
                                <p>Multiline comment: /*-----*/</p>
                                <h4>Example 1: using Variable and Data type:</h4>
                                <img src={img9} alt="img3" className='img-fluid' />
                                <h4>Example 2</h4>
                                <img src={img10} alt="img3" className='img-fluid' />
                                <h4>Assignment</h4>
                                <p>1. WAP to display Student Details containing <b> Roll No, Name, Fees, Average;</b></p>
                                <p>2. WAP to display the customer details including its <b>Customer id, name, Address,
                                    Product name, price and quantity.</b></p>

















                                {/* <h4 id="list-item-3">Item 3</h4>

                                <h4 id="list-item-4">Item</h4> */}

                            </div>
                        </div>
                    </div>


                </div> : <h1 className='chapter  mt-5'>join our classes</h1>} </div>



            </section>

        </>
    )
}

export default Cpractical1