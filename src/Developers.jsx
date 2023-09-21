import React from "react";

function Developers() {
  return (
    <div className="min-h-screen bg-[#040404] text-white">
      <div className="bg-[url('/assets/milad.jpg')] h-screen">
        <div className="flex justify-center text-center pt-40">
          <p className="text-4xl md:text-6xl">
            The <i>all-in-one</i> Platform<br></br> for your Independent Work.
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <a
            href="#"
            className="flex justify-center border-none bg-white hover:bg-gray-300 text-black rounded-full w-40"
          >
            <p className="flex md:m-2 m-1 text-lg md:pb-1">Get Started</p>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Developers;
