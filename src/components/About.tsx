import React, { useEffect } from 'react'
import Band from './Band'
import NavBar from './NavBar'
import GitBtn from './GitButton'
const About = ()=>{
    useEffect(()=>{
        window.scrollTo({
            top:window.innerHeight*0.3,
            behavior:"smooth"
        })
    },[])
    return (
        <div className="about">
            <NavBar/>
            <Band/>
            <article className="article paper">
                <h2>About Zhan Wang</h2>
                <p className="text-start">Hi, I am Zhan /dʒæn/ Wang, or you can call me Ben. </p>
                <p className="text-start">I am a multi-paradigm programmer, keen to dig out the philosophy behind the programming languages.</p>
                <p className="text-start">I am strive to be a front end engineer, delivering the most attractive UI to customers</p>
                <br/>
                <div className="main">
                    <ul>
                        <li>
                            <dt>Basic Info</dt>
                            <dd><strong>Name: </strong><span>(Ben)Zhan Wang</span></dd>
                            <dd><strong>Graduation: </strong><span>The University of Melbourne(Master of IT)</span></dd>
                            <dd><strong>Blog: </strong><span><a target="_blank" href="https://zhan006.github.io/"> https://zhan006.github.io/</a></span></dd>
                            <dd><strong>Github: </strong><span><a target="_blank" href="https://github.com/zhan006">https://github.com/zhan006</a></span></dd>
                        </li>
                        <li>
                            <dt>Experience</dt>
                            <h3>The University of Melbourne (2020.3 - 2020.7)</h3>
                            <h4>Java Tutor&Marker</h4>
                            <ul className="exp">
                                
                                <li>
                                    <div className="circle"></div>
                                    <h5>Lab Demonstration</h5>
                                    <p>Facilitated weekly tutorials delivering key Java programming knowledge and focusing on objectoriented programming concepts.</p>
                                    <p>Supported Master’s students to develop essential programming skills through intuitive code demos and interactive Q&As.</p>
                                    <p>Coordinated with the academic professor, preparing teaching materials including assignments anduser guides.</p>
                                </li>
                            </ul>
                            <h3>Profware (2019.12 - 2020.6)</h3>
                            <h4>Front End Developer</h4>
                            <ul className="exp">
                                <li>
                                    <div className="circle"></div>
                                    <h5>Profsearch Website</h5>
                                    
                                    <p>
                                        Led a group of three talented team members in a tight timeline. Developed a website using
                                    ReactJS for the University of Melbourne to map research students with available projects and
                                    academic supervisors.
                                    </p>
                                    <p>
                                        In charge of implementation of functionalities of the websites. Made responsive and user-friendly 
                                        web interface according to blueprint and enabled communication to the back-end server via http requests
                                    </p>
                                    <p>
                                        Facilitated effective team communication in an Agile environment. Maintained an AWS server to
                                        ensure system stability and security
                                    </p>
                                </li>
                            </ul>
                            <h3>BMW Group China (2018.10 - 2019.1)</h3>
                            <h4>Software Engineer Intern</h4>
                            <ul className="exp">
                                <li>
                                    <div className="circle"></div>
                                    <h5>New staff welcome system</h5>
                                    <p>Developed a system timely showing welcome messages to new-comming staff using Python</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h5>Traffic Information Tracker</h5>
                                    <p>Developed a system using python web-crawling technology to track the traffic information in Beijing</p>
                                    <p>Showed statistic information of the travel time between two offices in Beijing</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h5>Office information dashboard</h5>
                                    <p>Developed a system using python collecting and showing air quality and weather information on office monitors</p>
                                </li>
                            </ul>
                            <h3>Personal Project</h3>
                            <ul className="exp">
                                <li>
                                    <div className="circle"></div>
                                    <h5>React Video Player</h5>
                                    <GitBtn link="https://github.com/zhan006/RPlayer"/>
                                    <p>A customised HTML5 video player that can be used in React</p>
                                    <p>All components were purely hand-made with smooth visual effect</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h5>Anytime Chat</h5>
                                    <p>A framework for quick deployment of real-time chatting written in Node. Communication is enabled by Socket.io and database is managed by a customised DB manager customised from mongoose</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h5>Joinme</h5>
                                    <GitBtn link="https://github.com/zhan006/JoinMe"/>
                                    <p>An android social app for people to find and join nearby activities </p>
                                    <p>Enabled users authentication and real-time communication using Firebase</p>
                                    <p>GPS was enabled to help recommend and find activities based on users location</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h5>Picthub</h5>
                                    <GitBtn link="https://github.com/zhan006/SharedCanvas"/>
                                    <p> A desktop software developed with Java allowing users from different devices to draw, write, and
                                        chat on a shared whiteboard </p>
                                    <p>Proposed the RMI-based software structure that significantly improved users experience by
                                        reducing latency and improving system stability</p>
                                    <p>Visualised system architecture in user-centric infographics and delivered a report to explain
                                        features, design, and implementation details.</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h5>Personal Blog</h5>
                                    <p>
                                        A pure hand-crafted personal blog (What you are seeing now) developed with React/Typescript
                                    </p>
                                    <p>Serverless one-page app displaying my blogs and simple apps</p>
                                    
                                </li>
                            </ul>
                        </li>
                        <li>
                            <dt>Skills Set</dt>
                            <h3>Front End</h3>
                            <ul className="exp">
                                <li>
                                    <div className="circle"></div>
                                    <h4>HTML/CSS</h4>
                                    <p>Able to write semantic HTML and make animations using CSS tricks</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h4>JavaScript</h4>
                                    <p>Have a deep understanding of important features of JavaScript and knowledge of ESMA6 syntax</p>
                                    <p>Proficient in React, knowing basics of JQuery, Angular and Vue</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h4>TypeScript</h4>
                                    
                                </li>
                            </ul>
                            <h3>Back End</h3>
                            <ul className="exp">
                                <li>
                                    <div className="circle"></div>
                                    <h4>Python</h4>
                                    <p>Able to do any jobs using Python</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h4>Java</h4>
                                    <p>Good knowledge of Java syntax and important features. Able to hand on any java software project</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h4>Node</h4>
                                    <p>Good knowlegde of mongoDb, express</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h4>Node</h4>
                                    <p>Good knowlegde of mongoDb, express</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h4>Elixir</h4>
                                    <p>Basic knowlegde of syntax and important feature</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h4>Scala</h4>
                                    <p>Basic knowlegde of syntax and important feature</p>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <h4>C++</h4>
                                    <p>Basic knowlegde of syntax and important feature</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
               
            </article>

        </div>
    )
}
export default About;