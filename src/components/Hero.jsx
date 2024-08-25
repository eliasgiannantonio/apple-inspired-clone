import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState, useEffect } from 'react'
import { heroVideo, smallHeroVideo} from "../utils"

function Hero() {

  /* Importo useState para comprobar el estado del width y asi reproducir el video indicado para cada resolución */
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    }
    else {
      setVideoSrc(heroVideo)
    }
  }
  /*Añado un listener que detecta cuando el tamaño de la ventana cambia (evento resize). Dependiendo del ancho de la ventana, cambia la fuente del video que se va a reproducir. */
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet)
    
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet)
    }
  }, [])
  
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5
    })
    gsap.to("#cta", {
      y: -50,
      delay: 2,
      opacity: 1
    })
  }, [])
  
  return (
    <section className='relative w-full bg-black nav-height'>
      <div className='flex-col w-full h-5/6 flex-center'>
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>
        <div className='w-9/12 md:w-10/12'>
          <video className='pointer-events-none'autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
      <div id="cta" className='flex flex-col items-center translate-y-20 opacity-0'>
        <a href="#highlights" className='btn'>Comprar</a>
        <p className='text-xl font-normal'>Desde USD $199 por mes o USD $999</p>
      </div>
    </section>
  )
}

export default Hero