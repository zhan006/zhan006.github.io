import React from 'react'
type buttonProps = {
    image:string,
    link:string,
    name:string
}
const LinkBtn = (props:buttonProps)=>{
    return (
    <a className="link-btn" href={props.link} target="_blank">
        <span className="link-icon" style={{backgroundImage:`url(${props.image})`}}></span>
        <span>{props.name}</span>
    </a>)
}
export default LinkBtn;