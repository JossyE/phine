import { useEffect, useState } from "react";
import Slide1 from "../assets/images/slide1.png";
import Slide2 from "../assets/images/slide2.png";
import Slide3 from "../assets/images/slide3.png";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const BannerImages = [Slide1, Slide2, Slide3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % BannerImages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [BannerImages.length]);

  return (
    <div className="w-full relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {BannerImages.map((image, index) => (
            <div
              key={index}
              className="w-full xl:h-[700px] lg:h-[500px] md:h-[350px] h-[400px] flex-shrink-0">
              <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-start xl:ml-20 md:ml-8 ml-5">
          <div className="text-center text-black font-jomolhari">
            <h1 className="xl:text-[80px] lg:text-[40px] md:text-[30px] text-[25px] mb-2 uppercase">
              20% off
            </h1>
            <h1 className="xl:text-[45px] lg:text-[30px] md:text-[20px] text-[15px] uppercase">
              almost everything
            </h1>
            <button className="xl:text-[40px] lg:text-[20px] md:text-[20px] text-[20px] px-20 py-3 border border-black bg-transparent mt-10 font-montez hover:bg-[#8684848e]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
