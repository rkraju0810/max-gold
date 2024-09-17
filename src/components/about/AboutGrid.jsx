import React from 'react';

// Reusable ImageGrid component
const ImageGrid = ({ images }) => {
  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-auto h-full rounded-lg object-cover "
            />
            <p className="mt-4 w-screen h-auto text-center text-black font-semibold text-2xl lg:w-96 lg:h-96 md:w-80 md:h-80">
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component using the reusable ImageGrid
const AboutGrid = () => {
  const imagesData = [
    {
      src: 'https://tiimg.tistatic.com/fp/1/008/341/wedding-wear-attractive-design-gold-necklace-set-467.jpg',
      alt: 'Gold Necklace',
      caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      src: 'https://www.topconsumerreviews.com/best-gold-selling-sites/images/body-cash-for-gold-1.jpg',
      alt: 'Cash in Hand',
      caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return <ImageGrid images={imagesData} />;
};

export default AboutGrid ;
