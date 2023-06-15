import 'bootstrap/dist/css/bootstrap.css'
import React, {useState, useCallback, useEffect} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFloppyDisk, faFilter, faTrash, faChevronLeft, faChevronRight, faEllipsisV, faCircle, faClock, faChevronDown} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {useCollapse, Collapse} from 'react-collapse';
import imageSrc from './assets/coding.png';
import imagePrj from './assets/bhive.jpg';
import udmClinicPrj from './assets/udmclinic.jpg';
import libPrj from './assets/lib.jpg'
import libWebPrj from './assets/libweb.jpg'
import pwdPrj from './assets/pwd.jpg'
import workitPrj from './assets/workit.jpg'
import waterPrj from './assets/water.jpg'
import tourManilaPrj from './assets/tourmanila.jpg'
import htmlIcon from './assets/html.svg'
import cssIcon from './assets/css.svg'
import jsIcon from './assets/js.svg'
import ciIcon from './assets/ci.svg'
import sqlDbIcon from './assets/dbsql.svg'
import bsIcon from './assets/bs.svg'
import fireBaseIcon from './assets/firebase.svg'
import phpIcon from './assets/php.svg'
import androidIcon from './assets/android.svg'
import javaIcon from './assets/java.svg'
import tmIcon from './assets/tm.png'
import tensorFlowIcon from './assets/tensorflow.svg'
import pythonIcon from './assets/python.svg'
import djIcon from './assets/django.svg'
import gitIcon from './assets/github1.png'
import resumeFile from './assets/Resume - Lofranco, Patrick William Q.pdf'
import fbIcon from './assets/fb.svg'
import gmailIcon from './assets/gmail.svg'
import ghubIcon from './assets/ghub.svg'


import Navbar from './components/NavBar/NavBar'
import ScrollComponent from './components/ScrollComponent/ScrollComponent'; 
import ReactTyped from 'react-typed'
// import TypewriterEffect from './components/TypeWriter/TypeWriter';
import './App.css'

