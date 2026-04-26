/* global React */
// Shared chrome — TopBar (7-item nav), Footer, Breadcrumb, hub primitives.
const { useState: useStateShared } = React;

function TopBar({ current = 'browse' }) {
  const navItems = ['Browse', 'Conflicts', 'People', 'Places', 'Equipment', 'Themes', 'About'];
  return (
    <header className="wp-topbar" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
      <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src="assets/logo/warpedia-wordmark.svg" alt="Warpedia" style={{ height: 26, display: 'block' }} />
      </a>
      <nav style={{ display: 'flex', gap: 18, fontFamily: 'var(--sans)', fontSize: 14, marginLeft: 8 }}>
        {navItems.map(n => {
          const key = n.toLowerCase();
          const active = current === key;
          return (
            <a key={n} href="#" onClick={(e) => e.preventDefault()}
               style={{
                 color: active ? 'var(--ink)' : 'var(--ink-2)',
                 textDecoration: 'none',
                 borderBottom: active ? '2px solid var(--ink)' : '2px solid transparent',
                 paddingBottom: 2,
                 fontWeight: active ? 600 : 400,
               }}>
              {n}
            </a>
          );
        })}
      </nav>
      <div style={{ flex: 1, maxWidth: 320, marginLeft: 12 }}>
        <input className="wp-input" style={{ height: 30, fontSize: 13 }} placeholder="Search the catalogue…" />
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="#" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--sans)' }}>Sign in</a>
        <button className="wp-btn wp-btn-primary wp-btn-sm">Contribute</button>
      </div>
    </header>
  );
}

function Breadcrumb({ trail }) {
  return (
    <nav className="wp-meta" style={{ marginBottom: 14, fontFeatureSettings: '"tnum" 1' }}>
      {trail.map((t, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ margin: '0 6px', color: 'var(--ink-4)' }}>›</span>}
          {i < trail.length - 1
            ? <a href="#" onClick={(e) => e.preventDefault()}>{t}</a>
            : <span style={{ color: 'var(--ink-2)' }}>{t}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

function HubHero({ kicker, title, subtitle, dates, ulid, qid, stats }) {
  return (
    <header style={{ paddingBottom: 24 }}>
      {kicker && <div className="wp-caption" style={{ marginBottom: 10 }}>{kicker}</div>}
      <h1 className="wp-display-l" style={{ marginBottom: 8 }}>{title}</h1>
      {subtitle && (
        <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: '28px', color: 'var(--ink-2)', maxWidth: '60ch', margin: '4px 0 14px', fontFeatureSettings: '"onum" 1' }}>
          {subtitle}
        </p>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'baseline', marginBottom: 12 }}>
        {dates && <span className="wp-meta" style={{ fontWeight: 500, color: 'var(--ink-2)' }}>{dates}</span>}
        {ulid && <span className="wp-id-plain" style={{ fontSize: 12, color: 'var(--ink-3)' }}>{ulid}</span>}
        {qid && <a href="#" onClick={(e)=>e.preventDefault()} style={{ fontSize: 12 }}>Wikidata · {qid}</a>}
      </div>
      {stats && (
        <div style={{ display: 'flex', gap: 0, borderTop: '1px solid var(--ink-rule)', borderBottom: '1px solid var(--ink-rule)', marginTop: 16 }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              flex: 1,
              padding: '14px 18px 14px 0',
              borderRight: i < stats.length - 1 ? '1px solid var(--ink-rule)' : 'none',
              paddingLeft: i === 0 ? 0 : 18,
            }}>
              <div className="wp-caption" style={{ marginBottom: 4 }}>{s[0]}</div>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 24, color: 'var(--ink)', fontFeatureSettings: '"onum" 1, "tnum" 1' }}>{s[1]}</div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

// Section header used to delimit hub sections (Featured items, Key people, etc.)
function SectionHead({ label, count, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '2px solid var(--ink)', paddingBottom: 8, marginTop: 56, marginBottom: 20 }}>
      <h2 className="wp-smallcaps" style={{ fontSize: 14, margin: 0, fontFamily: 'var(--serif)' }}>
        {label}
        {count != null && <span style={{ color: 'var(--ink-3)', fontFeatureSettings: '"tnum" 1', marginLeft: 10, fontWeight: 400 }}>{count}</span>}
      </h2>
      {action && <a href="#" onClick={(e)=>e.preventDefault()} style={{ fontSize: 13 }}>{action}</a>}
    </div>
  );
}

