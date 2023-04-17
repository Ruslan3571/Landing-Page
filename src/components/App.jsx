import About from './About';
import Home from './Home';
import Work from './Work';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import ScrollButton from '../utilites/ScrollButton';

export const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  );
};
