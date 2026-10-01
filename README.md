# Soumik Ghosh — Engineering Portfolio

Production-ready personal engineering portfolio for **Soumik Ghosh (Embedded Software Developer)**. Built with Next.js 16, React 19, TypeScript, Tailwind CSS, and GSAP.

---

## Verified Identity & Positioning

- **Name**: Soumik Ghosh
- **Role**: Embedded Software Developer
- **Positioning**: I build practical software systems that solve real operational and business problems.
- **Email**: [soumik.bur@gmail.com](mailto:soumik.bur@gmail.com)
- **GitHub**: [github.com/soumikbur](https://github.com/soumikbur)
- **LinkedIn**: [linkedin.com/in/soumik-ghosh-883a1a22b/](https://www.linkedin.com/in/soumik-ghosh-883a1a22b/)

---

## Verified Systems Showcase

1. **Panorama Water Tank Monitor** (`/projects/panorama-water-tank`) — Industrial SCADA Qt 6 / QML Monitor & ESP32-S3 Dual-Core 4G Cellular Telemetry System.
2. **Railway Water Level Indicator & Telemetry Unit** (`/projects/railway-telemetry-wli`) — Autonomous low-power STM32 microcontroller telemetry with GNSS tracking and MQTT over TLS 1.2.
3. **Industrial Substation Asset Monitor** (`/projects/industrial-asset-monitor`) — Multi-sensor diagnostic monitor with Modbus RTU master, SPI NOR Flash FATFS logging, and power meter telemetry.
4. **ApexFlow** (`/projects/apexflow`) — Enterprise Inventory & Order Management Platform with double-entry stock ledger, 5-stage order state machine, and 4-tier RBAC.
5. **Business Analytics Dashboard** (`/projects/business-dashboard`) — Operational analytics application with sub-100ms KPI aggregations and administrative audit trails.
6. **PujoPath** (`/projects/pujopath`) — Kolkata Metro transit GIS mapping with offline progressive web app (PWA) service worker caching.
7. **Transparent Supply Chain Platform** (`/projects/transparent-supply-chain`) — Decentralized provenance tracking with smart contracts and IPFS storage.
8. **Sarvak AI Safety Platform** (`/projects/sarvak-safety-platform`) — Real-time emergency distress routing and telemetry platform (Smart India Hackathon).

---

## Production Deployment (Vercel)

This Next.js application is 100% self-contained and pre-configured for zero-friction deployment to **Vercel**.

### Option A: Deploy via GitHub (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Production ready portfolio for Soumik Ghosh"
   git remote add origin https://github.com/soumikbur/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and log in with your GitHub account.
3. Select the `portfolio` repository and click **Import**.
4. (Optional) Set the Environment Variable:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., `https://soumik-ghosh.vercel.app`)
5. Click **Deploy**. Vercel will build and deploy the site in ~30 seconds, generating your live public URL.

### Option B: Deploy via Vercel CLI

Run the following command from the `portfolio` directory:
```bash
npx vercel
```
Follow the interactive prompts to log in, link the project, and deploy. To deploy directly to production:
```bash
npx vercel --prod
```

---

## Local Development & Verification

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run ESLint check
npm run lint

# Build production bundle
npm run build
```

---

## Environment Variables (Optional)

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL used for Open Graph social cards, sitemaps, and robots.txt | `https://soumikghosh.vercel.app` |
