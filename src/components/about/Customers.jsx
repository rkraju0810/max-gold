"use client";
import React from 'react'

const Customers = () => {


  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
      alt: "Person 1"
    },
    {
      image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
      alt: "Person 2"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80",
      alt: "Person 3"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
      alt: "Person 4"
    },
    {
      image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
      alt: "Person 5"
    }
  ];

  const stars = [
    "https://www.svgrepo.com/show/513354/star.svg",
    "https://www.svgrepo.com/show/513354/star.svg",
    "https://www.svgrepo.com/show/513354/star.svg",
    "https://www.svgrepo.com/show/513354/star.svg",
    "https://www.svgrepo.com/show/513354/star.svg"
  ];






  return (
    <div>


<div className="flex items-center justify-center gap-x-1 p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20bg-rose-300 sm:bg-white md:bg-rose-300 lg:bg-rose-300 xl:bg-rose-300">
      <div className="flex -space-x-2 sm:-space-x-2">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            className="inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white"
            src={testimonial.image}
            alt={testimonial.alt}
          />
        ))}
      </div>
      
      <div className="border-none sm:border-l-2 sm:border-black sm:pl-0 md:ml-5">
        <div className="flex">
          {stars.map((star, index) => (
            <img
              key={index}
              className="w-4 sm:w-5"
              src={star}
              alt="stars-icon"
            />
          ))}
        </div>
        <div>
          <h3 className="text-xs font-medium sm:text-sm pt-1">Loved by 100+ Customers</h3>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Customers