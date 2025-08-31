import React from 'react';
import log from '../../assets/Images/Branding.png';
import culture from '../../assets/Images/culture.png';
import values from '../../assets/Images/values.png';

export default function OurStory() {
  return (
    <div className="flex flex-col gap-20 lg:px-[100px]  px-2 my-20">
      <div className="flex flex-col lg:flex-row gap-[53px]">
        <img
          src={log}
          alt=""
          className="flex-1 object-cover h-[600px] relative"
        />
        <div className="flex-1 gap-6 flex lg:-ml-56 w-full flex-col">
          <h3 className="text-[#17090B] font-bold text-3xl md:text-5xl font-playfair">
            Brand Story
          </h3>
          <p className="">
            Coterie Experience was born from a passion for service innovation,
            experience design, and inclusive celebration. Informed by academic
            research in hospitality and customer experience, the brand blends
            creative precision with analytical thinking to craft events and
            consulting strategies that are emotionally resonant and
            operationally effective. Whether supporting a luxury hotel to
            enhance its guest journey or designing a milestone celebration that
            tells a story, Coterie Experience aims to turn vision into curated
            moments that connect, inspire, and endure.
          </p>
        </div>{' '}
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-[53px]">
        <img
          src={culture}
          alt=""
          className="flex-1 object-cover h-[370px] lg:w-[36px] rounded-lg "
        />
        <div className="flex-1 gap-6 flex  w-full flex-col">
          <h3 className="text-[#17090B] font-bold text-3xl md:text-5xl font-playfair">
            Service Philosophy
          </h3>
          <p className="">
            We are more than planners, we are experience designers and service
            improvement partners. Our approach is informed by academic
            frameworks, stakeholder empathy, and creative problem-solving. We
            translate insights into strategies and strategies into meaningful
            experiences.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[53px]">
        <img
          src={values}
          alt=""
          className="flex-1 object-cover h-[370px] lg:w-[36px] rounded-lg "
        />
        <div className="flex-1 gap-6 flex  w-full flex-col">
          <h3 className="text-[#17090B] font-bold text-3xl md:text-5xl font-playfair">
            Our Values
          </h3>
          <p className="font-lato">
            <ol className="list-disc list-inside space-y-2">
              <li>
                <b>Research-Driven Creativity </b> — Evidence meets emotion in
                every plan and proposal
              </li>
              <li>
                <b> Affordable Elegance </b> — Impactful experiences don't
                require excess
              </li>
              <li>
                <b> Memorable Encounters </b> — Every engagement is designed to
                resonate
              </li>
              <li>
                <b> Human Centered Planning </b>— Rooted in empathy, reflection,
                and identity
              </li>
              <li>
                <b> Continuous Improvement </b> — Every client journey is a
                learning loop for better outcomes
              </li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}
