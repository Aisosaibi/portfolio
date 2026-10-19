const LABELS = { live: "Live", building: "In development", classified: "Private" };

export default function ProjectCard({ p }) {
  const s = p.status;
  return (
    <article className={`card ${s}`}>
      <header>
        <h3>{p.title}</h3>
        <span className={`badge ${s}`}>{LABELS[s]}</span>
      </header>
      <p className="pitch">{p.pitch}</p>
      <ul className="stack">
        {p.stack.map((t) => <li key={t}>{t}</li>)}
      </ul>

      {s === "building" && (
        <div className="progress">
          <div className="bar" role="progressbar" aria-valuenow={p.progress} aria-valuemin="0" aria-valuemax="100">
            <span style={{ width: `${p.progress}%` }} />
          </div>
          <small>Still being built. Check back soon.</small>
        </div>
      )}

      {s === "classified" && (
        <div className="redacted">
          <div aria-hidden="true"><i /><i /><i /></div>
          <small>Code is private. Demo available on request.</small>
        </div>
      )}

      {s === "live" && (
        <div className="links">
          {p.repo && <a href={p.repo}>Source</a>}
          {p.demo && <a href={p.demo}>Open demo</a>}
        </div>
      )}
    </article>
  );
}
