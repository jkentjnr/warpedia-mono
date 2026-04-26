/* global React */
// Equipment page — Supermarine Spitfire Mk IIa

function EquipmentPage() {
  const items = [
    { type: 'manual',     title: "Pilot's Notes — Spitfire IIA & IIB (Air Publication 1565B), 1940", conflict: 'WW2', date: '1940-09', tier: 'open',    tierLabel: 'Crown · expired' },
    { type: 'document',   title: 'Recognition silhouette card, RAF Fighter Command, Sept 1940',       conflict: 'WW2', date: '1940-09', tier: 'open',    tierLabel: 'Crown · expired' },
    { type: 'photograph', title: 'No. 32 Squadron Spitfire IIa at dispersal, Biggin Hill',            conflict: 'WW2', date: '1940-09', tier: 'open',    tierLabel: 'Public domain' },
    { type: 'document',   title: 'Aircraft accident card, Spitfire IIa P7350, 25 October 1940',       conflict: 'WW2', date: '1940-10-25', tier: 'open', tierLabel: 'Crown · expired' },
    { type: 'manual',     title: 'Air Ministry — Notes on the Merlin XII engine, 1941',               conflict: 'WW2', date: '1941-02', tier: 'open',    tierLabel: 'Crown · expired' },
  ];
  return (
    <main style={{ padding: '32px 40px 64px', maxWidth: 1180, margin: '0 auto' }}>
      <Breadcrumb trail={['Home', 'Equipment', 'Aircraft', 'Supermarine Spitfire Mk IIa']} />
      <HubHero
        kicker="Equipment · Aircraft (fighter)"
        title="Supermarine Spitfire Mk IIa"
        subtitle="Single-seat fighter aircraft entering Royal Air Force service in August 1940. Built at the Castle Bromwich Aeroplane Factory; powered by the Rolls-Royce Merlin XII; armed with eight Browning .303 in machine guns. Equipped twelve squadrons during the Battle of Britain."
        dates="In service: Aug 1940 – 1944"
        ulid="wp:equipment:01HXP2EQSPITFIRE2A0000A01"
        qid="Q102194"
        stats={[
          ['Manuals catalogued', '11'],
          ['Photographs',        '1,304'],
          ['Linked units',       '23'],
          ['Linked operators',   '46'],
        ]}
      />
      <hr className="wp-rule-double" style={{ margin: '8px 0 32px' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56 }}>
        <div>
          <div className="wp-prose">
            <p>The Supermarine Spitfire Mk IIa was the first production variant of the Spitfire to be assembled at the Castle Bromwich Aeroplane Factory, replacing the Mk I from August 1940. It differed from the Mk I principally in its Merlin XII engine, which produced 1,175 horsepower at takeoff using 100-octane fuel and a Coffman cartridge starter in place of the earlier electric system.<sup>[1]</sup> Armament was unchanged from the late-production Mk I: eight Browning .303 in (7.7 mm) machine guns in the wings.</p>
            <p>By the end of September 1940, twelve RAF squadrons were operating the Mk IIa, including No.&nbsp;19, No.&nbsp;32, and No.&nbsp;266 Squadrons.<sup>[2]</sup> The variant was withdrawn from front-line fighter duties through 1941–1942 in favour of the cannon-armed Mk Vb, but Mk IIa airframes continued in operational training, air-sea rescue, and target-towing roles until 1944.</p>
          </div>

          <SectionHead label="Technical summary" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 40px' }}>
            <table className="wp-meta-table">
              <tbody>
                <tr><th>Crew</th><td>1</td></tr>
                <tr><th>Length</th><td>9.12 m (29 ft 11 in)</td></tr>
                <tr><th>Wingspan</th><td>11.23 m (36 ft 10 in)</td></tr>
                <tr><th>Empty weight</th><td>2,073 kg (4,571 lb)</td></tr>
                <tr><th>Loaded weight</th><td>2,690 kg (5,930 lb)</td></tr>
              </tbody>
            </table>
            <table className="wp-meta-table">
              <tbody>
                <tr><th>Powerplant</th><td>Rolls-Royce Merlin XII, 1,175 hp</td></tr>
                <tr><th>Max speed</th><td>586 km/h (364 mph) at 5,300 m</td></tr>
                <tr><th>Service ceiling</th><td>11,300 m (37,000 ft)</td></tr>
                <tr><th>Range</th><td>805 km (500 mi)</td></tr>
                <tr><th>Armament</th><td>8 × Browning .303 in MG</td></tr>
              </tbody>
            </table>
          </div>

          <SectionHead label="Manuals & technical material" count="11" action="Browse all →" />
          {items.map((it, i) => <ItemRow key={i} item={it} />)}

          <SectionHead label="Operating units" count="23 of 46" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {[
              ['No. 19 Squadron RAF',       'Fowlmere, 1940'],
              ['No. 32 Squadron RAF',       'Biggin Hill, 1940'],
              ['No. 266 Squadron RAF',      'Wittering, 1940'],
              ['No. 421 Flight RAF',        'Hawkinge, 1940'],
              ['No. 152 Squadron RAF',      'Warmwell, 1941'],
              ['No. 411 Squadron RCAF',     'Digby, 1941'],
            ].map(([u, base], i) => (
              <a key={i} href="#" onClick={(e)=>e.preventDefault()}
                 style={{
                   padding: '12px 14px',
                   border: '1px solid var(--ink-rule)',
                   background: 'var(--paper)',
                   textDecoration: 'none', color: 'inherit',
                   display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                 }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--ink)' }}>{u}</span>
                <span className="wp-meta">{base}</span>
              </a>
            ))}
          </div>

          <CiteThis ulid="wp:equipment:01HXP2EQSPITFIRE2A0000A01" slug="/equipment/spitfire-mk-iia" title="Supermarine Spitfire Mk IIa" creator="Warpedia editors" date="2026" />
        </div>

        <aside style={{ display: 'grid', gap: 22, alignContent: 'start' }}>
          <div className="wp-card-catalogue">
            <div className="wp-caption" style={{ marginBottom: 10 }}>Identification</div>
            <table className="wp-meta-table">
              <tbody>
                <tr><th>Type</th><td>Aircraft · fighter</td></tr>
                <tr><th>Designer</th><td>R. J. Mitchell (Supermarine)</td></tr>
                <tr><th>Manufacturer</th><td>Castle Bromwich Aeroplane Fy.</td></tr>
                <tr><th>Operators</th><td>RAF · RCAF · RAAF · RNZAF · Polish & Czech sqns</td></tr>
                <tr><th>Numbers built</th><td>921 (Mk IIa)</td></tr>
                <tr><th>Wikidata</th><td><a href="#" onClick={(e)=>e.preventDefault()}>Q102194</a></td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Linked entities</div>
            <EntityChips items={[
              { kind: 'Conflict', label: 'World War II' },
              { kind: 'Event',    label: 'Battle of Britain' },
              { kind: 'Place',    label: 'Biggin Hill' },
              { kind: 'Person',   label: 'Cpl. Margaret Reilly' },
              { kind: 'Theme',    label: 'Aerial defence doctrine' },
            ]} />
          </div>
          <div className="wp-card-catalogue" style={{ background: 'var(--paper-2)' }}>
            <div className="wp-caption" style={{ marginBottom: 8 }}>Variants</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 6 }}>
              {[
                ['Mk I',   '1938–1941'],
                ['Mk IIa', '1940–1944 (this page)'],
                ['Mk IIb', '1940–1944'],
                ['Mk Vb',  '1941–1945'],
                ['Mk IX',  '1942–1945'],
              ].map(([v, dates]) => (
                <li key={v} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontFamily: 'var(--sans)' }}>
                  <a href="#" onClick={(e)=>e.preventDefault()}>{v}</a>
                  <span className="wp-meta">{dates}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

window.EquipmentPage = EquipmentPage;
