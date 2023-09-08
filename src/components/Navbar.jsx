import React from "react";
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
    <div className="absolute md:mx-10 lg:mx-40 text-white">
      {/*<img src="/assets/logo.png" alt="Logo" className="h-10 md:mr-10" />*/}
      <div className="hidden md:flex mt-4 md:flex-row space-x-10 lg:space-x-5">
        <div className="flex h-fit lg:w-32 w-28 lg:mr-5">
          <h1 className="text-2xl">Beta-web</h1>
        </div>
        <div className="flex-row lg:space-x-10 space-x-4 hidden md:flex mt-2 z-10">
          <p>Product</p>
          <p>Solutions</p>
          <p>Developers</p>
          <p>Resources</p>
          <p>Pricing</p>
        </div>
        <div className="hidden md:flex lg:space-x-5 lg:pl-60 pl-40 z-10">
          <a
            href="#"
            className="flex justify-center text-center h-fit mt-2.5 lg:w-32 w-28 hover:text-gray-300 transition duration-300 cursor-pointer focus:outline-none"
          >
            Contact <IoIosArrowForward className="lg:ml-1 mt-1.5" />
          </a>
          <a
            href="#"
            className="flex text-center justify-center border-none mt-2 bg-[#B8BAE5] hover:bg-opacity-75 transition duration-300 bg-opacity-25 rounded-full h-8 lg:w-24 w-24 cursor-pointer focus:outline-none"
          >
            <p className="flex m-0.5">
              Sign in
              <IoIosArrowForward className="mt-1.5 ml-1" />
            </p>
          </a>
        </div>
      </div>
      <div className="relative md:hidden overflow-visible mt-5 w-screen px-10">
        <div>
          <h1 className="text-2xl">Beta-web</h1>
        </div>
        <div className="absolute top-0 right-5">
          <button className="relative group" onClick={toggleMenu}>
            <p className="group-hover:text-gray-500 flex justify-center border-none bg-[#B8BAE5] hover:bg-gray-700 bg-opacity-25 rounded-full w-12 cursor-pointer focus:outline-none">
              <AiOutlineMenu size={16} className="flex m-2 text-white" />
            </p>
            <div
              className={`absolute top-0 right-0 bg-white text-black border border-none rounded-lg divide-y divide-dashed divide-gray-300 shadow-2xl w-80 h-auto ${
                isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              } z-10 mx-auto`}
            >
              <div className="flex justify-between m-3 text-[#4F5B76]">
                <h1 className="text-2xl">Beta-Web</h1>
                <MdOutlineCancel
                  size={23}
                  className="mt-2 cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              <a href="#" className="block ml-2 py-2">
                <div className="flex justify-between m-3 text-[#3F4B66]">
                  <h1 className="text-lg font-medium">Product</h1>
                  <IoIosArrowForward size={20} className="mt-2" />
                </div>
              </a>
              <a href="#" className="block ml-2 py-2">
                <div className="flex justify-between m-3 text-[#3F4B66]">
                  <h1 className="text-lg font-medium">Solutions</h1>
                  <IoIosArrowForward size={20} className="mt-2" />
                </div>
              </a>
              <a href="#" className="block pl-2 py-2">
                <div className="flex justify-between m-3 text-[#3F4B66]">
                  <h1 className="text-lg font-medium">Developers</h1>
                  <IoIosArrowForward size={20} className="mt-2" />
                </div>
              </a>
              <a href="#" className="block pl-2 py-2">
                <div className="flex justify-between m-3 text-[#3F4B66]">
                  <h1 className="text-lg font-medium">Resources</h1>
                  <IoIosArrowForward size={20} className="mt-2" />
                </div>
              </a>
              <a href="#" className="block pl-2 py-2">
                <div className="flex justify-between m-3 text-[#3F4B66]">
                  <h1 className="text-lg font-medium">Contact</h1>
                </div>
              </a>
              <a href="#" className="block pl-2 py-2">
                <div className="flex justify-between m-3 text-[#3F4B66]">
                  <h1 className="text-lg font-medium">Pricing</h1>
                </div>
              </a>
              <div className="mt-40 py-5 mb-2 bg-[#EFF3F9] hover:bg-[#0A2540] text-white border border-none rounded-lg w-74 h-68 opacity-0 group-hover:opacity-100 invisible group-hover:visible z-10">
                <button className="border border-none rounded-full bg-[#635BFF] w-24 h-8">
                  <p className="flex justify-center mb-1 text-base ml-1 space-x-1">
                    Sign in <IoIosArrowForward className="flex mt-1.5 ml-1" />
                  </p>
                </button>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
