import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute grid md:flex grid-cols-2 gap-x-48 md:gap-x-0 mx-5 md:flex-row md:mx-40 mt-5 text-white">
      {/*<img src="/assets/logo.png" alt="Logo" className="h-10 md:mr-10" />*/}
      <div className="flex md:mr-10">
        <h1 className="md:text-2xl">Beta-web</h1>
      </div>
      <div className="flex-row space-x-10 hidden md:flex mt-1.5">
        <p>Products</p>
        <p>Solutions</p>
        <p>Developers</p>
        <p>Resources</p>
        <p>Pricing</p>
      </div>
      <div className="hidden md:flex md:space-x-5 md:ml-60 mt-1.5">
        <a
          href="#"
          className="flex hover:text-gray-500 cursor-pointer focus:outline-none"
        >
          Contact Sales <IoIosArrowForward className="ml-1 mt-1.5" />
        </a>
        <a
          href="#"
          className="flex text-center justify-center border-none bg-[#B8BAE5] hover:bg-gray-700 bg-opacity-25 rounded-full h-8 w-20 cursor-pointer focus:outline-none"
        >
          <p className="ml-2">Sign in</p>{" "}
          <IoIosArrowForward className="ml-1 mt-1.5" />
        </a>
      </div>
      <div className="flex justify-end md:hidden ">
        <button className="relative group" onClick={toggleMenu}>
          <p className="group-hover:text-gray-500 cursor-pointer">
            <AiOutlineMenu />
          </p>
          <div
            className={`absolute top-0 right-0 bg-white text-black border border-none rounded-lg divide-y divide-dashed divide-gray-300 shadow-md w-80 h-auto ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } z-50`}
          >
            <div className="flex justify-between m-3 text-[#4F5B76]">
              <h1 className="text-2xl">Beta-Web</h1>
              <MdOutlineCancel
                size={23}
                className="mt-2 cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            <div className="py-2 bg-[#EFF3F9] text-black border border-none w-74 h-68 opacity-0 group-hover:opacity-100 invisible group-hover:visible z-10">
              {/* Dropdown content */}
              <h1 className="flex justify-start text-xl m-3 text-[#3F4B66]">
                Products
              </h1>
              <a href="#" className="block ml-3 py-2">
                <h2 className="flex justify-start text-base">
                  Global Payments
                </h2>
                <p className="flex justify-start text-xs text-gray-500">
                  Accept payments, online, or in-person
                </p>
              </a>
              <a href="#" className="block ml-3 py-2">
                <h2 className="flex justify-start text-base">
                  Revenue and Finance Automation
                </h2>
                <p className="flex justify-start text-xs text-gray-500">
                  Grow your business with automated revenue and finance
                </p>
              </a>
              <a href="#" className="block ml-3 py-2">
                <h2 className="flex justify-start text-base">
                  Banking-as-a-Service
                </h2>
                <p className="flex justify-start text-xs text-gray-500">
                  Embeded financial services in your platform or product
                </p>
              </a>
            </div>
            <a href="#" className="block ml-2 py-2">
              <div className="flex justify-between m-3 text-[#3F4B66]">
                <h1 className="text-xl">Solutions</h1>
                <IoIosArrowForward size={20} className="mt-2" />
              </div>
            </a>
            <a href="#" className="block pl-2 py-2">
              <div className="flex justify-between m-3 text-[#3F4B66]">
                <h1 className="text-xl">Developers</h1>
                <IoIosArrowForward size={20} className="mt-2" />
              </div>
            </a>
            <a href="#" className="block pl-2 py-2">
              <div className="flex justify-between m-3 text-[#3F4B66]">
                <h1 className="text-xl">Resources</h1>
                <IoIosArrowForward size={20} className="mt-2" />
              </div>
            </a>
            <a href="#" className="block pl-2 py-2">
              <div className="flex justify-between m-3 text-[#3F4B66]">
                <h1 className="text-xl">Contact Sales</h1>
              </div>
            </a>
            <a href="#" className="block pl-2 py-2">
              <div className="flex justify-between m-3 text-[#3F4B66]">
                <h1 className="text-xl">Pricing</h1>
              </div>
            </a>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
