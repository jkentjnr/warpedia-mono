/* global React */
function ContributeFlow() {
  const [step, setStep] = React.useState(1);
  const total = 12;
  const titles = ['Landing', 'Item type', 'Sign in', 'Upload', 'About the item', 'Transcription', 'Subject & conflict', 'About this contribution', 'Rights & licensing', 'Privacy & sensitivity', 'Review', 'Confirmation'];
  const next = () => setStep(s => Math.min(total, s + 1));
  const prev = () => setStep(s => Math.max(1, s - 1));
  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)', display: 'flex', flexDirection: 'column' }}>
      <header className="wp-topbar">
        <img src="../../assets/logo/warpedia-wordmark.svg" style={{ height: 28 }} />
        <span className="wp-caption" style={{ marginLeft: 'auto' }}>Contributing — step {step} of {total}: {titles[step-1]}</span>
      </header>
      <div style={{ height: 4, background: 'var(--paper-3)', position: 'relative' }}>
        <div style={{ height: 4, background: 'var(--oxide)', width: `${(step/total)*100}%`, transition: 'width 200ms var(--ease)' }} />
      </div>
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '40px 32px 80px', flex: 1 }}>
        {step === 1 && <Landing onPick={() => next()} />}
        {step === 2 && <ItemType onPick={() => next()} />}
        {step === 3 && <SignIn onContinue={next} />}
        {step === 4 && <Upload onContinue={next} />}
        {step === 5 && <AboutItem onContinue={next} />}
        {step === 6 && <Transcription onContinue={next} />}
        {step === 7 && <Subject onContinue={next} />}
        {step === 8 && <AboutContribution onContinue={next} />}
        {step === 9 && <Rights onContinue={next} />}
        {step === 10 && <Privacy onContinue={next} />}
        {step === 11 && <Review onContinue={next} />}
        {step === 12 && <Confirmation />}
        {step > 1 && step < 12 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--ink-rule)' }}>
            <button className="wp-btn wp-btn-ghost" onClick={prev}>← Back</button>
            <button className="wp-btn wp-btn-primary" onClick={next}>Continue →</button>
          </div>
        )}
      </main>
    </div>
  );
}

function Landing({ onPick }) {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 12 }}>Contribute to the archive</h1>
      <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: '28px', color: 'var(--ink-2)', marginBottom: 32 }}>Three contribution paths. Pick the one that matches what you have. Every submission is reviewed by an editor before publication.</p>
      {[
        ['I have a primary source to share', 'A letter, diary, photograph, document, or recording from your family or your own collection.'],
        ['I am a researcher or editor', 'Encyclopedic articles, theme essays, transcription corrections, metadata fixes.'],
        ['My organisation has content to donate', 'Bulk and partner contributions for museums, regimental associations, community archives.'],
      ].map(([t, d], i) => (
        <button key={i} onClick={onPick} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'var(--paper-3)', border: 0, padding: '20px 24px', marginBottom: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 18, color: 'var(--ink)', marginBottom: 4 }}>{t}</div>
          <div className="wp-meta">{d}</div>
        </button>
      ))}
    </>
  );
}

function ItemType({ onPick }) {
  const types = [['Letter / Postcard', 'LET'], ['Diary or journal entry', 'DIA'], ['Photograph', 'PHO'], ['Document', 'DOC'], ['Audio recording', 'AUD'], ['Video recording', 'VID'], ['Object', 'OBJ'], ['Other', 'OTH']];
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 24 }}>What type of item is it?</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
        {types.map(([t, code]) => (
          <button key={code} onClick={onPick} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--paper)', border: '1px solid var(--ink-rule-2)', padding: '14px 16px', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>{code}</span>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--ink)' }}>{t}</span>
          </button>
        ))}
      </div>
    </>
  );
}

