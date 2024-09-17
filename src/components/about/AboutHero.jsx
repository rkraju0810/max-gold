import React from 'react';

const AboutHero = ({ title, description, imageurl }) => {
  return (
    <div className="relative">
      <img src={imageurl} className="object-cover w-screen h-screen" alt="hero background" />
      <div className="absolute lg:top-0 lg:left-0 lg:mt-20 top-0 left-0 p-4">
        <h1 className="text-yellow-300 lg:text-7xl text-5xl lg:-mt-8 lg:p-14 mt-4 p-4">{title}</h1>
        <p className="text-white lg:text-3xl text-2xl ml-5 lg:ml-14 lg:-mt-8 mt-4 lg:font-bold">{description}</p>
      </div>
    </div>
  );
};

const AboutHeroSection = () => {
  return (
    <AboutHero
      title="Max gold"
      description="We are the best choice for you to sell your precious gold jewelry and get instant cash"
      imageurl="https://img.freepik.com/free-photo/elegant-gemstone-necklace-shines-with-rare-sophistication-generated-by-ai_188544-10736.jpg?ga=GA1.1.8839009.1724129443&semt=ais_hybrid"
    />
  );
};

export default AboutHeroSection;