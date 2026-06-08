'use client';

import { Container } from 'react-bootstrap';
import { BsQuote } from 'react-icons/bs';
import 'swiper/css';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { testimonials } from '../data';
import TestimonialCard from './TestimonialCard';
const Testimonials = () => {
  return <section className="pt-md-0 pb-0">
      <Container>
        <div className="bg-primary position-relative rounded p-4 pt-sm-5 px-sm-5 mb-n9">
          <span className="display-4 heading-color position-absolute top-0 start-0 mt-n4 mt-md-n5 ms-4">
            <BsQuote />
          </span>

          <Swiper className="overflow-hidden" modules={[Autoplay, Navigation, EffectFade]} autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }} pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}>
            {testimonials.map((testimonial, idx) => <SwiperSlide key={idx}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>)}

            <div className="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"></div>
          </Swiper>
        </div>
      </Container>
    </section>;
};
export default Testimonials;