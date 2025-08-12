import React from 'react';
import { journalEntries } from '../../Data/Index';
import { Link } from 'react-router-dom';

export default function JournalDetails() {
  return (
    <div className="py-[100px] px-4 lg:px-[200px] ">
      <div className="max-w-6xl mx-auto  grid">
        {journalEntries.map((entry) => (
          <div
            key={entry.id}
            className="flex flex-col md:flex-row  gap-2 md:gap-20 md:items-center border-[#722F37] border-t border-dotted pt-6"
          >
            <div className="">
              <p className="text-black font-lato font-medium">{entry.date}</p>
              <p className="font-lato text-sm text-[#969696] font-medium">
                {entry.community}
              </p>
            </div>
            <div className="flex-1 w-full">
              <h2 className="text-2xl md:text-[40px] font-playfair font-bold mt-2">
                {entry.title}
              </h2>
              <p className="text-[#17090B99] mt-4">{entry.subText}</p>
              <Link
                to={`/journal/${entry.id}`}
                className="mt-4 inline-block text-[#722F37] hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
