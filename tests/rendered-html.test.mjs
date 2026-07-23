import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio content and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Liang Liang — Frontier AI Research &amp; Systems<\/title>/i,
  );
  assert.match(html, /Frontier AI,/);
  assert.match(html, /China Mobile \(Hong Kong\)/);
  assert.match(html, /Imperial College London/);
  assert.match(html, /University of Edinburgh/);
  assert.match(html, /Monash University/);
  assert.match(html, /Tianjin Polytechnic University/);
  assert.match(html, /SWIX/);
  assert.match(html, /LITune/);
  assert.match(html, /HIRE/);
  assert.match(html, /AI for Good Global Summit/);
  assert.match(html, /PVLDB \/ VLDB 2026 Reviewer/);
  assert.match(html, /https:\/\/github\.com\/NoPuzzle/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});

test("keeps the selected visual and project assets durable", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="site"/);
  assert.match(page, /midnight|AI Research|Technology Manager/i);
  assert.doesNotMatch(page, /SkeletonPreview/);
  assert.match(layout, /Liang Liang — Frontier AI Research & Systems/);
  assert.match(css, /midnight-systems-background\.png/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);

  await Promise.all([
    access(new URL("../public/assets/midnight-systems-background.png", import.meta.url)),
    access(new URL("../design-reference/midnight-systems-reference.png", import.meta.url)),
  ]);
});
