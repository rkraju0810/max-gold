import React from 'react';

// Reusable AboutUs component
const AboutUs = ({
  title,
  description,
  journeyTitle,
  journeyText,
  imageUrl,
  imageAlt
}) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#cb161c] to-[#ec1a44] p-8 ">
        {/* Flex layout for responsiveness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Title and Description */}

          <div className="order-1 lg:order-none">
            <h1 className="text-4xl font-extrabold text-[#ffbe46] mb-4">About Us</h1>
            <h2 className="text-3xl font-extrabold text-[#ffbe46] mb-4">{title}</h2>
            <p className="text-white text-2xl font-medium mb-8">
              {description}
            </p>
            <h3 className="text-3xl font-extrabold text-[#fcc71a] mb-2">{journeyTitle}</h3>
            <p className="text-white text-2xl font-medium">{journeyText}</p>
          </div>

          {/* Image */}
          <div className="flex justify-center order-3 lg:order-none">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="rounded-3xl shadow-lg   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main AboutUsSection content
const AboutUsSection = () => {
  return (
    <AboutUs
      title="Best gold buyer near me"
      description='Looking for "Gold buyer near me"? You have reached the right destination. Yes Max Gold is the most trusted Old gold buyer in Chennai offering most competitive market rates for your gold jewellery.'
      journeyTitle="Our Journey"
      journeyText="Max Gold's journey began with a vision to create a safe and reliable platform for individuals to navigate the intricate world of precious metals. Founded in 2006, we set out to offer a seamless and transparent experience in buying and selling gold, silver, and more. Over the years, our unwavering dedication to our core principles has earned us a reputation as a market leader in the industry."
      imageUrl="/RKImages/RAMYA.jpg"
      imageAlt="Max Gold Buyer"
    />
  );
};

export default AboutUsSection;
