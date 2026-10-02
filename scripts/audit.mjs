import fs from 'fs';
import path from 'path';

async function audit() {
  const projectsFile = fs.readFileSync(path.join(process.cwd(), 'src/lib/data/projects.ts'), 'utf8');
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const slugs = [];
  let sMatch;
  while ((sMatch = slugRegex.exec(projectsFile)) !== null) {
    slugs.push(sMatch[1]);
  }

  const routes = [
    '/',
    '/about',
    '/contact',
    '/projects',
    ...slugs.map(s => `/projects/${s}`)
  ];
  const publicDir = path.join(process.cwd(), 'public');
  let issuesFound = 0;
  const externalUrls = new Set();

  for (const r of routes) {
    try {
      const res = await fetch('http://localhost:3000' + r);
      if (res.status !== 200) {
        console.error(`[ROUTE ERROR] ${r} returned status ${res.status}`);
        issuesFound++;
        continue;
      }
      const html = await res.text();

      // 1. Check title & meta description
      const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
      const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
      const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];

      if (!titleMatch || !titleMatch[1].trim()) {
        console.warn(`[SEO ERROR] Missing or empty <title> on ${r}`);
        issuesFound++;
      }
      if (!descMatch || !descMatch[1].trim()) {
        console.warn(`[SEO ERROR] Missing or empty meta description on ${r}`);
        issuesFound++;
      }
      if (h1Matches.length !== 1) {
        console.warn(`[A11Y ERROR] Found ${h1Matches.length} <h1> tags on ${r} (expected exactly 1)`);
        issuesFound++;
      }

      // 2. Check images & non-empty alt
      const imgRegex = /<img([^>]+)>/gi;
      let imgTag;
      while ((imgTag = imgRegex.exec(html)) !== null) {
        const tag = imgTag[1];
        const srcMatch = tag.match(/src=["']([^"']+)["']/i);
        const altMatch = tag.match(/alt=["']([^"']*)["']/i);

        if (!altMatch || altMatch[1].trim() === '') {
          const isDecorative = /aria-hidden=["']true["']/i.test(tag) || /role=["']presentation["']/i.test(tag);
          if (!isDecorative) {
            console.warn(`[A11Y WARNING] Missing alt on ${r}: ${srcMatch ? srcMatch[1] : 'unknown src'}`);
            issuesFound++;
          }
        }

        if (srcMatch) {
          let src = srcMatch[1];
          if (src.includes('url=')){
            const match = src.match(/url=([^&]+)/);
            if (match) src = decodeURIComponent(match[1]);
          }
          if (src.startsWith('/') && !src.startsWith('//')) {
            const cleanSrc = src.split('?')[0].replace(/^\//, '');
            const localPath = path.join(publicDir, cleanSrc);
            if (!fs.existsSync(localPath)) {
              console.warn(`[MISSING ASSET] on ${r}: "${src}" not found at ${localPath}`);
              issuesFound++;
            }
          }
        }
      }

      // 3. Check anchor links
      const hrefRegex = /<a[^>]+href=["']([^"']+)["']/g;
      let hrefMatch;
      while ((hrefMatch = hrefRegex.exec(html)) !== null) {
        const href = hrefMatch[1];
        if (href.startsWith('mailto:') || href.startsWith('tel:')) {
          continue;
        }
        if (href.startsWith('https://') || href.startsWith('http://')) {
          externalUrls.add(href);
          continue;
        }
        if (href.startsWith('/#') || href.startsWith('#')) {
          continue;
        }
        if (href.startsWith('/')) {
          const targetUrl = 'http://localhost:3000' + href;
          try {
            const checkRes = await fetch(targetUrl, { method: 'HEAD' });
            if (checkRes.status >= 400) {
              console.warn(`[BROKEN LINK] on ${r} -> ${href} (status: ${checkRes.status})`);
              issuesFound++;
            }
          } catch (e) {
            console.warn(`[LINK ERROR] on ${r} -> ${href}: ${e.message}`);
            issuesFound++;
          }
        }
      }

      // 4. Check Buttons
      const btnRegex = /<button([^>]*)>([\s\S]*?)<\/button>/gi;
      let btnMatch;
      while ((btnMatch = btnRegex.exec(html)) !== null) {
        const btnAttrs = btnMatch[1];
        const btnContent = btnMatch[2].replace(/<[^>]+>/g, '').trim();
        const ariaLabel = btnAttrs.match(/aria-label=["']([^"']+)["']/i);

        if (!btnContent && (!ariaLabel || !ariaLabel[1].trim())) {
          console.warn(`[A11Y WARNING] Button missing accessible name on ${r}`);
          issuesFound++;
        }
        if (!/type=["'](button|submit|reset)["']/i.test(btnAttrs)) {
          console.warn(`[W3C WARNING] Button missing type attribute on ${r}`);
          issuesFound++;
        }
      }
    } catch (e) {
      console.error(`[FETCH ERROR] Failed to fetch ${r}:`, e.message);
      issuesFound++;
    }
  }

  // 5. Verify homepage anchor targets
  const homeRes = await fetch('http://localhost:3000/');
  const homeHtml = await homeRes.text();
  const homeIds = new Set([...homeHtml.matchAll(/\sid=["']([^"']+)["']/gi)].map(m => m[1]));
  const requiredNavAnchors = ['about', 'experience', 'projects', 'skills', 'contact'];
  for (const anchor of requiredNavAnchors) {
    if (!homeIds.has(anchor)) {
      console.error(`[ANCHOR ERROR] #${anchor} missing from homepage`);
      issuesFound++;
    }
  }

  console.log(`\nAudit completed across ${routes.length} routes. Total issues found: ${issuesFound}`);
}

audit();
