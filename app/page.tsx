import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Journey from "./components/Journey";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import BackToTop from "./components/BackToTop";


export default function Home(){
  return(
    <div>

      <Navbar />

      <div id="home"><FadeIn><Hero /></FadeIn></div>
      <div id="features"><FadeIn><Features /></FadeIn></div>
      <div id="about"><FadeIn><Testimonials /></FadeIn></div>
      <FadeIn><Journey /></FadeIn>
      <div id="contact"><FadeIn><Footer /></FadeIn></div>
      <BackToTop />
      

    </div>
  );
}



























        

            
        
            
        