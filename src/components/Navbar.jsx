import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div className="absolute grid md:flex grid-cols-2 gap-x-20 md:gap-x-0 mx-5 md:flex-row md:mx-40 mt-5 text-white">
      <img src="/assets/logo.png" alt="Logo" className="h-10 md:mr-10" />
      <div className="flex-row space-x-10 hidden md:flex">
        <div className="relative group">
          <p className="group-hover:text-gray-500 cursor-pointer">Products</p>
          <div className="absolute top-full left-0 mt-2 bg-[#EFF3F9] text-black border border-gray-300 rounded-lg shadow-md w-80 h-80 opacity-0 group-hover:opacity-100 invisible group-hover:visible z-10">
            {/* Dropdown content */}
            <a href="#" className="block px-4 py-2 hover:bg-white">
              <h2 className="text-base">Global Payments</h2>
              <p className="text-xs text-gray-500">
                Accept payments, online, or in-person
              </p>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white">
              <h2 className="text-base">Revenue and Finance Automation</h2>
              <p className="text-xs text-gray-500">
                Grow your business with automated revenue and finance
              </p>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white">
              <h2 className="text-base">Banking-as-a-Service</h2>
              <p className="text-xs text-gray-500">
                Embeded financial services in your platform or product
              </p>
            </a>
          </div>
        </div>
        <div className="relative group">
          <p className="group-hover:text-gray-500 cursor-pointer">Solutions</p>
          <div className="absolute top-full left-0 mt-2 bg-[#EFF3F9] text-black border border-gray-300 rounded-lg shadow-md w-80 h-80 opacity-0 group-hover:opacity-100 invisible group-hover:visible z-10">
            {/* Dropdown content */}
            <p className="text-gray-500">Use cases</p>
            <a href="#" className="block px-4 py-2 hover:bg-white">
              <h2 className="text-base">Global Payments</h2>
              <p className="text-xs text-gray-500">
                Accept payments, online, or in-person
              </p>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white">
              <h2 className="text-base">Revenue and Finance Automation</h2>
              <p className="text-xs text-gray-500">
                Grow your business with automated revenue and finance
              </p>
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-white">
              <h2 className="text-base">Banking-as-a-Service</h2>
              <p className="text-xs text-gray-500">
                Embeded financial services in your platform or product
              </p>
            </a>
          </div>
        </div>
        <p>Developers</p>
        <p>Resources</p>
        <p className="hover:text-gray-500">Pricing</p>
      </div>
      <div className="hidden md:flex md:space-x-5 md:ml-60">
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
        <button>
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  );
}
export default Navbar;
