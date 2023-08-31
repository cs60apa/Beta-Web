import Header from "./components/Header";
import { SiInstacart } from "react-icons/si";
import {
  FaSalesforce,
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
      <div className="grid md:grid-rows-2 grid-rows-4 gap-4 md:mx-40 mx-5 md:pb-10">
        <div className="grid md:grid-cols-4 md:gap-40 gap-4 grid-cols-2 justify-center">
          <p className="flex font-bold text-3xl text-black mt-2">
            <SiInstacart size={30} className="text-orange-500" />
            instacart
          </p>
          <p><FaSalesforce size={80} className="flex text-[#00A1E0]" /></p>
          <p><FaAmazon size={50} className="flex mt-2" /></p>
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
          <p><FaLyft size={50} className="flex mt-2 text-pink-500" /></p>
          <p className="flex text-4xl text-blue-500 mt-2">zoom</p>
        </div>
      </div>
      <div className="relative py-20 bg-[#F6F9FC] md:px-40 px-10">
        <div className="flex justify-start flex-col space-y-10">
          <h2 className="text-[#6360FF] md:text-lg font-bold">
            Modular solutions
          </h2>
          <h1 className="md:text-6xl text-3xl text-[#0A2540] font-bold">
            A fully integrated<br></br> suite of financial<br></br> and payments
            <br></br> products
          </h1>
          <p className="md:text-lg text-[#425466]">
            Reduce costs, grow revenue, and run your business<br></br> more
            efficiently on a fully integrated platform. Use<br></br> Stripe to
            handle all of your payments-related needs,<br></br> manage revenue
            operations, and launch (or invent) new<br></br> business models.
          </p>
        </div>
      </div>
    </div>
  );
}
