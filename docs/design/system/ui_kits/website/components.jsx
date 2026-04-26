/* global React */
const { useState } = React;

// ====================== TOP BAR ======================
function TopBar({ onNav, current }) {
  const navItems = ['Browse', 'Themes', 'Conflicts', 'About'];
  return (
    <header className="wp-topbar" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ textDecoration: 'none' }}>
        <img src="../../assets/logo/warpedia-wordmark.svg" alt="Warpedia" style={{ height: 30, display: 'block' }} />
      </a>
      <nav style={{ display: 'flex', gap: 18, fontFamily: 'var(--sans)', fontSize: 14 }}>
        {navItems.map(n => (
          <a key={n} href="#" onClick={(e) => { e.preventDefault(); onNav(n === 'Browse' ? 'browse' : n.toLowerCase()); }}
             style={{ color: current === n.toLowerCase() ? 'var(--oxide)' : 'var(--ink-2)', textDecoration: 'none' }}>
            {n}
          </a>
        ))}
      </nav>
      <div style={{ flex: 1, maxWidth: 360, marginLeft: 12 }}>
        <input className="wp-input" style={{ height: 32, fontSize: 13 }} placeholder="Search items, people, places, units…" />
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
        <a href="#" style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--sans)' }}>Sign in</a>
        <button className="wp-btn wp-btn-primary wp-btn-sm">Contribute</button>
      </div>
    </header>
  );
}

