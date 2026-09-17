import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import { getNextProject, getProjectBySlug } from "../data/projects";
import { Seo } from "../seo/Seo";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectDetailPage() {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFoundPage />;
  const nextProject = getNextProject(project.slug);

  return (
    <article className="case-study">
      <Seo title={project.seo.title} description={project.seo.description} path={`/projects/${project.slug}`} />
      <header className="case-hero shell">
        <div className="case-hero__copy">
          <span className="status-label">{project.status}</span>
          <h1>{project.name}</h1>
          <p className="case-hero__chinese">{project.chineseName}</p>
          <p className="case-hero__tagline">{project.tagline}</p>
          <div className="case-hero__actions">
            {project.liveUrl && <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">Open Live Product <ArrowUpRight aria-hidden="true" size={16} /></a>}
            {project.githubUrl && <a className="button button--ghost" href={project.githubUrl} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight aria-hidden="true" size={16} /></a>}
          </div>
        </div>
        <div className="case-hero__media">
          <img src={project.coverImage.src} alt={project.coverImage.alt} width={project.coverImage.width} height={project.coverImage.height} />
        </div>
      </header>

      <section className="overview shell" aria-label="Project overview">
        <div><span>Type</span><strong>{project.type}</strong></div>
        <div><span>Role</span><strong>{project.role}</strong></div>
        <div><span>Platform</span><strong>{project.platform}</strong></div>
        <div><span>Status</span><strong>{project.status}</strong></div>
      </section>

      <div className="case-body shell">
        <section className="case-section case-section--narrative">
          <h2>Problem</h2>
          <div>{project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="case-section case-section--narrative">
          <h2>Solution</h2>
          <div>{project.solution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="case-section">
          <div className="case-section__heading">
            <h2>Build Notes / Product Decisions</h2>
            <p>What was deliberately kept, removed or changed while taking the product to production.</p>
          </div>
          <div className="decision-grid">
            {project.decisions.map((decision) => (
              <article className="decision" key={decision.title}>
                <h3>{decision.title}</h3>
                <dl>
                  <div><dt>Decision</dt><dd>{decision.decision}</dd></div>
                  <div><dt>Reason</dt><dd>{decision.reason}</dd></div>
                  <div><dt>Trade-off</dt><dd>{decision.tradeoff}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {project.buildNotes.length > 0 && (
          <section className="case-section build-notes">
            <h2>From problem to production</h2>
            {project.buildNotes.map((note) => (
              <dl key={note.problem}>
                <div><dt>Problem</dt><dd>{note.problem}</dd></div>
                <div><dt>Diagnosis</dt><dd>{note.diagnosis}</dd></div>
                <div><dt>Solution</dt><dd>{note.solution}</dd></div>
                <div><dt>Result</dt><dd>{note.result}</dd></div>
              </dl>
            ))}
          </section>
        )}

        <section className="case-section feature-section">
          <h2>Core Features</h2>
          <div className="feature-list">
            {project.features.map((feature, index) => (
              <div key={feature}><span>{String(index + 1).padStart(2, "0")}</span><p>{feature}</p></div>
            ))}
          </div>
        </section>

        <section className="case-section screens-section">
          <h2>Product Screens</h2>
          {project.screenshots.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </section>

        <section className="case-section learnings-section">
          <h2>What I Learned</h2>
          <ol>
            {project.learnings.map((learning) => <li key={learning}>{learning}</li>)}
          </ol>
        </section>

        <footer className="case-footer">
          <div className="case-footer__actions">
            {project.liveUrl && <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">Open Live Product <ArrowUpRight aria-hidden="true" size={16} /></a>}
            {project.githubUrl && <a className="button button--ghost" href={project.githubUrl} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight aria-hidden="true" size={16} /></a>}
          </div>
          {nextProject && (
            <Link className="next-project" to={`/projects/${nextProject.slug}`}>
              <span>Next Project</span>
              <strong>{nextProject.name}</strong>
              <ArrowRight aria-hidden="true" size={22} />
            </Link>
          )}
        </footer>
      </div>
    </article>
  );
}
