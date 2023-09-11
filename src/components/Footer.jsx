
import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#374D63]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Beta-Web
        </h1>
        <p className="py-4">
          DevCircle Africa is a vibrant community of technology enthusiasts and
          professionals who are passionate about exploring the latest trends and
          innovations in the tech industry. You can learn more about us by
          visiting...{" "}
          <a href="/about" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
        <div className="flex justify-between md:w-[78%] my-6">
          <a href="https://facebook.com/Alisikaundi">
            <FaFacebookSquare size={25} />{" "}
          </a>
          <a href="https://github.com/cs60apa">
            <FaGithubSquare size={25} />{" "}
          </a>
          <a href="https://instagram.com/marksikaundi">
            <FaInstagramSquare size={25} />{" "}
          </a>
          <a href="https://twitter.com/Alisikaundi">
            <FaTwitterSquare size={25} />{" "}
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 mt-6 flex justify-between">
        <div>
          <h6 className="font-medium text-black bold">Products</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="/features">Features</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/courses">Courses</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/funding-programs">Fundings</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/lms">Learning System</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/docs">Docs</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/guides">Guides</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black bold">Explore</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="/analytics">Analytics</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/commerce">Commerce</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/ai-tools">AI Tools</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/research">Research</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/help">Help</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/projects">Projects</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/fqa">FQA</a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-black bold">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="/about">About</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/blog">Blog</a>
            </li>
            <li className="py-2 text-sm">
              <a href="https://devcircleafrica.com/careers">careers</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/open-source">Open source</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li className="py-2 text-sm">
              <a href="/terms">Terms</a>
              <li className="py-2 text-sm">
                <a href="/code-hacks">Code Hacks</a>
              </li>
              <li className="py-2 text-sm">
                <a href="/marketplace">Marketplace</a>
              </li>
            </li>
            <li className="py-2 text-sm">
              <a href="https://forum.devcircleafrica.com">Community</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <span>&copy; {new Date().getFullYear()} Otofast Project</span>
      </div>
    </div>
  );
}