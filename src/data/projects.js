// The only file you edit to change the site.
// status: "live" | "building" | "classified"
// Only put PUBLIC information here. Everything in this file ships to every visitor's browser.

export const site = {
  name: "Aisosaibi",
  skills: "Java, Python, JavaScript, Go",
  email: "you@example.com",
  github: "https://github.com/your-handle",
};

export const tiers = [
  { id: "foundations", title: "Foundations", blurb: "The fundamentals, built from scratch.", style: "ide" },
  { id: "real-world", title: "Real-world", blurb: "Software aimed at actual problems.", style: "cards" },
  { id: "lab", title: "The weird lab", blurb: "Experiments made because I was curious.", style: "lab" },
];

// SAMPLE DATA: replace titles, links and statuses with your own.
export const projects = [
  { id: "algos", tier: "foundations", title: "Algorithms in Java", pitch: "Sorting, searching and graph algorithms, tested and benchmarked.", stack: ["Java", "JUnit"], status: "live", repo: "#" },
  { id: "hashmap", tier: "foundations", title: "Hash map from scratch", pitch: "A hash map with collision handling, written without the standard library.", stack: ["Go"], status: "building", progress: 40 },
  { id: "http", tier: "foundations", title: "Tiny HTTP server", pitch: "Routing and request parsing over raw sockets.", stack: ["Python"], status: "building", progress: 15 },

  { id: "shopco", tier: "real-world", title: "SHOP.CO storefront", pitch: "A fashion e-commerce landing page, responsive and componentised.", stack: ["React", "Vite", "Tailwind"], status: "live", repo: "#", demo: "#" },
  { id: "pharmacy", tier: "real-world", title: "Pharmacy Management System", pitch: "A layered-architecture system for managing pharmacy stock and sales.", stack: ["Java", "Layered architecture"], status: "live", repo: "#" },
  { id: "node", tier: "real-world", title: "node", pitch: "Own, lend and resell digital media like physical goods, with royalties for creators.", stack: ["Python", "Database"], status: "building", progress: 10 },
  { id: "payment", tier: "real-world", title: "Exact-amount payment links", pitch: "Generates QR codes and USSD shortcuts so a transfer arrives with the exact amount.", stack: ["JavaScript", "QR", "USSD"], status: "building", progress: 10 },
  { id: "liveery", tier: "real-world", title: "Liveery", pitch: "A platform built for taxi drivers.", stack: ["Details on request"], status: "classified" },

  { id: "lab1", tier: "lab", title: "Experiment 001", pitch: "Something strange is compiling here.", stack: ["???"], status: "building", progress: 5 },
];
