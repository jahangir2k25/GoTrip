import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <div>
      <div className="pt-20">
        <iframe
          className="w-full h-screen relative"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.395654348428!2d90.36679397589828!3d23.804525786695272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1f2a4049aeb%3A0xcffebf50a8b322f!2sCreative%20IT%20Institute%2C%20Mirpur%20Campus!5e0!3m2!1sen!2sbd!4v1764617053869!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="container pl-220 z-10">
        <form className="w-100 bg-gray-100 sm:p-8 rounded-md shadow-sm space-y-4 lg:max-w-md lg:ml-auto -mt-150 absolute">
          <h2 className="text-xl sm:text-2xl font-medium mb-2">Send a message</h2>

          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-slate-400"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-slate-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-slate-400"
            />
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Your Messages"
              className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-slate-400"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn bg-blue-600 text-gray-100 px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send a Message
            </button>
          </div>
        </form>
      </div>

      <div className="container">

        <h2 className="text-3xl font-semibold text-slate-900 mt-20 mb-8 px-23">Contact Us</h2>
        <div className="flex justify-around gap-8">
          {/* Address */}
          <div>
            <p className="text-sm text-slate-400">Address</p>
            <p className="font-semibold text-slate-900 mt-2">328 Queensberry Street, North</p>
            <p className="text-slate-700">Melbourne VIC 3051, Australia.</p>
          </div>

          {/* contact number */}
          <div>
            <p className="text-sm text-slate-400">Toll Free Customer Care</p>
            <p className="font-semibold text-slate-900 mt-2"> +(1) 123 456 7890</p>
          </div>

          {/* email address */}
          <div>
            <p className="text-sm text-slate-400">Need live support?</p>
            <p className="font-semibold text-slate-900 mt-2">hi@gotrip.com </p>
          </div>

          {/* social media */}
          <div>
            <p className="text-sm text-slate-400">Follow us on social media</p>
            <div className="flex items-center gap-4 mt-3 text-slate-900 text-xl">
              <FaFacebookF className="hover:text-indigo-600 cursor-pointer duration-200" />
              <FaTwitter className="hover:text-indigo-600 cursor-pointer duration-200" />
              <FaInstagram className="hover:text-indigo-600 cursor-pointer duration-200" />
              <FaLinkedinIn className="hover:text-indigo-600 cursor-pointer duration-200" />
            </div>
          </div>

        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Contact;