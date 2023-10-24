
import { Counter } from "../Counter/Counter"
import { useState } from "react"

export const List = async()=>{
    const response = await fetch('http://localhost:8000/pizza/sizes')
  const list = await response.json()
    return(
        <ul>
           {list.map(({id,value,text})=>(
                <li key={id}>
                    {value} {text}
                    <br />
                    
                    
                    <hr />
                </li>
           ))}
        </ul>
    )
}