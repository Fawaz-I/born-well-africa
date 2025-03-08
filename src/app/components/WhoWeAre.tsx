import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  // We'll need to add actual images to the public folder for this section
  const images = [
    {
      src: "/images/who-we-are-1.jpg",
      alt: "Mother and child healthcare"
    },
    {
      src: "/images/who-we-are-2.jpg",
      alt: "Healthcare professionals"
    },
    {
      src: "/images/who-we-are-3.jpg",
      alt: "Medical supplies and support"
    }
  ];

  return (
    <section id="who-we-are" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 uppercase">
          Who We Are
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Image {index + 1}</p>
                {/* Replace with actual images when available */}
                {/* 
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                /> 
                */}
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-white text-lg leading-relaxed">
            Born Well Africa is dedicated to eradicating maternal mortality by ensuring access to quality maternal care for new and expecting mothers in Nigeria. We believe that every mother deserves safe and compassionate care throughout their pregnancy and childbirth journey, regardless of their geographical location or socioeconomic background. Through strategic partnerships, community engagement, and innovative solutions, we aim to empower new and expecting mothers pre, during and 1 year post delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;