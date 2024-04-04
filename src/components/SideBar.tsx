import React, { useState } from 'react'
import {ReactComponent as Menu} from '../images/menu.svg'
import {ReactComponent as Close} from "../images/menu_open.svg"
import {Link} from 'react-router-dom'


const SideBar = ()=>{
    const [active, setActive] = useState(false);
    let [dropDown,setDropDown] = useState(false);
    return (
        <div className="nav-item">
            {!active? 
                <div className="icon-button" onClick = {()=>setActive(true)}><Menu/></div>:
                <nav className="side-nav">
                    <ul className="verticle-menu">
                        <li className="icon-button" id="close-menu" onClick={()=>setActive(false)}><Close/></li>
                        <hr/>
                        <li><Link to="/blog">Blog</Link></li>
                        <hr/>
                        <li className="drop-down" onMouseOver={()=>setDropDown(true)} onMouseLeave={()=>{setDropDown(false)}}>
                            App
                            <div className="drop-down-item" style={{height:dropDown?"150px":"0px",top:"0",left:"-130px"}}>
                                <ul>
                                    <li><Link to="bill-spliter">Bill Spliter</Link></li>
                                </ul>
                            </div>
                        </li>
                        <hr/>
                        <li><Link to="/contact">Contact</Link></li>
                        <hr/>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            }
        </div>
    )
}
export default SideBar;
