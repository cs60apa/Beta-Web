// Import necessary modules and styles.
import { useEffect, useRef } from "react";
import "../index.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

// Define the Header component.
function Header() {
  // Create a reference to the canvas element using the useRef hook.
  const canvasRef = useRef(null);

  // useEffect hook: Runs after the component has been rendered.
  useEffect(() => {
    // Get the canvas element and its drawing context.
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Get the dimensions of the viewport.
    const width = window.innerWidth;
    const height = window.innerHeight;
    const gradientHeight = 500; // Specific height for the gradient.
    const rightCurveControlY = gradientHeight - 250; // Height of the right side of the curve.

    let rightGradientStop = 0.8; // Initial gradient stop on the right side.
    let animationFrameId;

    // Define the animation function.
    function animate() {
      // Clear the canvas for redrawing.
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update the canvas dimensions.
      canvas.width = width;
      canvas.height = height; // Canvas height including the curve.

      // Create a linear gradient for the background.
      const gradient = context.createLinearGradient(0, 0, 0, height); // Gradient direction.
      gradient.addColorStop(0, "#a960ee");
      gradient.addColorStop(rightGradientStop, "#ffcb57");

      // Apply the gradient to the canvas background.
      context.fillStyle = gradient;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(width, 0);
      context.lineTo(width, gradientHeight);
      context.quadraticCurveTo(
        width * 2,
        rightCurveControlY - 450,
        0,
        gradientHeight
      );
      context.lineTo(0, 0);
      context.closePath();
      context.fill();

      // Increment the gradient stop for animation effect.
      rightGradientStop = (rightGradientStop + 0.001) % 1; // Step value for animation speed.

      // Request the next animation frame.
      animationFrameId = requestAnimationFrame(animate);
    }

    // Start the animation.
    animate();

    // Clean up the animation frame when the component unmounts.
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <header>
        <div className="absolute inset-0">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-96 md:h-full"
          ></canvas>
        </div> 
        <div className="absolute grid md:flex grid-cols-2 gap-x-20 md:gap-x-0 mx-5 md:flex-row md:mx-40 mt-5 text-white">
          <img src="/assets/logo.png" alt="Logo" className="h-10 md:mr-10" />
          <div className="flex-row space-x-10 hidden md:flex">
            <p>Products</p>
            <p>Solutions</p>
            <p>Developers</p>
            <p>Resources</p>
            <p className="hover:text-gray-500">Pricing</p>
          </div>
          <div className="hidden md:flex md:space-x-5 md:ml-60 ">
            <button className="flex hover:text-gray-500">
              Contact Sales <IoIosArrowForward className="ml-1 mt-1.5" />
            </button>
            <button className="flex justify-center border-none bg-[#B8BAE5] hover:bg-gray-700 bg-opacity-25 rounded-full h-8 w-20">
            <p className="ml-2">Sign in</p> <IoIosArrowForward className="ml-1 mt-1.5" />
            </button>
          </div>
          <div className="flex justify-end md:hidden ">
            <button><AiOutlineMenu /></button>
          </div>
        </div>
        <div>
        <div className="absolute left-0 top-40 flex flex-col justify-start mx-10 md:mx-40 text-black">
          <h1 className="md:text-8xl text-4xl font-bold opacity-75">
            Creativity<br></br> Beyond <br></br>Imagination
          </h1>
          <p className="md:text-lg mt-10">
            Millions of companies of all sizes—from startups to Fortune<br></br>{" "}
            500s—use Stripe’s software and APIs to accept payments,<br></br>{" "}
            send payouts, and manage their businesses online.
          </p>
          <div className="flex flex-row mt-5 space-x-8">
            <button className="flex justify-center border-none bg-black hover:bg-gray-500 text-white rounded-full h-8 w-24">
              <p className="ml-2">Start now</p>
              <IoIosArrowForward className="mt-1.5" />
            </button>
            <button className="flex hover:text-gray-500">
              Contact Sales <IoIosArrowForward className="mt-1.5" />
            </button>
          </div>
        </div>
        <div className="absolute flex-wrap top-0 md:ml-80 justify-end hidden md:flex w-full h-full">
          <img src="/assets/phone.png" alt="phone" />
        </div>
      </div>
      </header>
    </div>
  );
}

export default Header;
