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
              According to the World Health Organization, in 2017 Nigeria&apos;s maternal mortality rate was estimated at 917 per 100, 000 live births.
            </p>
          </div>
          
          {/* Center Column - Nigeria Map with Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/nigeria-maternal-stats.png"
                alt="Map of Nigeria showing maternal mortality statistics with mother and child silhouette and upward trending arrow"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
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