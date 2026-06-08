import Footer5 from '@/components/footer/Footer5';
import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import About from './components/About';
import Approaches from './components/Approaches';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
const page = () => {
  return <>
      <TopNavigationBar showSignUp showBuyNow menuProps={{
      ulClassName: 'mx-auto',
      showResourceMenu: true,
      showContactUs: true
    }} />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CaseStudies />
        <Approaches />
        <Team />/
        <CTA />
      </main>
      <Footer5 />
    </>;
};
export default page;