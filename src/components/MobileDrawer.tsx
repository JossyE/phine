import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/images/logov1.png";
import { IoIosArrowForward } from "react-icons/io";
import UkFlag from "../assets/icon/united-kingdom.png";

type DrawerType = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileDrawer = ({ isOpen, onClose }: DrawerType) => {
  const [showDrawer, setShowDrawer] = useState(isOpen);

  useEffect(() => {
    setShowDrawer(isOpen);
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-start transition-opacity duration-500 ${
          showDrawer ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div
          onClick={(e) => e.stopPropagation}
          className={`bg-white w-full h-full shadow-lg transform transition-transform duration-500 p-5 flex flex-col justify-between ${
            showDrawer ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div>
            <div className="flex justify-between">
              <button>
                <img className="w-20 h-auto " src={Logo} alt="" />
              </button>
              <button className="text-black" onClick={onClose}>
                <IoClose className="my-auto w-7 h-7" />
              </button>
            </div>
            <hr className="my-2" />
            <div className="uppercase font-medium text-black text-[14px] mt-5">
              <div className="flex justify-between">
                <h1>Menswear</h1>
                <button>
                  <IoIosArrowForward className="my-auto w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between my-5">
                <h1>Womenswear</h1>
                <button>
                  <IoIosArrowForward className="my-auto w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between">
                <h1>Hoodie</h1>
                <button>
                  <IoIosArrowForward className="my-auto w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <hr className="my-2" />
            <div className=" flex justify-between mt-5">
              <div className="flex">
                <img className="w-5 h-5" src={UkFlag} alt="" />
                <h1 className="ml-3 text-black text-[14px] uppercase">
                  United Kingdom
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
