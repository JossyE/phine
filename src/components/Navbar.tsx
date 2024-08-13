import MobileLogo from "../assets/images/favicon.png";
import Logo from "../assets/images/logov1.png";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonSharp, IoSearchSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { CgMenuLeft } from "react-icons/cg";
import Divider from "../components/Divider";
import { GoSearch } from "react-icons/go";
import UkFlag from "../assets/icon/united-kingdom.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import MobileDrawer from "@/components/MobileDrawer";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <>
      <div className="font-roboto">
        {/** navbar */}
        <div>
          {/** mobile navbar */}
          <div className="block lg:hidden">
            <div className="bg-white shadow-xl h-16 w-full flex justify-between px-5 text-[#666666]">
              <div className="flex w-32 ">
                <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
                <button onClick={openDrawer} className="">
                  <CgMenuLeft className="w-8 h-[20.5px] my-auto mr-5" />
                </button>
                <button>
                  <FaRegHeart className="w-5 h-5 my-auto " />
                </button>
              </div>
              <button>
                <img
                  className="w-5 h-auto block md:hidden"
                  src={MobileLogo}
                  alt=""
                />
                <img
                  className="w-20 h-auto hidden md:block"
                  src={Logo}
                  alt=""
                />
              </button>
              <div className="flex w-32 justify-between">
                <button className="block lg:hidden">
                  <IoSearchSharp className="w-5 h-5" />
                </button>
                <Divider />
                <HiShoppingCart className="w-5 h-5 my-auto" />
                <Divider />

                <IoPersonSharp className="w-5 h-5 my-auto" />
              </div>
            </div>
          </div>
          {/** end mobile navbar */}
          <div className="hidden lg:block">
            <div className="bg-white shadow-xl h-20 w-full flex justify-between 2xl:px-52 xl:px-44 px-20 text-[#666666]">
              <button>
                <img className="w-20 h-auto" src={Logo} alt="" />
              </button>

              <div className="flex 2xl:w-[35%] w-[50%] justify-between">
                <div className="hidden lg:block my-auto">
                  <div className="bg-[#EEECEC] xl:w-60 w-48  my-auto shadow-sm flex">
                    <input
                      className="pl-2 bg-transparent w-full py-2 text-[14px] text-neutral-700 outline-none focus:outline-none"
                      placeholder="Search"
                    />
                    <button className="pr-3  focus:outline-none">
                      <GoSearch className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button className="">
                  <HiShoppingCart className="w-4 h-4 my-auto" />
                </button>
                <Divider />
                <button>
                  <FaRegHeart className="w-4 h-4 my-auto " />
                </button>
                <Divider />
                <IoPersonSharp className="w-4 h-4 my-auto" />
                <Divider />
                <div className="bg-white flex w-16 justify-between my-auto">
                  <img className="w-5 h-5" src={UkFlag} alt="" />
                  <IoIosArrowDown className="my-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FCF0F6] w-full h-auto items-center py-3 2xl:px-56 md:px-40">
            <div className="text-[12px] 2xl:text-[16px] xl:text-[14px]  text-black uppercase font-medium flex justify-between 2xl:mx-52 lg:mx-20 mx-10 ">
              <h1>New In</h1>
              <h1>Menswear</h1>
              <h1>Womenswear</h1>
              <h1>Hoodie</h1>
            </div>
          </div>
          <div className="bg-[#602D3F] w-full h-auto py-3 flex justify-center items-center">
            <h1 className="font-montez text-[16px] xl:text-[18px] 2xl:text-[24px] text-white mx-auto">
              20% off on your first order!
            </h1>
          </div>
        </div>
        {/** end navbar */}
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
