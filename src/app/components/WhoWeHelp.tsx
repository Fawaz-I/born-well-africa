"use client";

import React from 'react';
import Image from 'next/image';

const WhoWeHelp = () => {
  return (
    <section id="who-we-help" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase">
          Who We Help
        </h2>
        
        <p className="text-secondary font-semibold text-lg text-center mb-12">
          Expecting Mothers - New Mothers - Women who experienced child loss/Miscarriage - Teenage Mothers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column - First Statistic */}
          <div className="text-white">
            <p className="text-lg leading-relaxed">
              According to the World Health Organization, in 2017 Nigeria's maternal mortality rate was estimated at 917 per 100, 000 live births.
            </p>
          </div>
          
          {/* Center Column - Nigeria Map with Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 bg-primary-light rounded-lg flex items-center justify-center">
              {/* This will be replaced with the actual Nigeria map with mother/child and arrow */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <p className="text-white text-sm mb-4">Placeholder for Nigeria map</p>
                <p className="text-white text-sm mb-4">with mother/child silhouette</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right Column - Second Statistic */}
          <div className="text-white">
            <p className="text-lg leading-relaxed mb-4">
              This number increased by nearly 14% in 2020 and reached 1047 deaths.
            </p>
            <p className="text-lg leading-relaxed">
              Other reports from Nigeria say that it reached 2674 per 100,000 live births.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;