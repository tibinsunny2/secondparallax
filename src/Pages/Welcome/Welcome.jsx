import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import MainPage from '../Mainpage/Mainpage';
import './Welcome.css'
import { pictures } from '../../Services/Services';
function Welcome() {
  return (
    <div>
    <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
    <ParallaxLayer offset={0} speed={0.25}>
      <div class="animation_layer parallax" id="artback"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.3}>
      <div class="animation_layer parallax" id="mountain"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={-0.1}>
      <div class="animation_layer parallax" id="logoland"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.3}>
      <div class="animation_layer parallax" id="jungle1"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.35}>
      <div class="animation_layer parallax" id="jungle2"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.5}>
      <div class="animation_layer parallax" id="jungle3"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.45}>
      <div class="animation_layer parallax" id="jungle4"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.40}>
      <div class="animation_layer parallax" id="manonmountain"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={0.35}>
      <div class="animation_layer parallax" id="jungle5"></div>
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.25}>

  {
    pictures.images.map((item)=>{
    return(  <div className="cardimages" key={item.id}>
              <img className="image" src={item.url} />
            </div>)
    })
  }
    </ParallaxLayer>
  </Parallax>
  <MainPage/>
  </div>
  )
}

export default Welcome