import React from 'react';

export default function EventsDetails() {
  return (
    <div className="py-[100px] px-4 md:p-[100px] flex flex-col ">
      <h3 className="font-playfair text-center mb-3 text-[#17090B] font-bold text-3xl capitalize md:text-4xl">
        We craft experiences that leave guests smiling and stories worth telling{' '}
      </h3>
      <h2 className="font-lato text-lg">
        We craft experiences with insight, intention, and care. From private
        celebrations to corporate launches and cultural gatherings, every moment
        is shaped by a clear concept that blends creative direction with
        pragmatic planning. While you focus on people, we align the details;
        venue, logistics, vendors, and guest care so the story flows seamlessly.
        Grounded in research and driven by empathy, we bring structure and
        creativity together: managing contracts, securing permits, building
        contingency plans, and leading delivery with experienced managers. For
        hybrid and virtual formats, we curate seamless online journeys that
        mirror the energy of the live event. Afterward, we provide meaningful
        feedback and improvement insights, so every edition performs even
        better.
      </h2>
      <h3 className="mt-10 font-lato font-bold text-lg">What we do.</h3>
      <ol className="list-disc p-4">
        <li className="font-lato text-lg">
          Creative Direction: theme, storytelling, and visual mood
        </li>
        <li className="font-lato text-lg">
          Venue & Floorplan Design: scouting, negotiation, and layouts{' '}
        </li>
        <li className="font-lato text-lg">
          Vendor Management: catering, AV, staging, décor, and talent{' '}
        </li>
        <li className="font-lato text-lg">
          On-Site Experience: guest hospitality, check-in, and flow management{' '}
        </li>
        <li className="font-lato text-lg">
          Virtual & Hybrid Production: streaming, moderation, and engagement{' '}
        </li>
        <li className="font-lato text-lg">
          Post-Event Insights: attendee feedback and data-driven recommendations{' '}
        </li>
      </ol>
      <h3 className="mt-10 font-lato font-bold text-lg">Our process</h3>
      <ol className="list-decimal p-4">
        <li className="font-lato text-lg">
          Discover: Objectives, budget, and audience profile{' '}
        </li>
        <li className="font-lato text-lg">
          Create: Concept, storytelling, and mood board{' '}
        </li>
        <li className="font-lato text-lg">
          Plan: Vendor selection, contracts, and logistics{' '}
        </li>
        <li className="font-lato text-lg">
          Executive: Guest management, technical run, and live delivery{' '}
        </li>
        <li className="font-lato text-lg">
          Review: Wrap report, feedback, and ROI insights{' '}
        </li>
      </ol>
    </div>
  );
}
