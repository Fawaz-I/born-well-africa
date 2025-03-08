import React from 'react';
import Image from 'next/image';

const Quote = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-start">
              <span className="text-6xl text-secondary leading-none">&ldquo;</span>
              <blockquote className="mt-2">
                <p className="text-xl md:text-2xl font-medium text-secondary mb-4">
                  What&apos;s essential to life? A healthy mother.
                </p>
                <footer className="text-gray-700">
                  <cite>
                    <span className="font-semibold">Faridat A. Ilupeju,</span> Founder Born Well Africa
                  </cite>
                </footer>
              </blockquote>
              <span className="text-6xl text-secondary leading-none self-end">&rdquo;</span>
            </div>
          </div>
          <div className="relative h-40 w-40 md:h-60 md:w-60">
            <Image 
              src="/main.svg"
              alt="Born Well Africa Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;