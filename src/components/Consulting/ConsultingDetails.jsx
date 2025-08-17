import React from 'react';

export default function ConsultingDetails() {
    return (
       <div className="py-[100px] px-4 md:p-[100px] flex flex-col ">
      <h3 className="font-playfair text-start mb-3 text-[#17090B] font-bold text-3xl capitalize md:text-4xl">
        Strategy, production planning and creative direction to make your next
        initiative resonate
      </h3>
      <h2 className="font-lato text-lg">
        Our consulting offering is aimed at organisations and creative teams
        that want to reduce uncertainty and get faster results when planning
        events and brand activations. We start by uncovering the core objectives
        audience expectations and budget realities and then build a pragmatic
        strategy with measurable outcomes and an executable timeline. The work
        can include production audits vendor negotiation and budget optimization
        training for internal teams and playbooks that turn one off projects
        into repeatable processes. We provide ready to use templates and hands
        on coaching so staff gain confidence running complex productions and so
        decision makers can see clear options and trade offs. Clients often
        engage us for short term bursts to unblock planning or for embedded
        support that guides a full project from first brief to final report. Our
        approach values clarity simplicity and measurable impact so every
        recommendation connects to a business outcome.
      </h2>
      <h3 className="mt-10 font-lato font-bold text-lg">What we do.</h3>
      <ol className="list-disc p-4">
        <li className="font-lato text-lg">
          Event strategy & objectives alignment
        </li>
        <li className="font-lato text-lg">
          Brand activation concept & audience targeting{' '}
        </li>
        <li className="font-lato text-lg">
          Production audits & vendor negotiation training{' '}
        </li>
        <li className="font-lato text-lg">
          Budget optimization and cost-saving opportunities{' '}
        </li>
        <li className="font-lato text-lg">
          Training: team process, on-site roles & run-sheet best practice{' '}
        </li>
        <li className="font-lato text-lg">
          Risk assessment & contingency planning{' '}
        </li>
      </ol>
      <h3 className="mt-10 font-lato font-bold text-lg">Our Deliverables</h3>
      <ol className="list-disc p-4">
        <li className="font-lato text-lg">Strategic brief & measurable KPIs</li>
        <li className="font-lato text-lg">
          Optimized event budget (line-item)
        </li>
        <li className="font-lato text-lg">
          Vendor shortlist and negotiation guidance{' '}
        </li>
        <li className="font-lato text-lg">
          Production timeline and role matrix{' '}
        </li>
        <li className="font-lato text-lg">
          Training session recordings & templates{' '}
        </li>
      </ol>
    </div>
  
  );
}
