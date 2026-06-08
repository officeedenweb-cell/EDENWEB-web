import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DigitalJourney from './components/DigitalJourney';
import Steps from './components/Steps';
import Projects from './components/Projects';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Blogs from './components/Blogs';
import Footer3 from '@/components/footer/Footer3';
import React from 'react';
import TourVideo from './components/TourVideo';
const page = () => <>
    <TopNavigationBar menuProps={{
    showContactUs: true,
    ulClassName: 'mx-auto'
  }} navClassName="px-lg-5" darkButton={{
    text: 'Free consultation'
  }} showFloatingSearch containerFluid data-bs-theme="dark" />

    <main>
      <Hero />
      <About />
      <Services />
      <DigitalJourney />
      <Steps />
      <TourVideo />
      <Projects />
      <Statistics />
      <Testimonials />
      <CTA />
      <Blogs />
    </main>

    <Footer3 />
  </>;
export default page;