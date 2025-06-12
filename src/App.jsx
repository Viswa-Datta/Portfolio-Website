import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Quote from '@/components/Quote';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <About />
      <Experience />
      <Skills />
      <Gallery />
      <Contact />
    </>
  );
}
