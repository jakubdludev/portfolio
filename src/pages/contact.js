import React, {useRef, useEffect, useState} from 'react'
import Slide from '../components/slide'


export default function Contact() {


  useEffect(() => {
    window.scrollTo(0,0)
    return () => {
    }
}, [])

    const intro1_ref = useRef()

    return (
        <div className="h-screen">
        <div
        data-aos="zoom-out"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > 
      <div className="mt-9 text-2xl">Contact</div>
      <div className="mx-2 mt-2">You can email me at jakubdlu.dev@gmail.com. Alternatively you can find and connect with me me on LinkedIn</div>,
      </div>
        </div>
    )
}
