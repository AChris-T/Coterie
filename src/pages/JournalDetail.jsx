import { Link, useParams } from 'react-router-dom';
import { journalEntries } from '../Data/Index';
import Navbar from '../commons/Navbar';
import { FacebookIcon, LinkdinIcon, TwitterIcon } from '../assets/icons';
import Comment from '../commons/Comment';

export default function JournalDetail() {
  const { id } = useParams();
  const entry = journalEntries.find((item) => item.id === Number(id));

  if (!entry) {
    return <p className="p-6">Journal entry not found.</p>;
  }

  return (
    <div className="w-full flex justify-center items-center  flex-col">
      <div className="my-2 mx-10 md:mt-10 h-[500px] bg-[#17090B] w-[95%] rounded-[20px] px-2 lg:px-14 pt-8 pb-28">
        <Navbar />
        <div className="  flex-col h-full justify-center items-center gap-5 flex  text-white px-2 lg:px-10 text-center">
          <h3 className="font-playfair max-w-[856px] text-3xl md:text-[70px] md:leading-20 font-extrabold">
            Journal
          </h3>
          <p className="text-[#FFFFFF99]">
            <Link to="/journal" className="text-white hover:underline">
              Journal
            </Link>{' '}
            {'>'} {entry.title}
          </p>
        </div>
      </div>
      <div className="max-w-4xl pb-[200px] pt-[100px]  mx-auto p-6 flex flex-col gap-2">
        <div className=" border-[#722F37] border-b pb-5 border-dotteda">
          <h1 className="text-2xl md:text-5xl font-playfair font-medium mt-4">
            {entry.title}
          </h1>
          <div className="flex items-center gap-3 justify-between mt-8">
            <p className="text-[#722F37] font-lato font-medium ">
              {entry.date}
            </p>
            <div className="flex gap-3 ">
              <FacebookIcon />
              <TwitterIcon />
              <LinkdinIcon />
            </div>
          </div>
        </div>

        <img
          src={entry.journalimage}
          alt={entry.title}
          className="w-full h-[400px] object-cover rounded-lg mt-6"
        />

        <p className="mt-6 text-lg leading-relaxed whitespace-pre-line">
          {entry.details}
        </p>
        <div className="mt-[120px]">
          <Comment />
        </div>
      </div>
    </div>
  );
}
