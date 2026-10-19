import ProjectCard from "./ProjectCard.jsx";

export default function TierSection({ tier, items }) {
  return (
    <section id={tier.id} className={`tier ${tier.style}`}>
      <h2>{tier.title}</h2>
      <p className="blurb">{tier.blurb}</p>
      <div className="grid">
        {items.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
