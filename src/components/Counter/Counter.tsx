"use client"
import { useState } from "react"

export const Counter = ()=>{
    const [count, setCount] = useState(0)
    const handleDecrement = ()=>{
        setCount(count-1)
    }
    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleReset = ()=>{
        setCount(0)
    }
    return(
        <>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button><br />
            <button onClick={handleReset}>Resetar</button>
        </>
    )
}