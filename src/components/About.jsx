import React from "react";
import alien from "../assets/alien.gif";
import contact from "../assets/contact.gif";
const About = () => {
  return (
    <div className="m-4 p-4">
      <h1 className="text-center text-3xl font-bold font-serif border-b-2">About Me</h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* content  */}
        <div className="md:hidden">
        <p className="text-lg leading-relaxed">
        I am a <span className="text-indigo-400 font-semibold">pre-final year B.Tech CSE student </span>  
        specializing in <span className="text-indigo-400 font-semibold">AI & ML</span>, with a strong passion for  
        <span className="text-indigo-400 font-semibold"> problem-solving</span> and  
        <span className="text-indigo-400 font-semibold"> competitive programming</span>.  
      </p>

      <p className="mt-3 text-lg leading-relaxed">
        I have solved <span className="text-indigo-400 font-semibold">hundreds of DSA problems</span>,  
        built multiple <span className="text-indigo-400 font-semibold">MERN stack projects</span>,  
        delivered freelance solutions, and won  
        <span className="text-indigo-400 font-semibold"> two institute hackathons</span>.  
      </p>

      <p className="mt-6 text-xl font-semibold text-indigo-500">
        Always eager to learn and innovate! 🚀
      </p>
        </div>
        <div className="w-1/2 hidden md:block mt-10">
        <p className="text-lg leading-relaxed">
        I am a <span className="text-indigo-400 font-semibold">pre-final year B.Tech CSE student</span>  
        specializing in <span className="text-indigo-400 font-semibold">Artificial Intelligence & Machine Learning</span>.  
        With a strong foundation in <span className="text-indigo-400 font-semibold">problem-solving</span> and  
        <span className="text-indigo-400 font-semibold"> algorithmic thinking</span>, I enjoy tackling complex challenges  
        through optimized and efficient code.
      </p>

      <p className="mt-3 text-lg leading-relaxed">
        I have solved <span className="text-indigo-400 font-semibold">hundreds of DSA problems</span>,  
        participated in coding competitions, and continuously upskill myself in  
        <span className="text-indigo-400 font-semibold"> competitive programming</span>.  
        My passion for development extends to **full-stack web development**, where I specialize in the  
        <span className="text-indigo-400 font-semibold"> MERN stack</span>, building scalable and efficient applications.
      </p>

      <p className="mt-3 text-lg leading-relaxed">
        Alongside my development work, I have delivered successful  
        <span className="text-indigo-400 font-semibold"> freelance projects</span> and won  
        <span className="text-indigo-400 font-semibold"> two institute-level hackathons</span>,  
        showcasing my ability to develop innovative and impactful solutions.
      </p>

      <p className="mt-3 text-lg leading-relaxed">
        I am constantly exploring <span className="text-indigo-400 font-semibold">new technologies</span>  
        and deepening my understanding of **AI, ML, and scalable architectures**.  
        My goal is to blend **strong problem-solving skills** with development expertise  
        to build intelligent and efficient solutions.
      </p>

      <p className="mt-6 text-xl font-semibold text-indigo-500">
        Always learning, always building. Let’s connect and innovate together! 🚀
      </p>
        </div>
        {/* image  */}
        <div>
          <img src={contact} />
        </div>
      </div>
    </div>
  );
};

export default About;
