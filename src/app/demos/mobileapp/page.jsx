import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Footer7 from '@/components/footer/Footer7';
import Hero from './components/Hero';
import About from './components/About';
import Steps from './components/Steps';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import React from 'react';
const page = () => {
  return <>
      <TopNavigationBar menuProps={{
      showContactUs: true,
      showDocs: true,
      ulClassName: 'mx-auto'
    }} darkButton={{
      text: 'Get Application!',
      size: 'sm'
    }} />
      <main>
        <Hero />
        <About />
        <Steps />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer7 />
    </>;
};
export default page;