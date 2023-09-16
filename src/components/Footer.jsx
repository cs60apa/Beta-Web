
import React from "react";

export default function Footer() {
  return (
    <div className="py-20 lg:px-40 px-10 md:py-32 grid lg:grid-cols-3 gap-8 bg-gradient-to-r from-[#040404] to-[#2D3436] text-[#9DAEBE]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00D4FF]">
          DevCircle
        </h1>
        
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-white bold py-2">Products</h6>
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
          <h6 className="font-medium text-white bold py-2">Explore</h6>
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
          <h6 className="font-medium text-white bold py-2">Company</h6>
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
        <span>&copy; {new Date().getFullYear()} DevCircle Africa</span>
      </div>
    </div>
  );
}