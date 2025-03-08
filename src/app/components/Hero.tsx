import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-primary min-h-screen flex items-center">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            {/* This is where an image would go in the design */}
          </div>
          <div className="order-1 md:order-2 text-white max-w-lg ml-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Empower the Womb,{' '}
              <span className="block">
                Empower the{' '}
                <span className="text-secondary">World!</span>
              </span>
            </h1>
            <p className="mb-6">
              Championing Maternal Wellness: From Nigeria to the World. We&apos;re humanizing the Path to Safe Deliveries and Child Care.
            </p>
            <Link 
              href="#learn-more" 
              className="inline-flex items-center text-secondary font-semibold"
            >
              Read more{' '}
              <span className="ml-2 border-b border-secondary w-10"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;