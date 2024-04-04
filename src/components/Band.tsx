import React, { FC, useEffect, useRef, useState } from 'react'
import Background from './Background'
import Title from './Title'
import violet from '../images/violet.png'
import { THRESHOLD } from './NavBar'

type bandProps={
    children?:FC
}
const getHeight = ():string=>{
    return (window.innerWidth*0.55-71).toString()+"px"
}
const Band = (props?:bandProps)=>{
    let [largeSize,setLargeSize] = useState<boolean>(()=>window.innerHeight>THRESHOLD)
    const ref=useRef<HTMLDivElement | null>(null)
    const onResize = ()=>{
        if(ref){
            if(ref.current){ref.current.style.height = getHeight()}
        }
        if(window.innerWidth < THRESHOLD) setLargeSize(false);
        else setLargeSize(true);
    }
    useEffect(()=>{
        window.addEventListener("resize",onResize)
        return ()=>window.removeEventListener("resize", onResize)
        }
    ,[])
    return (
        <div className="band-wrapper" ref={ref} style={{width:"100%",height:getHeight() }}>
             <Background image={violet} width='100%' height="" />
            <div className="banner-title">
                {props?.children? <props.children/> : <Title style={{}} largeSize={largeSize}/>}
            </div>
        </div>
    )
}
export default Band;