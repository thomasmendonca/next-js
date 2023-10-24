import Link from "next/link"
import { List } from "@/components/list/List"
import { Counter } from "@/components/Counter/Counter"
import { useState } from "react"
import { Button } from "@/components/Button/Button"
export default async function Pedido() {

  const response = await fetch('http://localhost:8000/pizza/sizes',{
    cache:"force-cache",
  })
  const data = await response.json()

  const handleClick= () =>{

  }

  return (
    <div>
      <h1>Pedido</h1>
      <div>
        {data.map(({id, flavours,size,slices,text})=>(  
          <p key={id}>
          {flavours},{size},{slices},{text}
        </p>
        ))}
        <List/>
        <Counter/>
         
         <div>
         {/* <Button onClick={handleClick}>Adicionar<Button/> */}
         </div>
       
      </div>
      <Link href="/">Home</Link>
    </div>
  )
}
