/* global React */
// Person page — Sister Eleanor Vasquez (CAMC)

function PersonPage() {
  const items = [
    { type: 'diary',       title: 'Diary entry, 1 July 1916 — opening day of the Somme',          conflict: 'WW1', date: '1916-07-01', tier: 'open-sa', tierLabel: 'CC BY-SA' },
    { type: 'diary',       title: 'Diary entry, 23 July 1916 — Pozières casualties arriving',     conflict: 'WW1', date: '1916-07-23', tier: 'open-sa', tierLabel: 'CC BY-SA', sensitivity: true },
    { type: 'diary',       title: 'Diary entry, 5 August 1916 — gas casualties from the front',   conflict: 'WW1', date: '1916-08-05', tier: 'open-sa', tierLabel: 'CC BY-SA' },
    { type: 'letter',      title: 'Letter to Helen Vasquez (sister), Étaples, 12 August 1916',    conflict: 'WW1', date: '1916-08-12', tier: 'open-sa', tierLabel: 'CC BY-SA' },
    { type: 'photograph',  title: 'Group photograph, No. 2 Canadian General Hospital, Le Tréport', conflict: 'WW1', date: '1916-09',    tier: 'open',    tierLabel: 'Public domain' },
    { type: 'document',    title: 'CAMC service record, Eleanor Vasquez (R.G. 150)',              conflict: 'WW1', date: '1919-04',    tier: 'open',    tierLabel: 'Public domain' },
    { type: 'oral',        title: 'Oral history interview, Halifax, 1958 (62 min)',               conflict: 'WW1', date: '1958-11-02', tier: 'open-sa', tierLabel: 'CC BY-SA' },
  ];
  return (
    <main style={{ padding: '32px 40px 64px', maxWidth: 1180, margin: '0 auto' }}>
      <Breadcrumb trail={['Home', 'People', 'Eleanor Vasquez']} />
      <HubHero
        kicker="Person · Subject"
        title="Sister Eleanor Vasquez"
        subtitle="Canadian Army Medical Corps nursing sister, Étaples and Le Tréport, 1915–1919; later civilian district nurse in Halifax, Nova Scotia. Her wartime diary and post-war oral history together comprise one of the more substantial first-person Canadian nursing records held by Warpedia."
        dates="1888 – 1962"
        ulid="wp:person:01HXP1ELVA00000000000A001"
        stats={[
          ['Items linked',   '32'],
          ['Conflicts',      '1'],
          ['Units',          '2'],
          ['Last updated',   '12 Apr 2026'],
        ]}
      />
      <hr className="wp-rule-double" style={{ margin: '8px 0 32px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56 }}>
        <div>
          <div className="wp-prose">
            <p>Eleanor Vasquez (1888–1962) was a Canadian nursing sister who served with the Canadian Army Medical Corps (CAMC) on the Western Front from August 1915 until April 1919. She was attached to No.&nbsp;2 Canadian General Hospital at Le Tréport for most of the Somme period and to a casualty clearing station near Étaples during the Passchendaele offensive in 1917.<sup>[1]</sup></p>
            <p>Vasquez kept a near-daily diary for the duration of her service. The Warpedia holding comprises fifteen diary volumes (catalogued as a single multi-part item), nineteen letters to her sister Helen, a 62-minute oral-history interview recorded in Halifax in 1958, and her CAMC service record. Diary entries describing the reception of Pozières and Passchendaele casualties carry a content notice; the language used by Vasquez is plain and clinical, and the entries describe injuries, deaths, and the conditions on the wards in detail.</p>
            <p>After the war she returned to Halifax, qualified as a public-health nurse, and worked as a district nurse in the city's North End until her retirement in 1948. She did not publish; the diary was donated by her great-niece in 2024.</p>
          </div>

          <SectionHead label="Items linked to this person" count="32" action="Browse all →" />
          <div>
            {items.map((it, i) => <ItemRow key={i} item={it} />)}
          </div>

          <SectionHead label="References" />
          <ol style={{ fontFamily: 'var(--serif)', fontSize: 14, lineHeight: '22px', color: 'var(--ink-2)', paddingLeft: 24, marginTop: 4 }}>
            <li>Vasquez, E. <i>Diary, 1915–1919</i>. Warpedia <code>wp:item:01HXP7K3R8M2N9V5Y4Q1ZBCD02</code>.</li>
            <li>Library and Archives Canada, CAMC service files, R.G. 150, file 9988-VASQUEZ-E.</li>
            <li>Mann, S. <i>Margaret Macdonald: Imperial Daughter</i>. McGill-Queen's University Press, 2005 (background on CAMC nursing).</li>
          </ol>

          <CiteThis ulid="wp:person:01HXP1ELVA00000000000A001" slug="/people/eleanor-vasquez" title="Sister Eleanor Vasquez" creator="Warpedia editors" date="2026" />
        </div>

        <aside style={{ display: 'grid', gap: 22, alignContent: 'start' }}>
          <div className="wp-card-catalogue">
            <div className="wp-caption" style={{ marginBottom: 10 }}>Biographical</div>
            <table className="wp-meta-table">
              <tbody>
                <tr><th>Born</th><td>14 March 1888 · Halifax, Nova Scotia</td></tr>
                <tr><th>Died</th><td>27 November 1962 · Halifax, NS</td></tr>
                <tr><th>Service</th><td>1915–1919</td></tr>
                <tr><th>Rank</th><td>Nursing sister (Lt. equiv.)</td></tr>
                <tr><th>Unit</th><td>CAMC, No. 2 CGH (Le Tréport)</td></tr>
                <tr><th>Theatre</th><td>Western Front</td></tr>
                <tr><th>Side · Voice</th><td>Allied (WW1) · Medical</td></tr>
                <tr><th>Decorations</th><td>Royal Red Cross, 2nd class (1918)</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Linked entities</div>
            <EntityChips items={[
              { kind: 'Conflict', label: 'World War I' },
              { kind: 'Event', label: 'Battle of the Somme' },
              { kind: 'Event', label: 'Battle of Passchendaele' },
              { kind: 'Unit', label: 'No. 2 Canadian General Hospital' },
              { kind: 'Place', label: 'Le Tréport' },
              { kind: 'Place', label: 'Étaples' },
              { kind: 'Theme', label: 'Medical care under fire' },
            ]} />
          </div>
          <div className="wp-card-catalogue" style={{ background: 'var(--paper-2)' }}>
            <div className="wp-caption" style={{ marginBottom: 8 }}>Provenance</div>
            <p className="wp-meta" style={{ lineHeight: '20px', margin: 0 }}>
              Diary, letters, and photograph donated by the Vasquez family in March 2024. Service record sourced from Library and Archives Canada under the Open Government Licence – Canada. AI transcription by Transkribus model "english-handwriting-M2", edited by D. Couture, March 2026.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

window.PersonPage = PersonPage;
