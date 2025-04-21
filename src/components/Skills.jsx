import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCplusplus, SiTailwindcss, SiExpress } from "react-icons/si";

export default function Skills() {
  return (
    <div className=" mx-auto p-6  text-black dark:text-white rounded-2xl">
      <h2 className="text-3xl font-serif mb-6 text-center font-bold border-b-2">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* Skill Items */}
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-400 text-5xl" />
          <span className="mt-2 text-lg">React.js</span>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-green-500 text-5xl" />
          <span className="mt-2 text-lg">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress className="text-black-300 text-5xl" />
          <span className="mt-2 text-lg">Express.js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-400 text-5xl" />
          <span className="mt-2 text-lg">MongoDB</span>
        </div>
        <div className="flex flex-col items-center">
          <SiJavascript className="text-yellow-400 text-5xl" />
          <span className="mt-2 text-lg">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCplusplus className="text-blue-500 text-5xl" />
          <span className="mt-2 text-lg">C++</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDatabase className="text-purple-400 text-5xl" />
          <span className="mt-2 text-lg">SQL</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-orange-500 text-5xl" />
          <span className="mt-2 text-lg">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-500 text-5xl" />
          <span className="mt-2 text-lg">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-teal-400 text-5xl" />
          <span className="mt-2 text-lg">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-indigo-500 text-5xl" />
          <span className="mt-2 text-lg">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGitAlt className="text-orange-400 text-5xl" />
          <span className="mt-2 text-lg">Git/GitHub</span>
        </div>
      </div>
    </div>
  );
}