// Multi-perspective chip row — applies to Conflict + Event hubs.
function PerspectiveChips({ axes }) {
  // axes: [{ label: 'Side', chips: [['all','All'], ['allied','Allied (WW1)'], ...] }, ...]
  const [selected, setSelected] = useStateShared(() => Object.fromEntries(axes.map(a => [a.label, ['all']])));
  const toggle = (axis, k) => {
    setSelected(s => {
      const cur = s[axis] || ['all'];
      if (k === 'all') return { ...s, [axis]: ['all'] };
      const next = cur.filter(x => x !== 'all');
      const has = next.includes(k);
      const out = has ? next.filter(x => x !== k) : [...next, k];
      return { ...s, [axis]: out.length ? out : ['all'] };
    });
  };
  return (
    <div style={{ background: 'var(--paper-2)', padding: '14px 18px', marginBottom: 18, display: 'grid', gap: 10 }}>
      {axes.map(a => (
        <div key={a.label} style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="wp-caption" style={{ width: 64, color: 'var(--ink-2)' }}>{a.label}</span>
          {a.chips.map(([k, lbl, n]) => {
            const isOn = (selected[a.label] || []).includes(k);
            return (
              <button key={k} onClick={() => toggle(a.label, k)}
                style={{
                  fontFamily: 'var(--sans)', fontSize: 13,
                  background: isOn ? 'var(--ink)' : 'var(--paper)',
                  color: isOn ? 'var(--paper)' : 'var(--ink-2)',
                  border: '1px solid ' + (isOn ? 'var(--ink)' : 'var(--ink-rule-2)'),
                  borderRadius: 999,
                  padding: '4px 12px',
                  cursor: 'pointer',
                  fontFeatureSettings: '"tnum" 1',
                }}>
                {lbl}{n != null && <span style={{ color: isOn ? 'rgba(248,244,236,0.6)' : 'var(--ink-4)', marginLeft: 6 }}>{n}</span>}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// Featured item card — large, for hub pages (NOT the dense list).
const TYPE_ICON = {
  letter: 'M', diary: 'D', photograph: 'P', document: 'O',
  oral: 'A', film: 'V', manual: 'M', report: 'R', notebook: 'D', postcard: 'P',
};
function FeaturedCard({ item }) {
  return (
    <a href="#" onClick={(e)=>e.preventDefault()}
       className="wp-card-catalogue"
       style={{
         display: 'block', textDecoration: 'none', color: 'inherit',
         background: 'var(--paper-3)', padding: 0, position: 'relative',
       }}>
      <div style={{
        background: item.imgBg || 'var(--paper-4)',
        height: 180,
        borderBottom: '1px solid var(--ink-rule-2)',
        position: 'relative',
        backgroundImage: item.imgPattern || 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', alignItems: 'flex-end', padding: 10,
      }}>
        {item.sensitive && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'var(--paper-4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--ink-2)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>image withheld · click to reveal</div>
        )}
        <span style={{
          background: 'rgba(248,244,236,0.92)', padding: '2px 8px',
          fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>{item.placeholder}</span>
      </div>
      <div style={{ padding: '14px 16px 16px' }}>
        <div className="wp-caption" style={{ marginBottom: 4 }}>{item.subtype}</div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: '22px', color: 'var(--ink)', fontWeight: 500, marginBottom: 8 }}>{item.title}</div>
        <div className="wp-meta" style={{ fontFeatureSettings: '"tnum" 1' }}>{item.date} · {item.creator}</div>
        <div style={{ marginTop: 10, display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
          <span className={`wp-badge wp-badge-${item.tier}`}>{item.tierLabel}</span>
          {item.sensitivity && <span className="wp-badge wp-badge-caution">Content notice</span>}
        </div>
      </div>
    </a>
  );
}

// Dense item row — same vocabulary as <RecentList /> in the kit.
const TYPE_TAG = {
  letter: 'LET', diary: 'DIA', photograph: 'PHO', document: 'DOC',
  oral: 'AUD', film: 'VID', manual: 'MAN', report: 'REP', notebook: 'NTB', postcard: 'POS',
};
function ItemRow({ item, showConflict = true, showSensitivity = true }) {
  return (
    <a href="#" onClick={(e)=>e.preventDefault()}
       style={{
         display: 'grid',
         gridTemplateColumns: showConflict ? '40px 1fr 160px 110px 130px' : '40px 1fr 1fr 110px 130px',
         gap: 14, alignItems: 'baseline',
         padding: '12px 8px',
         borderBottom: '1px solid var(--ink-rule)',
         textDecoration: 'none', color: 'inherit',
       }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>{TYPE_TAG[item.type] || 'ITM'}</span>
      <span style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 16, color: 'var(--ink)' }}>
        {item.title}
        {showSensitivity && item.sensitivity && <span className="wp-badge wp-badge-caution" style={{ marginLeft: 8, verticalAlign: 'middle' }}>Notice</span>}
      </span>
      <span className="wp-meta">{showConflict ? item.conflict : item.creator}</span>
      <span className="wp-meta" style={{ fontFeatureSettings: '"tnum" 1' }}>{item.date}</span>
      <span><span className={`wp-badge wp-badge-${item.tier}`}>{item.tierLabel}</span></span>
    </a>
  );
}

// Chip-cluster of linked entities (people / places / themes).
function EntityChips({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map((it, i) => (
        <a key={i} href="#" onClick={(e)=>e.preventDefault()} style={{
          display: 'inline-flex', gap: 8, alignItems: 'baseline',
          padding: '6px 12px',
          background: 'var(--paper)',
          border: '1px solid var(--ink-rule-2)',
          borderRadius: 2,
          fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink)',
          textDecoration: 'none',
        }}>
          <span className="wp-caption" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{it.kind}</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 14 }}>{it.label}</span>
          {it.meta && <span className="wp-meta" style={{ color: 'var(--ink-3)' }}>{it.meta}</span>}
        </a>
      ))}
    </div>
  );
}

// "Cite this" inline expanding panel.
function CiteThis({ ulid, slug, title, creator, date }) {
  const [open, setOpen] = useStateShared(false);
  const [fmt, setFmt] = useStateShared('chicago');
  const url = `https://warpedia.org${slug}`;
  const accessed = '26 April 2026';
  const cites = {
    chicago: `${creator}. "${title}." Warpedia, item ${ulid}. Accessed ${accessed}. ${url}.`,
    apa: `${creator} (${(date || '').slice(0,4)}). ${title}. Warpedia. Retrieved ${accessed}, from ${url}`,
    mla: `${creator}. "${title}." Warpedia, ${date || 'n.d.'}, ${url}. Accessed ${accessed}.`,
    bibtex: `@misc{${ulid.split(':').pop()},\n  author = {${creator}},\n  title  = {${title}},\n  year   = {${(date || '').slice(0,4)}},\n  url    = {${url}},\n  note   = {Warpedia ${ulid}, accessed ${accessed}}\n}`,
  };
  return (
    <div style={{ borderTop: '1px solid var(--ink-rule)', paddingTop: 14, marginTop: 14 }}>
      <button onClick={() => setOpen(o => !o)} className="wp-btn wp-btn-link" style={{ height: 'auto' }}>
        {open ? 'Hide citation ▴' : 'Cite this ▾'}
      </button>
      {open && (
        <div style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', gap: 14, marginBottom: 8 }}>
            {['chicago', 'apa', 'mla', 'bibtex'].map(k => (
              <button key={k} onClick={() => setFmt(k)} className={`wp-tab ${fmt === k ? 'wp-tab-active' : ''}`} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {k.toUpperCase()}
              </button>
            ))}
          </div>
          <pre style={{
            background: 'var(--paper)', border: '1px solid var(--ink-rule)',
            padding: 12, fontFamily: fmt === 'bibtex' ? 'var(--mono)' : 'var(--serif)',
            fontSize: 13, lineHeight: '20px', color: 'var(--ink-2)',
            whiteSpace: 'pre-wrap', margin: 0,
          }}>{cites[fmt]}</pre>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button className="wp-btn wp-btn-secondary wp-btn-sm">Copy</button>
            <button className="wp-btn wp-btn-ghost wp-btn-sm">Export RIS</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Sensitive-content reveal panel — for Item view (use also as smaller variant).
function SensitivePanel({ children, summary }) {
  const [revealed, setRevealed] = useStateShared(false);
  if (revealed) return children;
  return (
    <div style={{
      background: 'var(--caution-tint)',
      border: '1px solid rgba(139,105,20,0.35)',
      padding: '20px 22px',
      borderRadius: 0,
    }}>
      <div className="wp-caption" style={{ color: 'var(--caution-deep)', marginBottom: 6 }}>Content notice</div>
      <p style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: '24px', color: 'var(--ink-2)', margin: '0 0 12px' }}>
        {summary}
      </p>
      <button className="wp-btn wp-btn-secondary wp-btn-sm" onClick={() => setRevealed(true)}>Click to view</button>
    </div>
  );
}

// Mini map block — schematic OSM-style placeholder. No real map tiles.
function MapBlock({ height = 280, lat, lng, marker, caption }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        height, background: 'var(--paper-2)',
        backgroundImage: `
          linear-gradient(rgba(61,85,107,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(61,85,107,0.06) 1px, transparent 1px),
          radial-gradient(ellipse at 35% 60%, rgba(74,104,86,0.10) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 30%, rgba(74,104,86,0.08) 0%, transparent 60%)
        `,
        backgroundSize: '24px 24px, 24px 24px, 100% 100%, 100% 100%',
        position: 'relative',
        border: '1px solid var(--ink-rule-2)',
        overflow: 'hidden',
      }}>
        {/* Schematic 'roads' */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <path d="M 0 60 Q 200 90 400 70 T 800 50" stroke="rgba(107,99,89,0.25)" strokeWidth="2" fill="none" />
          <path d="M 100 0 L 180 200 L 240 280" stroke="rgba(107,99,89,0.2)" strokeWidth="1.5" fill="none" />
          <path d="M 320 0 L 360 280" stroke="rgba(107,99,89,0.2)" strokeWidth="1" fill="none" />
          <path d="M 0 180 L 800 200" stroke="rgba(61,85,107,0.18)" strokeWidth="1" fill="none" />
        </svg>
        {/* Marker */}
        <div style={{
          position: 'absolute', left: '52%', top: '48%',
          width: 14, height: 14, borderRadius: '50%',
          background: 'var(--oxide)', border: '2px solid var(--paper)',
          boxShadow: '0 2px 6px rgba(26,23,20,0.3)',
          transform: 'translate(-50%, -50%)',
        }} />
        <div style={{
          position: 'absolute', left: '52%', top: '48%',
          width: 56, height: 56, borderRadius: '50%',
          background: 'var(--oxide-tint)',
          transform: 'translate(-50%, -50%)',
        }} />
        {marker && (
          <div style={{
            position: 'absolute', left: 'calc(52% + 14px)', top: 'calc(48% - 18px)',
            background: 'var(--paper)', padding: '4px 10px',
            border: '1px solid var(--ink-rule-2)',
            fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--ink)',
            whiteSpace: 'nowrap',
          }}>{marker}</div>
        )}
        {/* Attribution + coords */}
        <div style={{
          position: 'absolute', right: 8, bottom: 6,
          fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)',
          background: 'rgba(248,244,236,0.85)', padding: '2px 6px',
        }}>{lat}, {lng} · OSM (placeholder)</div>
      </div>
      {caption && <figcaption className="wp-meta" style={{ marginTop: 6 }}>{caption}</figcaption>}
    </figure>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--ink-rule)', background: 'var(--paper-2)', padding: '40px 32px', marginTop: 64 }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <img src="assets/logo/warpedia-wordmark.svg" alt="Warpedia" style={{ height: 26 }} />
          <p className="wp-meta" style={{ marginTop: 12, lineHeight: '20px' }}>
            An open, primary-source-rich encyclopedia of the human record of war. Content licensed CC BY-SA 4.0 unless otherwise noted; primary sources carry their own per-item rights.
          </p>
        </div>
        {[
          ['The project', ['Charter', 'Editorial standards', 'Governance', 'Roadmap']],
          ['Take part',   ['Contribute a primary source', 'Become a transcription volunteer', 'Partner organisations', 'API']],
          ['Mirrors',     ['Wikimedia Commons', 'Internet Archive', 'Wikisource', 'Wikidata']],
        ].map(([t, items]) => (
          <div key={t}>
            <div className="wp-caption" style={{ color: 'var(--ink)' }}>{t}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 6 }}>
              {items.map(i => <li key={i}><a href="#" onClick={(e)=>e.preventDefault()} style={{ fontSize: 13 }}>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1080, margin: '32px auto 0', borderTop: '1px solid var(--ink-rule)', paddingTop: 16, display: 'flex', justifyContent: 'space-between' }}>
        <span className="wp-meta">Warpedia is a non-commercial open-knowledge project. No advertising. No tracking beyond essential.</span>
        <span className="wp-meta">v1 · pre-build research and design phase</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  TopBar, Breadcrumb, HubHero, SectionHead, PerspectiveChips,
  FeaturedCard, ItemRow, EntityChips, CiteThis, SensitivePanel, MapBlock, Footer,
});
