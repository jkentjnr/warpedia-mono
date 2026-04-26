/* global React */
const cols = ['Submission', 'Type', 'Contributor', 'Submitted', 'License', 'Flags', 'Status', 'Assigned'];
const queue = [
  ['wp:contribution:01HXP7K3R8M2N9V5Y4Q1ZBCDEF', 'Letter from Pte. J. H. Smith to his mother, 3 July 1916', 'LET', 'Sarah Smith', '2 days ago', 'CC BY-SA 4.0', ['ai', 'first'], 'in-review', 'M. Okoye'],
  ['wp:contribution:01HXP6Z4G1N8V2K5Y3R0WBCDEF', 'Photograph: 1st Bn. AIF, Pozières, August 1916', 'PHO', 'awm-archive', '3 days ago', 'CC0', [], 'triage', '—'],
  ['wp:contribution:01HXP5Q2R9M4N7V8Y1K6XBCDEF', 'Diary of Lt. Eleanor Vasquez, 1944–45', 'DIA', 'evasquez-grandson', '5 days ago', 'CC BY 4.0', ['sensitive'], 'in-review', 'A. Lindqvist'],
  ['wp:contribution:01HXP4R8M3N1V7Y5K2W9BCDEF', 'Field manual: Lee–Enfield No. 4 Mk I (rev.)', 'DOC', 'iwm-partner', '5 days ago', 'CC BY-SA 4.0', ['partner'], 'queued', '—'],
  ['wp:contribution:01HXP3M2R5N8V9Y4K7W1BCDEF', 'Oral history: Korean War veteran, recorded 2003', 'AUD', 'koreanwar-archive', '1 week ago', 'OPEN', [], 'triage', '—'],
  ['wp:contribution:01HXP2K9R3M6N1V5Y7W4BCDEF', 'Postcard from Verdun sector, undated (c. 1916)', 'LET', 'collector-jpr', '1 week ago', 'CC BY-SA 4.0', ['fuzzy-date'], 'queued', '—'],
  ['wp:contribution:01HXP1V7K2M5N9R3Y8W6BCDEF', 'Photograph: HMAS Sydney crew, c. 1940', 'PHO', 'navalhistory-au', '1 week ago', 'CC BY 4.0', [], 'approved', 'M. Okoye'],
  ['wp:contribution:01HXP0R6M9V2N5K3Y1W8BCDEF', 'Article draft: Battle of Long Tan', 'DOC', 'editor-tnt', '2 weeks ago', 'CC BY-SA 4.0', ['encyclopedia'], 'in-review', 'T. N. Tran'],
];

function statusBadge(s) {
  const map = {
    'triage': ['wp-badge-info', 'TRIAGE'],
    'queued': ['wp-badge-link-only', 'QUEUED'],
    'in-review': ['wp-badge-caution', 'IN REVIEW'],
    'approved': ['wp-badge-open-sa', 'APPROVED'],
    'rejected': ['wp-badge-error', 'REJECTED'],
  };
  const [cls, label] = map[s] || ['wp-badge', s];
  return <span className={`wp-badge ${cls}`}>{label}</span>;
}

function flagBadge(f) {
  const map = {
    'ai': ['wp-badge-caution', 'AI'],
    'sensitive': ['wp-badge-error', 'SENSITIVE'],
    'first': ['wp-badge-info', '1ST CONTRIB.'],
    'partner': ['wp-badge-info', 'PARTNER'],
    'fuzzy-date': ['wp-badge-link-only', 'FUZZY DATE'],
    'encyclopedia': ['wp-badge-info', 'ARTICLE'],
  };
  const [cls, label] = map[f] || ['wp-badge', f];
  return <span key={f} className={`wp-badge ${cls}`}>{label}</span>;
}

