"use client"

import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [name,setName] = useState("subin")
    const NameChanger = (input)=>{
        setName(input)

    }
  return (
    <>
<h2>My name is {name} </h2>
<div className="space-x-3">
<button className="bg-blue-700 text-white rounded-full px-6 py-2 hover:bg-blue-500" onClick={()=>NameChanger("Ram")}>Ram</button>
<button className="bg-blue-700 text-white rounded-full px-6 py-2 hover:bg-blue-500" onClick={()=>NameChanger("Hari")}>Hari</button>
<button className="bg-blue-700 text-white rounded-full px-6 py-2 hover:bg-blue-500" onClick={()=>NameChanger("Shyam")}>Shyam</button>
<button className="bg-blue-700 text-white rounded-full px-6 py-2 hover:bg-blue-500" onClick={()=>NameChanger("Subin")}>Subin</button>
</div>


   
    
    </>
  )}