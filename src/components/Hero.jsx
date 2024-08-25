import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Hero() {

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5
    })
  }, [])
  
  return (
    <section className='relative w-full bg-black nav-height'>
      <div className='flex-col w-full h-5/6 flex-center'>
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>
      </div>
    </section>
  )
}

export default Hero