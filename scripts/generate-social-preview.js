const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const width = 1280;
const height = 640;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="glow-emerald" cx="20%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.14" />
      <stop offset="100%" stop-color="#09090b" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow-cyan" cx="80%" cy="70%" r="50%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.10" />
      <stop offset="100%" stop-color="#09090b" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="50%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#a78bfa" />
    </linearGradient>
    <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.4" />
      <stop offset="50%" stop-color="#27272a" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.3" />
    </linearGradient>

    <!-- Pattern Grid -->
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255, 255, 255, 0.035)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Deep Canvas Background -->
  <rect width="100%" height="100%" fill="#09090b" />
  
  <!-- Subtle Ambient Glows -->
  <rect width="100%" height="100%" fill="url(#glow-emerald)" />
  <rect width="100%" height="100%" fill="url(#glow-cyan)" />
  
  <!-- Technical Grid Overlay -->
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- Outer Precision Border -->
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="16" fill="none" stroke="url(#border-gradient)" stroke-width="1.5" />

  <!-- Corner Crosshair Accents -->
  <path d="M 14 36 L 26 36 M 20 30 L 20 42" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.6" />
  <path d="M ${width - 26} 36 L ${width - 14} 36 M ${width - 20} 30 L ${width - 20} 42" stroke="#06b6d4" stroke-width="1.5" stroke-opacity="0.6" />
  <path d="M 14 ${height - 36} L 26 ${height - 36} M 20 ${height - 42} L 20 ${height - 30}" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.6" />
  <path d="M ${width - 26} ${height - 36} L ${width - 14} ${height - 36} M ${width - 20} ${height - 42} L ${width - 20} ${height - 30}" stroke="#06b6d4" stroke-width="1.5" stroke-opacity="0.6" />

  <!-- Top Navigation / Status Header -->
  <g transform="translate(64, 68)">
    <!-- Terminal Icon Badge -->
    <rect x="0" y="0" width="40" height="40" rx="8" fill="#18181b" stroke="#3f3f46" stroke-width="1" />
    <text x="20" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="18" font-weight="700" fill="#10b981" text-anchor="middle">&gt;_</text>

    <!-- Eyebrow Tag -->
    <text x="56" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="12" font-weight="600" fill="#a1a1aa" letter-spacing="2">ENGINEERING PORTFOLIO</text>
    <text x="56" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#34d399">PANORAMA ELECTRONICS PVT. LTD.</text>

    <!-- Status Indicator -->
    <rect x="${width - 360}" y="6" width="232" height="28" rx="14" fill="#022c22" stroke="#065f46" stroke-width="1" />
    <circle cx="${width - 344}" cy="20" r="4" fill="#34d399" />
    <text x="${width - 330}" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="11" font-weight="600" fill="#6ee7b7" letter-spacing="1">AVAILABLE FOR ENGAGEMENTS</text>
  </g>

  <!-- Central Identity Block -->
  <g transform="translate(64, 160)">
    <!-- Name -->
    <text x="0" y="64" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-1">SOUMIK GHOSH</text>

    <!-- Subtitle / Tri-Discipline -->
    <text x="0" y="108" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="22" font-weight="700" fill="url(#text-gradient)" letter-spacing="1.5">
      EMBEDDED SYSTEMS  /  INDUSTRIAL IOT  /  FULL-STACK ENGINEERING
    </text>

    <!-- Description -->
    <text x="0" y="152" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#d4d4d8">
      Building real-time firmware, industrial telemetry networks, and resilient operational platforms
    </text>
    <text x="0" y="178" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#a1a1aa">
      where hardware timing, physical fieldbus reliability, and data integrity are non-negotiable.
    </text>

    <!-- Tech Badges -->
    <g transform="translate(0, 224)">
      <!-- Badge 1: STM32 & FreeRTOS -->
      <rect x="0" y="0" width="168" height="34" rx="8" fill="#18181b" stroke="#10b981" stroke-width="1" stroke-opacity="0.6" />
      <text x="84" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="12" font-weight="600" fill="#34d399" text-anchor="middle">STM32 &#8226; FreeRTOS</text>

      <!-- Badge 2: ESP32-S3 & 4G LTE -->
      <rect x="180" y="0" width="180" height="34" rx="8" fill="#18181b" stroke="#06b6d4" stroke-width="1" stroke-opacity="0.6" />
      <text x="270" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="12" font-weight="600" fill="#22d3ee" text-anchor="middle">ESP32-S3 &#8226; 4G LTE</text>

      <!-- Badge 3: Modbus RTU & RS-485 -->
      <rect x="372" y="0" width="192" height="34" rx="8" fill="#18181b" stroke="#3b82f6" stroke-width="1" stroke-opacity="0.6" />
      <text x="468" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="12" font-weight="600" fill="#60a5fa" text-anchor="middle">Modbus RTU &#8226; RS-485</text>

      <!-- Badge 4: C++ & Qt 6 SCADA -->
      <rect x="576" y="0" width="168" height="34" rx="8" fill="#18181b" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.6" />
      <text x="660" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="12" font-weight="600" fill="#a78bfa" text-anchor="middle">C++ &#8226; Qt 6 SCADA</text>

      <!-- Badge 5: Next.js & TypeScript -->
      <rect x="756" y="0" width="188" height="34" rx="8" fill="#18181b" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.6" />
      <text x="850" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="12" font-weight="600" fill="#fbbf24" text-anchor="middle">Next.js &#8226; TypeScript</text>
    </g>
  </g>

  <!-- Bottom Divider & Footer -->
  <g transform="translate(64, ${height - 68})">
    <line x1="0" y1="0" x2="${width - 128}" y2="0" stroke="#27272a" stroke-width="1" />
    
    <!-- Left: Location & Links -->
    <text x="0" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="13" font-weight="500" fill="#71717a">
      KOLKATA, INDIA  &#8226;  github.com/soumikbur  &#8226;  linkedin.com/in/soumik-ghosh-883a1a22b
    </text>

    <!-- Right: Production Live URL -->
    <text x="${width - 128}" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace" font-size="14" font-weight="700" fill="#10b981" text-anchor="end">
      soumik-ghosh-portfolio.vercel.app
    </text>
  </g>
</svg>
`;

async function generate() {
  const docsSocialPreview = path.join(__dirname, '../docs/images/social-preview.png');
  const publicOgPreview = path.join(__dirname, '../public/images/og-preview.png');

  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(docsSocialPreview);
  console.log('Saved:', docsSocialPreview);

  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(publicOgPreview);
  console.log('Saved:', publicOgPreview);
}

generate().catch(console.error);
