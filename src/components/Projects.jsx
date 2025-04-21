import React from 'react'
import List from './List'
import Project from './Project';
const Projects = () => {
  return (
    <div>
      <div className="dark:text-white">
        <h1 className="text-center text-3xl font-bold font-serif border-b-2 m-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-4 justify-items-center">
            {
                List.map((project) =>{
                    return <Project key = {project.id} image={project.image} description={project.description} name={project.title} livelink={project.livelink} repolink={project.repolink}/>;
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Projects
