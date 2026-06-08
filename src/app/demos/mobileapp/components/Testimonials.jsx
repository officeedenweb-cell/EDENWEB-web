'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import { testimonials } from '../data';
import TestimonialCard from './TestimonialCard';
const Testimonials = () => {
  useEffect(() => {
    const grid = document.querySelector('.demo-grid');
    if (grid) {
      const iso = new Isotope(grid, {
        itemSelector: '.demo-grid-item',
        percentPosition: true,
        layoutMode: 'masonry'
      });
      setTimeout(() => {
        iso.arrange({});
      }, 100);
    }
  }, []);
  return <section className="pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-5">
          <h2 className="mb-0">What people say about us</h2>
        </div>

        <Row className="row-cols-sm-2 row-cols-lg-3 g-4 g-lg-5 demo-grid" data-isotope='{"layoutMode": "masonry"}'>
          {testimonials.map((testimonial, idx) => <Col key={idx} className="demo-grid-item">
              <TestimonialCard testimonial={testimonial} />
            </Col>)}
        </Row>
      </Container>
    </section>;
};
export default Testimonials;