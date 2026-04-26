/* global React */
// Conflict hub — WW1. The fullest hub example.

function ConflictHubWW1() {
  const featured = [
    { subtype: 'Letter', title: 'Letter from Pte. J. H. Smith to his mother, 3 July 1916', date: '1916-07-03', creator: 'J. H. Smith (AIF)', tier: 'open-sa', tierLabel: 'CC BY-SA', placeholder: 'AWM 1DRL/0428 p.1', imgBg: 'linear-gradient(180deg, #E8DCC4 0%, #D4C29B 100%)' },
    { subtype: 'Diary', title: 'Diary of Sister Eleanor Vasquez, June–August 1916', date: '1916-06 → 08', creator: 'E. Vasquez (CAMC)', tier: 'open-sa', tierLabel: 'CC BY-SA', placeholder: 'CWM 19710261-0103', imgBg: 'linear-gradient(180deg, #DDCFB1 0%, #C6B698 100%)' },
    { subtype: 'Photograph', title: '1st Bn AIF embarkation, Sydney, October 1914', date: '1914-10-19', creator: 'Sydney Mail (uncred.)', tier: 'open', tierLabel: 'Public domain', placeholder: 'AWM A02744', imgBg: 'linear-gradient(180deg, #BCAE93 0%, #8E826A 100%)' },
    { subtype: 'Postcard', title: 'Postcard from Mehmed Çetin, ANZAC Cove sector, 11 May 1915', date: '1915-05-11', creator: 'M. Çetin (Ottoman 19th Div.)', tier: 'open', tierLabel: 'Public domain', placeholder: 'Recto · Ottoman Turkish', imgBg: 'linear-gradient(180deg, #D6C4A2 0%, #B5A580 100%)' },
    { subtype: 'Official document', title: 'Field order, 13. FAR, Pozières sector, 22 July 1916', date: '1916-07-22', creator: 'F. Vogel (signing officer)', tier: 'open', tierLabel: 'Public domain', placeholder: 'BayHStA Abt. IV', imgBg: 'linear-gradient(180deg, #E0D4B8 0%, #C2B292 100%)' },
    { subtype: 'Oral history', title: 'Whakapapa and waiata from Pte. Tahu Rangihau, recorded 1976', date: '1976-04-12', creator: 'NZ (Maori) Pioneer Bn', tier: 'link-only', tierLabel: 'Link only', placeholder: 'Ngā Taonga Sound & Vision', imgBg: 'linear-gradient(180deg, #C8B89A 0%, #A89677 100%)' },
  ];

  const events = [
    { name: 'Gallipoli Campaign', dates: '17 Feb 1915 – 9 Jan 1916', items: 1842, place: 'Gallipoli Peninsula' },
    { name: 'Battle of the Somme', dates: '1 Jul – 18 Nov 1916', items: 4119, place: 'Picardy, France' },
    { name: 'Battle of Verdun', dates: '21 Feb – 18 Dec 1916', items: 2104, place: 'Verdun, France' },
    { name: 'Brusilov Offensive', dates: '4 Jun – 20 Sep 1916', items: 318, place: 'Galicia, Russian Empire' },
    { name: 'Battle of Passchendaele', dates: '31 Jul – 10 Nov 1917', items: 2987, place: 'West Flanders' },
    { name: 'Spring Offensive', dates: '21 Mar – 18 Jul 1918', items: 1264, place: 'Picardy & Flanders' },
    { name: 'Hundred Days Offensive', dates: '8 Aug – 11 Nov 1918', items: 1893, place: 'Western Front' },
  ];

  const keyPeople = [
    { kind: 'Soldier', label: 'Pte. John H. Smith', meta: '1894 – 1916 †' },
    { kind: 'Medic',   label: 'Sister Eleanor Vasquez', meta: '1888 – 1962' },
    { kind: 'Officer', label: 'Hauptmann Friedrich Vogel', meta: '1879 – 1936' },
    { kind: 'Nurse',   label: 'Hanna Müller (DRK)', meta: '1891 – 1971' },
    { kind: 'Soldier', label: 'Pte. Tahu Rangihau', meta: '1893 – 1981' },
    { kind: 'Soldier', label: 'Mehmed Çetin', meta: '1896 – 1917 †' },
  ];
  const keyPlaces = [
    { kind: 'Battlefield', label: 'Pozières', meta: 'Picardy' },
    { kind: 'Beach',       label: 'ANZAC Cove', meta: 'Gallipoli Peninsula' },
    { kind: 'Hospital',    label: 'Cologne base hospital' },
    { kind: 'Trench line', label: 'Somme front, 1 July 1916' },
    { kind: 'Cemetery',    label: 'Pozières British Cemetery' },
  ];
  const themes = [
    { kind: 'Theme', label: 'Trench warfare doctrine, 1914–1953' },
    { kind: 'Theme', label: 'Medical care under fire' },
    { kind: 'Theme', label: 'Indigenous service in the British Empire' },
  ];

  return (
    <main style={{ padding: '32px 40px 64px', maxWidth: 1180, margin: '0 auto' }}>
      <Breadcrumb trail={['Home', 'Conflicts', 'World War I']} />
      <HubHero
        kicker="Conflict"
        title="World War I"
        subtitle="A global conflict fought between July 1914 and November 1918, principally in Europe, with operations across the Middle East, Africa, the Pacific, and at sea. Casualties — military and civilian — exceeded 20 million."
        dates="28 Jul 1914 – 11 Nov 1918"
        ulid="wp:conflict:01HXP1WW10000000000000A01"
        qid="Q361"
        stats={[
          ['Items catalogued', '18,427'],
          ['People',           '4,206'],
          ['Sub-events',       '47'],
          ['Open-licensed',    '92%'],
        ]}
      />

      <hr className="wp-rule-double" style={{ margin: '8px 0 32px' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56 }}>
        <div>
          {/* Intro essay */}
          <div className="wp-prose">
            <p>The First World War was fought between July 1914 and November 1918, principally in Europe but with operations across the Middle East, Africa, the Pacific, and at sea. It involved most of the world's then-great powers, organised into the Entente — chiefly Britain, France, Russia until 1917, Italy from 1915, and the United States from 1917 — and the Central Powers: Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria. Civilian and military casualties together exceeded 20 million, with comparable numbers wounded.<sup>[1]</sup></p>
            <p>Warpedia's WW1 holdings concentrate on personal narrative and unit-level documentation from the Western Front, Gallipoli, and Mesopotamia, supplemented by official manuals and after-action reports for the air, naval, and artillery arms. Coverage of the Eastern Front and the home fronts of the Central Powers is presently sparse and contributions are actively sought.</p>
          </div>

          <SectionHead label="Featured items" count="6 hand-picked" action="Browse all 18,427 items →" />
          <PerspectiveChips axes={[
            { label: 'Side',  chips: [['all', 'All'], ['allied', 'Allied (WW1)', '12,418'], ['central', 'Central Powers', '4,901'], ['neutral', 'Neutral', '1,108']] },
            { label: 'Voice', chips: [['all', 'All'], ['military', 'Military', '11,204'], ['civilian', 'Civilian', '3,002'], ['medical', 'Medical', '1,418'], ['indigenous', 'Indigenous', '391'], ['journalist', 'Journalist', '208']] },
          ]} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {featured.map((f, i) => <FeaturedCard key={i} item={f} />)}
          </div>

          <SectionHead label="Sub-events" count="7 of 47" action="See all events →" />
          <div>
            {events.map((ev, i) => (
              <a key={i} href="#" onClick={(e)=>e.preventDefault()} style={{
                display: 'grid', gridTemplateColumns: '1fr 200px 100px',
                gap: 14, alignItems: 'baseline',
                padding: '14px 8px', borderBottom: '1px solid var(--ink-rule)',
                textDecoration: 'none', color: 'inherit',
              }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)' }}>
                  {ev.name} <span className="wp-meta" style={{ marginLeft: 8 }}>· {ev.place}</span>
                </span>
                <span className="wp-meta" style={{ fontFeatureSettings: '"tnum" 1' }}>{ev.dates}</span>
                <span className="wp-meta" style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontWeight: 600, color: 'var(--ink)' }}>{ev.items.toLocaleString()}</span> items
                </span>
              </a>
            ))}
          </div>

          <SectionHead label="References" />
          <ol style={{ fontFamily: 'var(--serif)', fontSize: 14, lineHeight: '22px', color: 'var(--ink-2)', paddingLeft: 24, marginTop: 4 }}>
            <li>Strachan, H. <i>The First World War: To Arms</i>. Oxford University Press, 2001.</li>
            <li>Stevenson, D. <i>Cataclysm: The First World War as Political Tragedy</i>. Basic Books, 2004.</li>
            <li>Beckett, I. F. W. <i>The Great War, 1914–1918</i>. 2nd ed., Pearson Longman, 2007.</li>
            <li>Tucker, S. C. (ed.). <i>The Encyclopedia of World War I</i>. ABC-CLIO, 2005.</li>
          </ol>

          <CiteThis ulid="wp:conflict:01HXP1WW10000000000000A01" slug="/conflicts/ww1" title="World War I" creator="Warpedia editors" date="2026" />
        </div>

        <aside style={{ display: 'grid', gap: 22, alignContent: 'start' }}>
          <div className="wp-card-catalogue">
            <div className="wp-caption" style={{ marginBottom: 10 }}>At a glance</div>
            <table className="wp-meta-table">
              <tbody>
                <tr><th>Dates</th><td>28 Jul 1914 – 11 Nov 1918</td></tr>
                <tr><th>Theatres</th><td>Western Front, Gallipoli, Eastern, Mesopotamia, East Africa, home front</td></tr>
                <tr><th>Sides</th><td>Allied, Central Powers, neutral</td></tr>
                <tr><th>Casualties</th><td>~ 20 million</td></tr>
                <tr><th>Wikidata</th><td><a href="#" onClick={(e)=>e.preventDefault()}>Q361</a></td></tr>
              </tbody>
            </table>
          </div>

          <div>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Key people</div>
            <EntityChips items={keyPeople} />
          </div>
          <div>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Key places</div>
            <EntityChips items={keyPlaces} />
          </div>
          <div>
            <div className="wp-caption" style={{ marginBottom: 10 }}>Cross-conflict themes</div>
            <EntityChips items={themes} />
          </div>

          <div className="wp-card-catalogue" style={{ background: 'var(--paper-2)' }}>
            <div className="wp-caption" style={{ marginBottom: 8 }}>Coverage gaps</div>
            <p className="wp-meta" style={{ lineHeight: '20px', margin: 0 }}>
              Eastern Front, Ottoman home front, and East African theatre are presently under-represented. Contributions in Russian, German, Turkish, and Swahili-language sources are particularly welcome.
            </p>
            <a href="#" onClick={(e)=>e.preventDefault()} style={{ fontSize: 13, marginTop: 10, display: 'inline-block' }}>How to contribute →</a>
          </div>
        </aside>
      </div>
    </main>
  );
}

window.ConflictHubWW1 = ConflictHubWW1;
