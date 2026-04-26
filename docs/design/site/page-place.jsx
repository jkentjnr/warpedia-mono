/* global React */
// Place page — Pozières (with map)

function PlacePage() {
  const items = [
    { type: 'letter',      title: 'Letter from Pte. J. H. Smith to his mother, 3 July 1916',     conflict: 'WW1', date: '1916-07-03', tier: 'open-sa', tierLabel: 'CC BY-SA' },
    { type: 'document',    title: 'Field order, 13. FAR, Pozières sector, 22 July 1916',         conflict: 'WW1', date: '1916-07-22', tier: 'open',    tierLabel: 'Public domain' },
    { type: 'photograph',  title: 'Pozières village, after the bombardment, August 1916',         conflict: 'WW1', date: '1916-08',    tier: 'open',    tierLabel: 'Public domain' },
    { type: 'diary',       title: 'Diary entry — Sister Eleanor Vasquez, 23 July 1916',           conflict: 'WW1', date: '1916-07-23', tier: 'open-sa', tierLabel: 'CC BY-SA', sensitivity: true },
    { type: 'photograph',  title: 'Aerial view, Pozières–Mouquet sector, 28 August 1916',         conflict: 'WW1', date: '1916-08-28', tier: 'open',    tierLabel: 'Public domain' },
    { type: 'document',    title: '1st Bn AIF war diary, 23 July – 7 August 1916',                conflict: 'WW1', date: '1916-08',    tier: 'open',    tierLabel: 'Public domain' },
  ];
  return (
    <main style={{ padding: '32px 40px 64px', maxWidth: 1180, margin: '0 auto' }}>
      <Breadcrumb trail={['Home', 'Places', 'Pozières']} />
      <HubHero
        kicker="Place"
        title="Pozières"
        subtitle="A village on the Albert–Bapaume road in the département of the Somme, captured by the 1st Australian Division between 23 July and 7 August 1916 in the second phase of the Battle of the Somme. The village was destroyed in the bombardment; the present-day commune was rebuilt in the 1920s."
        dates="50.0364° N · 2.7242° E"
        ulid="wp:place:01HXP1PLPOZIERES000000A01"
        qid="Q670810"
        stats={[
          ['Items linked',  '4,119'],
          ['Events',        '3'],
          ['Cemeteries',    '2'],
          ['Memorials',     '4'],
        ]}
      />
      <hr className="wp-rule-double" style={{ margin: '8px 0 32px' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56 }}>
        <div>
          <MapBlock
            height={320}
            lat="50.0364° N"
            lng="2.7242° E"
            marker="Pozières"
            caption="Pozières and surrounding sector. Markers show events, cemeteries and memorials linked to this place. Tiles © OpenStreetMap contributors (placeholder)."
          />

          <div className="wp-prose" style={{ marginTop: 28 }}>
            <p>Pozières is a village in the Somme département of Picardy, France, situated on the high ground of the Albert–Bapaume road approximately seven kilometres north-east of Albert. The village and the ridge to its north — known to British and Commonwealth forces as Pozières Ridge — were the objective of a sustained Allied offensive between 23 July and 7 August 1916, during the second phase of the Battle of the Somme.<sup>[1]</sup> The 1st, 2nd, and 4th Australian Divisions, fighting in successive reliefs, captured the village and the windmill on the high ground at a cost of 23,000 casualties in those six weeks.<sup>[2]</sup></p>
            <p>The village was levelled in the bombardment and rebuilt in the 1920s on the same plan. The Pozières British Cemetery, Pozières Memorial to the Missing, and Australian 1st Division Memorial sit at the western and eastern edges of the modern commune; the 1st Anzac Corps Memorial occupies the site of the windmill.</p>
          </div>

          <SectionHead label="Linked events" count="3" />
          <div>
            {[
              { name: 'Battle of Pozières',     dates: '23 Jul – 7 Aug 1916', items: 1842 },
              { name: 'Battle of Mouquet Farm', dates: '8 Aug – 5 Sep 1916',  items: 612  },
              { name: 'Operation Michael (recapture)', dates: '24 – 26 Mar 1918', items: 218 },
            ].map((ev, i) => (
              <a key={i} href="#" onClick={(e)=>e.preventDefault()} style={{
                display: 'grid', gridTemplateColumns: '1fr 200px 100px',
                gap: 14, alignItems: 'baseline',
                padding: '14px 8px', borderBottom: '1px solid var(--ink-rule)',
                textDecoration: 'none', color: 'inherit',
              }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)' }}>{ev.name}</span>
                <span className="wp-meta" style={{ fontFeatureSettings: '"tnum" 1' }}>{ev.dates}</span>
                <span className="wp-meta" style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontWeight: 600, color: 'var(--ink)' }}>{ev.items.toLocaleString()}</span> items
                </span>
              </a>
            ))}
          </div>

          <SectionHead label="Items linked to this place" count="4,119" action="Browse all →" />
          {items.map((it, i) => <ItemRow key={i} item={it} />)}

          <SectionHead label="Cemeteries & memorials at this place" count="6" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {[
              { kind: 'Cemetery (CWGC)', label: 'Pozières British Cemetery, Ovillers-la-Boisselle', meta: '2,758 burials · 1,387 unidentified' },
              { kind: 'Memorial',        label: 'Pozières Memorial to the Missing',                  meta: '14,690 names · UK & SA forces' },
              { kind: 'Memorial',        label: 'Australian 1st Division Memorial',                  meta: 'Eastern edge of village' },
              { kind: 'Memorial',        label: '1st Anzac Corps Memorial (the Windmill)',           meta: 'Pozières Ridge' },
            ].map((c, i) => (
              <a key={i} href="#" onClick={(e)=>e.preventDefault()} className="wp-card-catalogue" style={{ textDecoration: 'none', color: 'inherit', background: 'var(--paper-3)' }}>
                <div className="wp-caption" style={{ marginBottom: 6 }}>{c.kind}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--ink)', fontWeight: 500, marginBottom: 6 }}>{c.label}</div>
                <div className="wp-meta">{c.meta}</div>
              </a>
            ))}
          </div>

          <CiteThis ulid="wp:place:01HXP1PLPOZIERES000000A01" slug="/places/pozieres" title="Pozières" creator="Warpedia editors" date="2026" />
        </div>

        <aside style={{ display: 'grid', gap: 22, alignContent: 'start' }}>
          <div className="wp-card-catalogue">
            <div className="wp-caption" style={{ marginBottom: 10 }}>Place record</div>
            <table className="wp-meta-table">
              <tbody>
                <tr><th>Type</th><td>Battlefield · village</td></tr>
                <tr><th>Country</th><td>France</td></tr>
                <tr><th>Region</th><td>Hauts-de-France · Somme</td></tr>
                <tr><th>Coordinates</th><td>50°2′11″N · 2°43′27″E</td></tr>
                <tr><th>Population (2021)</th><td>96 (commune)</td></tr>
                <tr><th>Wikidata</th><td><a href="#" onClick={(e)=>e.preventDefault()}>Q670810</a></td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Linked entities</div>
            <EntityChips items={[
              { kind: 'Conflict', label: 'World War I' },
              { kind: 'Event', label: 'Battle of the Somme' },
              { kind: 'Unit', label: '1st Bn AIF' },
              { kind: 'Unit', label: '13. FAR (Bayern)' },
              { kind: 'Person', label: 'Pte. J. H. Smith' },
              { kind: 'Person', label: 'F. Vogel' },
            ]} />
          </div>
        </aside>
      </div>
    </main>
  );
}

window.PlacePage = PlacePage;
