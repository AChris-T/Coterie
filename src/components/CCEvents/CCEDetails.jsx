import React from 'react';

export default function CCEDetails() {
  return (
    <div className="py-[100px] px-4 md:p-[100px] flex flex-col ">
      <h3 className="font-playfair text-start  mb-3 text-[#17090B] font-bold text-3xl capitalize md:text-4xl">
        We design cultural and community events that celebrate heritage, amplify
        local voices and unite communities.
      </h3>
      <h2 className="font-lato text-lg">
        Our approach is rooted in respect, care, and authenticity. We begin by
        listening to community leaders, artists, and stakeholders to understand
        traditions, priorities, and needs. From there, we co-create events that
        reflect local voices and deliver lasting benefits. We curate performers,
        presenters, and vendors who represent the community, and we design
        accessible, safe environments that welcome participants of all ages and
        abilities. Wherever possible, we source materials and services locally
        to support small businesses and reduce waste. We also document stories
        and learning so each event leaves a legacy that continues beyond the day
        itself. From sponsorship support and permits to training and capacity
        building, we equip community groups with the tools to sustain their own
        future initiatives. The result: events that feel rooted in place and
        leave behind resources, skills, and connections for tomorrow.
      </h2>
      <h3 className="mt-10 font-lato font-bold text-lg">What we do.</h3>
      <ol className="list-disc p-4">
        <li className="font-lato text-lg">
          Community engagement & stakeholder outreach{' '}
        </li>
        <li className="font-lato text-lg">
          Cultural programming and artist curation{' '}
        </li>
        <li className="font-lato text-lg">
          Accessible event design, crowd management & safety planning{' '}
        </li>
        <li className="font-lato text-lg">
          Venue selection sensitive to cultural needs{' '}
        </li>
        <li className="font-lato text-lg">
          Sponsorship & grant writing support (where applicable){' '}
        </li>
        <li className="font-lato text-lg">
          Documentation: photography, oral histories, and post-event archives{' '}
        </li>
      </ol>
      <h3 className="mt-10 font-lato font-bold text-lg">Our approach</h3>
      <ol className="list-decimal p-4">
        <li className="font-lato text-lg">
          <b>Listen First:</b> Engage communities early and co-create.
        </li>
        <li className="font-lato text-lg">
          <b>Representation Matters:</b> Hire local artists and cultural
          custodians.
        </li>
        <li className="font-lato text-lg">
          <b>Accessibility & Safety:</b> Design for inclusion across ability and
          age.{' '}
        </li>
        <li className="font-lato text-lg">
          <b>Sustainability:</b> Minimise waste and encourage local sourcing.{' '}
        </li>
        <li className="font-lato text-lg">
          <b>Legacy:</b> Capture stories, create archives and materials that
          outlive the day.{' '}
        </li>
      </ol>
    </div>
  );
}
