import React from "react";

const TestimonialsCard = ({ testimonial = {} }) => {
  return (
    <div
      className=" p-6 rounded-md min-w-[434px] max-w-md"
      style={{ backgroundColor: 'rgba(215, 215, 215, 0.36)' }}
    >
      <p>{testimonial.message}</p>
      <div className="flex flex-col justify-end items-end mt-3">
        <h1>- {testimonial.name}</h1>
        <h3>{testimonial.designation}</h3>
      </div>
    </div>
  );
};

export default TestimonialsCard;
