import { PROJECT_IMAGE_METADATA } from "./image-attributions";

export interface TechCategory {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  categoryGroup: "Embedded Systems" | "Full-Stack Applications" | "Dashboards & Tools" | "Geospatial & Web";
  shortDescription: string;
  technologies: string[];
  image: string;
  imageType: "actual" | "context";
  imageAttribution?: {
    photographer?: string;
    source?: string;
    sourceUrl?: string;
    license?: string;
  };
  github?: string;
  demo?: string;
  featured: boolean;

  // High-Level Case Study Content (Protected / Executive Summary)
  overview: string;
  whatItDoes: string;
  keyCapabilities: string[];
  engineeringHighlights: string[];
  techCategories: TechCategory[];
  outcome: string;
}

export const PROJECT_CATEGORIES = [
  "All Systems",
  "Embedded Systems",
  "Full-Stack Applications",
  "Dashboards & Tools",
  "Geospatial & Web",
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "panorama-water-tank",
    title: "Panorama Water Tank Monitor",
    category: "Embedded Systems & SCADA",
    categoryGroup: "Embedded Systems",
    shortDescription:
      "Industrial desktop SCADA interface and dual-core ESP32-S3 firmware engineered for liquid volume telemetry and infrastructure monitoring.",
    technologies: ["C++20", "Qt 6 / QML", "ESP32-S3", "FreeRTOS", "4G LTE", "Modbus RTU"],
    image: "/images/projects/panorama-water-tank.jpg",
    imageType: "actual",
    github: "https://github.com/soumikbur/PanoramaWaterTank",
    featured: true,
    overview:
      "Engineered in the context of industrial telemetry and railway monitoring applications at Panorama Electronics Pvt. Ltd., this system addresses the need for continuous reservoir monitoring in harsh environments. Railway coaches and industrial facilities require accurate tracking of water reservoirs to prevent dry runs, detect leakage, and schedule refilling without relying on failure-prone mechanical gauges.",
    whatItDoes:
      "A dual-tiered industrial monitoring solution comprising an embedded microcontroller node installed on the physical tank and a Qt-based desktop SCADA monitoring station. The node captures continuous liquid levels, processes physical sensor data, and transmits telemetry over cellular networks and industrial fieldbuses.",
    keyCapabilities: [
      "Real-time liquid level acquisition and volumetric computation",
      "Cellular cloud transmission for remote asset tracking",
      "Fieldbus communication interface for on-site industrial integration",
      "Audible and visual threshold alert generation for operations personnel",
      "Historical telemetry logging and graphical trend visualization",
    ],
    engineeringHighlights: [
      "Engineered multi-tasking FreeRTOS firmware separating sensor acquisition from telemetry",
      "Interfaced precision analog front-end circuitry for industrial pressure transducers",
      "Implemented non-blocking cellular communication state machines for cloud reporting",
      "Configured standard RS-485 Modbus RTU serial protocols for auxiliary industrial systems",
      "Developed a cross-platform desktop SCADA application in Qt 6 / QML with custom gauges",
    ],
    techCategories: [
      { category: "Embedded Firmware", items: ["ESP32-S3", "FreeRTOS", "C++20", "I2C", "ADC Front-End"] },
      { category: "Communication & Bus", items: ["Quectel 4G LTE", "RS-485 Modbus RTU", "UART"] },
      { category: "Desktop & SCADA", items: ["Qt 6.9", "QML", "CMake", "Ninja Build System"] },
    ],
    outcome:
      "Successfully verified on physical hardware test benches and deployed for railway coach trials, delivering continuous liquid tracking without manual physical inspection.",
  },
  {
    slug: "railway-telemetry-wli",
    title: "Railway Water Level Indicator & Telemetry Unit",
    category: "Firmware & Embedded IoT",
    categoryGroup: "Embedded Systems",
    shortDescription:
      "Autonomous low-power microcontroller telemetry unit designed for railway track and coach reservoir monitoring with GNSS and cellular reporting.",
    technologies: ["STM32", "FreeRTOS", "ARM Cortex-M4", "Quectel 4G LTE", "GNSS / GPS", "MQTT over TLS"],
    image: "/images/projects/railway-telemetry-wli.jpg",
    imageType: "context",
    imageAttribution: {
      photographer: PROJECT_IMAGE_METADATA["railway-telemetry-wli"].photographer,
      source: PROJECT_IMAGE_METADATA["railway-telemetry-wli"].source,
      sourceUrl: PROJECT_IMAGE_METADATA["railway-telemetry-wli"].sourceUrl,
      license: PROJECT_IMAGE_METADATA["railway-telemetry-wli"].license,
    },
    github: "https://github.com/soumikbur",
    featured: true,
    overview:
      "Remote railway water installations and track-side drainage reservoirs operate in harsh outdoor conditions with battery and solar constraints. The system required autonomous, ultra-low-power operation capable of transmitting critical level data and precise GPS coordinates to centralized servers.",
    whatItDoes:
      "An autonomous ARM Cortex-M4 embedded firmware unit that acquires hydrostatic pressure data, decodes real-time satellite navigation streams, packages encrypted telemetry, and delivers updates to cloud brokers while maintaining extended battery longevity through aggressive power management.",
    keyCapabilities: [
      "Sub-millivolt analog sensor acquisition with digital noise rejection",
      "Satellite GNSS decoding for location tracking and time synchronization",
      "Encrypted cloud telemetry dispatch via MQTT over TLS 1.2",
      "Hardware self-test routines verifying peripheral integrity on boot",
      "Configurable deep-sleep power states with scheduled real-time clock wakeups",
    ],
    engineeringHighlights: [
      "Engineered multi-priority FreeRTOS task schedules for deterministic sensor and communication handling",
      "Implemented a resilient AT command parser for cellular registration and socket negotiation",
      "Integrated hardware self-diagnostics to identify sensor disconnection and peripheral faults",
      "Configured ultra-low-power microampere sleep modes coordinated with external watchdog supervision",
      "Structured lightweight, bandwidth-efficient JSON telemetry payloads over secure cloud sockets",
    ],
    techCategories: [
      { category: "Microcontroller", items: ["STM32F411 / STM32L431", "ARM Cortex-M4F", "FreeRTOS"] },
      { category: "Sensing & GNSS", items: ["16-bit Precision ADC", "Skytraq GNSS", "Hydrostatic Transducer"] },
      { category: "Connectivity", items: ["Quectel EC200U Cat-1", "MQTT 3.1.1", "TLS 1.2"] },
    ],
    outcome:
      "Achieved stable autonomous telemetry reporting in long-duration field trials with predictable battery endurance under fluctuating cellular coverage.",
  },
  {
    slug: "industrial-asset-monitor",
    title: "Industrial Substation Asset Monitor",
    category: "Industrial Embedded & IIoT",
    categoryGroup: "Embedded Systems",
    shortDescription:
      "Multi-sensor diagnostic and power telemetry system for industrial transformers and tap-changers with SPI flash storage and Modbus RTU.",
    technologies: ["STM32", "Modbus RTU", "SPI NOR Flash", "FATFS", "Power Meter", "MQTT"],
    image: "/images/projects/industrial-asset-monitor.jpg",
    imageType: "context",
    imageAttribution: {
      photographer: PROJECT_IMAGE_METADATA["industrial-asset-monitor"].photographer,
      source: PROJECT_IMAGE_METADATA["industrial-asset-monitor"].source,
      sourceUrl: PROJECT_IMAGE_METADATA["industrial-asset-monitor"].sourceUrl,
      license: PROJECT_IMAGE_METADATA["industrial-asset-monitor"].license,
    },
    github: "https://github.com/soumikbur",
    featured: false,
    overview:
      "High-voltage electrical substation transformers and on-load tap changers (OLTC) are high-value utility assets vulnerable to thermal stress, mechanical wear, and electrical anomalies. Continuous diagnostic monitoring is essential for predictive maintenance and outage prevention.",
    whatItDoes:
      "A multi-channel embedded diagnostic monitor interfacing with diverse industrial sensors, multi-function power meters, and mechanical tap-changer sensors. It aggregates real-time environmental, electrical, and thermal telemetry, logs data locally to non-volatile flash storage, and publishes alerts to utility supervision centers.",
    keyCapabilities: [
      "Multi-point temperature and environmental monitoring across transformer tanks",
      "Industrial multi-function power meter integration via serial fieldbus",
      "Debounced mechanical event counting for tap-changer operations",
      "Non-volatile local data logging using a filesystem on external SPI flash",
      "Periodic encrypted cloud telemetry and immediate threshold anomaly alerts",
    ],
    engineeringHighlights: [
      "Implemented master-mode Modbus RTU communication with CRC-16 integrity verification",
      "Interfaced external SPI NOR flash with a FAT file system for local event and audit logging",
      "Developed digital debouncing algorithms for industrial mechanical contact sensing",
      "Integrated multi-channel current and temperature analog acquisition subsystems",
      "Constructed structured JSON telemetry pipelines dispatched to industrial cloud platforms",
    ],
    techCategories: [
      { category: "Embedded Platform", items: ["STM32", "FreeRTOS", "Embedded C/C++"] },
      { category: "Industrial Protocols", items: ["Modbus RTU (Master)", "RS-485", "CRC-16-IBM"] },
      { category: "Sensors & Memory", items: ["W25Qxx SPI Flash", "FATFS", "Power Meter", "RTD/NTC"] },
    ],
    outcome:
      "Provided uninterrupted diagnostic data collection for utility asset evaluation, supporting early anomaly detection before catastrophic component failure.",
  },
  {
    slug: "apexflow",
    title: "ApexFlow",
    category: "Enterprise Inventory & Order Platform",
    categoryGroup: "Full-Stack Applications",
    shortDescription:
      "Enterprise inventory and order management platform designed to streamline stock control, purchasing, fulfillment, invoicing, and reporting.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "RBAC", "Docker"],
    image: "/images/projects/apexflow.jpg",
    imageType: "actual",
    github: "https://github.com/soumikbur",
    featured: true,
    overview:
      "Growing distribution and commerce operations frequently suffer from inventory shrinkage, stock-out discrepancies, and fragmented fulfillment pipelines when managing multi-warehouse stock across manual spreadsheets or disjointed tools.",
    whatItDoes:
      "A complete full-stack enterprise operations platform connecting catalog management, multi-warehouse inventory ledgers, purchase orders, customer fulfillment, invoicing, and payments into a single unified business management suite.",
    keyCapabilities: [
      "Strict double-entry inventory ledger preventing stock drifting and phantom availability",
      "Finite state-machine order processing from creation through packing, dispatch, and delivery",
      "Procurement workflows with supplier purchase orders, receiving docks, and vendor management",
      "Billing subsystem generating PDF invoices, payment tracking, and balance settlements",
      "Hierarchical Role-Based Access Control (RBAC) isolating permissions across teams",
    ],
    engineeringHighlights: [
      "Designed a database-driven backend with strict transactional guarantees and atomic ledger updates",
      "Built a deterministic state-machine order workflow preventing invalid operational status transitions",
      "Implemented secure JWT authentication with refresh token rotation and granular permission checks",
      "Developed responsive, high-density operational data tables with sorting, filtering, and pagination",
      "Architected clean REST API services connecting web clients with database models",
    ],
    techCategories: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend & Data", items: ["Node.js", "Express", "PostgreSQL", "Prisma ORM"] },
      { category: "Security & Ops", items: ["JWT / RBAC", "Docker", "Playwright E2E", "GitHub Actions"] },
    ],
    outcome:
      "Delivered a robust operational platform that eliminates inventory count discrepancies and accelerates order cycle completion across operational teams.",
  },
  {
    slug: "business-dashboard",
    title: "Business Analytics & Operations Dashboard",
    category: "Business Analytics & Internal Tools",
    categoryGroup: "Dashboards & Tools",
    shortDescription:
      "Operational intelligence and analytics application delivering real-time business performance indicators, revenue metrics, and user management.",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL", "NextAuth v5", "Tailwind CSS"],
    image: "/images/projects/business-dashboard.jpg",
    imageType: "actual",
    github: "https://github.com/soumikbur/business-admin-dashboard",
    featured: true,
    overview:
      "Executive leadership and business operators need immediate visibility into performance trends, revenue trajectories, operational backlogs, and user activity without navigating slow, complex legacy reports.",
    whatItDoes:
      "A high-performance business intelligence dashboard designed for fast data exploration. It aggregates operational metrics, renders interactive visual charts, manages user permissions, and provides complete audit tracking for administrative activities.",
    keyCapabilities: [
      "Real-time executive KPI scorecards for revenue, conversion, and operational throughput",
      "Interactive data visualizations for trend analysis and historical comparisons",
      "User administration module with role assignments and access provisioning",
      "System audit trails recording administrative modifications for compliance",
      "Optimized server-side data fetching for instant navigation across analytical views",
    ],
    engineeringHighlights: [
      "Designed indexed database aggregations for sub-100ms dashboard KPI computation",
      "Implemented secure role-governed authentication using NextAuth with session validation",
      "Engineered responsive data visualization layouts optimized for mobile and desktop screens",
      "Built transactional audit logging capturing record modifications and administrative actions",
      "Constructed typed API route handlers with input validation and structured error responses",
    ],
    techCategories: [
      { category: "Application", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"] },
      { category: "Data Layer", items: ["Prisma 6", "PostgreSQL", "Indexed Query Optimization"] },
      { category: "Auth & Security", items: ["NextAuth v5", "RBAC", "Session Management"] },
    ],
    outcome:
      "Empowered stakeholders with instant access to actionable business metrics, replacing manual reporting routines with automated live telemetry.",
  },
  {
    slug: "pujopath",
    title: "PujoPath — Transit & Geospatial PWA",
    category: "Geospatial & Web Applications",
    categoryGroup: "Geospatial & Web",
    shortDescription:
      "Progressive web application providing interactive GIS transit navigation and crowd route mapping across Kolkata Metro corridors.",
    technologies: ["Next.js", "React", "Leaflet GIS", "TypeScript", "PWA", "Service Workers"],
    image: "/images/projects/pujopath.jpg",
    imageType: "actual",
    github: "https://github.com/soumikbur",
    featured: false,
    overview:
      "During peak cultural festivals in Kolkata, millions of transit commuters navigate complex urban corridors with congested streets and intermittent mobile network connectivity. Commuters need fast, offline-capable route guidance and transit station mapping.",
    whatItDoes:
      "A progressive web application combining interactive OpenStreetMap GIS visualizations with Kolkata Metro route mapping. It caches essential geospatial data client-side, enabling fast location discovery and route planning even in low-bandwidth or offline environments.",
    keyCapabilities: [
      "Interactive geospatial map canvas with custom transit markers and layered overlays",
      "Kolkata Metro station mapping with nearest-access calculations",
      "Offline map and route access powered by service worker asset caching",
      "Mobile-first responsive interface with tactile touch gestures and fast search",
      "Installable PWA functionality delivering an app-like experience without app store overhead",
    ],
    engineeringHighlights: [
      "Integrated Leaflet GIS mapping with custom map tiles and performant vector rendering",
      "Designed client-side service worker caching strategies for reliable offline operation",
      "Built location search and filtering algorithms with zero external API dependencies",
      "Optimized image assets and map tile requests for rapid loading on mobile networks",
      "Engineered an adaptive UI accommodating varying screen aspect ratios and mobile viewports",
    ],
    techCategories: [
      { category: "Frontend & GIS", items: ["Next.js", "React", "Leaflet GIS", "OpenStreetMap"] },
      { category: "Mobile & Offline", items: ["PWA", "Service Workers", "Client-Side Caching"] },
      { category: "Language & Styling", items: ["TypeScript", "Tailwind CSS"] },
    ],
    outcome:
      "Successfully assisted commuters during peak festival crowds with dependable offline transit orientation and fast corridor navigation.",
  },
  {
    slug: "transparent-supply-chain",
    title: "Transparent Supply Chain Platform",
    category: "Distributed Systems & Web3",
    categoryGroup: "Full-Stack Applications",
    shortDescription:
      "Decentralized product traceability platform designed to verify provenance and maintain immutable chain-of-custody across multi-tier supplier networks.",
    technologies: ["Solidity", "Ethereum", "IPFS", "React.js", "Web3.js"],
    image: "/images/projects/transparent-supply-chain.jpg",
    imageType: "context",
    imageAttribution: {
      photographer: PROJECT_IMAGE_METADATA["transparent-supply-chain"].photographer,
      source: PROJECT_IMAGE_METADATA["transparent-supply-chain"].source,
      sourceUrl: PROJECT_IMAGE_METADATA["transparent-supply-chain"].sourceUrl,
      license: PROJECT_IMAGE_METADATA["transparent-supply-chain"].license,
    },
    github: "https://github.com/soumikbur/AI-enabled-Decentralized-SupplyChain",
    featured: false,
    overview:
      "Global supply chains frequently suffer from counterfeiting, unauthorized substitutions, and opaque custody transitions. Centralized databases remain vulnerable to unauthorized tampering, necessitating a cryptographic, verifiable audit trail.",
    whatItDoes:
      "A decentralized application that records product lifecycle milestones, quality inspections, and custody handoffs on an immutable ledger. Stakeholders and consumers can cryptographically verify product authenticity and provenance at every stage.",
    keyCapabilities: [
      "Immutable custody transfer logging on an Ethereum-compatible distributed ledger",
      "Decentralized document and inspection certificate storage via IPFS",
      "Smart contract-enforced milestone verification preventing retroactive tampering",
      "Web interface for scanning product identities and viewing verified historical journeys",
      "Cryptographic signature verification for authorized supplier and inspector accounts",
    ],
    engineeringHighlights: [
      "Authored Solidity smart contracts governing multi-party custody state transitions",
      "Integrated InterPlanetary File System (IPFS) for tamper-evident decentralized document storage",
      "Developed web frontend interfaces interacting with blockchain nodes via Web3 libraries",
      "Implemented client-side transaction signing and wallet integration workflows",
      "Tested contract state safety and event emissions across testnet environments",
    ],
    techCategories: [
      { category: "Smart Contracts", items: ["Solidity", "Ethereum / EVM", "OpenZeppelin"] },
      { category: "Storage & Web3", items: ["IPFS", "Web3.js / Ethers.js"] },
      { category: "Frontend", items: ["React.js", "JavaScript / TypeScript", "Tailwind CSS"] },
    ],
    outcome:
      "Demonstrated how cryptographic verification and decentralized storage eliminate single points of failure in multi-stakeholder provenance tracking.",
  },
  {
    slug: "sarvak-safety-platform",
    title: "Sarvak — AI Emergency Safety Platform",
    category: "Intelligent Systems & Mobile",
    categoryGroup: "Geospatial & Web",
    shortDescription:
      "Real-time incident response and automated distress tracking platform developed for Smart India Hackathon public safety challenges.",
    technologies: ["React", "Flutter", "Firebase", "Computer Vision", "Telemetry"],
    image: "/images/projects/sarvak-safety-platform.jpg",
    imageType: "context",
    imageAttribution: {
      photographer: PROJECT_IMAGE_METADATA["sarvak-safety-platform"].photographer,
      source: PROJECT_IMAGE_METADATA["sarvak-safety-platform"].source,
      sourceUrl: PROJECT_IMAGE_METADATA["sarvak-safety-platform"].sourceUrl,
      license: PROJECT_IMAGE_METADATA["sarvak-safety-platform"].license,
    },
    github: "https://github.com/soumikbur",
    featured: false,
    overview:
      "Public safety emergencies require instantaneous communication between individuals in distress, nearby responders, and emergency coordination desks. Traditional manual phone calls introduce critical delays during high-stress situations.",
    whatItDoes:
      "A unified emergency response ecosystem featuring a cross-platform mobile SOS application and a web-based operator coordination dashboard. It automates emergency alert routing, coordinates real-time location streaming, and assists responders with automated telemetry.",
    keyCapabilities: [
      "One-touch and automated emergency SOS signal dispatch with real-time location",
      "Live responder dispatch dashboard with interactive incident mapping",
      "Automated video and sensor anomaly trigger analysis for threat detection",
      "Cloud-synchronized incident feeds connecting victims, volunteers, and authorities",
      "Resilient offline alert caching with automatic resubmission upon reconnection",
    ],
    engineeringHighlights: [
      "Architected real-time event distribution and geo-coordinate streaming via cloud databases",
      "Developed cross-platform mobile client application using Flutter with hardware sensor access",
      "Built an operational command dashboard in React for incident triaging and status updates",
      "Integrated machine learning inference models for automated visual safety screening",
      "Optimized battery consumption during continuous background location monitoring",
    ],
    techCategories: [
      { category: "Mobile & Dashboard", items: ["Flutter", "React", "Tailwind CSS"] },
      { category: "Cloud & Backend", items: ["Firebase Realtime DB", "Cloud Functions", "REST APIs"] },
      { category: "Intelligent Edge", items: ["Computer Vision Inference", "Sensor Telemetry"] },
    ],
    outcome:
      "Selected as a competitive prototype solution at the Smart India Hackathon, validating real-time telemetry streaming and automated alert dissemination under emergency conditions.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export interface CapabilityItem {
  title: string;
  description: string;
  icon: string;
  evidence: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Embedded & RTOS Firmware",
    description:
      "Deterministic, multi-tasking firmware for ARM Cortex-M and ESP32 microcontrollers using FreeRTOS, hardware timers, and inter-task queues.",
    icon: "Cpu",
    evidence: "STM32 & ESP32-S3 Real-Time Firmware",
  },
  {
    title: "Industrial Protocols & Fieldbuses",
    description:
      "Reliable communication stacks interfacing RS-485 Modbus RTU, I2C, SPI, UART, and cellular 4G LTE AT command state machines.",
    icon: "Layers",
    evidence: "Modbus RTU Master/Slave & 4G Telemetry",
  },
  {
    title: "Full-Stack Business Applications",
    description:
      "Production-grade operational platforms coordinating inventory, purchasing, invoicing, payments, and multi-user workflows.",
    icon: "Building2",
    evidence: "ApexFlow Enterprise Platform",
  },
  {
    title: "Dashboards & Operational Analytics",
    description:
      "High-density business intelligence dashboards delivering instant KPI rollups, interactive charts, and administrative audit trails.",
    icon: "LayoutDashboard",
    evidence: "Business Analytics Dashboard",
  },
  {
    title: "Relational Data Modeling & Ledgers",
    description:
      "Strict relational database architectures enforcing double-entry audit ledgers, foreign key constraints, and transactional consistency.",
    icon: "Database",
    evidence: "PostgreSQL & Prisma Relational Models",
  },
  {
    title: "Authentication, RBAC & Security",
    description:
      "Secure authentication flows, token rotation, and multi-tier role-based access control protecting operational endpoints.",
    icon: "ShieldCheck",
    evidence: "NextAuth v5 & JWT Security Engines",
  },
  {
    title: "Desktop SCADA & Operator Stations",
    description:
      "Cross-platform desktop monitoring applications built with C++ and Qt/QML for real-time visualization and alarm handling.",
    icon: "Terminal",
    evidence: "Qt 6.9 / QML Desktop SCADA",
  },
  {
    title: "Geospatial & Progressive Web Apps",
    description:
      "Interactive map visualizers with offline service worker caching designed for low-connectivity mobile environments.",
    icon: "Boxes",
    evidence: "PujoPath Transit PWA",
  },
];

