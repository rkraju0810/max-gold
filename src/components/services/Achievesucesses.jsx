import React from 'react';

const servicesData = [
  {
    title: 'Cash for Gold',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/AchieveSuccess/goldcoin.png',
    buttonText: 'View More',
  },
  {
    title: 'Door Step Services',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/AchieveSuccess/delivery.png',
    buttonText: 'View More',
  },
  {
    title: 'Release Pledged Gold',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/AchieveSuccess/person.png',
    buttonText: 'View More',
  },
];

const ServiceCard = ({ title, description, image, buttonText, isReverse }) => {
  return (
    <div
      className={`flex md:gap-8 gap-0 flex-col md:flex-row items-center justify-center bg-white rounded-lg mb-6 md:mb-8 ${
        isReverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-auto rounded-lg object-cover"
      />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-bold lg:text-2xl md:text-xl text-lg mb-4 border-b-2 border-black inline-block">
            {title}
          </h3>
          <p className="md:text-lg lg:text-xl text-base text-gray-600 mb-4 mr-0 lg:mr-32">{description}</p>
        </div>
        <div>
          <button className="md:text-lg shadow-md text-sm text-white bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Achievesucesses = () => {
  return (
    <div className="container mx-auto p-5 md:p-10">
      <h1 className="text-center mb-6 md:mb-10 font-bold lg:text-4xl md:text-3xl text-lg">
        Preparing Students to Achieve Success
      </h1>
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          buttonText={service.buttonText}
          isReverse={index % 2 === 0} 
        />
      ))}
    </div>
  );
};

export default Achievesucesses;
