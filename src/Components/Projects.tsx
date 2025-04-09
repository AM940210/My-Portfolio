import React from "react";

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
      <h1>Projects Page</h1>

      {/* From to add a new project */}
      <div>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Projects Title"
        />
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project description" 
        />
        <button onClick={addProject}>Add Project</button>
      </div>
      {/* Display the list of projects */}
      <div>
        <h2>Projects List</h2>
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          <ul>
            {projects.map((project) => {
              <li key={project.id}>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </li>
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Projects;