export interface EngineeringApproachItem {
  step: string;
  title: string;
  description: string;
}

export const ENGINEERING_APPROACH: EngineeringApproachItem[] = [
  {
    step: "01",
    title: "Domain Analysis & Constraints",
    description:
      "Deconstruct operational workflows, hardware resource boundaries, sensor dynamics, and data integrity requirements before writing code.",
  },
  {
    step: "02",
    title: "Data Modeling & State Machines",
    description:
      "Establish strict relational schemas, state transition graphs, and communication protocol frames to eliminate runtime ambiguity.",
  },
  {
    step: "03",
    title: "Deterministic Implementation",
    description:
      "Develop modular firmware tasks and clean backend APIs with defensive programming, thread safety, and structured error handling.",
  },
  {
    step: "04",
    title: "Verification & Automated Testing",
    description:
      "Validate functionality through hardware test fixtures, end-to-end integration tests, regression checks, and edge-case simulation.",
  },
  {
    step: "05",
    title: "Deployment & Telemetry",
    description:
      "Deploy containerized services or flashed microcontrollers with remote logging, health telemetry, and actionable alerts.",
  },
  {
    step: "06",
    title: "Operational Reliability",
    description:
      "Monitor real-world endurance, audit logs, and performance metrics to guarantee long-term field stability.",
  },
];

