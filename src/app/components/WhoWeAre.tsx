import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  const images = [
    {
      src: "/images/mother-child-care.jpg",
      alt: "Mother and child healthcare - Mother interacting with a young child"
    },
    {
      src: "/images/healthcare-team.jpg",
      alt: "Healthcare professionals - Three women healthcare workers smiling together"
    },
    {
      src: "/images/baby-care.jpg",
      alt: "Baby in crib with caretaker - Caregiver attending to an infant in a hospital crib"
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
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gray-800 opacity-10 z-10"></div>
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
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