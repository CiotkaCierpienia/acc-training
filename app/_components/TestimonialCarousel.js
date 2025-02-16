'use client'

import Testimonial from '@/app/_components/Testimonial';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function TestimonialCarousel({testimonials}) {
  return (<Carousel
    draggable={false}
    infinite
    autoplay={false}
    responsive={responsive}
    arrows={true}
  >
    {testimonials.map((testimonial) => (
      <div className="px-2" key={testimonial.id}>
        <Testimonial {...testimonial}  />
      </div>
    ))}
  </Carousel>);
}
