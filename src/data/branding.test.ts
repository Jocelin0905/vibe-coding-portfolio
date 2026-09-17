import { describe, expect, it } from "vitest";
import indexHtml from "../../index.html?raw";
import readme from "../../README.md?raw";
import aboutPage from "../pages/AboutPage.tsx?raw";
import homePage from "../pages/HomePage.tsx?raw";
import notFoundPage from "../pages/NotFoundPage.tsx?raw";
import projectsPage from "../pages/ProjectsPage.tsx?raw";
import projectsSource from "./projects.ts?raw";
import { projects } from "./projects";
import { siteConfig } from "./site";

const publicBrandSources = [
  indexHtml,
  readme,
  aboutPage,
  homePage,
  notFoundPage,
  projectsPage,
  projectsSource,
].join("\n");

describe("public portfolio branding", () => {
  it("uses Things I Wish Existed as the public brand", () => {
    expect(siteConfig.name).toBe("Things I Wish Existed");
    expect(siteConfig.shortName).toBe("Things I Wish Existed");
    expect(indexHtml).toContain("<title>Things I Wish Existed — Jocelin</title>");
    expect(indexHtml).toContain(
      '<meta property="og:title" content="Things I Wish Existed — Jocelin" />',
    );
    expect(publicBrandSources).not.toMatch(
      /Jocelin[’']s Vibe Coding Lab|Vibe Coding Lab|Vibe Coding Portfolio/i,
    );
  });

  it("uses the branded production domain for canonical and Open Graph URLs", () => {
    const productionUrl = "https://things-i-wish-existed.vercel.app";

    expect(siteConfig.siteUrl).toBe(productionUrl);
    expect(indexHtml).toContain(
      `<meta property="og:url" content="${productionUrl}/" />`,
    );
    expect(indexHtml).toContain(
      `<meta property="og:image" content="${productionUrl}/images/projects/life-roulette.webp" />`,
    );
    expect(indexHtml).toContain(
      `<link rel="canonical" href="${productionUrl}/" />`,
    );
  });

  it("uses the agreed title pattern for home and subpages", () => {
    expect(homePage).toContain('title="Things I Wish Existed — Jocelin"');
    expect(projectsPage).toContain('title="Projects — Things I Wish Existed"');
    expect(aboutPage).toContain('title="About — Things I Wish Existed"');
    expect(notFoundPage).toContain(
      'title="Page not found — Things I Wish Existed"',
    );

    for (const project of projects) {
      expect(project.seo.title).toBe(`${project.name} — Things I Wish Existed`);
    }
  });
});
