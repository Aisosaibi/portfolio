import { useEffect, useState } from "react";

export default function Hero({ site }) {
  const full = [
    "$ whoami",
    site.name,
    "$ cat about.txt",
    `Software engineer. ${site.skills}.`,
    "I build things that solve real problems, and a few that don't.",
  ].join("\n");

  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduce ? full.length : 0);

  useEffect(() => {
    if (n >= full.length) return;
    const t = setTimeout(() => setN(n + 1), 28);
    return () => clearTimeout(t);
  }, [n, full.length]);

  return (
    <header className="hero">
      <nav aria-label="Sections">
        <a href="#foundations">Foundations</a>
        <a href="#real-world">Real-world</a>
        <a href="#lab">The weird lab</a>
        <a href="#contact">Contact</a>
      </nav>
      <pre className="terminal" aria-label={`${site.name}. Software engineer.`}>
        {full.slice(0, n)}
        <span className="cursor" aria-hidden="true" />
      </pre>
    </header>
  );
}
