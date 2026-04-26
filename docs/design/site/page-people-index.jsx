/* global React */
// People hub-index page — /people. A Browse instance scoped to one entity type.

function PeopleIndex() {
  const people = [
    { name: 'Capt. Ahmed Shafiq',           years: '1908 – 1979', role: 'Officer · Royal Indian Army Service Corps', side: 'Allied (WW2) · Military', conflict: 'WW2', items: 14 },
    { name: 'Avraham Lewin',                years: '1908 – 1945 †', role: 'Tailor · deported from Łódź ghetto',       side: 'Internee', conflict: 'WW2', items: 4 },
    { name: 'Hauptmann Friedrich Vogel',    years: '1879 – 1936', role: 'Officer · 13. Bayerisches Feldartillerie-Regt.', side: 'Central Powers · Military', conflict: 'WW1', items: 22 },
    { name: 'Hanna Müller',                 years: '1891 – 1971', role: 'Nurse · Deutsches Rotes Kreuz',           side: 'Central Powers · Medical', conflict: 'WW1', items: 8 },
    { name: 'Lt. Hiroshi Tanaka',           years: '1916 – 1944 †', role: 'Naval aviator · IJN 1st Air Fleet',       side: 'Axis · Military', conflict: 'WW2', items: 6 },
    { name: 'Pte. John H. Smith',           years: '1894 – 1916 †', role: 'Soldier · 1st Bn AIF',                    side: 'Allied (WW1) · Military', conflict: 'WW1', items: 3 },
    { name: 'Karen Mitchell',               years: '1944 – living', role: 'Photojournalist · Reuters / freelance',    side: 'Non-aligned · Journalist', conflict: 'Vietnam', items: 412 },
    { name: 'Kim Sun-ja',                   years: '1925 – 2011',  role: 'Survivor · postwar oral-history witness',  side: 'Occupied · Civilian', conflict: 'WW2', items: 1 },
    { name: 'Lê Văn Đức',                   years: '1942 – 1972 †', role: 'Political officer · NLF',                  side: 'National liberation · Military', conflict: 'Vietnam', items: 1 },
    { name: 'Cpl. Margaret Reilly',         years: '1919 – 2007',  role: 'Radar plotter · WAAF, Biggin Hill sector',  side: 'Allied (WW2) · Military', conflict: 'WW2', items: 18 },
    { name: 'Mehmed Çetin',                 years: '1896 – 1917 †', role: 'Soldier · Ottoman 19th Division',          side: 'Central Powers · Military', conflict: 'WW1', items: 2 },
    { name: 'Nguyễn Thị Hoa',               years: '1937 – living', role: 'Village teacher · Quảng Trị',              side: 'National liberation · Civilian', conflict: 'Vietnam', items: 1 },
    { name: 'Capt. Robert Owens',           years: '1939 – living', role: 'Officer · 2 RAR (Australian)',             side: 'UN coalition · Military', conflict: 'Vietnam', items: 11 },
    { name: 'Sgt. James "Jimmy" Okonkwo',   years: '1946 – 2019',  role: 'Marine · 26th Marine Regiment, USMC',       side: 'UN coalition · Military', conflict: 'Vietnam', items: 9 },
    { name: 'Pte. Tahu Rangihau',           years: '1893 – 1981',  role: 'Soldier · NZ (Maori) Pioneer Bn',           side: 'Allied (WW1) · Military · Indigenous', conflict: 'WW1', items: 5 },
    { name: 'Sister Eleanor Vasquez',       years: '1888 – 1962',  role: 'Nursing sister · CAMC, No. 2 CGH',          side: 'Allied (WW1) · Medical', conflict: 'WW1', items: 32 },
  ];

  const [letter, setLetter] = React.useState('A');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <main style={{ padding: '32px 40px 64px', maxWidth: 1280, margin: '0 auto' }}>
      <Breadcrumb trail={['Home', 'People']} />
      <div style={{ marginBottom: 28 }}>
        <h1 className="wp-display-l" style={{ marginBottom: 6 }}>People</h1>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: '26px', color: 'var(--ink-2)', maxWidth: '64ch', margin: 0 }}>
          Subjects of the catalogue — soldiers, civilians, photographers, diplomats, war artists, internees. People listed here are <i>subjects</i>, not contributors. 38,704 person records, sorted alphabetically.
        </p>
      </div>
      <hr className="wp-rule" />
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 40, marginTop: 24 }}>
        <aside>
          <div className="wp-caption" style={{ marginBottom: 12 }}>Filter</div>
          {[
            ['Conflict', [['ww1', 'World War I', 8204], ['ww2', 'World War II', 19318], ['kor', 'Korean War', 1402], ['vtn', 'Vietnam War', 4118], ['other', 'Other', 5662]]],
            ['Voice',    [['military', 'Military', 21442], ['civilian', 'Civilian', 8104], ['medical', 'Medical', 1841], ['journalist', 'Journalist', 412], ['internee', 'Internee', 4920], ['indigenous', 'Indigenous', 391]]],
            ['Status',   [['kia', 'Killed in action', 6042], ['pow', 'Prisoner of war', 2918], ['wia', 'Wounded in action', 4118], ['decorated', 'Decorated', 1804]]],
          ].map(([title, items]) => (
            <div key={title} style={{ marginBottom: 18 }}>
              <div className="wp-caption" style={{ marginBottom: 8, color: 'var(--ink)', fontSize: 11 }}>{title}</div>
              {items.map(([k, lbl, n]) => (
                <label key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '6px 0', borderBottom: '1px solid var(--ink-rule)', fontFamily: 'var(--sans)', fontSize: 13, cursor: 'pointer' }}>
                  <span><input type="checkbox" style={{ accentColor: 'var(--oxide)', marginRight: 6 }} /> {lbl}</span>
                  <span className="wp-meta" style={{ fontFeatureSettings: '"tnum" 1' }}>{n.toLocaleString()}</span>
                </label>
              ))}
            </div>
          ))}
        </aside>
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span className="wp-meta">38,704 people · sorted A → Z · jump to letter</span>
            <span className="wp-meta">View: <a href="#" onClick={(e)=>e.preventDefault()}>list</a> · <a href="#" onClick={(e)=>e.preventDefault()}>cards</a></span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: '8px 0', borderTop: '1px solid var(--ink-rule)', borderBottom: '1px solid var(--ink-rule)', marginBottom: 16 }}>
            {letters.map(l => (
              <button key={l} onClick={() => setLetter(l)} style={{
                width: 28, height: 28, padding: 0,
                background: letter === l ? 'var(--ink)' : 'transparent',
                color: letter === l ? 'var(--paper)' : (l === 'X' || l === 'Y' || l === 'Z' ? 'var(--ink-4)' : 'var(--ink-2)'),
                border: 'none', cursor: 'pointer',
                fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500,
              }}>{l}</button>
            ))}
          </div>
          <div>
            {people.map((p, i) => (
              <a key={i} href="#" onClick={(e)=>e.preventDefault()} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 110px 1fr 80px 80px',
                gap: 14, alignItems: 'baseline',
                padding: '14px 8px', borderBottom: '1px solid var(--ink-rule)',
                textDecoration: 'none', color: 'inherit',
              }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--ink)', fontWeight: 500 }}>{p.name}</span>
                <span className="wp-meta" style={{ fontFeatureSettings: '"tnum" 1' }}>{p.years}</span>
                <span className="wp-meta" style={{ color: 'var(--ink-2)' }}>{p.role}</span>
                <span className="wp-meta">{p.conflict}</span>
                <span className="wp-meta" style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontWeight: 600, color: 'var(--ink)' }}>{p.items}</span> items
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

window.PeopleIndex = PeopleIndex;