export interface TechnicalCapabilityGroup {
  embedded: { name: string; note: string }[];
  backend: { name: string; note: string }[];
  frontend: { name: string; note: string }[];
  data: { name: string; note: string }[];
  engineering: { name: string; note: string }[];
}

export const TECHNICAL_CAPABILITIES: TechnicalCapabilityGroup = {
  embedded: [
    { name: "STM32 (ARM Cortex-M)", note: "STM32F411 & STM32L431 bare-metal & HAL" },
    { name: "ESP32 & ESP32-S3", note: "Dual-core FreeRTOS & Wi-Fi/BLE" },
    { name: "FreeRTOS", note: "Queues, semaphores, mutexes, software timers" },
    { name: "Industrial Communication", note: "RS-485 Modbus RTU, I2C, SPI, UART" },
    { name: "Cellular & GNSS Telemetry", note: "Quectel 4G LTE, AT commands, MQTT over TLS" },
  ],
  backend: [
    { name: "Node.js & Express", note: "REST APIs, middleware, service architecture" },
    { name: "Next.js Route Handlers", note: "Server Actions, typed API endpoints" },
    { name: "Authentication & RBAC", note: "JWT, session validation, role gating" },
    { name: "Distributed Web3", note: "Solidity smart contracts, IPFS storage" },
    { name: "Cloud Telemetry Pipelines", note: "MQTT message brokers, JSON ingestion" },
  ],
  frontend: [
    { name: "React & Next.js", note: "Server/Client components, SSR, static generation" },
    { name: "TypeScript", note: "Strict typing across models, props, and APIs" },
    { name: "Qt 6 / QML", note: "Cross-platform industrial SCADA desktop UI" },
    { name: "Tailwind CSS", note: "Design systems, high-density responsive layouts" },
    { name: "Leaflet GIS & PWA", note: "Interactive mapping, offline service workers" },
  ],
  data: [
    { name: "PostgreSQL", note: "Relational schemas, constraints, indexing, ACID" },
    { name: "Prisma ORM", note: "Type-safe database queries and migrations" },
    { name: "Double-Entry Ledger", note: "Strict debit/credit stock & financial models" },
    { name: "SPI NOR Flash Storage", note: "W25Qxx flash memory with FATFS logging" },
    { name: "Redis", note: "Cache layers and ephemeral session stores" },
  ],
  engineering: [
    { name: "Finite State Machines", note: "Deterministic status transitions for orders & modems" },
    { name: "Hardware Diagnostics", note: "Startup self-test matrices, sensor disconnect alerts" },
    { name: "Playwright E2E Testing", note: "Automated browser workflow validation" },
    { name: "Docker Containerization", note: "Reproducible microservice runtimes" },
    { name: "Version Control & CI/CD", note: "Git, GitHub Actions, automated linting & build" },
  ],
};
