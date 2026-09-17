import { ExternalLink } from "./ExternalLink";
import { siteConfig } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>{siteConfig.tagline}</p>
        <ExternalLink href={siteConfig.githubUrl}>GitHub</ExternalLink>
      </div>
    </footer>
  );
}

