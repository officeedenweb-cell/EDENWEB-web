'use client';

import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { currency } from '@/states/constants';
import { investors } from '../data';
import Image from 'next/image';
import 'swiper/css';
import Link from 'next/link';
const Clients = () => {
  const swiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
      576: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      }
    },
    wrapperClass: 'align-items-center'
  };
  return <section>
      <div className="inner-container mx-auto text-center">
        <span className="fs-1 fw-semibold text-primary">{currency}3,058,886</span>
        <h4 className="my-4 fw-semibold">Witness your business flourish and sparkle</h4>
        <p className="w-75 mx-auto mb-4">
          With our expert guidance and support, you can watch your business bloom and glow, achieving new heights of success and radiating prosperity.
        </p>
        <Link className="btn btn-lg btn-dark icon-link icon-link-hover" href="">
          Calculate growth
          <BsArrowRight className="bi" />
        </Link>

        <div className="position-relative my-6 w-75 mx-auto">
          <hr />
          <p className="position-absolute heading-color fw-semibold top-50 start-50 translate-middle bg-body px-4">Our Investors</p>
        </div>

        <Swiper {...swiperOptions}>
          {investors.map((investor, idx) => <SwiperSlide key={idx}>{investor.image && <Image src={investor.image} className="grayscale" alt="client-img" />}</SwiperSlide>)}
        </Swiper>
      </div>
    </section>;
};
export default Clients;