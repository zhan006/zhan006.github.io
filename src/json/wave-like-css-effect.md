---
title: wave-like css effect
date: 2020-06-18 21:52:47
tags:
---
It is quite common in a lot of html5 players that when clicking on video, an icon would flash in and out with a wave-like animation effect.There are multiple way implementing such kind of effect though, I figured out my own possible way.

CSS code
```[javascript]
.playpause{
  display:none;
  position: absolute;
  top:50%;
  left:50%;
  height:5.5em;
  width:5.5em;
  background-color: rgba(0,0,0,0.6);
  border-radius: 50%;
  transform:translate(-50%,-50%);
  animation: play-pause .3s ease 1;
}
@keyframes play-pause {
  from{transform:translate(-50%,-50%) scale(1) ;}
  to{transform:translate(-50%,-50%) scale(1.5);opacity: 0;}
}
```
React content
```
<button ref = {buttonRef} className = "playpause icon">
        {
            playStatus?
            <svg className="bi bi-play-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>:
            <svg className="bi bi-pause-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
        </svg>
                }
        </button>
```
onClickListener
```
const buttonRef = useRef(null)
const handleClickScreen = ()=>{
        if(playStatus) dispatch({type:PAUSE})
        else{dispatch({type:PLAY})}
        buttonRef.current.style.display = "block"
        setTimeout(()=>buttonRef.current.style.display = "none",300)

```

The process goes when clicking on the video, the icon will be decided by the playing status, if is playing, pause icon will be displayed and video then paused, and vice versa. The icon's display attribute then be set to "block", and animation effect goes making the icon scale up from 1 to 1.5 and opacity from 1 to 0 enabled by using keyframe. The process will last for 0.3 second after which the button's diplay attribute will be set to none. 
![](playpause.gif)

 
