import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  headingLevel?: 2 | 3;
}

export function ProjectCard({ project, index = 0, headingLevel = 3 }: ProjectCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className={`project-card project-card--${project.slug} ${index % 2 === 1 ? "project-card--reverse" : ""}`}>
      <Link className="project-card__media" to={`/projects/${project.slug}`} aria-label={`Open ${project.name} project details`}>
        <img
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          width={project.coverImage.width}
          height={project.coverImage.height}
          loading={index === 0 ? "eager" : "lazy"}
        />
      </Link>
      <div className="project-card__content">
        <div className="project-card__topline">
          <span className="status-label">{project.status}</span>
          <span>{project.role}</span>
        </div>
        <Heading>{project.name}</Heading>
        <p className="project-card__chinese">{project.chineseName}</p>
        <p className="project-card__tagline">{project.tagline}</p>
        <div className="tag-list" aria-label={`${project.name} technology stack`}>
          {project.techStack.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-card__actions">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight aria-hidden="true" size={15} /></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>}
          <Link className="project-card__case-link" to={`/projects/${project.slug}`}>
            View Case Study <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
