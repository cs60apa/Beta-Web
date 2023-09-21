import React from "react";

function Products() {
  return (
    <div className="min-h-screen text-black">
      <div className="flex justify-between flex-col md:flex-row lg:px-10 px-5 overflow-hidden">
        <div className="flex flex-col md:mt-40 mt-10">
        <h1 className="text-6xl font-bold mb-5">DevCircle Africa</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        <img src="/assets/cloud.svg" alt="" className="h-[38rem]"/>
      </div>
    </div>
  );
}
export default Products;
