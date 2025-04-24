import './App.css'
import Nav  from './components/Nav'
import Cont from './components/Cont'
import Hiw from './components/Hiw'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {

  useEffect(() => {
    Aos.init({
      once:"true",
      offset:200,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
  });

  return (
    <>

      <Nav/>
      <main id="main-content">
      <Cont/>
      <Hiw/>
      <Testimonial/>
      <Footer/>
      </main>
    </>
  )
}

export default App
