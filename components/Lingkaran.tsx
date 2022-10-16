import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function Lingkaran({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className=" absolute border border-[#FFFFF] rounded-full h-[250px] w-[250px] mt-52 animate-ping"/>
        <div className=" absolute border border-[#FFFFF] opacity-0 rounded-full h-[300px] w-[300px] mt-52 animate-pulse"/>
        <div className=" absolute border border-[#FFFFF] opacity-0 rounded-full h-[400px] w-[400px] mt-52 animate-pulse"/>
        <div className=" absolute border border-[#FFFFF] opacity-1 rounded-full h-[500px] w-[500px] mt-52 animate-pulse"/>
        <div/>
        <div />
    </div>
  )
}

export default Lingkaran