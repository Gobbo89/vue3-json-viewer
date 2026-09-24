import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const scopes = (fileName: string) => {
  const content = readFileSync(new URL(`../dist/${fileName}`, import.meta.url), "utf8");
  return [...new Set(content.match(/data-v-[a-f0-9]{8}/g) ?? [])].sort();
};

describe("built package", () => {
  it("uses the same Vue scope IDs in CSS and both JavaScript bundles", () => {
    const cssScopes = scopes("index.css");
    expect(cssScopes.length).toBeGreaterThan(0);
    expect(scopes("index.js")).toEqual(cssScopes);
    expect(scopes("index.mjs")).toEqual(cssScopes);
  });
});
