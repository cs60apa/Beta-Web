import React from "react";

export default function Contact() {
  return (
    <div className="bg-primary-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-center mb-4">Contact us</h1>
          <p className="text-lg text-lightslategray mb-6">
            For any queries, please fill in the form below, and we will get back to you as soon as possible. For your convenience, we have also provided our contact details like email address.
          </p>
          <form>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="fullname" className="block text-base font-medium text-darkgray">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="mt-1 p-2 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray rounded-md"
                  placeholder="Mark Sikaundi"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-darkgray">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray rounded-md"
                  placeholder="marksikaundi@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-base font-medium text-darkgray">
                Your Detailed Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-2 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray rounded-md"
                placeholder="Enter your message here..."
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-base font-medium rounded-md text-gray-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
