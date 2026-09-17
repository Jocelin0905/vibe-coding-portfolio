import { ArrowUpRight } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <NavLink className="brand" to="/" aria-label="Things I Wish Existed home">
          <span className="brand__mark">J</span>
          <span className="brand__name">{siteConfig.shortName}</span>
        </NavLink>
        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" size={13} weight="bold" />
          </a>
        </nav>
      </div>
    </header>
  );
}
