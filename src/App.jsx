import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SiInstacart } from "react-icons/si";
import { RiEditCircleFill } from "react-icons/ri";
import { BsCircleSquare } from "react-icons/bs";
import { BiSolidNote } from "react-icons/bi";
import {
  FaSalesforce,
  FaLocationArrow,
  FaAmazon,
  FaSlack,
  FaShopify,
  FaGoogle,
  FaLyft,
} from "react-icons/fa";


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid md:grid-rows-2 grid-rows-4 gap-4 lg:mx-40 mx-5 md:mx-10 px-5 md:pb-10 z-0">
        <div className="grid md:grid-cols-4 md:gap-40 gap-4 grid-cols-2 justify-center z-0">
          <p className="flex font-bold text-3xl text-black mt-2">
            <SiInstacart size={30} className="text-orange-500" />
            instacart
          </p>
          <p>
            <FaSalesforce size={80} className="flex text-[#00A1E0]" />
          </p>
          <p>
            <FaAmazon size={50} className="flex mt-2" />
          </p>
          <p className="flex font-bold text-3xl text-black mt-2">
            <FaSlack size={25} className="mt-2" />
            slack
          </p>
        </div>
        <div className="grid md:grid-cols-4 md:gap-40 gap-4 grid-cols-2 ">
          <p className="flex font-bold text-3xl text-black mt-2">
            <FaShopify size={30} className="text-green-500" />
            shopify
          </p>
          <p className="flex font-bold text-3xl text-black mt-2">
            <FaGoogle className="mt-1" />
            oogle
          </p>
          <p>
            <FaLyft size={50} className="flex mt-2 text-pink-500" />
          </p>
          <p className="flex text-4xl text-blue-500 mt-2">zoom</p>
        </div>
      </div>
      <div className="relative bg-[#F6F9FC]">
      <div className="py-20 lg:mx-40 mx-10 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-40">
        <div className="flex flex-col space-y-10">
          <h2 className="text-[#635BFF] md:text-lg font-medium">
            Modular solutions
          </h2>
          <h1 className="lg:text-6xl text-3xl text-[#0A2540] font-bold">
            A fully integrated<br></br> suite of financial<br></br> and payments
            <br></br> products
          </h1>
          <p className="lg:text-lg text-[#425466]">
            Reduce costs, grow revenue, and run your business<br></br> more
            efficiently on a fully integrated platform. Use<br></br> Stripe to
            handle all of your payments-related needs,<br></br> manage revenue
            operations, and launch (or invent) new business models.
          </p>
        </div>
        <div className="pt-10 translate-y-10">
          <img src="/assets/payment.svg" alt="payment" />
        </div>
      </div>
      <div className="py-20 lg:mx-40 mx-10 md:py-32 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-40">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl text-[#0A2540] font-bold">
            Accept and optimize<br></br> payments, globally
          </h1>
          <p className="lg:text-lg text-[#425466]">
            Increase authorization rates, optimize your checkout{" "}
            conversion, and offer local payment methods in every{" "}
            market.
          </p>
          <div className="border-none shadow-xl rounded-lg bg-white text-center w-auto md:w-96 h-auto md:h-12">
            <p className="flex py-3 text-[#425466]">
              <FaLocationArrow className="flex rotate-45 m-1 text-[#19E1E2]" />
              <a href="#" className="font-medium mx-1 text-[#635BFF]">
                Payments
              </a>{" "}
              for online payments acceptance
            </p>
          </div>
          <div className="flex flex-col text-[#425466] leading-relaxed">
            <h1 className="text-[#0A2540] font-medium text-base mb-2">
              See also
            </h1>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Tax
              </a>{" "}
              for automatic sales tax and VAT
            </p>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Radar
              </a>{" "}
              for fraud prevention and management
            </p>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Terminal
              </a>{" "}
              for custom in-person payments
            </p>
          </div>
        </div>
        <div className="pt-20 md:pt-0">
          <img src="/assets/checkout.svg" alt="checkout" />
        </div>
      </div>
      <div className="py-20 lg:mx-40 mx-10 md:py-32 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-40">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl text-[#0A2540] font-bold">
            Capture recurring revenue
          </h1>
          <p className="lg:text-lg text-[#425466]">
            Support recurring business models, minimize churn,<br></br> and
            automate finance operations.
          </p>
          <div className="border-none shadow-xl rounded-lg bg-white text-center w-auto md:w-96 h-auto md:h-12">
            <p className="flex py-3 text-[#425466]">
              <BsCircleSquare className="flex rotate-45 m-1.5 text-[#00D823] bg-[#FFD148]" />
              <a href="#" className="font-medium mx-1 text-[#635BFF]">
                Billing
              </a>{" "}
              for subscription management
            </p>
          </div>
          <div className="flex flex-col text-[#425466] leading-relaxed">
            <h1 className="text-[#0A2540] font-medium text-base mb-2">
              See also
            </h1>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Invoicing
              </a>{" "}
              for invoice creation, collection, and tracking
            </p>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Revenue Recognition
              </a>{" "}
              for streamlined accrual accounting
            </p>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Sigma
              </a>{" "}
              for custom revenue reports
            </p>
          </div>
        </div>
        <div className="pt-20 md:pt-0">
          <img src="/assets/billing.svg" alt="billing" />
        </div>
      </div>
      </div>
      <div className="bg-contain bg-no-repeat bg-right bg-black text-[#9DAEBE] py-20 lg:px-60 px-10 h-auto bg-[url('/assets/globe.jpg')]">
        <div className="flex flex-col space-y-8 text-start leading-relaxed">
          <p className="text-[#00D4FF] text-lg font-medium">Global Scale</p>
          <h1 className="text-white text-4xl font-bold">
            The backbone for<br></br> global commerce
          </h1>
          <p>
            Stripe makes moving money as easy and programmable as moving data.
            Our teams are<br></br> based in offices around the world and we process
            hundreds of billions of dollars each year for<br></br> ambitious businesses
            of all sizes.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:pt-32 divide-x divide-[#00D4FF]">
            <div>
              <h1 className="text-white text-2xl font-bold">250M+</h1>
              <p>API requests per day, peaking at<br></br> 13,000 requests a second</p>
            </div>
            <div className="pl-5">
              <h1 className="text-white text-2xl font-bold">99.999%</h1>
              <p>Historical uptime for<br></br> Devcircle services.</p>
            </div> 
            <div className="pl-5">
              <h1 className="text-white text-2xl font-bold">90%</h1>
              <p>of US adults have bought from<br></br> businesses using Devcircle</p>
            </div> 
            <div className="pl-5">
              <h1 className="text-white text-2xl font-bold">135+</h1>
              <p>currencies and payment<br></br> methods supported</p>
            </div> 
          </div>
        </div>
      </div>
      <div className="relative bg-[#F6F9FC]">
      <div className="py-20 lg:mx-40 mx-10 md:py-32 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-40">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl text-[#0A2540] font-bold">
            Set up multiparty payments and payouts
          </h1>
          <p className="lg:text-lg text-[#425466]">
            Integrate payments into your platform or marketplace<br></br> for
            end-to-end payments experiences.
          </p>
          <div className="border-none shadow-xl rounded-lg bg-white text-center w-auto md:w-96 h-auto md:h-12">
            <p className="flex py-3 text-[#425466]">
              <RiEditCircleFill className="flex rotate-45 m-1.5 text-[#0073E6] bg-[#19E0E1] bg-opacity-25" />
              <a href="#" className="font-medium mx-1 text-[#635BFF]">
                Connect
              </a>{" "}
              for powering platform payments
            </p>
          </div>
          <div className="flex flex-col text-[#425466] leading-relaxed">
            <h1 className="text-[#0A2540] font-medium text-base mb-2">
              See also
            </h1>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Terminal
              </a>{" "}
              for custom in-person payments
            </p>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Instant Payouts
              </a>{" "}
              for fast payments to users
            </p>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Payment Elements
              </a>{" "}
              for customizable UIs
            </p>
          </div>
        </div>
        <div className="pt-20 md:pt-0">
          <img src="/assets/platform.svg" alt="platform" />
        </div>
      </div>
      <div className="py-10 lg:mx-40 mx-10 md:py-32 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-40">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl text-[#0A2540] font-bold">
            Build a fintech offering with banking-as-a-service
          </h1>
          <p className="lg:text-lg text-[#425466]">
            Launch, manage, and scale a commercial card program<br></br> without
            any setup fees.
          </p>
          <div className="border-none shadow-xl rounded-lg bg-white text-center w-auto md:w-96 h-auto md:h-12">
            <p className="flex py-3 text-[#425466]">
              <BiSolidNote className="flex rotate-45 m-1.5 text-[#0073E6] -rotate-90" />
              <a href="#" className="font-medium mx-1 text-[#635BFF]">
                Issuing
              </a>{" "}
              for custom cards creation
            </p>
          </div>
          <div className="flex flex-col text-[#425466] leading-relaxed">
            <h1 className="text-[#0A2540] font-medium text-base mb-2">
              See also
            </h1>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Treasury
              </a>{" "}
              for financial accounts
            </p>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Capital
              </a>{" "}
              for offering fast, flexible financing
            </p>
            <p>
              <a href="#" className="font-medium text-[#635BFF]">
                Connect
              </a>{" "}
              for powering platform payments
            </p>
          </div>
        </div>
        <div className="pt-20 md:pt-0">
          <img src="/assets/creditcard.svg" alt="creditcard" />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
