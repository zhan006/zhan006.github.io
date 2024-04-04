import React from 'react'
import photo from '../images/photo.jpg'
type titleProps = {
    style:Object,
    largeSize:boolean
}
const Title=(props:titleProps)=>{
    
    return (
        <>
        <div style={props.style}>
        <span className="title" style={{animationDelay:"0.1s"}}>
            B
        </span>
        <span className="title" style={{animationDelay:"0.2s"}}>
            E
        </span>
        <span className="title"style={{animationDelay:"0.3s"}}>
            N
        </span>
        </div>
        
        {props.largeSize&&<div className="photo" >
            <img src={photo} alt="" style={{position:'relative',maxHeight:'100%',right:'40px'}}/>
        </div>}
        </>
    )
}
export default Title;