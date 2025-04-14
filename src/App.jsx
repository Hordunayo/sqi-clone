import React from 'react'
import Logo from './assets/logo.jpg'
import header from './assets/bg-header-1.png'
import innovation from './assets/innovation.jpg'
import diploma from './assets/diploma.jpg'
import certificate from './assets/certificate.jpg'
import software from './assets/software-engineering.webp'
import product from './assets/product-design.jpg'
import digital from './assets/digital-literacy.jpg'
import data from './assets/DATA-SQI.jpg'
import google from './assets/google.png'
import andela from './assets/Andela.png'
import interswitch from './assets/Interswitch.png'
import microsoft from './assets/Microsoft_logo.png'
import paystack from './assets/Paystack.png'
import brewery from './assets/brewery.png'
import clan from './assets/clan-logo.png'
import wema from './assets/Wema-Bank-Logo.png'
import edozzier from './assets/edozzier.png'
import moneymie from './assets/moneymie.png'
import aella from './assets/aella-credit.png'
import army from './assets/Nigerian_Army.png'
import './App.css'

function App() {
  return (
    <>
      <nav >
        <img src={Logo} alt=""/>
        <div className="div-text ">
            <span>About
                <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Programmes
                <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Admissions
                <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>E-portals
                <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>SQI scholarship</span>
            <span>News</span>
        </div>
    </nav>

    {/* header */}
    <section className="container-one">
        <div className="section-one">
            <div className="header-text">
                <h1>Study to become a global talent</h1>
                <p>Learn new tech skills using a world-className curriculum from top <br/> industry experts in an accredited
                    institution.</p>
                <br/>
                <br/>
                <button
                    style={{
                      backgroundColor: 'rgb(15, 15, 141)',
                      color: 'white',
                      height: '50px',
                      width: '100px',
                      borderRadius: '5px',
                      border: 'none',
                     }}>Start
                    now</button>
            </div>
            <img className="header-img" src={header} alt=""/>
        </div>
    </section>
    
    <h1 className="headline-two">Start here. Change the world.</h1>
    <section className="container-two">
        <div className="one">
            <img src={innovation} alt=""/>
            <br/>
            <h1>National Innovative Diploma (NID)</h1>
            <br/>
            <p>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>
            <br/>
            <br/>
            <p>
                <a href="">Learn more</a>
            </p>
        </div>
        <div className="one">
            <img src={diploma} alt=""/>
            <br/>
            <h1>Professional Diploma Certificate</h1>
            <br/>
            <p>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
            <br/>
            <br/>
            <p>
                <a href="">Learn more</a>
            </p>
        </div>
        <div className="one">
            <img src={certificate} alt="" />
            <br/>
            <h1>Certificate Program</h1>
            <br/>
            <p>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
            <br/>
            <br/>
            <p>
                <a href="">Learn more</a>
            </p>
        </div>
    </section>


    <section className="container-three">
        <div className="two">
            <h1>NATIONAL DIPLOMA COURSES</h1>
            
            <p><strong>Duration:</strong> 
                2 Years
            </p>
           
            <p>
                <strong>Certificate:</strong> 
                Both National Diploma and <br/> Professional Diploma.
            </p>
            <p>
                <strong>Skills:</strong> 
                Academic Institution recognized <br/>skills and In-demand professional <br/>skills.
            </p>
            
            <p>
                <strong>Entry Requirements:</strong> 
                120 min in JAMB <br/>5 Credits in O-Level, Your passion
            </p>
          
            <p>
                <strong>Required Hardware:</strong> 
                (usually Laptop)
            </p>
           
            <p>
                <strong>Direct Entry:</strong> 
                Yes (Any University)
            </p>
          
            <p>
                <strong>Access to Alumni Network and 
                    <br/>Opportunities:</strong>
                 Yes
            </p>
        </div>
        <div className="two">
            <h1>PROFESSIONAL DIPLOMA COURSES</h1>
          
            <p>
                <strong>Duration:</strong> 
                    1 Year Courses
            </p>
            
            <p>
                <strong>Certificate:</strong> 
                    Professional Diploma
            </p>
            
            <p>
                <strong>Skills:</strong> 
                    In-demand professional skills
            </p>
            
            <p>
                <strong>Entry Requirements:</strong> 
                    Entry Requirements: Your passion
            </p>
            
            <p>
                <strong>Required Hardware:</strong> 
                (usually Laptop)
            </p>
            
            <p>
                <strong>Direct Entry:</strong> 
                    Partially Yes (LAUTECH ODL)
            </p>
            
            <p>
                <strong>Access to Alumni Network and 
                    
                    <br/>Opportunities:</strong>
                 Yes
            </p>
        </div>
        <div className="two">
            <h1>CERTIFICATE PROGRAM</h1>
            
            <p>
                <strong>Duration:</strong> 
                    2 weeks to 6 months
            </p>
            
            <p>
                <strong>Certificate:</strong> 
                    Certificate Program
            </p>
            
            <p>
                <strong>Skills:</strong> 
                    In-demand professional skills
            </p>
            
            <p>
                <strong>Entry Requirements:</strong> 
                    Your passion
            </p>
           
            <p>
                <strong>Required Hardware:</strong> 
                (usually Laptop)
            </p>
            
            <p>
                <strong>Direct Entry:</strong> 
                    No
            </p>
            
            <p>
                <strong>Access to Alumni Network and 
                    
                    <br/>Opportunities:</strong>
                 Yes
            </p>
        </div>
    </section>

    <section className="container-four">
        <div className="three">
            <h1>Our Top Courses</h1>
            <br/>
            <p>Take a look at some of our popular courses</p>
            <br/>
            <br/>
            <a href="">view all courses</a>
            <br/>
            <div className="section-two">
                <img src={software} alt=""/>
                <br/>
                <h1>Software Engineering</h1>
                <br/>
                <p>Software Engineering is one of the most in-demand jobs across the globe today. 
                    <br/> Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.
                </p>
                    <br/>
                    <a href="">Learn more</a>
                    <br/>
                    <br/>
                    <div className="section-four">
                        <img src={product} alt=""/>
                        <br/>
                        <h1>UI/UX – Product Design</h1>
                        <br/>
                        <p>More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.
                            <br/>
                             Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.
                        </p>
                        <br/><br/>
                        <a href="">Learn more</a>
                    </div>
            </div>
        </div>
        <div className="three">
            <div className="section-three"><img src={data}/>
                <br/>
                <h1>Data Science & Analysis</h1>
                <br/>
                <p>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.
                    <br/>Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.
                </p>
                <br/>
                <br/>
                <a href="">Learn more</a>
                <br/><br/>
                </div>
                <div className="section-five">
                    <img src={digital} alt=""/>
                    <br/>
                    <h1>Digital Literacy</h1>
                    <br/>
                    <p>This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).
                        <br/>Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.
                    </p>
                    <br/><br/>
                    <a href="">learn more</a>
            </div>
        </div>
    </section>

    
    <section className="container-five">
        <h1>Our alumni work at world-className <br/> companies around the world including</h1>
        <br/>
        <div>
            <span>
                <img src={google} alt=""/>
            </span>
            <span>
                <img src={interswitch} alt=""/>
            </span>
            <span>
                <img src={andela} alt=""/>
            </span>
            <span>
                <img src={microsoft} alt=""/>
            </span>
            <br/><br/>
            <span>
                <img src={paystack} alt=""/>
            </span>
            <span>
                <img src={brewery} alt=""/>
            </span>
            <span>
                <img src={wema} alt=""/>
            </span>
            <span>
                <img src={clan} alt=""/>
            </span>
            <br/><br/>
            <span>
                <img src={edozzier} alt=""/>
            </span>
            <span>
                <img src={moneymie} alt=""/>
            </span>
            <span>
                <img src={army} alt=""/>
            </span>
            <span>
                <img src={aella} alt=""/>
            </span>
        </div>
    </section>
    <section className="container-six">
        <div>
            <iframe width="396" height="223" src="https://www.youtube.com/embed/HgC6bjMbqpw" title="Campus Tour | SQI College of ICT, Ibadan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
            <h1>Take a Tour</h1>
            <br/>
            <p>Our campus is a living centre for innovation and creativity for sustainability. 
                <br/>We love showing students our campus and allowing them to see, hear and feel 
                <br/>the excitement that comes with being part of the Central community which is 
                <br/> an atmosphere that is open-minded, always exciting, and filled with academic 
                <br/>excellence.
            </p>
        </div>
    </section>
      
    </>
  )
}

export default App
