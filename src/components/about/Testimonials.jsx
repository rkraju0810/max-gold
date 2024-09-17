import React from 'react';

const testimonials = [
  {
    client: "Google",
    testimonial: "@gather_place is the best. We've moved all of our meetings to this new platform and it's made them all better and efficient.",
    name: "Adam Smith",
    position: "Web Designer at Spotify",
    image: "https://via.placeholder.com/50"
  },
  {
    client: "Google",
    testimonial: "@gather_place is the best. We've moved all of our meetings to this new platform and it's made them all better and efficient.",
    name: "Adam Smith",
    position: "Web Designer at Spotify",
    image: "https://via.placeholder.com/50"
  },
  {
    client: "Google",
    testimonial: "@gather_place is the best. We've moved all of our meetings to this new platform and it's made them all better and efficient.",
    name: "Adam Smith",
    position: "Web Designer at Spotify",
    image: "https://via.placeholder.com/50"
  }
];

// Testimonial Card Component
const TestimonialCard = ({ client, testimonial, name, position, image }) => (
  <div className="testimonial-card p-6 bg-green-100 rounded-lg shadow-lg mb-6 w-full max-w-lg">
    <div className="flex items-center mb-4">
      <img src={image} alt={`${name}`} className="w-12 h-12 rounded-full mr-4" />
      <h3 className="text-xl font-bold text-blue-500">{client}</h3>
    </div>
    <p className="text-gray-700 mb-4">{testimonial}</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-10 h-10 rounded-full mr-4" />
      <div>
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-xs text-gray-500">{position}</p>
      </div>
    </div>
  </div>
);

// Main Component to Render Testimonials
const Testimonials = () => (
  <div className="testimonials-container p-8 bg-gray-900 text-white">
    <h2 className="text-3xl font-bold mb-8">Hear what our clients say</h2>
    <p className="text-lg mb-6">Don’t just take our word for it. Here are a few (of many) reviews of GatherPlace.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          client={testimonial.client}
          testimonial={testimonial.testimonial}
          name={testimonial.name}
          position={testimonial.position}
          image={testimonial.image}
        />
      ))}
    </div>
  </div>
);

export default Testimonials;
