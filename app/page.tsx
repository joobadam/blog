import Blog from "./components/Blog";
import Help from "./components/Help";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";
import Video1 from "./components/Video1";
import Video2 from "./components/Video2";
import Video3 from "./components/Video3";
import Video4 from "./components/Video4";
import Footer from './components/Footer'
import Price from './components/Price' 


export default function IndexPage() {
  return (
   <main>
      <Hero/>
      <Intro/>
      <Video1/>
      <Help/>
      <Video2/>
       <Price/> 
      <Video3/>
      <Blog/>
      <Testimonials/>
      <Video4/>
      <Sponsors/>
      <Footer/> 
    </main>
  );
}
