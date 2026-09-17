import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Seo } from "../seo/Seo";

export function NotFoundPage() {
  return (
    <section className="not-found shell">
      <Seo title="Page not found | Jocelin’s Vibe Coding Lab" description="The requested page could not be found." />
      <p>404</p>
      <h1>This page does not exist.</h1>
      <Link className="button button--primary" to="/"><ArrowLeft aria-hidden="true" size={16} /> Back to Home</Link>
    </section>
  );
}

