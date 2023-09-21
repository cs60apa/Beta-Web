import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Solutions() {
  return (
    <div className="min-h-screen bg-[#040404] text-white lg:p-10 p-3">
      <div className="flex md:flex-row flex-col justify-between">
        <p className="md:text-5xl text-3xl font-medium">
          Working with DevCircle
        </p>
        <p className="flex text-lg font-bold underline underline-offset-4 decoration-[#00D4FF] hover:scale-110 mt-4">
          Explore Devcircle <AiOutlineArrowRight className="mt-1.5 ml-1" />
        </p>
      </div>
      <div className="flex md:flex-row flex-col mt-14 justify-between space-y-20 md:space-y-0">
        <div className="border-none h-80 lg:w-96 md:w-80 space-y-3">
          <img src="/assets/discover.webp" alt="" />
          <h1 className="text-2xl font-bold">Professional Services</h1>
          <p className="text-base">
            Ready to start? Let's walk through Devcircle can help you launch
            your tech career.
          </p>
          <p className="flex text-base font-bold underline underline-offset-4 decoration-[#00D4FF] hover:translate-x-6 hover:scale-110">
            Learn More <AiOutlineArrowRight className="mt-1.5 ml-1" />
          </p>
        </div>
        <div className="border-none h-80 lg:w-96 md:w-80 space-y-2">
          <img src="/assets/discover.webp" alt="" />
          <h1 className="text-2xl font-bold">Consulting Partners</h1>
          <p className="text-base">
            Engage a certified partner to help with strategy, implementation,
            manage services for your solution needs.
          </p>
          <p className="flex text-base font-bold underline underline-offset-4 decoration-[#00D4FF] hover:translate-x-6 hover:scale-110">
            Learn More <AiOutlineArrowRight className="mt-1.5 ml-1" />
          </p>
        </div>
        <div className="border-none h-80 lg:w-96 md:w-80 space-y-3">
          <img src="/assets/discover.webp" alt="" />
          <h1 className="text-2xl font-bold">Guide to Discover</h1>
          <p className="text-base">
            Ready to start? Let's walk through Devcircle can help you launch
            your tech career.
          </p>
          <p className="flex text-base font-bold underline underline-offset-4 decoration-[#00D4FF] hover:translate-x-6 hover:scale-110">
            Learn More <AiOutlineArrowRight className="mt-1.5 ml-1" />
          </p>
        </div>
      </div>
    </div>
  );
}
export default Solutions;
