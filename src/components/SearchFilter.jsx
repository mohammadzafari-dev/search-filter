import React, { useState } from 'react'
import "../App.css"
function SearchFilter() {
    const fruits = [
        "apple",
        "mango",
        "cucumber",
        "watermelon",
        "pineapple",
        "Melon",
        "pumpkin",
        "carrot"
    ]
    const [f,setf] = useState([...fruits])
    const [val,setVal] = useState("")
    const handeleF = (test)=>{       
        const res = fruits.filter((e,i,g)=>{return e.substring(0,test.length) == test } )
        setf(res)
    }
    const handelReset = ()=>{
        setf([...fruits])
        setVal("")
    }
  return (
    <div className='SearchFilter'>
        <input value={val}  className='input' onChange={(e)=>{handeleF(e.target.value),setVal(e.target.value)}} type="text" />
        <div className='counter'>
            {f.map((e,i)=>{ return <p key={i}>{e}</p>})}
        </div>
        <button className='btnreset' onClick={handelReset} >reset</button>
    </div>
  )
}

export default SearchFilter