// ====================== HOME ======================
function HomeHero({ onNav }) {
  return (
    <main style={{ padding: '64px 32px 96px', maxWidth: 1080, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div className="wp-caption" style={{ marginBottom: 14 }}>An open archive · est. 2026</div>
          <h1 className="wp-display-xl" style={{ marginBottom: 28, lineHeight: 1.08 }}>
            The human record of war, openly held.
          </h1>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: '28px', color: 'var(--ink-2)', marginBottom: 28, maxWidth: '54ch', fontFeatureSettings: '"onum" 1', marginTop: 0 }}>
            Warpedia is a primary-source archive and encyclopedia covering battles, conflicts, equipment, units, places, and the people — military and civilian — who lived through them. Letters, diaries, photographs, oral histories, manuals, and after-action reports are preserved alongside encyclopedic articles and freely licensed for re-use.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="wp-btn wp-btn-primary wp-btn-lg" onClick={() => onNav('browse')}>Browse the archive</button>
            <button className="wp-btn wp-btn-secondary wp-btn-lg" onClick={() => onNav('contribute')}>Contribute a primary source</button>
          </div>
        </div>
        <aside style={{ background: 'var(--paper-3)', padding: '24px 24px', minHeight: 320 }}>
          <div className="wp-caption">Holdings, today</div>
          <div style={{ marginTop: 16, display: 'grid', gap: 14 }}>
            {[
              ['Items', '142,318'],
              ['People', '38,704'],
              ['Conflicts', '47'],
              ['Contributors', '2,109'],
              ['Of which open-licensed', '94%'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--ink-rule)', paddingBottom: 8 }}>
                <span className="wp-meta">{k}</span>
                <span style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 22, color: 'var(--ink)', fontFeatureSettings: '"onum" 1, "tnum" 1' }}>{v}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <hr className="wp-rule-double" style={{ margin: '64px 0 40px' }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
        <Pillar title="Primary sources, hosted directly"
          body="A letter or diary entry is a published item in its own right — with its own metadata, rights statement, and permanent identifier — not supporting evidence for an article." />
        <Pillar title="Encyclopedic, neutral, cited"
          body="Articles present what reputable secondary sources establish. Disputed interpretations are attributed. Every claim is traceable to a citation." />
        <Pillar title="Multi-perspective by design"
          body="All conflicts equally — not just WW1 / WW2, not just Western / Anglophone. Civilian, colonial, women's, indigenous, and minority experiences are first-class concerns." />
      </div>

      <hr className="wp-rule" style={{ margin: '64px 0 32px' }} />

      <h2 className="wp-h2" style={{ marginBottom: 16 }}>Recently catalogued</h2>
      <RecentList onNav={onNav} />
    </main>
  );
}

function Pillar({ title, body }) {
  return (
    <div>
      <h3 className="wp-h3" style={{ marginTop: 0, fontFamily: 'var(--serif)', fontSize: 20 }}>{title}</h3>
      <p style={{ fontFamily: 'var(--serif)', fontSize: 16, lineHeight: '24px', color: 'var(--ink-2)', margin: 0 }}>{body}</p>
    </div>
  );
}

const SAMPLE_ITEMS = [
  { id: 'wp:item:01HXP7K3R8M2N9V5Y4Q1ZBCDEF', type: 'LET', title: 'Letter from Pte. J. H. Smith to his mother', date: '1916-07-03', tier: 'open-sa', tierLabel: 'CC BY-SA', conflict: 'First World War', place: 'near Pozières, Western Front' },
  { id: 'wp:item:01HXP7K3R8M2N9V5Y4Q1ZGHIJK', type: 'PHO', title: 'Group photograph, 1st Bn AIF, Pozières', date: '1916-07', tier: 'open', tierLabel: 'Public domain', conflict: 'First World War', place: 'Pozières' },
  { id: 'wp:item:01HXP7K3R8M2N9V5Y4Q1ZLMNOP', type: 'DIA', title: 'Diary entry — "we got new Spitfires"', date: '1942-08-14', tier: 'nc', tierLabel: 'CC BY-NC', conflict: 'Second World War', place: 'RAF Hornchurch' },
  { id: 'wp:item:01HXP7K3R8M2N9V5Y4Q1ZQRSTU', type: 'DOC', title: 'Casualty notification telegram, AIF', date: '1916-07-09', tier: 'link', tierLabel: 'Link only', conflict: 'First World War', place: 'Australia' },
  { id: 'wp:item:01HXP7K3R8M2N9V5Y4Q1ZVWXYZ', type: 'AUD', title: 'Oral history — Hồng Văn Tâm, evacuation of Hué', date: '1991-04', tier: 'open', tierLabel: 'CC0', conflict: 'Vietnam War', place: 'Hué' },
  { id: 'wp:item:01HXP7K3R8M2N9V5Y4Q1Z01234', type: 'MAN', title: "Pilot's notes — Supermarine Spitfire Mk IX", date: '1942', tier: 'open', tierLabel: 'OGL', conflict: 'Second World War', place: 'United Kingdom' },
];

function RecentList({ onNav }) {
  return (
    <div>
      {SAMPLE_ITEMS.map(it => (
        <div key={it.id}
          onClick={() => onNav('item', it)}
          style={{ display: 'grid', gridTemplateColumns: '40px 1fr 160px 110px 90px', gap: 14, alignItems: 'baseline', padding: '12px 8px', borderBottom: '1px solid var(--ink-rule)', cursor: 'pointer' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(26,23,20,0.04)'}
          onMouseLeave={(e) => e.currentTarget.style.background = ''}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>{it.type}</span>
          <span style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 16, color: 'var(--ink)' }}>{it.title}</span>
          <span className="wp-meta">{it.conflict}</span>
          <span className="wp-meta">{it.date}</span>
          <span><span className={`wp-badge wp-badge-${it.tier}`}>{it.tierLabel}</span></span>
        </div>
      ))}
    </div>
  );
}

// ====================== BROWSE ======================
function Browse({ onNav }) {
  const [filter, setFilter] = useState('all');
  return (
    <main style={{ padding: '32px 32px 96px', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 40 }}>
      <aside>
        <div className="wp-caption" style={{ marginBottom: 12 }}>Filter</div>
        <FilterGroup title="Conflict" items={[['ww1', 'First World War', 41203], ['ww2', 'Second World War', 68915], ['vtn', 'Vietnam War', 7340], ['kor', 'Korean War', 2814], ['all', 'All conflicts', 142318]]} value={filter} onChange={setFilter} />
        <div style={{ height: 24 }} />
        <FilterGroup title="Item type" items={[['let', 'Letter', 21044], ['dia', 'Diary', 4218], ['pho', 'Photograph', 78911], ['doc', 'Document', 18302], ['aud', 'Audio', 902], ['vid', 'Video', 312]]} />
        <div style={{ height: 24 }} />
        <FilterGroup title="Licence tier" items={[['open', 'Open', 90122], ['open-sa', 'Open · SA', 24011], ['nc', 'Non-commercial', 18203], ['link', 'Link only', 9982]]} />
      </aside>
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
          <h1 className="wp-h1" style={{ margin: 0 }}>Browse the archive</h1>
          <span className="wp-meta">142,318 items · sorted by recently catalogued</span>
        </div>
        <RecentList onNav={onNav} />
        <RecentList onNav={onNav} />
      </section>
    </main>
  );
}

function FilterGroup({ title, items, value, onChange }) {
  return (
    <div>
      <div className="wp-caption" style={{ marginBottom: 8, color: 'var(--ink)', fontSize: 11 }}>{title}</div>
      <div>
        {items.map(([k, label, count]) => (
          <label key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '6px 0', borderBottom: '1px solid var(--ink-rule)', cursor: 'pointer', fontFamily: 'var(--sans)', fontSize: 13 }}>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'baseline' }}>
              <input type="checkbox" defaultChecked={value === k} onChange={() => onChange && onChange(k)} style={{ accentColor: 'var(--oxide)' }} /> {label}
            </span>
            <span className="wp-meta" style={{ fontFeatureSettings: '"tnum" 1' }}>{count.toLocaleString()}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

// ====================== ITEM VIEW ======================
function ItemView({ item, onNav }) {
  const it = item || SAMPLE_ITEMS[0];
  return (
    <main style={{ padding: '32px 32px 96px', maxWidth: 1280, margin: '0 auto' }}>
      <div className="wp-meta" style={{ marginBottom: 18 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }}>Home</a> ·
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('browse'); }}> Browse</a> · {it.conflict}
      </div>
      <h1 className="wp-display-m" style={{ marginBottom: 6 }}>{it.title}</h1>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)', marginBottom: 24 }}>{it.id}</div>
      <hr className="wp-rule-double" style={{ marginBottom: 24 }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 40 }}>
        <div>
          {/* IIIF viewer placeholder */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--ink-rule-2)', minHeight: 480, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10, color: 'var(--ink-3)' }}>
            <div className="wp-caption">IIIF Viewer · placeholder</div>
            <div className="wp-meta" style={{ textAlign: 'center', maxWidth: '40ch' }}>
              Reproduction would appear here at full fidelity.<br />
              For example: AWM 1DRL/0428, p.1 — Letter, Pte. J. H. Smith, 1st Bn AIF, 3 July 1916.
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button className="wp-btn wp-btn-secondary wp-btn-sm">−</button>
              <button className="wp-btn wp-btn-secondary wp-btn-sm">+</button>
              <button className="wp-btn wp-btn-secondary wp-btn-sm">Rotate</button>
              <button className="wp-btn wp-btn-secondary wp-btn-sm">Full screen</button>
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <div className="wp-smallcaps" style={{ fontSize: 14 }}>Transcription</div>
            <div style={{ marginTop: 10, padding: '20px 24px', background: 'var(--paper-2)', fontFamily: 'var(--serif)', fontSize: 16, lineHeight: '26px', color: 'var(--ink-2)' }}>
              <p style={{ marginTop: 0 }}>My dear Mother,</p>
              <p>It is some little while since I last wrote you a proper letter — we have been on the move and there has been little chance to sit down with paper. We are now within sound of the guns and shall, I expect, see something of it before long…</p>
              <p style={{ color: 'var(--ink-3)', fontStyle: 'italic', marginBottom: 0 }}>[transcription continues]</p>
            </div>
            <div className="wp-meta" style={{ marginTop: 8 }}>
              Generated by Transkribus · edited by Sarah Smith on 2026-05-04. <a href="#">Suggest a correction</a>
            </div>
          </div>
        </div>

        <aside>
          <div style={{ background: 'var(--paper-3)', padding: '20px 22px' }}>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Catalogue</div>
            <table className="wp-meta-table">
              <tbody>
                <tr><th>Type</th><td>Letter, 2 pp.</td></tr>
                <tr><th>Date</th><td>3 July 1916</td></tr>
                <tr><th>Creator</th><td>John Henry Smith (1894–1916 †)</td></tr>
                <tr><th>Recipient</th><td>Margaret Smith (mother)</td></tr>
                <tr><th>Place</th><td>near Pozières</td></tr>
                <tr><th>Unit</th><td>1st Battalion, AIF</td></tr>
                <tr><th>Conflict</th><td>First World War</td></tr>
                <tr><th>Event</th><td>Battle of the Somme</td></tr>
                <tr><th>Language</th><td>English</td></tr>
                <tr><th>Pages</th><td>2</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ background: 'var(--paper-3)', padding: '20px 22px', marginTop: 16 }}>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Rights</div>
            <div style={{ marginBottom: 8 }}><span className="wp-badge wp-badge-open-sa">CC BY-SA 4.0</span></div>
            <div className="wp-meta">
              Donated by Sarah Smith (great-granddaughter). Held in the Smith family since 1916. Transcription CC BY-SA 4.0; original letter in the public domain.
            </div>
          </div>
          <div style={{ background: 'var(--paper-3)', padding: '20px 22px', marginTop: 16 }}>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Linked entities</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
              {['Person · John Henry Smith', 'Unit · 1st Bn AIF', 'Event · Battle of the Somme', 'Place · Pozières'].map(s => (
                <li key={s}><a href="#" style={{ fontSize: 13 }}>{s}</a></li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--paper-3)', padding: '20px 22px', marginTop: 16 }}>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Provenance</div>
            <div className="wp-meta" style={{ lineHeight: '20px' }}>
              Submitted 2026-05-01 · Reviewed 2026-05-08 by ed. M. Atkinson · Published 2026-05-09 · Master mirrored to Internet Archive.
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

// ====================== ARTICLE ======================
function Article({ onNav }) {
  return (
    <main style={{ padding: '40px 32px 96px', maxWidth: 880, margin: '0 auto' }}>
      <div className="wp-meta" style={{ marginBottom: 14 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }}>Home</a> ·
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('browse'); }}> Browse</a> · Events · First World War
      </div>
      <h1 className="wp-display-l">Battle of the Somme</h1>
      <div className="wp-meta" style={{ marginBottom: 8 }}>1 July – 18 November 1916 · Picardy, France · part of the First World War</div>
      <div style={{ marginBottom: 20 }}>
        <span className="wp-id-plain" style={{ fontSize: 12, color: 'var(--ink-3)' }}>wp:event:battle-of-the-somme</span>
        &nbsp;·&nbsp;
        <a href="#" style={{ fontSize: 12 }}>Wikidata Q156635</a>
      </div>
      <hr className="wp-rule-double" style={{ marginBottom: 28 }} />
      <div className="wp-prose">
        <p>The Battle of the Somme was a joint British and French offensive against German positions on the Western Front, fought between 1 July and 18 November 1916 along a front of approximately 30 kilometres on either side of the river Somme [1]. It is widely regarded as one of the bloodiest engagements of the First World War; combined casualties on both sides exceeded one million [2].</p>
        <p>The opening day saw the British Army sustain 57,470 casualties, of whom 19,240 were killed [3]. Historians broadly agree that the offensive failed to achieve a decisive breakthrough but contributed to the gradual attrition of German manpower and reserves [4].</p>
      </div>

      <h2 className="wp-h2">Course of the offensive</h2>
      <div className="wp-prose">
        <p>The offensive opened with a seven-day preliminary bombardment intended to cut German wire and destroy front-line defences. Surviving accounts and trench-map evidence indicate the bombardment was uneven in effect; significant sections of wire and forward strongpoints remained intact when the infantry assault began on the morning of 1 July [5].</p>
      </div>

      <hr className="wp-rule" style={{ margin: '40px 0 24px' }} />
      <h3 className="wp-smallcaps" style={{ fontSize: 14, marginBottom: 10 }}>Primary sources held in Warpedia</h3>
      <RecentList onNav={onNav} />

      <hr className="wp-rule" style={{ margin: '40px 0 24px' }} />
      <h3 className="wp-smallcaps" style={{ fontSize: 14, marginBottom: 10 }}>References</h3>
      <ol style={{ fontFamily: 'var(--serif)', fontSize: 14, lineHeight: '22px', color: 'var(--ink-2)', paddingLeft: 24 }}>
        <li>Prior, R. & Wilson, T. <i>The Somme</i>. Yale University Press, 2005.</li>
        <li>Philpott, W. <i>Bloody Victory: The Sacrifice on the Somme</i>. Little, Brown, 2009.</li>
        <li>Edmonds, J. E. <i>Military Operations: France and Belgium 1916, Vol. I</i>. Macmillan, 1932.</li>
        <li>Sheffield, G. <i>Forgotten Victory</i>. Headline, 2001.</li>
        <li>Imperial War Museum, "First Day on the Somme" oral histories, accession nos. 9148, 9149, 24852.</li>
      </ol>
    </main>
  );
}