function SignIn() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 12 }}>Sign in or create an account</h1>
      <p className="wp-meta" style={{ marginBottom: 24, lineHeight: '20px' }}>We require a verified email address for every contribution. We do not accept anonymous submissions in v1.</p>
      <div style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <button className="wp-btn wp-btn-secondary" style={{ height: 44, justifyContent: 'flex-start', paddingLeft: 16 }}>Continue with Google</button>
        <button className="wp-btn wp-btn-secondary" style={{ height: 44, justifyContent: 'flex-start', paddingLeft: 16 }}>Continue with GitHub</button>
        <button className="wp-btn wp-btn-secondary" style={{ height: 44, justifyContent: 'flex-start', paddingLeft: 16 }}>Continue with Wikimedia</button>
        <hr className="wp-rule" />
        <label className="wp-label">Email</label>
        <input className="wp-input" placeholder="you@example.com" />
        <button className="wp-btn wp-btn-primary">Send sign-in link</button>
      </div>
    </>
  );
}

function Upload() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 24 }}>Upload the file or files</h1>
      <div style={{ border: '2px dashed var(--ink-rule-2)', padding: '48px 24px', textAlign: 'center', background: 'var(--paper-2)' }}>
        <div className="wp-caption" style={{ marginBottom: 8 }}>Drop files here</div>
        <div className="wp-meta">or <a href="#">browse your computer</a></div>
        <div className="wp-meta" style={{ marginTop: 12 }}>Up to 100 MB per file. TIFF, JPEG, PNG, PDF, WAV, FLAC, MP4. Multiple files become pages of one item by default.</div>
      </div>
      <div style={{ marginTop: 24 }}>
        <UploadedFile name="letter-front.tif" size="8.4 MB" progress={100} />
        <UploadedFile name="letter-back.tif" size="8.1 MB" progress={100} />
      </div>
    </>
  );
}
function UploadedFile({ name, size, progress }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 80px 24px', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--ink-rule)' }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>TIF</span>
      <span style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink)' }}>{name}</span>
      <span className="wp-meta">{size}</span>
      <span className="wp-status wp-status-published" style={{ fontSize: 11 }}></span>
    </div>
  );
}

function AboutItem() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 8 }}>About the item</h1>
      <p className="wp-meta" style={{ marginBottom: 24 }}>All but title are optional. Better metadata makes the item more discoverable.</p>
      <div style={{ display: 'grid', gap: 16 }}>
        <Field label="Title" hint="Auto-suggested from filename and item type." defaultValue="Letter from Pte. J. H. Smith to his mother, 3 July 1916" />
        <Field label="Date written" hint="ISO date, or fuzzy: c. July 1916, summer 1916." defaultValue="1916-07-03" />
        <Field label="From — author" hint="Person picker. Reconciles to existing records or creates a new one." defaultValue="John Henry Smith" />
        <Field label="To — recipient" defaultValue="Margaret Smith" />
        <Field label="Place written" defaultValue="" placeholder="Place picker (Wikidata-backed)" />
        <Field label="Description / context" textarea defaultValue="John (Jack) Smith enlisted with the AIF in 1915. This was the last letter his mother received before he was killed in action on 4 July 1916." />
      </div>
    </>
  );
}
function Field({ label, hint, defaultValue, placeholder, textarea }) {
  return (
    <div>
      <label className="wp-label">{label}</label>
      {textarea
        ? <textarea className="wp-textarea" defaultValue={defaultValue} placeholder={placeholder} />
        : <input className="wp-input" defaultValue={defaultValue} placeholder={placeholder} />}
      {hint && <div className="wp-help">{hint}</div>}
    </div>
  );
}

