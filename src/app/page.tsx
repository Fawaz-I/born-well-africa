import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import WhoWeAre from './components/WhoWeAre';
import WhoWeHelp from './components/WhoWeHelp';
import WhatWeDo from './components/WhatWeDo';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <WhoWeAre />
      <WhoWeHelp />
      <WhatWeDo />
      {/* Footer is included in the layout.tsx file */}
    </>
  );
}