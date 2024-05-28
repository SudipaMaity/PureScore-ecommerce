import React from 'react'
import Testimonials from '../../Components/Main-Component/Testimonial'
import { testimonialData } from '../../Utils/data'

const TestimonialSection = () => {
  return (
    <section className="pt-20 pb-28">
    <div>
      <div>
        <h1 className="w-full text-center font-atype text-4xl font-semibold">
          Testimonials
        </h1>
      </div>
      <div className="mt-20">
        <Testimonials testimonials={testimonialData} />
      </div>
    </div>
  </section>
  )
}

export default TestimonialSection