import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects, headingLevel = 3 }: { projects: Project[]; headingLevel?: 2 | 3 }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} headingLevel={headingLevel} />
      ))}
    </div>
  );
}
