import React from "react";
import alien from '../assets/alien.gif';
const Contact = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold font-serif border-b-2 m-10">Get in touch</h2>
      <div className="md:flex">
        {/* image section  */}
        <div>
          <img src={alien} />
        </div>
        {/* contact form section  */}
        <div className="m-4 md:m-0 md:flex md:items-center md:justify-center md:w-1/2">
        <div className="md:w-1/2">
          <div className="text-lg w-full font-semibold">Name: <input type="text" className="p-1 w-full border-2 rounded-lg"/></div>
          <div className="text-lg w-full font-semibold ">Email:<input type="email"  className="p-1 rounded-lg w-full border-2"/></div>
          <div className="text-lg w-full font-semibold">Message:<textarea className="p-1 rounded-lg w-full border-2"/> </div>
          <div className="mt-2"><button className="p-3 text-lg rounded-full w-full bg-red-400">Get in touch</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
