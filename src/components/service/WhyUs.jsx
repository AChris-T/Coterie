import React from 'react';

export default function WhyUs() {
  return (
    <div className="bg-[#FFF6F7] pt-[100px] pb-[200px]  flex flex-col gap-10 px-2 mt-10 w-full lg:px-[100px] lg:pb-[200px] lg:pt-[100px]">
      <div className="flex flex-col gap-20 items-center">
        <h3 className="font-extrabold font-playfair text-4xl md:text-[60px]">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-10">
          <div className="flex flex-col gap-8">
            <h3 className="text-[#17090B] text-2xl md:text-[40px] font-playfair font-bold">
              Boutique Attention to Detail
            </h3>
            <p className="font-lato">
              We operate with a philosophy of quality over quantity. By taking
              on a limited number of clients at a time, we’re able to fully
              immerse ourselves in your story and vision. This allows us to
              refine every element — from the texture of your welcome cards to
              the mood of your closing moment — ensuring nothing is overlooked
              and everything is deeply personal.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[#17090B] md:text-[40px] text-2xl font-playfair font-bold">
              Boutique Attention to Detail
            </h3>
            <p className="font-lato">
              Your event should feel like a memory before it even begins. That’s
              why we start by asking not just what you want to do, but how you
              want people to feel. From there, we curate every detail — music,
              lighting, tone, transitions — to evoke that feeling with precision
              and care. We believe that true beauty lives in emotional
              resonance, not just aesthetics.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[#17090B] md:text-[40px] text-2xl  font-playfair font-bold">
              Elegant, Elevated Aesthetic{' '}
            </h3>
            <p className="font-lato">
              We don't chase trends — we interpret your identity through a lens
              of timeless style. Our design language is understated but
              impactful, favoring clean lines, natural textures, and intentional
              composition. Whether you're planning a branded summit or a
              candlelit dinner for fifty, the final result feels refined,
              contemporary, and unforgettable.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[#17090B] md:text-[40px] text-2xl font-playfair font-bold">
              Client-Centered Journey{' '}
            </h3>
            <p className="font-lato">
              We understand that planning an event can be as overwhelming as it
              is exciting — which is why we’ve built a process designed around
              clarity, collaboration, and care. From our first call to your
              final applause, we serve as both your guide and creative partner.
              You’ll never feel left in the dark or rushed through decisions —
              just supported, heard, and empowered every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
