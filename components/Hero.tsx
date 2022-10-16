import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import Lingkaran from "../components/Lingkaran"
type Props = {}

export default function Hero({}: Props) {
 const [text, count] = useTypewriter({
    words: [
        "My Name is Reza Faisal",
        "I love Coding",
        "Back-End Developer"
    ],
    loop : true,
    delaySpeed: 2000,
 })
 
    return (
      <div className='h-screen flex flex-col space-y-8 item-center justify-center text-center overflow-hidden'>
      <Lingkaran />
      <h1>
      <span>{text}</span>
      <Cursor cursorColor="#FFFFFF" />
      </h1>
      </div>
  )
}