import { ProjectGrid } from "../components/ProjectGrid";
import { projects } from "../data/projects";
import { Seo } from "../seo/Seo";

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects — Things I Wish Existed"
        description="Explore Jocelin’s shipped products and the decisions behind them."
        path="/projects"
      />
      <section className="page-intro shell">
        <h1>Products built from real-life friction.</h1>
        <p>Each product below is live, public and documented from problem to production.</p>
      </section>
      <section className="section shell section--first">
        <ProjectGrid projects={projects} headingLevel={2} />
      </section>
    </>
  );
}
