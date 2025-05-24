import { useState } from 'react';
import TileHoverEffect from './TileHoverEffect';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#969696]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{fontFamily : 'Big Shoulders , sans-serif'}}
        className="w-full flex justify-between items-center md:py-4 py-0 text-left md:text-[4rem] text-[2rem] font-light focus:outline-none"
      >
        {title}
        <span className={`text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          {/* Using an HTML entity for arrow */}
          <svg
            className="md:w-8 md:h-8 w-6 h-6 lg:w-12 lg:h-12"
            fill="none"
            stroke='#969696'
            strokeWidth="3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>

      {isOpen && (
        <div style={{ fontFamily: 'Lexend, sans-serif' }} className="p-4 text-gray-600 md:text-xl text-sm">
          {content}
        </div>
      )}
    </div>
  );
};

const WhatIOffer = ({ services }) => {
  return (
    <section className="w-full mx-auto p-8">
      <h2 style={{fontFamily : 'Big Shoulders , sans-serif'}} className="md:text-[7rem] text-[4rem] font-bold text-center mb-3 md:mb-8">What I Offer You?</h2>

      <div className='md:w-3/4 w-full mx-auto'>
      {services.map((service, index) => (
        <TileHoverEffect key={index}>
          <AccordionItem
            
            title={service.title}
            content={service.content}
          />
        </TileHoverEffect>
      ))}
      </div>
    </section>
  );
};

export default WhatIOffer;
