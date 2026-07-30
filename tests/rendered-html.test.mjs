import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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
  assert.match(html, /Innovation and R&amp;D/);
  assert.match(html, /SINCE 2026\.01\.05/);
  assert.match(html, /Postdoctoral Researcher/);
  assert.match(html, /class="appointment-brief"/);
  assert.match(html, /2025\.01—2025\.12/);
  assert.match(html, /Anastasia Ailamaki/);
  assert.doesNotMatch(html, /\bCMHK\b/);
  assert.match(html, /Imperial College London/);
  assert.match(html, /PhD in Computing/);
  assert.match(html, /2020\.10—2024\.10/);
  assert.match(html, /Thomas Heinis/);
  assert.doesNotMatch(
    html,
    /University of Edinburgh|Monash University|Tianjin Polytechnic University|Master of Data Science|Law &amp; Human Resource Management/,
  );
  assert.match(html, /SWIX/);
  assert.match(html, /LITune/);
  assert.match(html, /HIRE/);
  assert.match(html, /AI for Good Global Summit/);
  assert.match(html, /Selected case report and invited talk/);
  assert.match(html, /Speaker profile/);
  assert.match(html, /Talk \+ panel/);
  assert.match(html, /Selected case/);
  assert.doesNotMatch(html, /Silk Road Intelligence[^<]{0,80}(award|winner)/i);
  assert.match(html, /https:\/\/aiforgood\.itu\.int\/speaker\/liang-liang\//);
  assert.match(html, /https:\/\/aiforgood\.itu\.int\/event\/advancing-ai-in-networks\//);
  assert.match(html, /https:\/\/aiforgood\.itu\.int\/event\/innovate-for-impact\//);
  assert.match(html, /Skip to content/);
  assert.match(html, /RESEARCH INDEX/);
  assert.match(html, /Google Scholar/);
  assert.match(
    html,
    /https:\/\/scholar\.google\.com\/citations\?user=97k8aygAAAAJ(?:&amp;|&)hl=en/,
  );
  assert.match(html, /https:\/\/www\.semanticscholar\.org\/author\/2087343695/);
  assert.match(html, /Connect on LinkedIn/);
  assert.match(html, /May request sign-in/);
  assert.match(html, /ACM may request browser verification/);
  assert.match(html, /class="research-card-main"/);
  assert.match(html, /https:\/\/github\.com\/SWIXProject\/SWIX/);
  assert.match(html, /https:\/\/github\.com\/Kevinwty0107\/LITune_SIGMOD_25/);
  assert.match(html, /https:\/\/arxiv\.org\/abs\/2511\.21307/);
  assert.match(html, /PVLDB \/ VLDB 2026 Reviewer/);
  assert.doesNotMatch(html, /https:\/\/github\.com\/NoPuzzle/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"Person"/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});

test("serves crawler discovery routes", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);

  assert.equal(robotsResponse.status, 200);
  assert.match(await robotsResponse.text(), /Sitemap: .*\/sitemap\.xml/);
  assert.equal(sitemapResponse.status, 200);
  assert.match(
    await sitemapResponse.text(),
    /https:\/\/nopuzzle\.github\.io\/liang-portfolio\//,
  );
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
  assert.match(layout, /academic-systems-background-formulas\.webp/);
  assert.match(layout, /academic-systems-background-mobile\.webp/);
  assert.match(layout, /NEXT_PUBLIC_BASE_PATH/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /og\.png/);
  assert.match(css, /body::before\s*\{[\s\S]*position:\s*fixed;/);
  assert.match(css, /body::before\s*\{[\s\S]*min-height:\s*100svh;/);
  assert.match(css, /var\(--academic-background-desktop\)/);
  assert.match(css, /var\(--academic-background-mobile\)/);
  assert.doesNotMatch(css, /url\(["']?\/assets\//);
  assert.doesNotMatch(css, /background-attachment:/);
  assert.match(css, /font-family: var\(--mono\)/);
  assert.match(css, /\.research-card:focus-within/);
  assert.match(css, /\.research-card-main::after\s*\{/);
  assert.doesNotMatch(css, /\.degree-card:hover/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);

  await Promise.all([
    access(new URL("../public/assets/midnight-systems-background.png", import.meta.url)),
    access(new URL("../public/assets/academic-systems-background.png", import.meta.url)),
    access(new URL("../public/assets/academic-systems-background-mobile.png", import.meta.url)),
    access(
      new URL(
        "../public/assets/academic-systems-background-formulas.webp",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../public/assets/academic-systems-background-mobile.webp",
        import.meta.url,
      ),
    ),
    access(new URL("../design-reference/midnight-systems-reference.png", import.meta.url)),
  ]);

  const [desktopBackground, mobileBackground, socialCard] = await Promise.all([
    stat(
      new URL(
        "../public/assets/academic-systems-background-formulas.webp",
        import.meta.url,
      ),
    ),
    stat(
      new URL(
        "../public/assets/academic-systems-background-mobile.webp",
        import.meta.url,
      ),
    ),
    stat(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.ok(desktopBackground.size < 500_000);
  assert.ok(mobileBackground.size < 500_000);
  assert.ok(socialCard.size < 500_000);
});
