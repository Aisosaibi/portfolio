import Hero from "./components/Hero.jsx";
import TierSection from "./components/TierSection.jsx";
import { site, tiers, projects } from "./data/projects.js";

export default function App() {
  return (
    <>
      <Hero site={site} />
      <main>
        {tiers.map((t) => (
          <TierSection key={t.id} tier={t} items={projects.filter((p) => p.tier === t.id)} />
        ))}
      </main>
      <footer id="contact">
        <h2>Contact</h2>
        <p>Want to work together or see a private project? Get in touch.</p>
        <p className="mono">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          <a href={site.github}>GitHub</a>
        </p>
      </footer>
    </>
  );
}
