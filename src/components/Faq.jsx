import React, { useState } from 'react';

const faqs = [
  {
    q: 'How do I find the cheapest car hire deal?',
    a: 'Compare prices across platforms, book early, avoid airport surcharges when possible, and look for discount codes.',
  },
  {
    q: "What should I look for when I'm choosing a car?",
    a: 'Consider passenger capacity, luggage space, fuel policy, insurance coverage, and transmission type before choosing.',
  },
  {
    q: 'What is included in the rental price?',
    a: 'Most bookings include basic insurance and unlimited mileage; always check the fine print for fuel and additional driver fees.',
  },
  {
    q: 'Can I change or cancel my booking?',
    a: 'Cancellation and modification policies depend on the provider and rate type — check your confirmation or contact support.',
  },
  {
    q: 'Do you offer roadside assistance?',
    a: 'Many providers include roadside assistance; verify this when booking or add it if needed for peace of mind.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className='pb-30'>
      <div className="container pb-18.75">
        <h2 className='text-[30px] font-semibold text-center'>Frequently Asked Questions</h2>
        <p className='text-center'>Interdum et malesuada fames</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 divide-y">

        {faqs.map((item, index) => (
          <div key={index} className="p-5">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex items-center justify-between text-left transition-all duration-500 ease-in-out"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-gray-900 font-medium text-base">{item.q}</span>
              <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-700 ">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>

            {activeIndex === index && (
              <div id={`faq-${index}`} className="mt-3 text-gray-500 text-sm leading-relaxed ">
                {item.a}
              </div>
            )}
            
          </div>
        ))}
      </div>
    </section>
  );
}
