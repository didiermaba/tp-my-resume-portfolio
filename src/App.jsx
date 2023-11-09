import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facts from './components/Facts';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main id="main">

{/* <!-- ======= About Section ======= --> */}
     <About />

{/* <!-- ======= Facts Section ======= --> */}
     <Facts />

{/* <!-- ======= Skills Section ======= --> */}
     <Skills />

{/* <!-- ======= Resume Section ======= --> */}
     <Resume />
{/* <!-- ======= Portfolio Section ======= --> */}
     <Portfolio />
{/* <!-- ======= Services Section ======= --> */}
     <Services />

{/* <!-- ======= Testimonials Section ======= --> */}
     <Testimonials />

{/* <!-- ======= Contact Section ======= --> */}
     <Contact />

              </main>
     <Footer />
    </div>
  );
};

export default App;
