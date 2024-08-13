import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f1f1f1] 2xl:px-52 xl:px-44 px-20 py-10 text-black font-roboto w-full">
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 mx-auto mb-10">
        <div className="">
          <h1 className="uppercase text-[18px] font-medium">Information</h1>
          <div className="font-normal text-[14px] ">
            <a href="" className="my-2 block">
              About Us
            </a>
            <a href="" className="my-2 block">
              Delivery Information
            </a>
            <a href="" className="my-2 block">
              Order Tracking
            </a>
            <a href="" className="my-2 block">
              Privacy Policy
            </a>
            <a href="" className="my-2 block">
              Terms & Conditions
            </a>
            <a href="" className="my-2 block">
              Returns
            </a>
            <a href="" className="my-2 block">
              Help
            </a>
          </div>
        </div>
        <div className="">
          <h1 className="uppercase text-[18px] font-medium">Wardrope</h1>
          <div className="font-normal text-[14px]">
            <a href="" className="my-2 block">
              Men's Formal Shirt
            </a>
            <a href="" className="my-2 block">
              Men's Casual Shirt
            </a>
            <a href="" className="my-2 block">
              Women's Shirt
            </a>
            <a href="" className="my-2 block">
              Hoodies
            </a>
            <a href="" className="my-2 block">
              Men's Shirt fit guide
            </a>
            <a href="" className="my-2 block">
              Women's Shirt fit guide
            </a>
            <a href="" className="my-2 block">
              How to Measure
            </a>
          </div>
        </div>
        <div className="">
          <h1 className="uppercase text-[18px] font-medium">Newsletter</h1>
          <input
            className="bg-transparent py-2  border-b w-full border-gray-300 focus:outline-none"
            placeholder="Email Address"
            type="text"
          />
          <button className="bg-[#602D3F] text-[16px] text-white rounded-md w-full py-2  my-5">
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mb-2 ">
          <a href="https://www.facebook.com/profile.php?id=100068404459817&mibextid=kFxxJD">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/phine__atelier?igsh=MXZldm53bWF6b2JlYg%3D%3D&utm_source=qr">
            <FaInstagram className="mx-5 h-5 w-5" />
          </a>
          <a href="">
            <FaPinterest className="w-5 h-5" />
          </a>
        </div>
        <h1 className="text-[14px] text-center">
          2024 &copy; Phine - Ibadan, Oyo State, Nigeria
        </h1>
      </div>
    </div>
  );
};

export default Footer;
