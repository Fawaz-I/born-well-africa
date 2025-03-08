import React from 'react';
import Image from 'next/image';

const Quote = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-medium text-secondary mb-4">
                <span className="text-secondary font-bold">&ldquo;What&apos;s essential to life? A healthy mother.&rdquo;</span>
              </p>
              <footer className="text-gray-700 italic">
                <cite>
                  <span className="font-semibold">Faridat A. Ilupeju,</span> Founder Born Well Africa
                </cite>
              </footer>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative h-48 w-48 md:h-80 md:w-80">
              <Image 
                src="/images/born-well-africa-logo.png"
                alt="Born Well Africa Logo with mother and baby silhouette"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;