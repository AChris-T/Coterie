import { NavLink } from 'react-router-dom';
import { ArrowRight } from '../../assets/icons';
import Testimonials from '../../commons/Testimonials';

export default function Portfolio() {
  return (
    <div className=" w-full  flex flex-col gap-10 font-playfair">
      <div className="lg:px-25 md:px-10 px-3 flex flex-col gap-10 ">
        <h3 className="text-2xl flex justify-center items-center font-extrabold md:text-[60px]">
          Our Portfolio
        </h3>
        <div className="grid gap-3 grid-col-1 lg:grid-cols-2">
          <div className="pop h-[368px] w-full flex  text-white items-end">
            <NavLink
              to={'/wedding'}
              className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-between  px-3 items-center w-full"
            >
              <div>
                <h3 className="text-xl md:text-[32px] leading-8  font-bold">
                  Timeless Love Experience{' '}
                </h3>
              </div>
              <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                <ArrowRight />
              </h2>
            </NavLink>
          </div>
          <div className="flex flex-col md:flex-row  gap-3">
            <div className="summer h-[368px] w-full flex  text-white items-end">
              <NavLink
                to={'/bootcamp'}
                className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-between  px-3 items-center w-full"
              >
                <div>
                  <h3 className="text-xl md:text-[32px] leading-8  font-bold">
                    Summer Skills Experience{' '}
                  </h3>
                </div>
                <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                  <ArrowRight />
                </h2>
              </NavLink>
            </div>
            <div className="workers h-[368px] w-full flex  text-white items-end">
              <NavLink
                to={'/workers-dinner'}
                className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-between  px-3 items-center w-full"
              >
                <div>
                  <h3 className="text-xl md:text-[32px] leading-8 font-bold">
                    Corporate Appreciation Event{' '}
                  </h3>
                </div>
                <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                  <ArrowRight />
                </h2>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}
