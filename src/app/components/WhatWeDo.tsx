import React from 'react';

const WhatWeDo = () => {
  const services = [
    {
      title: "Awareness",
      icon: (
        <svg className="w-16 h-16 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      ),
      services: [
        "Clinics",
        "Health Seminars",
        "Med Fairs",
        "Community Engagements"
      ]
    },
    {
      title: "Resources",
      icon: (
        <svg className="w-16 h-16 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v4l3 3"></path>
        </svg>
      ),
      services: [
        "Food Program",
        "Midwife Care",
        "Testing",
        "Prenatal care",
        "Baby products",
        "Baby Formula",
        "Transport"
      ]
    },
    {
      title: "Prevention",
      icon: (
        <svg className="w-16 h-16 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      ),
      services: [
        "Pre and Post Op Care",
        "Job Creation",
        "Birthing Centers",
        "Midwife Assignment"
      ]
    }
  ];

  return (
    <section id="what-we-do" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 uppercase">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-primary-light p-6 rounded-lg">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              
              <ul className="list-disc list-inside text-white">
                {service.services.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#donate"
            className="inline-block bg-secondary text-white px-10 py-3 rounded-full font-medium hover:bg-opacity-90 transition uppercase"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;