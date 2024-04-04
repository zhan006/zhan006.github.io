import React, { useEffect } from 'react'
import LinkBtn from './LinkBtn';
import Chika from '../images/chika.jpg'
import ghBtn from '../images/ghBtn.png'
import facebook from '../images/facebook.svg'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'
import NavBar from './NavBar'
import Band from './Band'
const Contact = ()=>{
    useEffect(()=>{
        window.scrollTo({
            top:window.innerHeight*0.3,
            behavior:"smooth"
        })
    },[])
    return (
        <>
            <NavBar/>
            <Band/>
            <div className="contact-card paper" style={{width:'300px',height:"600px",margin:"20px auto"}}>
                <img src={Chika} alt="" style={{width:"240px"}}/>
                    <h4>Catch Me</h4>
                    <div className="button-show">
                        <LinkBtn image={ghBtn} link={"https://github.com/zhan006"} name="zhan006"/>
                        <LinkBtn image={facebook} link={"https://www.facebook.com/profile.php?id=100018493895836"} name="zhan wang"/>
                        <LinkBtn image={linkedin} link={"https://www.linkedin.com/in/zhan-wang-703249164/"} name="Zhan wang"/>
                        <LinkBtn image={gmail} link="mailto:wzdx1024@gmail.com" name="Ben Wang"/>
                    </div>
            </div>
        </>
    )
}
export default Contact;