/* global React */
// site-chrome-override.jsx — loaded AFTER shared.jsx and the page files.
// Overrides TopBar, Footer, Breadcrumb on `window` so the existing page
// components (which reference the global names) emit real navigable hrefs
// inside the static site.

(function () {
  const ROUTES = {
    home:       'index.html',
    browse:     'browse.html',
    conflicts:  'conflict-ww1.html',
    people:     'people.html',
    places:     'place-pozieres.html',
    equipment:  'equipment-spitfire.html',
    themes:     'theme-civilian-voices.html',
    about:      'about.html',
    person:     'person-vasquez.html',
    event:      'event-belsen.html',
  };

  // Map a breadcrumb label → href if we have a page for it; otherwise no link.
  // Order matters: most specific labels first.
  const BREADCRUMB_HREFS = {
    'Home':                 ROUTES.home,
    'Conflicts':            ROUTES.conflicts, // scope: only WW1 hub exists, point there
    'World War I':          ROUTES.conflicts,
    'World War II':         ROUTES.event,
    'People':               ROUTES.people,
    'Places':               ROUTES.places,
    'Equipment':            ROUTES.equipment,
    'Aircraft':             ROUTES.equipment,
    'Themes':               ROUTES.themes,
    'Cultural response':    ROUTES.themes,
  };

  function TopBar({ current = 'browse' }) {
    const items = [
      ['browse',    'Browse'],
      ['conflicts', 'Conflicts'],
      ['people',    'People'],
      ['places',    'Places'],
      ['equipment', 'Equipment'],
      ['themes',    'Themes'],
      ['about',     'About'],
    ];
    return (
      <header className="wp-topbar" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <a href={ROUTES.home} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="assets/logo/warpedia-wordmark.svg" alt="Warpedia" style={{ height: 26, display: 'block' }} />
        </a>
        <nav style={{ display: 'flex', gap: 18, fontFamily: 'var(--sans)', fontSize: 14, marginLeft: 8 }}>
          {items.map(([k, n]) => {
            const active = current === k;
            return (
              <a key={k} href={ROUTES[k]} style={{
                color: active ? 'var(--ink)' : 'var(--ink-2)',
                textDecoration: 'none',
                borderBottom: active ? '2px solid var(--ink)' : '2px solid transparent',
                paddingBottom: 2,
                fontWeight: active ? 600 : 400,
              }}>{n}</a>
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

  // Same signature as the design-canvas Breadcrumb (string[]), but routes
  // each crumb to a page if we recognize the label. The leaf is never a link.
  function Breadcrumb({ trail }) {
    return (
      <nav className="wp-meta" style={{ marginBottom: 14, fontFeatureSettings: '"tnum" 1' }}>
        {trail.map((t, i) => {
          const isLeaf = i === trail.length - 1;
          const href = !isLeaf && BREADCRUMB_HREFS[t];
          return (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ margin: '0 6px', color: 'var(--ink-4)' }}>›</span>}
              {href ? <a href={href}>{t}</a> : <span style={{ color: isLeaf ? 'var(--ink-2)' : 'var(--ink-3)' }}>{t}</span>}
            </React.Fragment>
          );
        })}
      </nav>
    );
  }

  function Footer() {
    return (
      <footer style={{ borderTop: '1px solid var(--ink-rule)', background: 'var(--paper-2)', padding: '40px 32px', marginTop: 64 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <a href={ROUTES.home}><img src="assets/logo/warpedia-wordmark.svg" alt="Warpedia" style={{ height: 26 }} /></a>
            <p className="wp-meta" style={{ marginTop: 12, lineHeight: '20px' }}>
              An open, primary-source-rich encyclopedia of the human record of war. Content licensed CC BY-SA 4.0 unless otherwise noted; primary sources carry their own per-item rights.
            </p>
          </div>
          <div>
            <div className="wp-caption" style={{ color: 'var(--ink)' }}>Browse</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 6 }}>
              <li><a href={ROUTES.conflicts} style={{ fontSize: 13 }}>Conflicts</a></li>
              <li><a href={ROUTES.people}    style={{ fontSize: 13 }}>People</a></li>
              <li><a href={ROUTES.places}    style={{ fontSize: 13 }}>Places</a></li>
              <li><a href={ROUTES.equipment} style={{ fontSize: 13 }}>Equipment</a></li>
              <li><a href={ROUTES.themes}    style={{ fontSize: 13 }}>Themes</a></li>
            </ul>
          </div>
          <div>
            <div className="wp-caption" style={{ color: 'var(--ink)' }}>The project</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 6 }}>
              <li><a href={ROUTES.about} style={{ fontSize: 13 }}>About Warpedia</a></li>
              <li><a href="#" style={{ fontSize: 13 }}>Editorial standards</a></li>
              <li><a href="#" style={{ fontSize: 13 }}>Governance</a></li>
              <li><a href="#" style={{ fontSize: 13 }}>Roadmap</a></li>
            </ul>
          </div>
          <div>
            <div className="wp-caption" style={{ color: 'var(--ink)' }}>Mirrors</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 6 }}>
              <li><a href="#" style={{ fontSize: 13 }}>Wikimedia Commons</a></li>
              <li><a href="#" style={{ fontSize: 13 }}>Internet Archive</a></li>
              <li><a href="#" style={{ fontSize: 13 }}>Wikisource</a></li>
              <li><a href="#" style={{ fontSize: 13 }}>Wikidata</a></li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: 1080, margin: '32px auto 0', borderTop: '1px solid var(--ink-rule)', paddingTop: 16, display: 'flex', justifyContent: 'space-between' }}>
          <span className="wp-meta">Warpedia is a non-commercial open-knowledge project. No advertising. No tracking beyond essential.</span>
          <span className="wp-meta">v1 · static design preview</span>
        </div>
      </footer>
    );
  }

  Object.assign(window, { ROUTES, TopBar, Breadcrumb, Footer });
})();
