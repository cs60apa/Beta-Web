// Import necessary modules and styles.
import React, { useEffect, useRef } from "react";
import "../index.css";
import { IoIosArrowForward } from "react-icons/io";

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
    <div className="min-h-screen overflow-hidden relative">
      <header className="h-full">
        <div className="absolute inset-0">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full"
          ></canvas>
        </div>
        <div className="absolute flex flex-row md:mx-40 mt-5 space-x-40 text-white">
          <div className="flex flex-row space-x-10 hidden md:flex">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <p>Products</p>
            <p>Solutions</p>
            <p>Developers</p>
            <p>Resources</p>
            <p>Pricing</p>
          </div>
          <div className="flex space-x-10">
            <button className="flex">
              Contact Sales <IoIosArrowForward className="ml-1 mt-1.5" />
            </button>
            <button className="flex justify-center border-none bg-[#B8BAE5] bg-opacity-25 rounded-full h-8 w-20">
              Sign in <IoIosArrowForward className="ml-1 mt-1.5" />
            </button>
          </div>
        </div>
      </header>
      <div className="absolute left-0 top-40 flex flex-col justify-start md:px-40 text-black">
        <h1 className="text-8xl font-bold opacity-75">
          Creativity<br></br> Beyond <br></br>Imagination
        </h1>
        <p className="text-lg mt-10">
          Millions of companies of all sizes—from startups to Fortune<br></br>{" "}
          500s—use Stripe’s software and APIs to accept payments,<br></br> send
          payouts, and manage their businesses online.
        </p>
      </div>
      <div className="absolute top-14 justify-end hidden md:flex md:w-full md:h-full">
        <img src="/phones.png" alt="phone" />
      </div>
    </div>
  );
}

export default Header;
