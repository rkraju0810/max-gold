import React from 'react'

const ServicesHero = ({image}) => {
  return (
    <div>
      <img src={image} className='w-screen h-screen object-cover'/>
    </div>
  )
}
const Hero = () => {
  return(
    <ServicesHero
    image = "https://img.freepik.com/free-photo/elegant-gemstone-necklace-shines-with-rare-sophistication-generated-by-ai_188544-10736.jpg?ga=GA1.1.8839009.1724129443&semt=ais_hybrid"
    />
  )
}
export default Hero;