function Transcription() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 24 }}>Transcription</h1>
      {[
        ['Transcribe it yourself', 'Side-by-side scan and text editor.'],
        ['Have Warpedia AI-transcribe it', 'Runs Transkribus. Result is flagged as machine-only until a human reviews it.'],
        ['Skip — someone else can transcribe later', 'Item enters the transcription queue for community contributors.'],
      ].map(([t, d], i) => (
        <label key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: 'var(--paper-3)', padding: '18px 20px', marginBottom: 8, cursor: 'pointer' }}>
          <input type="radio" name="trans" defaultChecked={i === 1} style={{ marginTop: 4, accentColor: 'var(--oxide)' }} />
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 16, color: 'var(--ink)' }}>{t}</div>
            <div className="wp-meta">{d}</div>
          </div>
        </label>
      ))}
      <div style={{ background: 'var(--caution-tint)', padding: '12px 16px', marginTop: 16, borderLeft: '2px solid var(--caution)' }}>
        <span className="wp-caption" style={{ color: 'var(--caution-deep)' }}>AI disclosure</span>
        <div className="wp-meta" style={{ marginTop: 4, color: 'var(--caution-deep)' }}>Machine transcriptions are clearly flagged in the catalogue until a human edits them.</div>
      </div>
    </>
  );
}

function Subject() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 24 }}>Subject and conflict</h1>
      <div style={{ background: 'var(--paper-3)', padding: '16px 20px', marginBottom: 16 }}>
        <div className="wp-caption" style={{ marginBottom: 6 }}>Auto-suggested</div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--ink)' }}>Based on the date and named entities, this appears to be from the <b>First World War, Western Front</b>.</div>
        <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
          <button className="wp-btn wp-btn-primary wp-btn-sm">Confirm</button>
          <button className="wp-btn wp-btn-ghost wp-btn-sm">Choose different</button>
        </div>
      </div>
      <Field label="Specific event" defaultValue="Battle of the Somme" hint="Optional. Pick from the autocomplete." />
      <div style={{ marginTop: 16 }}>
        <label className="wp-label">Tags</label>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['trench-warfare', 'somme', 'aif', 'western-front'].map(t => (
            <span key={t} className="wp-badge wp-badge-info">wp:tag:{t}</span>
          ))}
        </div>
      </div>
    </>
  );
}

function AboutContribution() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 8 }}>About this contribution</h1>
      <p className="wp-meta" style={{ marginBottom: 24 }}>For provenance and trust. Some answers are editorial-only and not shown publicly.</p>
      <div style={{ display: 'grid', gap: 16 }}>
        <Field label="How did you come to have this item?" textarea defaultValue="Inherited from my grandmother (Smith's daughter). Has been in my family since 1916." />
        <div>
          <label className="wp-label">Your relationship to the subject</label>
          <select className="wp-select" defaultValue="great-granddaughter">
            <option>direct relative — great-granddaughter</option>
            <option>direct relative — granddaughter</option>
            <option>family friend</option>
            <option>collector</option>
            <option>none / archival</option>
          </select>
        </div>
        <div>
          <label className="wp-label">Where does the original physical item live now?</label>
          <select className="wp-select" defaultValue="family">
            <option value="family">In my family's possession</option>
            <option>Donated to a museum</option>
            <option>Lost or destroyed</option>
            <option>Unknown</option>
          </select>
        </div>
      </div>
    </>
  );
}

function Rights() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 8 }}>Rights and licensing</h1>
      <p className="wp-meta" style={{ marginBottom: 24 }}>The most important screen. Wrong rights = the item cannot be published.</p>

      <h3 className="wp-h3" style={{ marginTop: 0 }}>Are you the rights holder?</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <button className="wp-btn wp-btn-secondary">Yes</button>
        <button className="wp-btn wp-btn-ghost">No</button>
      </div>

      <h3 className="wp-h3">License selection</h3>
      <div style={{ display: 'grid', gap: 8, marginBottom: 24 }}>
        <LicenseOption checked label="CC BY-SA 4.0" tier="open-sa" tierLabel="OPEN · SA" body="Default. Wikipedia-compatible. Attribution required; derivatives must share alike." />
        <LicenseOption label="CC0 / Public Domain Dedication" tier="open" tierLabel="OPEN" body="Most open. Releases all rights, including attribution." />
        <LicenseOption label="Other / I'm not sure" tier="link-only" tierLabel="REVIEW" body="Editorial review will assess. We may suggest a tier or decline." />
      </div>

      <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '14px 16px', background: 'var(--paper-3)' }}>
        <input type="checkbox" style={{ marginTop: 4, accentColor: 'var(--oxide)' }} />
        <span style={{ fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--ink-2)', lineHeight: '22px' }}>I assert that the rights I am granting are mine to grant, and that to the best of my knowledge this submission does not infringe anyone else's rights.</span>
      </label>
    </>
  );
}
function LicenseOption({ checked, label, tier, tierLabel, body }) {
  return (
    <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: checked ? 'var(--paper-3)' : 'var(--paper)', padding: '16px 18px', border: '1px solid var(--ink-rule-2)', cursor: 'pointer' }}>
      <input type="radio" name="lic" defaultChecked={checked} style={{ marginTop: 4, accentColor: 'var(--oxide)' }} />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 16, color: 'var(--ink)' }}>{label}</span>
          <span className={`wp-badge wp-badge-${tier}`}>{tierLabel}</span>
        </div>
        <div className="wp-meta" style={{ marginTop: 4 }}>{body}</div>
      </div>
    </label>
  );
}

