import { useState } from 'react';
import TileHoverEffect from './TileHoverEffect';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#969696]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{fontFamily : 'Big Shoulders , sans-serif'}}
        className="w-full flex justify-between items-center py-4 text-left text-[4rem] font-light focus:outline-none"
      >
        {title}
        <span className={`text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          {/* Using an HTML entity for arrow */}
          <svg
            className="w-8 h-8"
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
        <div style={{ fontFamily: 'Lexend, sans-serif' }} className="p-4 text-gray-600 text-xl">
          {content}
        </div>
      )}
    </div>
  );
};

const WhatIOffer = ({ services }) => {
  return (
    <section className="w-full mx-auto p-8">
      <h2 style={{fontFamily : 'Big Shoulders , sans-serif'}} className="text-[7rem] font-bold text-center mb-8">What I Offer You?</h2>

      <div className='w-3/4 mx-auto'>
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
