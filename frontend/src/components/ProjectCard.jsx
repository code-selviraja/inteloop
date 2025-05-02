const ProjectCard = ({ project, onDelete }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 relative">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{project.description}</p>
        <button
          onClick={() => onDelete(project._id)}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    );
  };
  
  export default ProjectCard;
  