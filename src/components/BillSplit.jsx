import React, { useEffect, useRef } from 'react'
import '../budget.css'
function evener(neg,pos,transaction){
    if(neg.length==1 && pos.length==1){
        transaction.push(`${neg[0].name} => ${pos[0].name} $${pos[0].budget}`)
        return transaction
    }
    neg.sort((a,b)=>a.budget-b.budget)
    pos.sort((a,b)=>b.budget-a.budget)
    if(neg.length>=1){
        if(neg[0].budget+pos[0].budget>0){
            transaction.push(`${neg[0].name} => ${pos[0].name} $${-neg[0].budget}`)
            pos[0].budget = neg[0].budget+pos[0].budget
            neg = neg.slice(1)
            return evener(neg,pos,transaction)
        }
        else if(neg[0].budget+pos[0].budget<0){
            transaction.push(`${neg[0].name} => ${pos[0].name} $${pos[0].budget}`)
            pos = pos.slice(1)
            neg[0].budget = neg[0].budget+pos[0].budget
            return evener(neg,pos,transaction)
        }
        else{
            transaction.push(`${neg[0].name} => ${pos[0].name} $${pos[0].budget}`)
            pos = pos.slice(1)
            neg = neg.slice(1)
            return evener(neg,pos,transaction)

        }
    }
}
function init(){
    const participants = document.getElementById("participant-container")
    const output = document.getElementById("output-container")
    const addParticipant = document.getElementById("add")
    const split = document.getElementById('split')
    addParticipant.addEventListener("click",(e)=>{
        console.log("add")
        let participant =  document.createElement("div")
        participant.className = "participant"
        participant.innerHTML = "<div class='info'><label>name</label><input class='name' type='text'></input></div><div class='info'><label>paid</label><input class='paid' type='number'></input></div><button id='del' onclick='{this.parentElement.remove()}'>delete</button>"
        participants.insertBefore(participant,addParticipant)
        })
    split.addEventListener("click",()=>{
        let people = []
        let names = Array.from(document.getElementsByClassName("name"))
        let paids = Array.from(document.getElementsByClassName("paid"))
        output.innerHTML=""
        names.map((n,i)=>{
            people.push({name:n.value,paid:parseInt(paids[i].value)})
        })
        // console.log(people)
        let total = people.reduce((acc,cur)=>{return acc+cur.paid},0)
        // console.log(total)
        people.forEach(p=>p.own = total/people.length)
        people.forEach((p)=>{p.budget=p.paid-p.own})
        console.log(people)
        let negative = people.filter(p=>p.budget<0)
        let positive = people.filter(p=>p.budget>0)
        let transaction = []
        evener(negative,positive,transaction)
        console.log(transaction)
        transaction.forEach(t=>{
            let transaction = document.createElement('div')
            transaction.className = "transaction"
            transaction.innerHTML=t
            output.append(transaction)
    
        })
    })
}
const BillSplit = ()=>{
    const ref = useRef(null)
    useEffect(
        ()=>{
            if(ref) init()
        }
        ,[ref])
    return (
        <>
            <header><h2>Split Your Bills</h2></header>
            <h2>
                participants
            </h2>
            <div ref = {ref} id="participant-container">
                <div id="add"><b>+</b> add a new participant</div>
            </div>
            <button id="split">Split</button>
            <div id="output-container">

            </div>
        </>
    )
}
export default BillSplit