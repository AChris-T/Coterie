import journal from '../../assets/Images/journal.png';
import journal2 from '../../assets/Images/journal2.png';
import journal3 from '../../assets/Images/journal3.png';

export default function Journal() {
  return (
    <div className="lg:px-24 w-full md:px-10 px-3 font-playfair flex flex-col gap-10 ">
      <h3 className="text-2xl flex justify-center items-center font-extrabold md:text-[60px]">
        Journal
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full gap-6">
        <div className="w-full border-1 flex flex-col gap-4 border-[#17090B66] h-[420px] px-4 py-3 rounded-lg">
          <img
            src={journal}
            alt=""
            className="w-full h-[200px] rounded-lg object-cover"
          />

          <h3 className="font-bold text-2xl">
            Every Detail Speaks Through Emotion
          </h3>
          <p className="font-lato text-sm">
            A meaningful event is how it makes people feel. We focus on the mood
            and memory each element creates from the lighting to the flow of the
            space.
          </p>
        </div>
        <div className="w-full border-1 flex flex-col gap-4  border-[#17090B66] h-[420px] px-4 py-3 rounded-lg">
          <img
            src={journal2}
            alt=""
            className="w-full h-[200px] rounded-lg object-cover"
          />
          <h3 className="font-bold text-2xl">
            Turning Ideas into Seamless Celebrations{' '}
          </h3>
          <p className="font-lato text-sm">
            Our approach blends clear strategy with creative design. We help
            clients shape their ideas into thoughtful experiences that feel
            effortless.
          </p>
        </div>{' '}
        <div className="w-full border-1 flex flex-col gap-4 border-[#17090B66] h-[420px] px-4 py-3 rounded-lg">
          <img
            src={journal3}
            alt=""
            className="w-full h-[200px] rounded-lg object-cover"
          />
          <h3 className="font-bold text-2xl">
            Storytelling is the Heart of Every Event{' '}
          </h3>
          <p className="font-lato text-sm">
            We use story to guide every decision. From visuals to music
            everything is chosen to reflect who you are and what your guests
            should remember.
          </p>
        </div>{' '}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#722F37] py-3 text-white px-16 font-lato rounded-lg cursor-pointer">
          Read All Journals
        </button>
      </div>
    </div>
  );
}