import colors from './css-colors';
import { Fade } from 'react-bootstrap';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App()  {
    const ProjectDisplay = ({ imageSrc, title, description, techStack, gitLink}) => {
        const [isHovered, setIsHovered] = useState(false);
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
        useEffect(() => {
            const handleResize = () => {
              setWindowWidth(window.innerWidth);
            };
        
            window.addEventListener('resize', handleResize);
        
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          }, []);

        const pStyle = {
            marginLeft: isHovered && windowWidth > 767 & windowWidth > 1023? '20px' : '0',
            transition: 'margin-left 0.3s ease-in',
        };
      
        return (
          <div className='project-display'>
            <img
              src={imageSrc}
              className='imgPrj1'
              alt='Project Image'
              draggable='false'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <div className="project-text" style={pStyle}>
                <h2><b>{title}</b></h2>
                <p>{description}</p>
                <div className="tech-stack">
                    {techStack.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            className="tech-icon"
                            alt="Tech Icon"
                        />
                    ))}
                    <a href={gitLink} target="_blank" rel="noopener noreferrer"><img src={gitIcon} title='Firebase'/> <span>GitHub</span></a>
                </div>
            </div>
          </div>
        );
    };      
    
    return (
        <>
            <Navbar />
            <div className="App">
            <header className="bg-img">
                <div className="overlay"></div>
                <div className="header-content">
                    <div className="text-container">
                        <span id="text"><b id='hello'>HELLO!</b><br/><span id="name">I'm <b>Patrick William Lofranco</b></span></span><br/>
                        <span id="sub-text">
                            <ReactTyped
                                strings={[
                                    "Developer.",
                                    "Programmer.",
                                    "Designer."
                                ]}
                                typeSpeed={80}
                                backSpeed={50}
                                backDelay={3000}
                                loop
                            />
                        </span><br/>
                        <a className='more-btn' href='#about'>More About Me
                        <i className="fa-solid fa-chevron-down"></i></a>
                    </div>
                </div>
            </header>
            <section id="about" className="section">
                <div className="container">
                    <FadeInSection>
                        <div className='about'>
                            <h1 id="about-title"><b>ABOUT</b><span id='text-line'>&nbsp;//</span></h1>

                            <p>I'm Patrick William Lofranco, and I am a passionate Web Developer, Web Designer, and Programmer. With a strong foundation in these fields, I strive to create exceptional digital experiences that combine functionality, aesthetics, and user satisfaction.<br/><br/>
                            Furthermore, my programming skills allow me to take on complex projects and develop customized solutions tailored to specific needs. I enjoy the challenge of problem-solving and take pride in writing clean and efficient code. Whether it's building interactive web applications or optimizing existing systems, I am committed to delivering high-quality solutions.</p>
                            <a className='btn' href={resumeFile} download>Download Resume</a>
                        </div>
                    </FadeInSection>
                </div>
            </section>
            <section id="projects" className="section">
                <div className="container">
                <FadeInSection>
                            <h1 id='prj'><b>PROJECTS</b><span id='text-line'>&nbsp;//</span></h1>

                            <div className='mobileproject-display'>
                                <div className="mobile">
                                    <div className="phone">
                                        <div className="phone-mirror">
                                            <div className="topWrapper">
                                                <div className="camera"></div>
                                                <div className="line-rec"></div>
                                            </div>
                                            <img src={libPrj}/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mobileproject-text">
                                    <h2><b>Mobile Library System Management</b></h2>
                                    <p>Mobile Library System Management is my Capstone Project, with a focus on utilizing mobile technologies, the aim was to create an effective system that improves the efficiency, accessibility, and overall experience of library management. The application eliminates the need for traditional library trips by providing a streamlined interface for finding, reserving, and borrowing titles. It also contains Artificial Intelligence that can scan a book even detect and determine whether the book is existing and available, as well as provide the specific location and related book recommendations based on what the user scans.</p><br/>
                                    <div className='tech-stack'>
                                        <img src={androidIcon} title='Android'/>
                                        <img src={javaIcon} title='Java'/>
                                        <img src={tmIcon} title='Machine Learning'/>
                                        <img src={tensorFlowIcon} title='Tensoflow'/>
                                        <img src={fireBaseIcon} title='Firebase'/>

                                        <a href="https://github.com/HNDRIXX/Library-Android-Application/blob/main/-%20Sample%20Pictures/01.Login.jpg" target="_blank" rel="noopener noreferrer"><img src={gitIcon} title='Firebase'/> <span>GitHub</span></a>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        <FadeInSection>
                            <div className='mobileproject-display'>
                                <div className="mobile-two">
                                    <div className="phone">
                                        <div className="phone-mirror-two">
                                            <div className="topWrapper">
                                                <div className="camera"></div>
                                                <div className="line-rec"></div>
                                            </div>
                                            <img src={pwdPrj}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="mobileproject-text">
                                    <h2><b>PWD Accessibility Locator Map</b></h2>
                                    <p>PWD Accessibility Locator Map is my first freelancing project. This mobile application provides information about the user's searched location, such as whether or not the location is accessible to people with disabilities. It also provides a comment section for each PWD person to provide input on how the services are provided to them.</p><br/>
                                    <div className='tech-stack'>
                                        <img src={androidIcon} title='Android'/>
                                        <img src={javaIcon} title='Java'/>
                                        <img src={fireBaseIcon} title='Firebase'/>

                                        <a href="" target="_blank" rel="noopener noreferrer"><img src={gitIcon} title='Firebase'/> <span>GitHub</span></a>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        <FadeInSection>
                            <ProjectDisplay
                                imageSrc={imagePrj}
                                title="BHive"
                                description={
                                    <>
                                        BHive is my On The Job Training Project in DENR EMB MIMAROPA 4B. This system features a interactable Organizational Chart that can be modify, add, sort, and delete for each employee and staff member. The second system within the BHive is a Floor plan Locator, which displays the particular location as well as the inactive and active status of every employee that is connected to the face-recognition device of DENR EMB MIMAROPA 4B.
                                    </>
                                }
                                techStack={[htmlIcon, cssIcon, bsIcon, jsIcon, ciIcon, sqlDbIcon]}
                                gitLink="https://github.com/HNDRIXX/OJT-Project-DENR-EMB-MIMAROPA/blob/master/-%20Sample%20Pictures/01.Home.jpg"
                            />
                        </FadeInSection>

                        <FadeInSection>
                            <ProjectDisplay
                                imageSrc={udmClinicPrj}
                                title="UDM Clinic"
                                description={
                                    <>
                                        Universidad De Manila Clinic System is a second-year group project that I reconstructed into my own version with a different  language stack. With a focus on improving user experience and efficiency, revamped system seamlessly integrates appointment scheduling, medical record management, and communication between patients and healthcare providers.
                                    </>
                                }
                                techStack={[pythonIcon, bsIcon, djIcon]}
                                gitLink="https://github.com/HNDRIXX/UDM-Clinic/blob/master/-%20Sample%20Pictures/1.Login.jpg"
                            />
                        </FadeInSection>

                        <FadeInSection>
                            <ProjectDisplay
                                imageSrc={libWebPrj}
                                title="Web Library Management System"
                                description={
                                    <>
                                        Web Library Management System is the web version of my Mobile Library System Management Capstone Project. The Web Library Management System serves as an expansion of the Mobile Library System Management, offering users a web-based interface for enhanced accessibility. It provides a seamless transition for patrons who can now browse the library's catalog, reserve books and more.
                                    </>
                                }
                                techStack={[htmlIcon, cssIcon, jsIcon, fireBaseIcon]}
                                gitLink="https://github.com/HNDRIXX/Library-Web/blob/main/-%20Sample%20Pictures/1.Login.jpg"
                            />
                        </FadeInSection>

                        <FadeInSection>
                            <ProjectDisplay
                                imageSrc={workitPrj}
                                title="WorkIT"
                                description={
                                    <>
                                        WorkIT Gym Management System is my third-year system project. The goal of this system was to modernize gym operations and member management. This all-inclusive system includes features including membership registration, offering gym training plan packages, attendance tracking, and progress tracking. With its user-friendly interface and advanced reporting features, enables gym owners to efficiently manage their facilities while providing an amazing experience for their members.
                                    </>
                                }
                                techStack={[htmlIcon, cssIcon, jsIcon, phpIcon, sqlDbIcon]}
                                gitLink="https://github.com/HNDRIXX/WorkIt-Web-Gym-System/blob/main/-%20Sample%20Pictures/01.Login.jpg"
                            />
                        </FadeInSection>
                        
                        <FadeInSection>
                            <ProjectDisplay
                                imageSrc={waterPrj}
                                title="PuriWater"
                                description={
                                    <>
                                        PuriWater is a Water Refilling Management System that I had planned to implement in our local Water Refilling Station. The primary goal of PuriWater is to provide a seamless and user-friendly platform that enhances the overall customer experience. From the moment a customer places an order to the delivery of purified water, the system will ensure a smooth and hassle-free process.
                                    </>
                                }
                                techStack={[htmlIcon, cssIcon, jsIcon, phpIcon, sqlDbIcon]}
                                gitLink="https://github.com/HNDRIXX/PuriWater/blob/main/-%20Sample%20Pictures/01.Login.jpg"
                            />
                        </FadeInSection>
                        
                        <FadeInSection>
                            <ProjectDisplay
                                imageSrc={tourManilaPrj}
                                title="Top Places in Manila Web Guide"
                                description={
                                    <>
                                        Top Places in Manila Web Guide was my first website that i developed, a website that lists the most popular and rated places in Manila. This website has wonderful photographs and presentations of all the prominent places in Manila. includes a map locator to show tourists and users where the exact location is.
                                    </>
                                }
                                techStack={[htmlIcon, cssIcon, jsIcon]}
                                gitLink="https://github.com/HNDRIXX/Manila-Web-Guide/blob/main/-%20Sample%20Pictures/01.Index.jpg"
                            />
                        </FadeInSection>
                </div>
            </section>
            <section id="contacts" className="section">
                <div className="container">
                    <FadeInSection>
                        <div className='contacts'>
                            <h1><b>GET IN TOUCH</b><span id='text-line'>&nbsp;//</span></h1>
                            <p>Passionate about programming and problem-solving, I'm excited to hear about your project – get in touch, and let's embark on a collaborative coding adventure.</p>

                            <div className='contacts-button'>
                                <a href='https://www.facebook.com/patrick.lofranco' target="_blank" rel="noopener noreferrer"><img src={fbIcon}/></a>
                                <a href='https://mail.google.com/mail/?view=cm&to=patricklofranco49@gmail.com' target="_blank" rel="noopener noreferrer"><img src={gmailIcon}/></a>
                                <a href='https://github.com/HNDRIXX' target="_blank" rel="noopener noreferrer"><img src={ghubIcon} id='gitImg'/></a>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>
            </div>
            {/* <section>
            </section> */}
            <ScrollComponent />
        </> 
    )   
}

export default App