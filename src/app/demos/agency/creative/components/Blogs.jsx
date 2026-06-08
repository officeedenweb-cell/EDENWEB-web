'use client';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import { blogs } from '../data';
import BlogCard from './BlogCard';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
const Blogs = () => {
  const swiperOptions = {
    modules: [Autoplay, Navigation],
    autoplay: {
      delay: 2000
    },
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };
  return <section className="pb-0">
      <Container>
        <div className="inner-container text-center mb-4 mb-sm-6">
          <h2 className="mb-0">Our news & articles</h2>
        </div>

        <Swiper {...swiperOptions}>
          {blogs.map((blog, idx) => <SwiperSlide key={idx}>
              <BlogCard blog={blog} />
            </SwiperSlide>)}

          <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100">
            <Link href="" className="z-3 btn btn-dark btn-icon btn-lg rounded-circle mb-0 swiper-button-prev">
              <BsArrowLeft className="bi" />
            </Link>
            <Link href="" className="z-3 btn btn-dark btn-icon btn-lg rounded-circle mb-0 swiper-button-next">
              <BsArrowRight className="bi" />
            </Link>
          </div>
        </Swiper>
      </Container>
    </section>;
};
export default Blogs;