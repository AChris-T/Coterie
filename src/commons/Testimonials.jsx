import React, { useEffect, useState } from 'react';
import { ArrowRight, Backtick } from '../assets/icons';

const testimonials = [
  {
    quote:
      'Their recap video of our product launch felt like watching a story unfold—from the moment the doors opened to our team’s final applause. It reminded us why we started in the first place and helped us share that excitement with investors.',
    author: 'Adekummi Waltzer',
    avatar: '/images/user1.jpg',
  },
  {
    quote:
      'Their recap video of our product launch felt like watching a story unfold—from the moment the doors opened to our team’s final applause. It reminded us why we started in the first place and helped us share that excitement with investors.',
    author: 'Adekummi Waltzer',
    avatar: '/images/user1.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];
  return (
    <div>
      <div className="clientImage md:h-[548px] px-3 gap-5 lg:gap-0 flex flex-col lg:flex-row lg:px-[100px] py-[75px]  w-full">
        <div className="lg:border-y lg:border-t lg:border-l flex justify-center items-center h-full  border-[#FFFFFF4D]">
          <h3 className="md:px-[50px] text-center lg:text-start text-2xl font-extrabold lg:w-[600px] text-white md:text-[60px]">
            What our clients are saying
          </h3>
        </div>
        <div className="relative w-full font-lato  h-full justify-center items-center mx-auto py-12 px-4 text-center text-white bg-[#17090BB2]  rounded-br-xl rounded-tr-xl">
          <div className="flex justify-end w-full mb-8">
            <Backtick />
          </div>
          <p className="italic text-lg leading-relaxed mb-6">
            “{current.quote}”
          </p>

          <div className="flex items-center justify-center gap-2">
            <img
              src={current.avatar}
              alt={current.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium">{current.author}</span>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#722F37]' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
