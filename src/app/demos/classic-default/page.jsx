import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import React from 'react';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer1 from '@/components/footer/Footer1';
const page = () => {
  return <>
      <TopNavigationBar menuProps={{
      showMegaMenu: true,
      showContactUs: true,
      ulClassName: 'mx-auto'
    }} showBuyNow showSignUp />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer1 />
    </>;
};
export default page;