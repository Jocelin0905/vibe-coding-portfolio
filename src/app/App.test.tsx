import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "../components/ProjectCard";
import { projects, type Project } from "../data/projects";
import { AppRoutes } from "./App";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("portfolio routes", () => {
  it("renders the product-first home page", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1, name: "Things I Wish Existed" })).toBeInTheDocument();
    expect(screen.getByText("I build the little things I wish existed.")).toBeInTheDocument();
    expect(screen.getByText("把那些“要是有这个就好了”的念头，一个个做出来。")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Life Progress from the homepage hero" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Life Price from the homepage hero" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Life Roulette from the homepage hero" })).toBeInTheDocument();
    expect(within(screen.getByRole("banner")).getByText("Things I Wish Existed")).toBeInTheDocument();
    expect(screen.getByText("Products Shipped")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /View Case Study/ })).toHaveLength(3);
  });

  it("renders all projects on the projects route", () => {
    renderAt("/projects");
    expect(screen.getByRole("heading", { level: 1, name: "Products built from real-life friction." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Life Progress" })).toBeInTheDocument();
    expect(screen.getByText("Life Price")).toBeInTheDocument();
    expect(screen.getByText("Life Roulette")).toBeInTheDocument();
  });

  it("renders a project through the shared case study template", () => {
    renderAt("/projects/life-roulette");
    expect(screen.getByRole("heading", { level: 1, name: "Life Roulette" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Build Notes / Product Decisions" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Next Project/ })).toHaveAttribute("href", "/projects/life-progress");
  });

  it("renders the about page and a useful not-found state", () => {
    renderAt("/about");
    expect(screen.getByRole("heading", { level: 1, name: "Learning by shipping." })).toBeInTheDocument();

    renderAt("/missing");
    expect(screen.getByRole("heading", { name: "This page does not exist." })).toBeInTheDocument();
  });

  it("moves focus to the main content when a route is rendered", () => {
    renderAt("/about");
    expect(screen.getByRole("main")).toHaveFocus();
  });

  it("does not render unavailable product actions", () => {
    const buildingProject = {
      ...projects[0],
      status: "building",
      liveUrl: undefined,
      githubUrl: undefined,
    } as unknown as Project;

    render(
      <MemoryRouter>
        <ProjectCard project={buildingProject} />
      </MemoryRouter>,
    );

    expect(screen.queryByRole("link", { name: /Live Demo/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /GitHub/ })).not.toBeInTheDocument();
  });
});
