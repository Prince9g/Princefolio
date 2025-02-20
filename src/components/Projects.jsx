import React from 'react'
import List from './List'
import Project from './Project';
const Projects = () => {
    // const {projects} = List;
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold font-serif border-b-2">My Projects</h1>
        <div>
            {
                List.map((project) =>{
                    return <Project key = {project.id} image={project.image} description={project.description} name={project.name}/>;
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Projects
