import React, { useEffect, useRef } from 'react';

export default function SubText() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let start = null;
    let position = window.innerWidth; // start from right
    const entrySpeed = 3; // pixels per frame (fast entry)
    const scrollSpeed = 1; // pixels per frame (slow scroll)
    let isEntering = true;

    function step(timestamp) {
      if (!start) start = timestamp;

      if (isEntering) {
        position -= entrySpeed; // fast
        if (position <= 0) {
          isEntering = false;
        }
      } else {
        position -= scrollSpeed; // slow
        if (position <= -el.offsetWidth) {
          position = window.innerWidth; // reset
          isEntering = true;
        }
      }

      el.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, []);
  return (
    <div className="flex flex-col gap-10 w-[100%]">
      <div className="bg-[#722F37] overflow-hidden whitespace-nowrap">
        <h3
          ref={marqueeRef}
          className="uppercase px-4 font-medium font-lato text-white"
          style={{ whiteSpace: 'nowrap', willChange: 'transform' }}
        >
          Coterie Experience is a research-led event and consulting brand that
          believes hospitality, celebration, and service should feel as good as
          they perform. Whether we're advising a hotel on guest experience or
          designing a milestone event, we blend creative strategy with
          continuous improvement to deliver moments that linger. Grounded in
          academic research and driven by heart, we bring precision, warmth, and
          intentionality to everything we curate.
        </h3>
      </div>
      <div className="flex gap-10 lg:gap-20 w-full flex-col md:flex-row justify-center px-4 lg:px-[118px]">
        <div className="flex flex-col gap-6">
          <h3 className="text-[#17090B] font-bold font-playfair text-2xl md:text-[40px]">
            Vision Statement
          </h3>
          <p className="font-lato text-base">
            To become a trusted consultancy and event architecture firm, shaping
            inclusive, expressive, and high-impact experiences that elevate
            hospitality, cultural celebration, and service excellence, one
            meaningful moment at a time.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-[#17090B] font-bold font-playfair text-2xl md:text-[40px]">
            Mission Statement
          </h3>
          <p className="font-lato text-base">
            To blend academic insight and creative strategy in delivering event
            concepts and consulting solutions that support service improvement,
            customer experience innovation, and personalized celebration,
            bridging research with real-world transformation.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
