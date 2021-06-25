import React, { useEffect } from "react"
import { useState, useMemo } from "react"

export default function App(){
    const [number, setNumber]=useState(0)
    const [dark, setDark] = useState(false)
    const [doubleNumber, setDoubleNUmber]=useState(0)
    
    const themeStyles=useMemo(()=>{
        return {
            backgroundColor:dark?'black':'white',
            color:dark?'white':'black'
        }
    },[dark])  

    // const doubleNumber=slowFunction(number)
    useEffect(()=>{
        console.log("hello")
        setDoubleNUmber(slowFunction(number))
    },[themeStyles])


    return(
        <div style={{width:"200px",margin:"auto"}}>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(number){
    for (let i=0;i<1000000000;i++){}
    return number*2
}