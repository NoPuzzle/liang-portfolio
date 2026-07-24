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
    /<title>Liang Liang — Data-Intensive Systems Research<\/title>/i,
  );
  assert.match(html, /Data-intensive systems,/);
  assert.match(html, /Recent activity/);
  assert.match(html, /AI Frontier Technology Research Manager/);
  assert.match(html, /China Mobile \(Hong Kong\) Innovation Research Institute/);
  assert.match(html, /Postdoctoral Researcher/);
  assert.match(html, /class="appointment-brief"/);
  assert.match(html, /EPFL \/ DIAS/);
  assert.doesNotMatch(html, /\bCMHK\b/);
  assert.match(html, /Imperial College London/);
  assert.match(html, /PhD in Computing/);
  assert.doesNotMatch(
    html,
    /University of Edinburgh|Monash University|Tianjin Polytechnic University|Master of Data Science|Law &amp; Human Resource Management/,
  );
  assert.match(html, /SWIX/);
  assert.match(html, /LITune/);
  assert.match(html, /HIRE/);
  assert.match(html, /AI for Good Global Summit/);
  assert.match(html, /https:\/\/aiforgood\.itu\.int\/speaker\/liang-liang\//);
  assert.match(html, /https:\/\/aiforgood\.itu\.int\/event\/advancing-ai-in-networks\//);
  assert.match(html, /https:\/\/aiforgood\.itu\.int\/event\/innovate-for-impact\//);
  assert.match(html, /OPEN ↗/);
  assert.match(html, /https:\/\/scholar\.google\.com\/scholar\?q=/);
  assert.match(html, /https:\/\/www\.semanticscholar\.org\/author\/2087343695/);
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
  assert.match(page, /midnight|Postdoctoral Researcher|Data-Intensive Systems/i);
  assert.doesNotMatch(page, /SkeletonPreview/);
  assert.match(layout, /Liang Liang — Data-Intensive Systems Research/);
  assert.match(layout, /academic-systems-background\.png/);
  assert.match(css, /academic-systems-background\.png/);
  assert.match(css, /body::before\s*\{[\s\S]*position:\s*fixed;/);
  assert.match(css, /body::before\s*\{[\s\S]*min-height:\s*100svh;/);
  assert.doesNotMatch(css, /background-attachment:/);
  assert.match(css, /font-family: var\(--mono\)/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);

  await Promise.all([
    access(new URL("../public/assets/midnight-systems-background.png", import.meta.url)),
    access(new URL("../public/assets/academic-systems-background.png", import.meta.url)),
    access(new URL("../design-reference/midnight-systems-reference.png", import.meta.url)),
  ]);
});
