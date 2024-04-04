import React from 'react'
import ghBtn from '../images/ghBtn.png'
type gbProps = {
    link:string
}
const GitBtn = (props:gbProps)=>(
    <a className="gh-btn" href={props.link} target="_blank">
        <span className="gh-icon" style={{backgroundImage:`url(${ghBtn})`}}></span>
        <span>star</span>
    </a>)
export default GitBtn