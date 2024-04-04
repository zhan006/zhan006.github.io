---
title: menu toggle play
date: 2020-07-20 00:50:26
tags:
---
 During developing my video player, I have encountered a very interesting troublesome.
 
 I was about to creating a setting button by clicking which, a menu will pop up. And users can simply click any place to close the menu. The original implementation took use of redux. when the setting button is clicked, an action CLICKONSETTING will be dispatched and the state for controlling display of setting menu will set to be true.
 ```
 export function mouseState(state = {barVisible:false,volumeBarVisible:false,settingVisible:false},action){
    switch(action.type){
        case actionType.MOVEOVERVIDEO:{
            return {...state,barVisible:true}
        }
        case actionType.MOVEOUTVIDEO:{
            return {...state,barVisible:false}
        }
        case actionType.CLICKONVIDEO:{
            return {...state,barVisible:true,settingVisible:false}
        }
        case actionType.HOVERONVOLUME:{
            return {...state,volumeBarVisible:true}
        }
        case actionType.LEAVEVOLUME:{
            return {...state,volumeBarVisible:false}
        }
        case actionType.CLICKSETTING:{
            return {state,settingVisible:!state.settingVisible}
        }
        default:{
            return state
        }
    }
}
 ```
 Three actions "mousemove", "mouseleave","click" are binded to the playerRef which contains control bar, video and any video player related components. When the player listens the click action, the state for controlling display of menu will set to be false. Another click listener is binded to the setting button, when click on it, the visibility of menu will be toggled.


 During testing, when I click on the setting button, the menu displayed as expected, and clicking anywhere else can close the menu as expected as well. However, if the menu was open, and when I click the setting button, the menu was not closed.

 To find out the reason of this unexpected phenomenon, a console.log was added to the click listener callback function on the setting icon. When click on it, it always logs false indicating the previous state of menu visibility was always false. But why the menu was still displaying there?

 By inspecting the reducer again, I found there were only two actions that change the state of menu display. "CLICKON SETTING" only toggle the previous state, whilte "CLICK" on player will always set the state to be false. I added another console.log on the "CLICKONSETTING" action to see if the action was correctly dispatched and the previous state. However, whether the menu was displayed, the state were always falses.
 ```
 {barVisible: true, volumeBarVisible: false, settingVisible: false}
 ```
It was kind of weired. After a lot of testings, I confirmed something must happened before the case "CLICKONSETTING". But what can it be?

Inspecting the reducer again, there could be only one possibility, that was a "CLICK" action was also dispatched before the "CLICKONSETTING". It came to me that the "CLICK" action was binded to the whole player, which also contains the setting button. When I click the setting button, the player also listens to this action and turns settingVisible state to false. And when the action "CLICKONSETTING" comes, it toggle the state which was turned from false to true. That is the exact reason why the menu was always there when click the setting button.

A possible solution is to add a mask which has the same size of the player outside the player. And bind the toggle display action to the mask.

Problem end.
