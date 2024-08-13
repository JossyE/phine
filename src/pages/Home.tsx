import { FaHeadset } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { HiOutlineLockClosed, HiOutlineTruck } from "react-icons/hi";
import MenCasual from "../assets/images/men-casual.png";
import MenFormal from "../assets/images/men-formal.png";
import MenHoodie from "../assets/images/men-hoodie.png";
import WomenCasual from "../assets/images/female-casual.png";
import WomenFormal from "../assets/images/female-formal.png";
import WomenHoodie from "../assets/images/women-hoodie.png";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-roboto">
        <Navbar />
        <main className="flex-grow">
          <Banner />
          <div className="bg-white 2xl:px-52 xl:px-44 px-20 w-full">
            <div className="grid md:grid-cols-4 grid-cols-2 text-center mx-auto gap-10 whitespace-nowrap uppercase xl:text-[14px] lg:text-[13px] md:text-[12px] text-[10px] text-black font-normal my-10">
              <div>
                <GoPackage className="w-5 h-5 mx-auto mb-2" />
                <h1 className="">Easy returns</h1>
              </div>
              <div>
                <HiOutlineLockClosed className="w-5 h-5 mx-auto mb-2" />
                <h1 className="">Secure Payment</h1>
              </div>
              <div>
                <HiOutlineTruck className="w-5 h-5 mx-auto mb-2" />
                <h1 className="">Swift Delivery</h1>
              </div>
              <div>
                <FaHeadset className="w-5 h-5 mx-auto mb-2" />
                <h1>Customer Service</h1>
              </div>
            </div>
          </div>
          <div className="bg-[#f5f5f5] py-5 2xl:px-52 xl:px-44 px-20 w-full">
            <h1 className="uppercase font-bold text-[30px] text-center my-10">
              Men{" "}
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mx-auto">
              <div className="lg:w-[300px] md:w-[200px] h-400px mx-auto">
                <img className="w-full " src={MenCasual} alt="" />
                <h1 className="uppercase text-[20px] text-black text-center mt-5">
                  Casual
                </h1>
              </div>
              <div className="lg:w-[300px] md:w-[200px] h-400px mx-auto">
                <img className="w-full " src={MenFormal} alt="" />
                <h1 className="uppercase text-[20px] text-black text-center mt-5">
                  Formal
                </h1>
              </div>
              <div className="lg:w-[300px] md:w-[200px] h-400px mx-auto">
                <img className="w-full mx-auto" src={MenHoodie} alt="" />
                <h1 className="uppercase text-[20px] text-black text-center mt-5">
                  Hoodie
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#f5f5f5] py-5 2xl:px-52 xl:px-44 px-20 w-full">
            <h1 className="uppercase font-bold text-[30px] text-center my-10">
              Women{" "}
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mx-auto">
              <div className="lg:w-[300px] md:w-[200px] h-400px mx-auto">
                <img className="w-full " src={WomenCasual} alt="" />
                <h1 className="uppercase text-[20px] text-black text-center mt-5">
                  Casual
                </h1>
              </div>
              <div className="lg:w-[300px] md:w-[200px] h-400px mx-auto">
                <img className="w-full " src={WomenFormal} alt="" />
                <h1 className="uppercase text-[20px] text-black text-center mt-5">
                  Formal
                </h1>
              </div>
              <div className="lg:w-[300px] md:w-[200px] h-400px mx-auto">
                <img className="w-full mx-auto" src={WomenHoodie} alt="" />
                <h1 className="uppercase text-[20px] text-black text-center mt-5">
                  Hoodie
                </h1>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
