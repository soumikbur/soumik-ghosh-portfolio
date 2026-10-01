export interface ImageAttribution {
  type: "actual" | "context";
  label: string;
  source?: string;
  sourceUrl?: string;
  photographer?: string;
  license?: string;
}

export const PROJECT_IMAGE_METADATA: Record<string, ImageAttribution> = {
  "panorama-water-tank": {
    type: "actual",
    label: "Verified Production Asset (Railway Coach SCADA System)",
  },
  "railway-telemetry-wli": {
    type: "context",
    label: "Project Context Representation (Railway Track & Telemetry Infrastructure)",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/a-railroad-track-with-trees-on-both-sides-R-LK3sqLiBw",
    photographer: "Matthew Smith",
    license: "Unsplash License",
  },
  "industrial-asset-monitor": {
    type: "context",
    label: "Project Context Representation (High-Voltage Electrical Substation)",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/gray-metal-frame-under-blue-sky-during-daytime-XGAZVIJvkUQ",
    photographer: "American Public Power Association",
    license: "Unsplash License",
  },
  apexflow: {
    type: "actual",
    label: "Verified Production Screenshot (Inventory & Orders Platform)",
  },
  "business-dashboard": {
    type: "actual",
    label: "Verified Production Screenshot (Analytics & Admin Dashboard)",
  },
  pujopath: {
    type: "actual",
    label: "Verified Production Screenshot (Geospatial Transit PWA)",
  },
  "transparent-supply-chain": {
    type: "context",
    label: "Project Context Representation (Intermodal Container Freight Logistics)",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/aerial-view-of-cargo-ship-on-body-of-water-during-daytime-fyeOxvYvIyY",
    photographer: "chuttersnap",
    license: "Unsplash License",
  },
  "sarvak-safety-platform": {
    type: "context",
    label: "Project Context Representation (Emergency Incident Dispatch Telemetry)",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/black-flat-screen-computer-monitor-Yn0l7uwBrpw",
    photographer: "Israel Andrade",
    license: "Unsplash License",
  },
};
