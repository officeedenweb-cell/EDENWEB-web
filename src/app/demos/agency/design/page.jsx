import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Footer4 from '@/components/footer/Footer4';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import Blogs from './components/Blogs';
import React from 'react';
const page = () => {
  return <>
      <TopNavigationBar menuProps={{
      showContactUs: true,
      ulClassName: 'ms-xl-5'
    }} navClassName="px-lg-5" darkButton={{
      text: "Let's Connect"
    }} containerFluid data-bs-theme="dark" />

      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Testimonials />
        <Awards />
        <Blogs />
      </main>

      <Footer4 />
    </>;
};
export default page;