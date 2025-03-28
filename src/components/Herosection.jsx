import React from "react";
import mypic from "../assets/mypic.png";
import photogif from "../assets/photogif.gif";
import { MdOutlineFileDownload } from "react-icons/md";
const Herosection = () => {
  const handledownload = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Prince_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="flex flex-col justify-center m-2 p-2 md:m-10 md:p-10"
    >
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 md:gap-0">
        {/* left  */}
        <div className="md:w-1/2 hidden md:block">
          <div className="text-left text-3xl">
            <div className="">
              Hello! My name is
              <span className="text-sky-500 font-serif"> Prince Sharma</span>
            </div>
            <div>and I'm an Aspiring Software Developer</div>
          </div>
          <div className="flex space-x-6 mt-2 md:mt-4 mb-2 md:mb-4">
          <a href="https://www.linkedin.com/in/prince-sharma-a38a11254" target="_blank" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">LinkedIn</span>
  <svg
    className="h-6 w-6 md:h-8 md:w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4.75 2A2.75 2.75 0 0 0 2 4.75v14.5A2.75 2.75 0 0 0 4.75 22h14.5A2.75 2.75 0 0 0 22 19.25V4.75A2.75 2.75 0 0 0 19.25 2H4.75zm.5 5.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zM5 9.75h3.5V19H5V9.75zm5.75 0H14v1.24c.6-.94 1.66-1.49 2.75-1.49 2 0 3.25 1.39 3.25 3.92V19h-3.5v-5.18c0-1.06-.4-1.82-1.39-1.82-1.02 0-1.61.75-1.61 1.88V19h-3.5V9.75z"
      clipRule="evenodd"
    />
  </svg>
</a>

          <a href="https://www.instagram.com/prince_sharmaa.00/" target="_blank" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">Instagram</span>
  <svg
    className="h-6 w-6 md:h-8 md:w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-2.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75z"
      clipRule="evenodd"
    />
  </svg>
</a>

<a href="https://x.com/Prince03112002" target="_blank" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">X (Twitter)</span>
  <svg
    className="h-6 w-6 md:h-8 md:w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M18.36 2H21L14.57 10.15 22 22h-6.8l-4.8-7.07L5.73 22H2.1L9.02 13.1 2 2h6.92l4.33 6.7L18.36 2zm-1.24 2.2-4.37 4.47L7.95 4.2H5.68l5.87 8.65L5.32 20h2.22l4.74-5.14L16.71 20h2.2l-5.8-8.26 4.01-4.28h-.01z"
      clipRule="evenodd"
    />
  </svg>
</a>

          <a href="https://wa.me/917417773844" target="_blank" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">WhatsApp</span>
  <svg
    className="h-6 w-6 md:h-8 md:w-8"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.04 2C6.51 2 2 6.27 2 11.63c0 2.4.9 4.59 2.38 6.3L2 22l4.16-1.08a10.68 10.68 0 0 0 5.88 1.7h.01c5.53 0 10.04-4.27 10.04-9.63C22.09 6.27 17.57 2 12.04 2zm.04 17.65c-1.89 0-3.68-.51-5.23-1.47l-.37-.22-2.47.64.66-2.39-.24-.38a8.16 8.16 0 0 1-1.42-4.49c0-4.57 3.9-8.28 8.71-8.28s8.71 3.71 8.71 8.28-3.9 8.28-8.71 8.28zm4.71-6.17c-.26-.13-1.54-.76-1.78-.85s-.41-.13-.59.13c-.18.25-.68.85-.83 1.02s-.3.19-.56.06a6.79 6.79 0 0 1-2-1.23c-.55-.5-.91-1.1-1.02-1.29s-.01-.28.12-.4c.12-.12.26-.3.39-.45s.17-.25.26-.41c.09-.16.04-.31-.02-.44-.06-.13-.59-1.43-.81-1.95s-.43-.46-.59-.47c-.15-.01-.32-.02-.49-.02s-.45.07-.69.34c-.24.26-.9.87-.9 2.12s.92 2.46 1.05 2.64c.13.17 1.81 2.9 4.38 4.06 1.54.67 2.14.72 2.91.6.44-.07 1.54-.63 1.76-1.24.22-.62.22-1.15.16-1.24s-.24-.18-.5-.3z"
      clipRule="evenodd"
    />
  </svg>
</a>
        </div>
          <div className="mt-3">
            <button className="p-3 bg-red-400 rounded-full text-lg flex items-center gap-2" onClick={handledownload}>
              My Resume <span><MdOutlineFileDownload /></span>
            </button>
          </div>
        </div>
        {/* right  */}
        <div>
          <div className="w-full h-full relative">
            <div className="w-[290px] h-[290px] md:w-[520px] md:h-[520px] absolute -top-10 -left-10 md:-top-16 md:-left-16">
              <img src={photogif} alt="mypic" className="w-full h-full" />
            </div>
            <img src={mypic} alt="mypic" className="rounded-full w-52 h-52 md:w-96 md:h-96" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  md:w-1/2 md:hidden">
          <div className="text-center text-3xl">
            <div className="text-sky-500 font-serif">
               Prince Sharma
            </div>
            <div>"I'm a an Aspiring Software Developer"</div>
          </div>
          <div className="flex space-x-6 mt-2 mb-2">
          <a href="https://www.linkedin.com/in/prince-sharma-a38a11254" target="_blank" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">LinkedIn</span>
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4.75 2A2.75 2.75 0 0 0 2 4.75v14.5A2.75 2.75 0 0 0 4.75 22h14.5A2.75 2.75 0 0 0 22 19.25V4.75A2.75 2.75 0 0 0 19.25 2H4.75zm.5 5.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zM5 9.75h3.5V19H5V9.75zm5.75 0H14v1.24c.6-.94 1.66-1.49 2.75-1.49 2 0 3.25 1.39 3.25 3.92V19h-3.5v-5.18c0-1.06-.4-1.82-1.39-1.82-1.02 0-1.61.75-1.61 1.88V19h-3.5V9.75z"
      clipRule="evenodd"
    />
  </svg>
</a>

          <a href="https://www.instagram.com/prince_sharmaa.00/" target="_blank" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">Instagram</span>
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-2.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75z"
      clipRule="evenodd"
    />
  </svg>
</a>

<a href="https://x.com/Prince03112002" target="_blank" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">X (Twitter)</span>
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M18.36 2H21L14.57 10.15 22 22h-6.8l-4.8-7.07L5.73 22H2.1L9.02 13.1 2 2h6.92l4.33 6.7L18.36 2zm-1.24 2.2-4.37 4.47L7.95 4.2H5.68l5.87 8.65L5.32 20h2.22l4.74-5.14L16.71 20h2.2l-5.8-8.26 4.01-4.28h-.01z"
      clipRule="evenodd"
    />
  </svg>
</a>

          <a href="https://wa.me/917417773844" target="_blank" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">WhatsApp</span>
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.04 2C6.51 2 2 6.27 2 11.63c0 2.4.9 4.59 2.38 6.3L2 22l4.16-1.08a10.68 10.68 0 0 0 5.88 1.7h.01c5.53 0 10.04-4.27 10.04-9.63C22.09 6.27 17.57 2 12.04 2zm.04 17.65c-1.89 0-3.68-.51-5.23-1.47l-.37-.22-2.47.64.66-2.39-.24-.38a8.16 8.16 0 0 1-1.42-4.49c0-4.57 3.9-8.28 8.71-8.28s8.71 3.71 8.71 8.28-3.9 8.28-8.71 8.28zm4.71-6.17c-.26-.13-1.54-.76-1.78-.85s-.41-.13-.59.13c-.18.25-.68.85-.83 1.02s-.3.19-.56.06a6.79 6.79 0 0 1-2-1.23c-.55-.5-.91-1.1-1.02-1.29s-.01-.28.12-.4c.12-.12.26-.3.39-.45s.17-.25.26-.41c.09-.16.04-.31-.02-.44-.06-.13-.59-1.43-.81-1.95s-.43-.46-.59-.47c-.15-.01-.32-.02-.49-.02s-.45.07-.69.34c-.24.26-.9.87-.9 2.12s.92 2.46 1.05 2.64c.13.17 1.81 2.9 4.38 4.06 1.54.67 2.14.72 2.91.6.44-.07 1.54-.63 1.76-1.24.22-.62.22-1.15.16-1.24s-.24-.18-.5-.3z"
      clipRule="evenodd"
    />
  </svg>
</a>
        </div>
          <div className="mt-3">
            <button className="p-3 bg-red-400 rounded-full text-lg flex items-center gap-2" onClick={handledownload}>
            My Resume <span><MdOutlineFileDownload /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
