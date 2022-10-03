import React from 'react'
import presentation from '../assets/inspiration/presentation.mp4';

function Presentation() {
  return (

      <iframe className="w-screen h-screen  aspect-video" src={presentation} alt="Video de presentaiton">Presentation</iframe>

  )
}

export default Presentation