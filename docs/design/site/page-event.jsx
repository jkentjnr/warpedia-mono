/* global React */
// Event page — Liberation of Bergen-Belsen, 15 April 1945
// Demonstrates sensitive-content treatment.

function EventPage() {
  return (
    <main style={{ padding: '32px 40px 64px', maxWidth: 1180, margin: '0 auto' }}>
      <Breadcrumb trail={['Home', 'Conflicts', 'World War II', 'Liberation of Bergen-Belsen']} />
      <HubHero
        kicker="Event · Within World War II"
        title="Liberation of Bergen-Belsen"
        subtitle="The handover of the Bergen-Belsen concentration camp to British 11th Armoured Division forces on 15 April 1945, after a local truce negotiated to prevent the spread of typhus. Approximately 60,000 prisoners were present at liberation; an estimated 13,000 unburied dead lay on the camp grounds."
        dates="15 April 1945 · Bergen, Lower Saxony"
        ulid="wp:event:01HXP1WW2BELS000000000A01"
        stats={[
          ['Items linked',    '418'],
          ['Survivors named', '11,604'],
          ['Trial defendants','45'],
          ['Open-licensed',   '78%'],
        ]}
      />
      <hr className="wp-rule-double" style={{ margin: '8px 0 32px' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56 }}>
        <div>
          <div style={{
            background: 'var(--caution-tint)',
            border: '1px solid rgba(139,105,20,0.35)',
            padding: '16px 20px',
            marginBottom: 24,
          }}>
            <div className="wp-caption" style={{ color: 'var(--caution-deep)', marginBottom: 6 }}>Editorial note on this hub</div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 15, lineHeight: '22px', color: 'var(--ink-2)', margin: 0 }}>
              Several items linked from this page carry their own content notices and are revealed only on click. The thumbnails on this hub are unredacted; the catalogue's posture is honest visibility with informed consent at the moment of viewing the source itself.
            </p>
          </div>

          <div className="wp-prose">
            <p>Bergen-Belsen was a Nazi concentration camp in Lower Saxony in northern Germany. From late 1944 it received transports of prisoners evacuated from camps further east, and conditions deteriorated catastrophically through the winter of 1944–1945; an estimated 35,000 people died at Belsen between January and the camp's liberation in April 1945, the great majority from typhus, typhoid, dysentery, and starvation.<sup>[1]</sup></p>
            <p>On 12 April 1945 representatives of the German army and the camp authorities approached the advancing British 11th Armoured Division to propose a local truce: the camp would be handed over without resistance to prevent typhus reaching the surrounding population. The handover took place on 15 April. The camp's German staff had largely fled; an SS rear-guard and a unit of the Hungarian army were taken into custody.<sup>[2]</sup></p>
            <p>British medical, sanitary, and burial efforts continued for several weeks after liberation; an estimated 13,000 prisoners died in the days and weeks that followed despite treatment. The Belsen Trial of forty-five former camp staff opened at Lüneburg in September 1945 under the British Royal Warrant of June 1945.</p>
          </div>

          <SectionHead label="Featured items" count="6 of 418" action="Browse all 418 items →" />
          <PerspectiveChips axes={[
            { label: 'Side',  chips: [['all','All'], ['allied-ww2','Allied (WW2)','142'], ['axis','Axis','38'], ['internee','Internee','164'], ['occupied','Occupied','74']] },
            { label: 'Voice', chips: [['all','All'], ['internee','Internee','164'], ['military','Military','98'], ['medical','Medical','64'], ['civilian','Civilian','42'], ['journalist','Journalist','21']] },
          ]} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            <FeaturedCard item={{
              subtype: 'Diary', title: 'Diary fragments of Avraham Lewin, recovered Bergen-Belsen, 1945',
              date: '1944-11 → 1945-03', creator: 'A. Lewin (internee)',
              tier: 'open-sa', tierLabel: 'CC BY-SA', sensitivity: true, sensitive: true,
              placeholder: 'Image withheld by default',
            }} />
            <FeaturedCard item={{
              subtype: 'Newsreel', title: 'British Army Film Unit footage, liberation of Belsen, 17 April 1945',
              date: '1945-04-17', creator: 'BAFU (Sgt. Lewis)',
              tier: 'open', tierLabel: 'Crown · expired', sensitivity: true, sensitive: true,
              placeholder: 'Frame withheld by default',
            }} />
            <FeaturedCard item={{
              subtype: 'Official document', title: 'Truce agreement, Belsen handover, 12 April 1945',
              date: '1945-04-12', creator: 'BAOR / Wehrmacht',
              tier: 'open', tierLabel: 'Crown · expired',
              placeholder: 'Carbon copy · TNA WO 235/13',
              imgBg: 'linear-gradient(180deg, #DDCFB1 0%, #C2B292 100%)',
            }} />
            <FeaturedCard item={{
              subtype: 'Oral history', title: 'Oral history — Hadassah Bimko Rosensaft, recorded 1947',
              date: '1947-03', creator: 'Bimko & Yad Vashem',
              tier: 'link-only', tierLabel: 'Held at Yad Vashem',
              placeholder: 'Audio · 64 min',
              imgBg: 'linear-gradient(180deg, #C8B89A 0%, #A89677 100%)',
            }} />
            <FeaturedCard item={{
              subtype: 'Photograph', title: 'Sgt-Major C. M. Oakes, RAMC, supervising medical handover',
              date: '1945-04-18', creator: 'Sgt. H. Oakes (BAFU)',
              tier: 'open', tierLabel: 'Crown · expired',
              placeholder: 'IWM BU 4274',
              imgBg: 'linear-gradient(180deg, #BCAE93 0%, #8E826A 100%)',
            }} />
            <FeaturedCard item={{
              subtype: 'Trial transcript', title: 'Belsen Trial — opening submissions, 17 September 1945',
              date: '1945-09-17', creator: 'British Military Court',
              tier: 'open', tierLabel: 'Crown · expired',
              placeholder: 'TNA WO 235/13–24',
              imgBg: 'linear-gradient(180deg, #E0D4B8 0%, #C2B292 100%)',
            }} />
          </div>

          <SectionHead label="Linked records & rolls" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {[
              ['Camp record', 'Bergen-Belsen Concentration Camp', 'Hub · 418 items'],
              ['Trial',       'Belsen Trial, Lüneburg (1945)',     '45 defendants'],
              ['Roll',        'Survivors named in liberation lists', '11,604 names'],
              ['Roll',        'Prisoners who died, Apr–Jun 1945',   '~13,000 entries'],
            ].map((c, i) => (
              <a key={i} href="#" onClick={(e)=>e.preventDefault()} className="wp-card-catalogue" style={{ textDecoration: 'none', color: 'inherit', background: 'var(--paper-3)' }}>
                <div className="wp-caption" style={{ marginBottom: 6 }}>{c[0]}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--ink)', fontWeight: 500, marginBottom: 6 }}>{c[1]}</div>
                <div className="wp-meta">{c[2]}</div>
              </a>
            ))}
          </div>

          <CiteThis ulid="wp:event:01HXP1WW2BELS000000000A01" slug="/conflicts/ww2/liberation-of-belsen" title="Liberation of Bergen-Belsen" creator="Warpedia editors" date="2026" />
        </div>

        <aside style={{ display: 'grid', gap: 22, alignContent: 'start' }}>
          <div className="wp-card-catalogue">
            <div className="wp-caption" style={{ marginBottom: 10 }}>Event record</div>
            <table className="wp-meta-table">
              <tbody>
                <tr><th>Date</th><td>15 April 1945</td></tr>
                <tr><th>Place</th><td>Bergen, Lower Saxony</td></tr>
                <tr><th>Forces</th><td>British 11th Armoured Division</td></tr>
                <tr><th>Parent conflict</th><td>World War II</td></tr>
                <tr><th>Type</th><td>Camp liberation · truce</td></tr>
                <tr><th>Wikidata</th><td><a href="#" onClick={(e)=>e.preventDefault()}>Q156450</a></td></tr>
              </tbody>
            </table>
          </div>
          <MapBlock height={200} lat="52.7569° N" lng="9.9072° E" marker="Bergen-Belsen" caption="Camp site, modern memorial. Tiles © OpenStreetMap (placeholder)." />
          <div>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Linked entities</div>
            <EntityChips items={[
              { kind: 'Camp', label: 'Bergen-Belsen' },
              { kind: 'Trial', label: 'Belsen Trial (Lüneburg)' },
              { kind: 'Person', label: 'Avraham Lewin' },
              { kind: 'Unit', label: '11th Armoured Division' },
              { kind: 'Theme', label: 'Civilian voices from occupied territories' },
            ]} />
          </div>
          <div className="wp-card-catalogue" style={{ background: 'var(--paper-2)' }}>
            <div className="wp-caption" style={{ marginBottom: 8 }}>Mirror partners</div>
            <p className="wp-meta" style={{ lineHeight: '20px', margin: 0 }}>
              Items in this hub are mirrored under reciprocal preservation agreements with the Wiener Holocaust Library, Yad Vashem, the Imperial War Museum, and the Bergen-Belsen Memorial.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

window.EventPage = EventPage;
