import React from 'react';

export default function EventsDetails() {
  return (
    <div className="py-[100px] px-4 md:p-[100px] flex flex-col ">
      <h3 className="font-playfair text-center mb-3 text-[#17090B] font-bold text-3xl capitalize md:text-4xl">
        We craft experiences that leave guests smiling and stories to tell.
      </h3>
      <h2 className="font-lato text-lg">
        We design and manage events across every scale and style so leaders and
        hosts can focus on people and moments while we handle the many moving
        parts. From intimate private celebrations to large corporate launches
        and public product activations we build a clear concept and translate it
        into a detailed plan that covers venue selection production logistics
        vendor coordination and guest care. Our teams combine creative direction
        with pragmatic planning so every visual choice and every technical
        requirement works together to tell the intended story and keep the
        schedule on track. We take responsibility for supplier contracts permits
        timelines and contingency plans and we staff each event with experienced
        managers who oversee delivery on the day of the event. For hybrid and
        streamed experiences we design the online journey alongside the physical
        experience so remote guests enjoy a polished connection to the program.
        After the event we provide a review with attendee feedback data and
        practical recommendations so future editions perform even better.
      </h2>
      <h3 className="mt-10 font-lato font-bold text-lg">What we do.</h3>
      <ol className="list-disc p-4">
        <li className="font-lato text-lg">
          Full event concept & creative direction (theme, visual mood &
          storytelling)
        </li>
        <li className="font-lato text-lg">
          Venue scouting, negotiation & floorplan design
        </li>
        <li className="font-lato text-lg">
          Vendor management: catering, AV, staging, talent, decor
        </li>
        <li className="font-lato text-lg">
          On-site management & guest experience (check-in, ushers, hospitality)
        </li>
        <li className="font-lato text-lg">
          Virtual & hybrid event production (streaming, moderation)
        </li>
        <li className="font-lato text-lg">
          Post-event reporting and attendee feedback analysis
        </li>
      </ol>
      <h3 className="mt-10 font-lato font-bold text-lg">Our process</h3>
      <ol className="list-decimal p-4">
        <li className="font-lato text-lg">
          Discover Kickoff call, objectives, budget and audience profile.
        </li>
        <li className="font-lato text-lg">
          Create Concept, moodboard and preliminary floorplan.
        </li>
        <li className="font-lato text-lg">
          Plan Vendor selection, contracts, logistics and production schedule.
        </li>
        <li className="font-lato text-lg">
          Execute On-site coordination, guest management, technical run.
        </li>
        <li className="font-lato text-lg">
          Review Wrap report, attendee feedback and ROI summary.
        </li>
      </ol>
    </div>
  );
}
