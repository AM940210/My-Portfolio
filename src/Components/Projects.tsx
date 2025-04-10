import React, { useState } from "react";

// Define the type for a project
interface Project {
  id: number;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  // State for storing projects
  const [projects, setProjects] = useState<Project []>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

// Function to handle adding a new project
const addProject = () => {
  if (title && description) {
    const newProject: Project = {
      id: projects.length + 1,
      title,
      description,
    };
    setProjects([...projects, newProject]);
    setTitle("")
    setDescription("");
  } else {
    alert("Please provide both title and description.");
  }
};

  return (
    <div>
      <h1 className="text-3xl font-semeibold text-center mb-6">Projects Page</h1>

      {/* From to add a new project */}
      <div className="mb-4">
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Projects Title"
          className="w-full p-2 border border-gray-300 mb-4"
        />
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project description"
          className="w-full p-2 border border-gray-300 mb-4" 
        />
        <button 
          onClick={addProject}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Project
        </button>
      </div>
      {/* Display the list of projects */}
      <div>
        <h2 className="text-2xl font-bold">Projects List</h2>
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          <ul className="mt-4">
            {projects.map((project) => (
              <li key={project.id} className="mb-4 p-4 border-gray-200 reounded-md">
                <strong className="text-xl">{project.title}</strong>
                <p className="text-gray-70">{project.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Projects;
