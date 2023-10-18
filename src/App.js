import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Courses from './components/Courses';
import Benefits from './components/Benefits';
import Membership from './components/Membership';
import Testimonial from './components/Testimonial';
import Getstarted from './components/Getstarted';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      
     <Header/>
     <Hero />
     <Courses/>
     <Benefits/>
     <Membership/>
     <Testimonial/>
     <Getstarted/>
     <Footer/>
    </div>
  );
}

export default App;
