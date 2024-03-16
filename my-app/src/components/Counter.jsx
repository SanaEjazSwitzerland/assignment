import React from 'react';
import { useState,useEffect} from 'react';

function Counter() {
    const [count,setCount]=useState(0)
    let updateCount=()=>{
        setCount(count + 1)
    }
    useEffect (()=>{
        console.log(count)
    })
function changetext(e){
    setmyName(e.target.value)
}
}
 return (
    <input type="text" onchange={myname} value={myname} />
  )
  console.log()
 }

export default Counter