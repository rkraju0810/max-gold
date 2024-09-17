import React from 'react';

const WhyMaxGold = () => {
  const features = [
    {
      imageSrc: '/whyIcons/hand.png',
      title: 'Affordability',
      description: 'DIGIGOLD offers the best price for all products compared to live market rates.'
    },
    {
      imageSrc: '/whyIcons/growth.png',
      title: 'Systematic growth',
      description: 'With our no lock-in period SIP in Gold, you can achieve systematic growth of your investment.'
    },
    {
      imageSrc: '/whyIcons/guaranteed.png',
      title: 'Guaranteed Purity',
      description: 'We assure to serve you the purest 24 karat Products with 99.9% purity and BIS Hallmark.'
    },
    {
      imageSrc: '/whyIcons/safe-box.png',
      title: 'Security',
      description: 'We serve our customers with the best & trusted vault keeper that provides security for transactions and storage.'
    },
    {
      imageSrc: '/whyIcons/24-hours.png',
      title: 'Accessibility',
      description: 'DIGIGOLD provides all services for its customers 24x7 Globally.'
    },
    {
      imageSrc: '/whyIcons/gold-bar.png',
      title: 'High Liquidity',
      description: 'With DIGIGOLD you can buy, sell, gift, and store anywhere, anytime - online.'
    }
  ];

  return (
    <div className="relative bg-[#ec1a44] text-white py-16 px-4 md:py-32 md:px-6">
      {/* Top-right png */}
      <img
        src="/whyIcons/leaf.png"
        alt="Top right decoration"
        className="-rotate-180 absolute -top-8 -right-0 w-32 h-32 md:w-48 md:h-48 object-contain"
      />

      {/* Bottom-left png */}
      <img
        src="/whyIcons/leaf.png"
        alt="Bottom left decoration"
        className="absolute -bottom-8 left-0 w-32 h-32 md:w-48 md:h-48 object-contain"
      />

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Why Max Gold</h2>
      <div className="w-20 h-1 bg-white mx-auto mb-12"></div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start p-4"
          >
            {/* Left-side image */}
            <div className="w-16 h-16 flex-shrink-0 mr-5">
              <img src={feature.imageSrc} alt={feature.title} className="w-full h-full object-contain" />
            </div>

            {/* Right-side title and description */}
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base font-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMaxGold;