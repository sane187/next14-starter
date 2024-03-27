"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NextNavigation = () => {
        const router = useRouter()
    const handelClick = ()=>{
        console.log("clicked")
        router.push('/')
    }
  return (
    <>
    {/* <Link href='/' prefetch={false}>NextNavigation</Link> */}
    <button onClick={handelClick}>hello world</button>
    </>
  )
}

export default NextNavigation