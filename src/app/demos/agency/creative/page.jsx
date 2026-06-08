import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Footer2 from '@/components/footer/Footer2';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Blogs from './components/Blogs';
import React from 'react';
const page = () => {
  return <>
      <TopNavigationBar showSignUp showBuyNow menuProps={{
      showContactUs: true,
      showResourceMenu: true,
      ulClassName: 'mx-auto'
    }} />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Features />
        <Blogs />
      </main>

      <Footer2 />
    </>;
};
export default page;