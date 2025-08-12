import scroll from '../../assets/Images/Scroll.png';
export default function Elegance() {
  return (
    <div className="flex flex-col gap-10 w-full items-center font-extrabold font-playfair text-2xl md:text-6xl ">
      <h3 className="text-center">
        Elegance.<span className="text-[#722F37] italic"> Intimacy .</span>{' '}
        Intention
      </h3>
      <img src={scroll} alt="scroll" className="w-full" />
    </div>
  );
}
