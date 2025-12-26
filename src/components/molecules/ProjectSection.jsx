import { ProjectCard } from "../atoms/ProjectCard";

export const ProjectsSection = ({ projects, completedActions, setSelectedProject }) => {
  return (
    <section className="py-20 px-6 border-t-2 border-white/20">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-mono">
        // PROJECT_ARCHIVE
      </h2>
      <p className="text-center text-gray-400 mb-4 font-mono">Click to explore project details</p>
      <p className="text-center text-sm text-white mb-16 font-mono">+60 XP per project explored</p>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            completedActions={completedActions}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
    </section>
  );
};