function Privacy() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 24 }}>Privacy and sensitivity</h1>
      <div style={{ display: 'grid', gap: 16 }}>
        <YesNo label="Does this item name living people?" />
        <YesNo label="Are there passages that should be redacted?" />
        <YesNo label="Is the content sensitive in ways the editorial team should know about?" />
      </div>
    </>
  );
}
function YesNo({ label }) {
  return (
    <div>
      <label className="wp-label" style={{ marginBottom: 8 }}>{label}</label>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="wp-btn wp-btn-secondary wp-btn-sm">Yes</button>
        <button className="wp-btn wp-btn-secondary wp-btn-sm">No</button>
        <button className="wp-btn wp-btn-ghost wp-btn-sm">Not applicable</button>
      </div>
    </div>
  );
}

function Review() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 24 }}>Review and submit</h1>
      <div style={{ background: 'var(--paper-3)', padding: '20px 24px', marginBottom: 16 }}>
        <div className="wp-caption" style={{ marginBottom: 10 }}>Submission summary</div>
        <table className="wp-meta-table">
          <tbody>
            <tr><th>Title</th><td>Letter from Pte. J. H. Smith to his mother, 3 July 1916</td></tr>
            <tr><th>Type</th><td>Letter, 2 pp.</td></tr>
            <tr><th>License</th><td><span className="wp-badge wp-badge-open-sa">CC BY-SA 4.0</span></td></tr>
            <tr><th>Linked entities</th><td>1 Person (created), Battle of the Somme, 1st Battalion AIF</td></tr>
            <tr><th>AI-assisted</th><td>Yes — transcription, machine-edited by you</td></tr>
            <tr><th>Sensitivity flags</th><td>None</td></tr>
            <tr><th>Estimated review time</th><td>5–10 days</td></tr>
          </tbody>
        </table>
      </div>
      <button className="wp-btn wp-btn-primary wp-btn-lg">Submit for review</button>
      <button className="wp-btn wp-btn-ghost wp-btn-lg" style={{ marginLeft: 8 }}>Save as draft</button>
    </>
  );
}

function Confirmation() {
  return (
    <>
      <h1 className="wp-display-m" style={{ marginBottom: 12 }}>Submitted for review</h1>
      <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: '28px', color: 'var(--ink-2)', maxWidth: '52ch' }}>
        Thank you. Your contribution is in the editorial queue. We'll email you when it's reviewed — typically within 5–10 days. You can edit the submission until review begins.
      </p>
      <div style={{ background: 'var(--paper-3)', padding: '16px 20px', margin: '24px 0' }}>
        <div className="wp-caption" style={{ marginBottom: 4 }}>Submission ID</div>
        <code>wp:contribution:01HXP7K3R8M2N9V5Y4Q1ZBCDEF</code>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="wp-btn wp-btn-secondary">Browse other Somme items</button>
        <button className="wp-btn wp-btn-secondary">Contribute another item</button>
        <button className="wp-btn wp-btn-ghost">Become a transcription volunteer</button>
      </div>
    </>
  );
}

window.ContributeFlow = ContributeFlow;
