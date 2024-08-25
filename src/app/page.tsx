import React from 'react'
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import Works from '@/components/Home/Works';
import Services from '@/components/Home/Services';
import PreLoading from '@/components/Home/PreLoading';

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Works/>
      <Services/>
    </>
  );
}