// ====================== FOOTER ======================
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--ink-rule)', background: 'var(--paper-2)', padding: '40px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <img src="../../assets/logo/warpedia-wordmark.svg" alt="Warpedia" style={{ height: 26 }} />
          <p className="wp-meta" style={{ marginTop: 12, lineHeight: '20px' }}>
            An open, primary-source-rich encyclopedia of the human record of war. Content licensed CC BY-SA 4.0 unless otherwise noted; primary sources carry their own per-item rights.
          </p>
        </div>
        <FooterCol title="The project" items={['Charter', 'Editorial standards', 'Governance', 'Roadmap']} />
        <FooterCol title="Take part" items={['Contribute a primary source', 'Become a transcription volunteer', 'Partner organisations', 'API']} />
        <FooterCol title="Mirrors" items={['Wikimedia Commons', 'Internet Archive', 'Wikisource', 'Wikidata']} />
      </div>
      <div style={{ maxWidth: 1080, margin: '32px auto 0', borderTop: '1px solid var(--ink-rule)', paddingTop: 16, display: 'flex', justifyContent: 'space-between' }}>
        <span className="wp-meta">Warpedia is a non-commercial open-knowledge project. No advertising. No tracking beyond essential.</span>
        <span className="wp-meta">v1 · pre-build research and design phase</span>
      </div>
    </footer>
  );
}
function FooterCol({ title, items }) {
  return (
    <div>
      <div className="wp-caption" style={{ color: 'var(--ink)' }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 6 }}>
        {items.map(i => <li key={i}><a href="#" style={{ fontSize: 13 }}>{i}</a></li>)}
      </ul>
    </div>
  );
}

Object.assign(window, { TopBar, HomeHero, Browse, ItemView, Article, Footer });
