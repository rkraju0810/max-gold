import React from 'react';

// Reusable ImageCard component to handle circular images
const ImageCard = ({ src, alt, shape }) => {
  return (
    <div className={`w-52 h-52 overflow-hidden rounded-full ${shape}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

// About Us section
const Aboutus = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/7974/pexels-photo.jpg?cs=srgb&dl=pexels-life-of-pix-7974.jpg&fm=jpg",
      alt: 'Image 1',
    },
    {
      src: 'https://c0.wallpaperflare.com/preview/425/253/79/boy-holding-lighting-crackers.jpg',
      alt: 'Image 2',
    },
    {
      src: 'https://t4.ftcdn.net/jpg/01/92/03/87/360_F_192038732_Ya7WJtbrWqaj1oiE8qyXLAbfpOUy1ywP.jpg',
      alt: 'Image 3',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMoj1NUG54nLrRdjHMddkl1HcPB37M8nLJcg&s',
      alt: 'Image 4',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10">
      {/* Images Section */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-2">
        {images.map((image, index) => (
          <ImageCard 
            key={index} 
            src={image.src} 
            alt={image.alt}
            shape={ 
              index === 0
                ? "rounded-tl-lg"
                : index === 1
                ? "rounded-full"
                : index === 2
                ? "rounded-full" 
                : "rounded-br-lg"
            } 
          />
        ))}
      </div>

      {/* Right section: Text content */}
      <div className="mt-4 ml-10 md:mt-0 md:w-1/2 text-center md:text-left">
        <p className="text-black text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
