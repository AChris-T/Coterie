import React from 'react';

export default function WhyUs() {
  return (
    <div className="bg-[#FFF6F7] pt-[100px] pb-[200px]  flex flex-col gap-10 px-2 mt-10 w-full lg:px-[100px] lg:pb-[200px] lg:pt-[100px]">
      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-2  text-center max-w-[800px]">
          <h3 className="font-extrabold font-playfair text-4xl md:text-[60px]">
            Why Choose Us
          </h3>
          <p className="font-lato text-base">
            Our promise is simple: thoughtful events, timeless design, and a
            client journey that feels as good as the event itself.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-10">
          <div className="flex flex-col gap-8">
            <h3 className="text-[#17090B] text-2xl md:text-[40px] font-playfair font-bold">
              Boutique Attention to Detail
            </h3>
            <p className="font-lato text-[#17090B]">
              We believe in quality over quantity. By working with a select
              number of clients, we immerse ourselves fully in your story and
              vision. From the texture of your welcome cards to the mood of your
              closing moment, every detail is refined, personal, and
              intentional.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[#17090B] md:text-[40px] text-2xl font-playfair font-bold">
              Emotionally Resonant Design
            </h3>
            <p className="font-lato text-[#17090B]">
              Your event should feel like a memory before it even begins. We
              start by asking not just what you want to do, but how you want
              people to feel. From there, we curate every element, music,
              lighting, tone, and transitions to evoke that feeling with
              precision and care.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[#17090B] md:text-[40px] text-2xl  font-playfair font-bold">
              Elegant, Elevated Aesthetic{' '}
            </h3>
            <p className="font-lato text-[#17090B]">
              We don’t chase trends, we interpret your identity through a lens
              of timeless style. Our design language is understated but
              impactful, favoring clean lines, natural textures, and intentional
              composition. The result feels refined, contemporary, and
              unforgettable.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-[#17090B] md:text-[40px] text-2xl font-playfair font-bold">
              Client Centered Journey{' '}
            </h3>
            <p className="font-lato text-[#17090B]">
              Planning an event can feel overwhelming, so our process is built
              around clarity, collaboration, and care. From the first call to
              the final applause, we serve as both guide and creative partner.
              You’ll never feel rushed or left in the dark, only supported,
              heard, and empowered at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
