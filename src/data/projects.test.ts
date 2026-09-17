import { describe, expect, it } from "vitest";
import { getNextProject, getProjectBySlug, projectStats, projects } from "./projects";

describe("project data", () => {
  it("derives every homepage statistic from the project collection", () => {
    expect(projectStats).toEqual({
      shipped: projects.length,
      live: projects.filter((project) => project.status === "live").length,
      publicRepositories: projects.filter((project) => Boolean(project.githubUrl)).length,
    });
  });

  it("finds projects by a future-friendly string slug", () => {
    expect(getProjectBySlug("life-price")?.name).toBe("Life Price");
    expect(getProjectBySlug("unknown-project")).toBeUndefined();
  });

  it("cycles to the next project", () => {
    expect(getNextProject("life-progress")?.slug).toBe("life-price");
    expect(getNextProject("life-roulette")?.slug).toBe("life-progress");
  });

  it("does not publish the unconfirmed recent-task exclusion claim", () => {
    const roulette = getProjectBySlug("life-roulette");
    const publishedCopy = JSON.stringify(roulette);

    expect(publishedCopy).not.toContain("最近任务排除");
    expect(publishedCopy).not.toContain("减少短期重复");
  });
});
