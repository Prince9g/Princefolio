import React from "react";
import mypic from "../assets/mypic.png";
import photogif from "../assets/photogif.gif";
const Herosection = () => {
  return (
    <div className="m-10 p-10">
      <div className="flex justify-between items-center">
        {/* left  */}
        <div className="w-1/2">
          <div className="text-left text-3xl">
            <div className="">
              Hello! My name is
              <span className="text-sky-500 font-serif"> Prince Sharma</span>
            </div>
            <div class>and I'm a Web Developer</div>
            <div>from India</div>
          </div>

          <div className="mt-3">
            <button className="p-3 bg-red-400 rounded-full text-lg">
              Contact Me
            </button>
          </div>
        </div>
        {/* right  */}
        <div>
          <div className="w-full h-full relative">
            <div className="w-[520px] h-[520px] absolute -top-16 -left-16">
              <img src={photogif} alt="mypic" className="w-full h-full" />
            </div>
            <img src={mypic} alt="mypic" className="rounded-full w-96 h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