function EditorialQueue() {
  const [active, setActive] = React.useState(0);
  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)', display: 'grid', gridTemplateRows: 'auto 1fr' }}>
      <header className="wp-topbar">
        <img src="../../assets/logo/warpedia-mark.svg" style={{ height: 28 }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.14em' }}>EDITORIAL · REVIEW QUEUE</span>
        <nav style={{ marginLeft: 24, display: 'flex', gap: 18 }}>
          <a className="wp-tab wp-tab-active" href="#">Queue</a>
          <a className="wp-tab" href="#">Assigned to me</a>
          <a className="wp-tab" href="#">Approved</a>
          <a className="wp-tab" href="#">Rejected</a>
          <a className="wp-tab" href="#">Reports</a>
        </nav>
        <span className="wp-caption" style={{ marginLeft: 'auto' }}>M. Okoye · Editor</span>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', minHeight: 0 }}>
        {/* Queue */}
        <section style={{ borderRight: '1px solid var(--ink-rule)', overflow: 'auto' }}>
          <div style={{ padding: '20px 28px 12px', display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <h2 className="wp-h2" style={{ margin: 0 }}>Submissions in queue</h2>
            <span className="wp-meta">{queue.length} items · oldest first</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <button className="wp-btn wp-btn-ghost wp-btn-sm">Filter</button>
              <button className="wp-btn wp-btn-ghost wp-btn-sm">Sort: Submitted ↑</button>
              <button className="wp-btn wp-btn-secondary wp-btn-sm">Bulk actions</button>
            </div>
          </div>
          <table className="wp-table">
            <thead>
              <tr>{cols.map(c => <th key={c}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {queue.map((row, i) => (
                <tr key={i} onClick={() => setActive(i)} style={{ background: active === i ? 'var(--paper-3)' : 'transparent', cursor: 'pointer' }}>
                  <td>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--ink)', lineHeight: '20px' }}>{row[1]}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-3)', marginTop: 2 }}>{row[0].slice(0, 36)}…</div>
                  </td>
                  <td><span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>{row[2]}</span></td>
                  <td>{row[3]}</td>
                  <td className="wp-meta">{row[4]}</td>
                  <td><span className={`wp-badge ${row[5].includes('CC0') || row[5].includes('OPEN') && !row[5].includes('SA') ? 'wp-badge-open' : 'wp-badge-open-sa'}`}>{row[5]}</span></td>
                  <td><div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>{row[6].map(flagBadge)}</div></td>
                  <td>{statusBadge(row[7])}</td>
                  <td className="wp-meta">{row[8]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Detail rail */}
        <aside style={{ overflow: 'auto', background: 'var(--paper)' }}>
          <Detail row={queue[active]} />
        </aside>
      </div>
    </div>
  );
}

function Detail({ row }) {
  return (
    <div style={{ padding: '24px 28px 80px' }}>
      <div className="wp-caption" style={{ marginBottom: 6 }}>Submission</div>
      <h2 className="wp-h2" style={{ marginTop: 0, marginBottom: 6 }}>{row[1]}</h2>
      <code style={{ fontSize: 11 }}>{row[0]}</code>

      {/* Plate */}
      <div style={{ background: 'var(--paper-3)', marginTop: 18, marginBottom: 16, padding: 10, border: '1px solid var(--ink-rule)' }}>
        <div style={{ aspectRatio: '4 / 3', background: 'repeating-linear-gradient(45deg, var(--paper-2), var(--paper-2) 8px, var(--paper) 8px, var(--paper) 16px)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <span className="wp-caption">Plate · scan preview</span>
          <span className="wp-badge wp-badge-caution" style={{ position: 'absolute', top: 8, right: 8 }}>AI · MACHINE TRANSCRIPTION</span>
        </div>
      </div>

      <h3 className="wp-h3">Reviewer checklist</h3>
      {[
        ['Rights & licensing assertion is plausible', true],
        ['Metadata: title, date, author, place', true],
        ['Linked entities reconcile correctly', false],
        ['Transcription read & corrected', false],
        ['Sensitivity flags applied where needed', true],
        ['No copyright-owned third-party material', true],
      ].map(([t, done], i) => (
        <label key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid var(--ink-rule)', fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-2)', cursor: 'pointer' }}>
          <input type="checkbox" defaultChecked={done} style={{ accentColor: 'var(--verdigris)', marginTop: 3 }} />
          <span>{t}</span>
        </label>
      ))}

      <h3 className="wp-h3" style={{ marginTop: 24 }}>Catalogue metadata</h3>
      <table className="wp-meta-table">
        <tbody>
          <tr><th>Author</th><td>John Henry Smith (1894–1916) <a href="#">[wp:person:01HX…]</a></td></tr>
          <tr><th>Recipient</th><td>Margaret Smith (1869–1948) <span className="wp-meta">— created by submitter</span></td></tr>
          <tr><th>Date written</th><td>1916-07-03</td></tr>
          <tr><th>Place</th><td>Western Front, near Pozières <a href="#">[wp:place:Q…]</a></td></tr>
          <tr><th>Conflict</th><td>First World War <span className="wp-meta">→</span> Battle of the Somme</td></tr>
          <tr><th>Unit</th><td>1st Battalion, AIF</td></tr>
          <tr><th>Pages</th><td>2 leaves, recto + verso</td></tr>
          <tr><th>License</th><td><span className="wp-badge wp-badge-open-sa">CC BY-SA 4.0</span></td></tr>
          <tr><th>Source</th><td>Family collection, in possession of submitter</td></tr>
        </tbody>
      </table>

      <h3 className="wp-h3" style={{ marginTop: 24 }}>Editorial notes</h3>
      <textarea className="wp-textarea" defaultValue={"Linked person record matches existing wp:person for J. H. Smith (created 2026-03-12). Transcription is machine-only; need to read against scan before publishing. Recipient created — check that the birth/death years are sourced or remove them."} />

      <h3 className="wp-h3" style={{ marginTop: 24 }}>Decision</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button className="wp-btn wp-btn-primary">Approve & publish</button>
        <button className="wp-btn wp-btn-secondary">Approve as draft</button>
        <button className="wp-btn wp-btn-ghost">Request changes</button>
        <button className="wp-btn wp-btn-ghost" style={{ color: 'var(--error-deep)' }}>Decline</button>
      </div>

      <h3 className="wp-h3" style={{ marginTop: 28 }}>Activity</h3>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <Activity when="2 days ago" who="Sarah Smith" what="Submitted contribution" />
        <Activity when="2 days ago" who="System" what="AI transcription queued (Transkribus model wp-eng-handwritten-v3)" />
        <Activity when="1 day ago" who="System" what="AI transcription complete · flagged machine-only" />
        <Activity when="1 day ago" who="M. Okoye" what="Self-assigned · status → IN REVIEW" current />
      </ol>
    </div>
  );
}

function Activity({ when, who, what, current }) {
  return (
    <li style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 14, padding: '8px 0', borderBottom: '1px solid var(--ink-rule)', alignItems: 'baseline' }}>
      <span className="wp-meta">{when}</span>
      <span style={{ fontFamily: 'var(--sans)', fontSize: 13.5, color: current ? 'var(--ink)' : 'var(--ink-2)', fontWeight: current ? 500 : 400 }}>
        <b style={{ color: 'var(--ink)' }}>{who}</b> — {what}
      </span>
    </li>
  );
}

window.EditorialQueue = EditorialQueue;
