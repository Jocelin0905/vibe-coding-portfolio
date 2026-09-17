import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ProjectGrid } from "../components/ProjectGrid";
import { featuredProjects, projectStats } from "../data/projects";
import { siteConfig } from "../data/site";
import { Seo } from "../seo/Seo";

export function HomePage() {
  return (
    <>
      <Seo
        title="Things I Wish Existed — Jocelin"
        description="Jocelin’s product portfolio, featuring real products taken from idea to production."
      />
      <section className="hero shell">
        <div className="hero__copy">
          <p className="eyebrow">Small ideas. Real products.</p>
          <h1>Things I Wish Existed</h1>
          <p className="hero__lead">I build the little things I wish existed.</p>
          <p className="hero__cn">把那些“要是有这个就好了”的念头，一个个做出来。</p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/projects">View Projects <ArrowRight aria-hidden="true" size={17} /></Link>
            <a className="button button--ghost" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={16} /></a>
          </div>
        </div>
        <div className="hero__fan" aria-label="Shipped projects">
          {featuredProjects.map((project, index) => (
            <Link
              className={`hero-project hero-project--${project.slug}`}
              key={project.id}
              to={`/projects/${project.slug}`}
              aria-label={`View ${project.name} from the homepage hero`}
            >
              <img
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                width={project.coverImage.width}
                height={project.coverImage.height}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <span className="hero-project__label">
                <strong>{project.name}</strong>
                <span>{project.chineseName}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="stats-band" aria-label="Portfolio statistics">
        <div className="shell stats-band__inner">
          <div><strong>{String(projectStats.shipped).padStart(2, "0")}</strong><span>Products Shipped</span></div>
          <div><strong>{String(projectStats.live).padStart(2, "0")}</strong><span>Live Products</span></div>
          <div><strong>{String(projectStats.publicRepositories).padStart(2, "0")}</strong><span>Public Repositories</span></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <h2>Products, not exercises.</h2>
          <p>Each project began with a small real-life friction, then moved through product thinking, design, build, test and production.</p>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="philosophy shell">
        <h2>Turning abstract friction into simple action.</h2>
        <p>Three small products, connected by the same instinct: make an invisible cost, progress or choice easier to understand.</p>
        <div aria-label="Product philosophy keywords">
          <span>Abstract problem</span>
          <span>Simple interaction</span>
          <span>Shipped product</span>
        </div>
      </section>

      <section className="building shell">
        <div>
          <p className="building__metric">{projectStats.shipped} Products Shipped</p>
          <h2>Building in public.</h2>
        </div>
        <div>
          <span>Next Experiment</span>
          <strong>Coming soon.</strong>
        </div>
      </section>
    </>
  );
}
