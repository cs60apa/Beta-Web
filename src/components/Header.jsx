// Import necessary modules and styles.
import { useEffect, useRef } from "react";
import "../index.css";
import Navbar from "./Navbar";

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
  });

  return (
    <div className="min-h-screen relative md:overflow-hidden">
      <header>
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-96 md:h-full"
          ></canvas>
        </div>
        <Navbar />
        <div className="w-screen">
          <div className="absolute left-0 top-40 flex flex-col mx-10 md:mx-20 lg:mx-40 justify-start text-black">
            <h1 className="md:text-8xl text-4xl font-bold opacity-75">
              Creativity<br></br> Beyond <br></br>Imagination
            </h1>
            <p className="md:text-lg mt-10">
              Millions of companies of all sizes—from startups to Fortune
              <br></br> Are you looking for efficient ways to improve skills,
              <br></br> boost productivity, and increase profits?
            </p>
            <div className="flex flex-row mt-5 md:space-x-8">
              <a
                href="#"
                className="flex justify-center border-none bg-black hover:bg-gray-500 text-white rounded-full w-28"
              >
                <p className="flex md:m-2 m-1 text-base md:pb-1">
                  Start now 
                </p>
              </a>
            </div>
          </div>
          <div className="absolute top-28 right-10 justify-end hidden lg:flex w-full h-fit overflow-hidden">
            <img src="/assets/phone.svg" alt="phone"/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
