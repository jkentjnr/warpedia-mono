/* global React */
// Theme page — Civilian voices from occupied territories
// Long-form essay with curated narrative_items interleaved.

function ThemePage() {
  return (
    <main style={{ padding: '32px 40px 64px', maxWidth: 1080, margin: '0 auto' }}>
      <Breadcrumb trail={['Home', 'Themes', 'Cultural response', 'Civilian voices from occupied territories']} />
      <div style={{ paddingBottom: 16 }}>
        <div className="wp-caption" style={{ marginBottom: 10 }}>Theme · Cultural response · Moral and legal</div>
        <h1 className="wp-display-l" style={{ marginBottom: 12, maxWidth: '24ch' }}>Civilian voices from occupied territories</h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: '28px', color: 'var(--ink-2)', maxWidth: '54ch', margin: '0 0 14px', fontFeatureSettings: '"onum" 1' }}>
          A cross-conflict reading of diaries, oral histories, and clandestine correspondence kept by civilians under occupation between 1939 and 1975 — the German occupation of Europe, Japanese-occupied territories in Asia, and South Vietnam under the Republic of Vietnam.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'baseline' }}>
          <span className="wp-meta" style={{ color: 'var(--ink-2)' }}>Curated by M. Okoye, Senior Editor · last revised 18 April 2026</span>
          <span className="wp-id-plain" style={{ fontSize: 12, color: 'var(--ink-3)' }}>wp:theme:01HXPOCCVOICE0000000A01</span>
        </div>
      </div>
      <hr className="wp-rule-double" style={{ margin: '8px 0 32px' }} />

      <div className="wp-prose wp-dropcap">
        <p>Civilians under occupation produced a distinct documentary record. Constraints on movement, speech, and material — paper, ink, time — shaped what was written and what survived. The clandestine archives of the Warsaw ghetto (Oneg Shabbat), the buried diary of Anne Frank, the prison-camp memoirs gathered after 1945, and the village notebooks compiled in Quảng Trị and Tây Ninh between 1965 and 1972 are connected by a common situation: the people writing did not know whether anyone would ever read them.<sup>[1]</sup></p>
        <p>Warpedia treats these documents as published items in their own right rather than as evidence appended to the histories of the regimes that produced the conditions for them. The catalogue's posture is to surface the civilian voice on the same terms as the military and diplomatic record, with comparable metadata depth, comparable preservation commitments, and the same right to a permanent identifier.</p>
      </div>

      <h2 className="wp-h2" style={{ marginTop: 56 }}>From the holdings — three civilian witnesses</h2>
      <div className="wp-prose">
        <p>The three items below are drawn from the WW2 European, WW2 Asia-Pacific, and Vietnam War clusters respectively. They were written under three different regimes and three different censorship cultures; read together they sketch the range of what civilian under-occupation documentation looks like in the catalogue.</p>
      </div>

      <div style={{ marginTop: 28, display: 'grid', gap: 20 }}>
        {[
          {
            kicker: 'WW2 · Bergen-Belsen, 1944–1945',
            title: 'Diary fragments of Avraham Lewin, recovered Bergen-Belsen, 1945',
            tier: 'open-sa', tierLabel: 'CC BY-SA · estate consent',
            sensitivity: 'Content notice — describes starvation, disease, and mass mortality on the wards.',
            quote: '14 February. The bread did not come for three days. Two more from our row, one in the night and one this morning. Names are kept in the notebook so that someone may carry them. — A. L.',
          },
          {
            kicker: 'WW2 · Japanese-occupied Korea, oral history',
            title: 'Oral history: Kim Sun-ja interview, Seoul, 1992',
            tier: 'link-only', tierLabel: 'Held at Korean Council',
            sensitivity: 'Content notice — describes sexual violence under the Japanese imperial military comfort system.',
            quote: 'Recorded in Korean with English transcript. 124 minutes. Held in trust by the Korean Council for the Women Drafted for Military Sexual Slavery; Warpedia surfaces metadata and a link only.',
          },
          {
            kicker: 'Vietnam War · Quảng Trị, 2014',
            title: 'Oral history: Nguyễn Thị Hoa interview, Đông Hà, 2014',
            tier: 'open-sa', tierLabel: 'CC BY-SA',
            sensitivity: null,
            quote: 'A village teacher recounts the relocation of her hamlet in 1967, the long return in 1973, and the rebuilding through the late 1970s. 98 minutes, Vietnamese with English transcript.',
          },
        ].map((it, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr', gap: 28,
            paddingBottom: 20, borderBottom: '1px solid var(--ink-rule)',
          }}>
            <div style={{
              background: 'var(--paper-3)',
              height: 160,
              borderRadius: 0,
              display: 'flex', alignItems: 'flex-end', padding: 8,
              fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)',
              letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>{it.kicker}</div>
            <div>
              <div className="wp-caption" style={{ marginBottom: 4 }}>{it.kicker}</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 22, color: 'var(--ink)', margin: '0 0 8px', lineHeight: '28px' }}>{it.title}</h3>
              {it.sensitivity && (
                <div style={{ marginBottom: 8 }}>
                  <span className="wp-badge wp-badge-caution">Content notice</span>
                  <span className="wp-meta" style={{ marginLeft: 8 }}>{it.sensitivity.replace('Content notice — ','')}</span>
                </div>
              )}
              <blockquote style={{
                fontFamily: 'var(--serif)', fontSize: 17, lineHeight: '26px', color: 'var(--ink-2)',
                borderLeft: '2px solid var(--ink)', paddingLeft: 16, margin: '8px 0 12px',
                fontFeatureSettings: '"onum" 1',
              }}>{it.quote}</blockquote>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span className={`wp-badge wp-badge-${it.tier}`}>{it.tierLabel}</span>
                <a href="#" onClick={(e)=>e.preventDefault()} style={{ fontSize: 13 }}>View item →</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="wp-h2" style={{ marginTop: 56 }}>Reading across the three</h2>
      <div className="wp-prose">
        <p>Lewin's diary was hidden as it was written; the Kim interview was withheld for nearly fifty years and released on the speaker's terms; Nguyễn's interview was given freely, in 2014, into the recorder. The catalogue does not collapse these three rights situations into a single licence tier; each item carries the licence its creator (or their heirs, or the holding institution) chose.</p>
        <p>The connecting thread is not a thesis about occupation — Warpedia's voice does not advance theses — but a curatorial commitment. Civilian testimony is preserved at fidelity, mirrored to the holding institution where one exists, and surfaced in the same chrome as the after-action reports and pilot's notes elsewhere in the catalogue.</p>
      </div>

      <SectionHead label="All items in this theme" count="84 narrative items · 312 supporting items" action="Browse all →" />
      <ItemRow item={{ type: 'diary',  title: 'Diary fragments of Avraham Lewin, recovered Bergen-Belsen, 1945', conflict: 'WW2', date: '1944–1945', tier: 'open-sa', tierLabel: 'CC BY-SA', sensitivity: true }} />
      <ItemRow item={{ type: 'oral',   title: 'Oral history: Kim Sun-ja interview, Seoul, 1992',                  conflict: 'WW2', date: '1992-08-14', tier: 'link-only', tierLabel: 'Link only', sensitivity: true }} />
      <ItemRow item={{ type: 'oral',   title: 'Oral history: Nguyễn Thị Hoa interview, Đông Hà, 2014',            conflict: 'Vietnam', date: '2014-11-22', tier: 'open-sa', tierLabel: 'CC BY-SA' }} />
      <ItemRow item={{ type: 'letter', title: 'Letter from Hanna Müller to her sister, Cologne, 18 August 1916',  conflict: 'WW1', date: '1916-08-18', tier: 'open-sa', tierLabel: 'CC BY-SA', sensitivity: true }} />
      <ItemRow item={{ type: 'diary',  title: 'Notebook of Lê Văn Đức, recovered 1972',                            conflict: 'Vietnam', date: '1971–1972', tier: 'open-sa', tierLabel: 'CC BY-SA' }} />

      <h2 className="wp-smallcaps" style={{ fontSize: 14, marginTop: 56 }}>References</h2>
      <ol style={{ fontFamily: 'var(--serif)', fontSize: 14, lineHeight: '22px', color: 'var(--ink-2)', paddingLeft: 24, marginTop: 4 }}>
        <li>Kassow, S. <i>Who Will Write Our History? Emanuel Ringelblum, the Warsaw Ghetto, and the Oneg Shabes Archive</i>. Indiana University Press, 2007.</li>
        <li>Soh, C. S. <i>The Comfort Women: Sexual Violence and Postcolonial Memory in Korea and Japan</i>. University of Chicago Press, 2008.</li>
        <li>Nguyen-Vo, T-H. <i>The Ironies of Freedom: Sex, Culture, and Neoliberal Governance in Vietnam</i>. University of Washington Press, 2008 (background, not testimony).</li>
      </ol>

      <CiteThis ulid="wp:theme:01HXPOCCVOICE0000000A01" slug="/themes/cultural-response/civilian-voices-occupied" title="Civilian voices from occupied territories" creator="M. Okoye et al." date="2026" />
    </main>
  );
}

window.ThemePage = ThemePage;
