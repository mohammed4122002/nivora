
import About from './About/Page';
import Faqs from './Fags/Page';
import Hero from './Hero/Page'
import MarqueeSldier1 from './MarqueeSlider1/Page';
import Expertise from './Our-Expertise/Page';
import Testimonial from './Testimonial/Page';
import WorkBanner from './Work-Benner/Page';

const Index = () => {
  return (
    <div>
        <Hero/>
        <MarqueeSldier1/>
        <About/>
        <WorkBanner/>
        <Expertise/>
        <Testimonial/>
        <Faqs/>
    </div>
  )
}

export default Index;