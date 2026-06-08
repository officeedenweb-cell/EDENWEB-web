import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Footer1 from '@/components/footer/Footer1';
import Hero from './components/Hero';
import Rating from './components/Rating';
import Services from './components/Services';
import About from './components/About';
import WorkFlow from './components/WorkFlow';
import Clients from './components/Clients';
import NewsLetter from './components/NewsLetter';
import ContactForm from './components/ContactForm';
import React from 'react';
const page = () => {
  return <>
      <TopNavigationBar menuProps={{
      showContactUs: true,
      showResourceMenu: true,
      ulClassName: 'mx-auto'
    }} showSignUp showBuyNow />
      <main>
        <Hero />
        <Rating />
        <Services />
        <About />
        <WorkFlow />
        <Clients />
        <NewsLetter />
        <ContactForm />
      </main>

      <Footer1 />
    </>;
};
export default page;