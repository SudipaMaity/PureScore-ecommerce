import React, { useEffect, useRef } from "react";
import TestimonialsCard from "../Card";
import "./Testimonials.css"; // Import the CSS file

const Testimonials = ({ testimonials }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const itemWidth = list.children[0].offsetWidth + 20;
    const totalWidth = itemWidth * testimonials.length * 2;

    list.style.width = `${totalWidth}px`;
  }, [testimonials]);

  return (
    <div className="testimonial-container">
      <div className="testimonial-list" ref={listRef}>
        {testimonials.map((details, i) => (
          <TestimonialsCard testimonial={details} key={i} />
        ))}
        {testimonials.map((details, i) => (
          <TestimonialsCard testimonial={details} key={i + testimonials.length} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
