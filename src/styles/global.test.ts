import { describe, expect, it } from "vitest";
import styles from "./global.css?raw";

describe("project image focal points", () => {
  it("anchors Life Roulette card images to the upper-left", () => {
    expect(styles).toMatch(
      /\.hero-project--life-roulette img\s*\{[^}]*object-position:\s*left top;/s,
    );
    expect(styles).toMatch(
      /\.project-card--life-roulette \.project-card__media img\s*\{[^}]*object-position:\s*left top;/s,
    );
  });
});
