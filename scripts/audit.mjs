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

  for (const r of routes) {
    try {
      const res = await fetch('http://localhost:3000' + r);
      if (res.status !== 200) {
        console.error(`[ROUTE ERROR] ${r} returned status ${res.status}`);
        issuesFound++;
        continue;
      }
      const html = await res.text();

      // Check images
      const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
      let imgMatch;
      while ((imgMatch = imgRegex.exec(html)) !== null) {
        let src = imgMatch[1];
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

      // Check anchor links
      const hrefRegex = /<a[^>]+href=["']([^"']+)["']/g;
      let hrefMatch;
      while ((hrefMatch = hrefRegex.exec(html)) !== null) {
        const href = hrefMatch[1];
        if (href.startsWith('mailto:') || href.startsWith('https://') || href.startsWith('http://')) {
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
    } catch (e) {
      console.error(`[FETCH ERROR] Failed to fetch ${r}:`, e.message);
      issuesFound++;
    }
  }

  console.log(`\nAudit completed across ${routes.length} routes. Total issues found: ${issuesFound}`);
}

audit();
