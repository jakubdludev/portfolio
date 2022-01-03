import React, {useRef, useEffect, useState} from 'react'
import Slide from '../components/slide'


export default function Portfolio() {

    useEffect(() => {
        window.scrollTo(0,0)
        return () => {
        }
    }, [])


    return (
        <div className="h-screen" >
                  <div
        data-aos="zoom-out"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      > 
          <div className="text-2xl mt-9 mx-auto">Portfolio</div>
          <div className='card'>
            <div>
                <p className='my-3'>Under Construction</p>
                <p className='text-sm'>This section will showcase some of the projects that I have worked on in the past. Please bear with me while it is being constructed.</p>
            </div>
          </div>
      </div>
        </div>
    )
}
