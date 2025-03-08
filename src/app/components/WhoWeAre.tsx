import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  const images = [
    {
      src: '/images/mother-child-care.png',
      alt: 'Mother and child healthcare - Mother interacting with a young child',
    },
    {
      src: '/images/healthcare-team.png',
      alt: 'Healthcare professionals - Three women healthcare workers smiling together',
    },
    {
      src: '/images/baby-care.png',
      alt: 'Baby in crib with caretaker - Caregiver attending to an infant in a hospital crib',
    },
  ];

  return (
    <section id='who-we-are' className='bg-primary py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-12 text-3xl font-bold uppercase text-white md:text-4xl'>
          Who We Are
        </h2>

        <div className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative h-64 overflow-hidden rounded-lg shadow-lg'
            >
              <div className='absolute inset-0 z-10 bg-gray-800 opacity-10'></div>
              <div className='relative h-full w-full'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                />
              </div>
            </div>
          ))}
        </div>

        <div className='mx-auto max-w-3xl'>
          <p className='text-lg leading-relaxed text-white'>
            Born Well Africa is dedicated to eradicating maternal mortality by
            ensuring access to quality maternal care for new and expecting
            mothers in Nigeria. We believe that every mother deserves safe and
            compassionate care throughout their pregnancy and childbirth
            journey, regardless of their geographical location or socioeconomic
            background. Through strategic partnerships, community engagement,
            and innovative solutions, we aim to empower new and expecting
            mothers pre, during and 1 year post delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
