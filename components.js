import { deliverySites, services, work, insights, articles, mappingRows } from './data.js';

/* ---------- Shared partials ---------- */
const ctaBand = () => `
  <section class="section ink">
    <div class="wrap" style="text-align:center;max-width:720px;">
      <h2 class="reveal">Start with a scoping call.</h2>
      <p class="reveal" data-delay="1" style="color:#b9c8d8;max-width:52ch;margin:0 auto 1.6em;">Tell us what triggered the need - a NEMA notice, a buyer questionnaire, a lender request - and we will tell you what it takes.</p>
      <div class="btn-row reveal" data-delay="2" style="justify-content:center;">
        <a href="#/contact" class="btn btn-primary">Request a review</a>
        <a href="#/approach" class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,.3);">Read the method</a>
      </div>
    </div>
  </section>`;

const serviceCard = (s, i) => `
  <a href="#/services/${s.slug}" class="card reveal" data-delay="${(i % 3) + 1}">
    <span class="tag">${s.tag}</span>
    <h3>${s.title}</h3>
    <p>${s.short}</p>
    <span class="btn-ghost">Explore →</span>
  </a>`;

const workCard = (w, i) => `
  <a href="#/work/${w.slug}" class="work-card reveal" data-delay="${(i % 3) + 1}">
    <div class="work-meta">${w.sector} · ${w.location}</div>
    <div class="work-body">
      <h3>${w.title}</h3>
      <p>${w.short}</p>
      <div class="work-outcome">${w.outcomeShort}</div>
    </div>
  </a>`;

/* ---------- Hero pipeline SVG ---------- */
const pipelineSVG = () => `
  <svg class="pipeline-svg" viewBox="0 0 400 230" role="img" aria-label="Animation: three NEMA compliance artefacts flow into a single ESG disclosure">
    <g>
      <rect class="node-box" id="node-mon" x="6" y="20" width="104" height="42" rx="5"/>
      <text class="node-label" x="16" y="38">Monitoring record</text>
      <text class="node-sub"   x="16" y="51">effluent · emissions</text>

      <rect class="node-box" id="node-audit" x="6" y="94" width="104" height="42" rx="5"/>
      <text class="node-label" x="16" y="112">Audit finding</text>
      <text class="node-sub"   x="16" y="125">compliance · actions</text>

      <rect class="node-box" id="node-stake" x="6" y="168" width="104" height="42" rx="5"/>
      <text class="node-label" x="16" y="186">Stakeholder log</text>
      <text class="node-sub"   x="16" y="199">consultation · GRM</text>
    </g>

    <path class="flow-path" id="path-mon"   d="M 110 41 C 160 41, 180 115, 232 115"/>
    <path class="flow-path" id="path-audit" d="M 110 115 C 160 115, 180 115, 232 115"/>
    <path class="flow-path" id="path-stake" d="M 110 189 C 160 189, 180 115, 232 115"/>

    <circle class="packet" id="packet-mon"   cx="110" cy="41"  r="4.5" fill="#14b8a6"/>
    <circle class="packet" id="packet-audit" cx="110" cy="115" r="4.5" fill="#14b8a6"/>
    <circle class="packet" id="packet-stake" cx="110" cy="189" r="4.5" fill="#14b8a6"/>

    <g>
      <rect class="hub-box" id="hub" x="236" y="80" width="158" height="70" rx="6"/>
      <text class="hub-sub"   x="248" y="99">VERIFIABLE OUTPUT</text>
      <text class="hub-label" x="248" y="117">ESG disclosure</text>
      <text class="hub-label" x="248" y="133" style="font-size:7.5px;font-weight:500;fill:#b9c8d8;">GRI 303 / 305 / 306 · IFRS S1/S2</text>
    </g>

  </svg>
`;

/* ---------- Page templates ---------- */
export const pages = {

  '/': () => `
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <span class="eyebrow"><span class="pulse-dot"></span>NEMA-registered Expert (EIA/EA) · Nairobi</span>
          <h1>NEMA Compliance and ESG Disclosure</h1>
          <p class="lede">One engagement. Two usable outputs. We help Kenyan manufacturers satisfy the regulator today and the lender, buyer, or parent tomorrow.</p>
          <div class="btn-row">
            <a href="#/contact" class="btn btn-primary">Request a review</a>
            <a href="#/approach" class="btn btn-outline">Read the method</a>
          </div>
        </div>
        <div class="pipeline">
          <div class="pipeline-head">
            <h4>The bridge, live</h4>
            <span>compliance → disclosure</span>
          </div>
          ${pipelineSVG()}
          <div class="pipeline-foot">
            <span>Three artefacts · <strong>one verified output</strong></span>
            <button type="button" class="replay-btn" id="replay-pipeline" aria-label="Replay the pipeline animation">
              <span class="glyph" aria-hidden="true">↻</span> Replay
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="cred-strip">
      <div class="wrap">
        <span><strong>NEMA Associate Expert</strong> · Reg. No. 13638</span>
        <span><strong>6 years</strong> environmental assessment &amp; audit</span>
        <span><strong>Manufacturing</strong> &amp; industrial focus</span>
        <span><strong>Nairobi</strong> · named delivery locations in Kenya, Uganda, and Tanzania</span>
      </div>
    </div>

    <section class="section">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">The problem</span>
          <h2>Two burdens. One dataset.</h2>
          <p>NEMA compliance and ESG reporting are usually handled by different people, in different departments, from the same underlying measurements. That separation is expensive and it is avoidable.</p>
        </div>
        <div class="two-up">
          <div class="problem-card reveal" data-delay="1">
            <h3>Compliance sits with the environmental officer</h3>
            <p>Monitoring, audits, licence renewals, and NEMA queries are managed as a regulatory obligation - correctly, but in isolation from how the company reports itself to anyone else.</p>
          </div>
          <div class="problem-card reveal" data-delay="2">
            <h3>ESG questionnaires land on finance</h3>
            <p>Buyer and lender questionnaires arrive with the commercial team, who can collate numbers but cannot verify them. The technical evidence exists elsewhere, unconnected.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">The method</span>
          <h2>Compliance data, translated into verifiable disclosure.</h2>
          <p>The bridge is not a repackaging exercise. It reveals where NEMA data is sufficient for ESG purposes and where it is not.</p>
        </div>
        <div class="bridge-stage">
          <div class="bridge-3d">
            <div class="step reveal" data-delay="1" style="--i:0;"><h3>Compliance data</h3><p>Measured environmental performance already generated through NEMA monitoring, audits, and ESMP implementation.</p></div>
            <div class="step reveal" data-delay="2" style="--i:1;"><h3>Translation</h3><p>Map each artefact to its ESG application, fix the boundary and restatement gaps, and structure the data once.</p></div>
            <div class="step reveal" data-delay="3" style="--i:2;"><h3>Verifiable disclosure</h3><p>A disclosure that holds up to a lender’s technical reviewer because the figures trace back to measurement.</p></div>
          </div>
        </div>
        <div class="btn-row reveal"><a href="#/approach" class="btn btn-outline">See the full methodology</a></div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="stats reveal">
          <div class="stat"><span class="stat-num" data-count="6">0</span><span class="stat-label">Service lines</span></div>
          <div class="stat"><span class="stat-num" data-count="3">0</span><span class="stat-label">Anonymised case studies</span></div>
          <div class="stat"><span class="stat-num" data-count="5">0</span><span class="stat-label">Mapping examples</span></div>
          <div class="stat"><span class="stat-num" data-count="6">0</span><span class="stat-label">Years in environmental consultancy</span></div>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">Services</span>
          <h2>Six service lines, one system.</h2>
        </div>
        <div class="grid-3">${services.map(serviceCard).join('')}</div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">Selected work</span>
          <h2>Anonymised cases, real outcomes.</h2>
          <p>Client identities are withheld under confidentiality. Sector, scope, and outcome are accurate.</p>
        </div>
        <div class="grid-3">${work.map(workCard).join('')}</div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">Why OIEEA</span>
          <h2>Deliberately narrow. Deliberately technical.</h2>
        </div>
        <div class="why-list">
          <div class="why-item reveal" data-delay="1"><h3>Registered, not coordinated</h3><p>The compliance work is done by a NEMA Expert who can sign it, defend it to the authority, and appear at an audit.</p></div>
          <div class="why-item reveal" data-delay="2"><h3>ESG claims are verified</h3><p>When a client says water intensity improved, we check the boundary, the baseline, and whether the improvement is real.</p></div>
          <div class="why-item reveal" data-delay="3"><h3>The bridge is built in</h3><p>One engagement produces a NEMA-compliant output and an ESG-usable dataset. No second consultant for the second output.</p></div>
          <div class="why-item reveal" data-delay="4"><h3>Manufacturing only</h3><p>Industrial and manufacturing clients only. The methodology sharpens with each engagement and the client gets the benefit.</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">Insights</span>
          <h2>Notes from the practice.</h2>
        </div>
        <div class="grid-3">
          ${insights.slice(0,3).map((a,i) => `
            <a href="#/insights/${a.slug}" class="card reveal" data-delay="${i+1}">
              <span class="tag">${a.tag}</span>
              <h3>${a.title}</h3>
              <p>${a.excerpt}</p>
              <span class="btn-ghost">Read →</span>
            </a>`).join('')}
        </div>
      </div>
    </section>

    ${ctaBand()}
  `,

  '/services': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / Services</div>
        <span class="eyebrow">Services</span>
        <h1 class="reveal">The full offer, as one system.</h1>
        <p class="lede reveal" data-delay="1">Six service lines that connect at the data layer. Most clients start with compliance and discover the ESG output comes almost free.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="table-wrap reveal">
          <table class="data">
            <thead><tr><th>Service</th><th>What you get</th><th>Who it is for</th></tr></thead>
            <tbody>
              ${services.map(s => `<tr><td><a href="#/services/${s.slug}">${s.title}</a></td><td>${s.short}</td><td>${s.forWho}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="wrap">
        <div class="section-head reveal"><span class="eyebrow">Engagement structures</span><h2>How work is commissioned.</h2></div>
        <div class="grid-3">
          <div class="card reveal" data-delay="1"><span class="tag">Annual</span><h3>Compliance retainer</h3><p>Environmental audit, NEMA liaison, and monitoring review across a 12-month cycle, renewable.</p></div>
          <div class="card reveal" data-delay="2"><span class="tag">Fixed scope</span><h3>Project engagement</h3><p>EIA, audit, risk assessment, or due diligence delivered over 4–12 weeks against a defined scope.</p></div>
          <div class="card reveal" data-delay="3"><span class="tag">Sprint</span><h3>ESG readiness sprint</h3><p>Materiality, framework gap review, and a disclosure roadmap in 3–4 weeks, fixed fee.</p></div>
          <div class="card reveal" data-delay="1"><span class="tag">Opinion</span><h3>Technical verification</h3><p>Independent data review and opinion for a lender, investor, or buyer, in 1–2 weeks.</p></div>
          <div class="card reveal" data-delay="2"><span class="tag">Interim</span><h3>Embedded advisory</h3><p>Part-time support for a sustainability lead or CFO across 3–6 months.</p></div>
          <div class="card reveal" data-delay="3"><span class="tag">Bespoke</span><h3>Something else</h3><p>If the need does not fit a box, describe it and we will tell you honestly whether we can help.</p></div>
        </div>
        <p class="form-note reveal" style="margin-top:24px;">Fees are discussed in conversation. We are priced between large international consultancies and sole-practitioner generalists. The value proposition is not the lowest fee - it is that one engagement produces two usable outputs.</p>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/approach': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / Approach</div>
        <span class="eyebrow">Methodology</span>
        <h1 class="reveal">The NEMA-to-ESG bridge.</h1>
        <p class="lede reveal" data-delay="1">This is the practice’s core intellectual product: a mapping from data already generated for NEMA compliance to the disclosure a lender, buyer, or parent is asking for.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap" style="max-width:900px;">
        <div class="reveal">
          <p>Most Kenyan manufacturers treat NEMA compliance and ESG reporting as two separate burdens. Compliance is handled by the environmental officer; ESG questionnaires land on finance. The two are managed as unrelated workstreams, often by different people, from the same underlying measurements.</p>
          <p>The bridge takes the artefacts NEMA compliance already produces and reorganises them for ESG disclosure. It is not a repackaging exercise. It reveals where NEMA data is sufficient for ESG purposes and where it is not - and the gaps are usually three: boundary, consistency, and restatement.</p>
        </div>

        <h2 style="margin-top:2.4em;" class="reveal">The mapping, row by row</h2>
        <p class="reveal" data-delay="1" style="font-size:.95rem;color:var(--muted);">Each row shows a NEMA artefact flowing into its ESG application. Click a row to reveal the gap that must be closed. Use the play button to run the full sequence.</p>

        <div class="mapping-toolbar reveal" data-delay="2">
          <span class="hint">Five artefacts → five disclosure applications</span>
          <button type="button" class="replay-btn" id="run-all-rows">
            <span class="glyph" aria-hidden="true">▶</span> Run all rows
          </button>
        </div>

        <div class="mapping-list" id="mapping-list">
          ${mappingRows.map((r, i) => `
            <div class="map-row" data-row-id="${r.id}" style="--row-i:${i};">
              <div class="map-row-head">
                <div class="map-arte">
                  <span class="map-tag">NEMA artefact</span>
                  <span class="map-title">${r.artefact}</span>
                  <span class="map-sub">${r.artefactSub}</span>
                </div>
                <div class="map-flow" aria-hidden="true">
                  <svg viewBox="0 0 60 60" preserveAspectRatio="none">
                    <path class="track" data-track="${r.id}" d="M 6 30 L 54 30"/>
                    <circle class="flow-dot" data-dot="${r.id}" cx="6" cy="30" r="3.5" fill="#14b8a6"/>
                    <g class="flow-tick" data-tick="${r.id}">
                      <circle cx="42" cy="30" r="7" fill="#14b8a6"/>
                      <path d="M 39 30 L 41 32 L 45 28" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                </div>
                <div class="map-esg">
                  <span class="map-tag">ESG application</span>
                  <span class="map-title">${r.esg}</span>
                  <span class="map-sub">${r.esgSub}</span>
                </div>
              </div>
              <button class="map-toggle" type="button" aria-expanded="false" aria-controls="gap-${r.id}">
                <span class="label">Gap to close</span>
                <span class="chev" aria-hidden="true">▾</span>
              </button>
              <div class="map-gap" id="gap-${r.id}">
                <div class="map-gap-label">Gap to close</div>
                <p>${r.gap}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap reveal" style="max-width:860px;">
        <h2>Worked example: effluent monitoring into GRI 303</h2>
        <p>A food processor monitors effluent monthly against its NEMA permit conditions. The monitoring record contains discharge volume and concentrations of key parameters. To become a GRI 303 water disclosure, three things must be added:</p>
        <p><strong>Boundary.</strong> The permit covers the licensed facility. The disclosure must state whether the boundary includes only this facility, or others in the group. A boundary statement is not optional.</p>
        <p><strong>Consistency.</strong> Monthly permit monitoring may not be structured for comparability. The data must be moved into a workbook where trends, variances, and intensity metrics (per unit of output) are visible across the reporting period.</p>
        <p><strong>Restatement.</strong> If the boundary or the calculation method changes between cycles, prior figures must be restated and the reason disclosed. This is the first question a lender’s technical reviewer will ask.</p>
        <div class="callout"><p>The client pays once for the monitoring. The translation is the value-add - and it is what allows one engagement to produce a NEMA-compliant output and an ESG-usable dataset.</p></div>
      </div>
    </section>

    <section class="globe-section">
      <div class="wrap globe-grid">
        <div class="reveal">
          <span class="eyebrow">Where the work happens</span>
          <h2>Named delivery locations.</h2>
          <p>The locations shown include Nairobi, the Athi River corridor, Kiambu, Thika, Nakuru, Mombasa, Kampala, and Dar es Salaam. The methodology is the same; the regulatory interface differs by jurisdiction.</p>
          <ul class="globe-legend">
            ${deliverySites.map(s => `
              <li><span class="dot"></span><span class="name">${s.name}</span><span class="count">${s.count}</span></li>
            `).join('')}
          </ul>
        </div>
        <div class="globe-wrap reveal" data-delay="2">
          <canvas id="globe-canvas" aria-label="Rotating globe showing delivery locations in East Africa" role="img"></canvas>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap reveal" style="max-width:860px;">
        <h2>Why this matters to lenders and buyers</h2>
        <p>An ESG advisor can build a reporting template. Fewer can look at a reported Scope 1 figure and ask whether the measurement methodology and boundary definition are defensible. The founder’s professional registration was earned through environmental assessment and audit work, not through a reporting course. When the practice supports a client’s ESG disclosure, it is verifying the technical substance, not polishing the narrative.</p>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/sectors': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / Sectors</div>
        <span class="eyebrow">Sectors</span>
        <h1 class="reveal">Two audiences, one sector.</h1>
        <p class="lede reveal" data-delay="1">The practice serves manufacturers and the institutions that finance or buy from them. The work is the same; the questions are different.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="grid-2">
          <a href="#/sectors/manufacturing" class="card reveal" data-delay="1">
            <span class="tag">For manufacturers</span>
            <h3>Manufacturing &amp; industrial</h3>
            <p>Plant managers, EHS officers, and CFOs facing NEMA obligations and buyer or lender ESG pressure.</p>
            <span class="btn-ghost">Explore →</span>
          </a>
          <a href="#/sectors/dfi-lenders" class="card reveal" data-delay="2">
            <span class="tag">For financiers</span>
            <h3>DFIs, lenders &amp; investors</h3>
            <p>Institutions commissioning independent E&amp;S opinions and technical verification of sponsor claims.</p>
            <span class="btn-ghost">Explore →</span>
          </a>
        </div>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/sectors/manufacturing': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/sectors">Sectors</a> / Manufacturing</div>
        <span class="eyebrow">For manufacturers</span>
        <h1 class="reveal">Compliance today. Disclosure tomorrow. One dataset.</h1>
        <p class="lede reveal" data-delay="1">Industrial clients face effluent limits and hazardous waste controls, then a buyer questionnaire and a lender covenant. The data underneath is the same.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap reveal" style="max-width:860px;">
        <h2>What manufacturers face</h2>
        <p>Effluent and emissions limits under NEMA permits. Hazardous waste tracking and disposal controls. Licence renewals and audit notices. Then, increasingly: ESG questionnaires from buyers, ESG covenants from lenders, and disclosure requests from a corporate parent.</p>
        <p>Each of these arrives in a different department with a different deadline. Handled separately, they cost more than they should and produce inconsistent numbers.</p>
        <h2>Where to start</h2>
        <p>If you have a NEMA obligation due in the next six months, start there - compliance is non-negotiable and the audit or EIA will generate the data the ESG work needs. If a buyer or lender has set a deadline, start with the readiness sprint and work back to the data.</p>
        <div class="callout"><p>If both are live at once - which is common - the audit can be structured so its findings table is simultaneously a populated ESG dataset. That is the bridge in practice.</p></div>
        <h2>Relevant services</h2>
        <ul>
          <li><a href="#/services/nema-compliance">NEMA Compliance &amp; Licensing</a> - EIA, ESMP, licence applications</li>
          <li><a href="#/services/environmental-audit">Environmental Audit</a> - EMCA audit with corrective action plan</li>
          <li><a href="#/services/esg-readiness">ESG Readiness &amp; Disclosure</a> - materiality, gap review, roadmap</li>
          <li><a href="#/services/climate-risk">Climate &amp; Industrial Risk</a> - physical climate and Natech exposure</li>
        </ul>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/sectors/dfi-lenders': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/sectors">Sectors</a> / DFIs, Lenders &amp; Investors</div>
        <span class="eyebrow">For financiers</span>
        <h1 class="reveal">An independent E&amp;S opinion that holds up in committee.</h1>
        <p class="lede reveal" data-delay="1">IFC Performance Standards screening, risk categorisation, and technical verification of sponsor claims for industrial transactions.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap reveal" style="max-width:860px;">
        <h2>What the practice provides</h2>
        <p>A short, plain-language memorandum on the E&amp;S risk of an industrial asset, screened against IFC Performance Standards 1–8, with an indicative risk category and specific, monitorable ESAP conditions.</p>
        <p>Where a sponsor has provided ESG data, the practice can verify whether the figures are defensible - tracing each reported number to a source measurement and testing the boundary and restatement assumptions.</p>
        <h2>What makes the opinion different</h2>
        <p>The founder is a NEMA-registered Associate Expert. The E&amp;S opinion is grounded in having conducted the underlying assessment and audit work in Kenya, not in applying a framework from a distance. This matters most where local regulation and international standards diverge.</p>
        <h2>Relevant services</h2>
        <ul>
          <li><a href="#/services/due-diligence">E&amp;S Due Diligence</a> - IFC PS screening, risk category, ESAP</li>
          <li><a href="#/services/technical-verification">Technical Verification for ESG</a> - data lineage and methodology review</li>
          <li><a href="#/services/climate-risk">Climate &amp; Industrial Risk</a> - physical climate and Natech exposure</li>
        </ul>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/work': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / Work</div>
        <span class="eyebrow">Selected work</span>
        <h1 class="reveal">Anonymised cases, real outcomes.</h1>
        <p class="lede reveal" data-delay="1">Client identities are withheld under confidentiality. Sector, scope, and outcome are accurate. References are available under NDA.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap"><div class="grid-3">${work.map(workCard).join('')}</div></div>
    </section>
    ${ctaBand()}
  `,

  '/about': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / About</div>
        <span class="eyebrow">About</span>
        <h1 class="reveal">Built around one observation.</h1>
      </div>
    </section>
    <section class="section">
      <div class="wrap about-grid">
        <div class="reveal">
          <p class="lede">OIEEA was founded by Otieno Irene, a NEMA-registered Associate Expert who spent six years inside Kenyan environmental consultancy before going independent.</p>
          <p>She built the practice around a specific observation: many Kenyan manufacturers treat NEMA compliance and ESG reporting as two separate, disconnected burdens. NEMA licensing is handled by environmental officers. ESG questionnaires from lenders, buyers, and headquarters land on finance or sustainability teams who do not speak the technical language of emissions, effluent, or hazardous waste.</p>
          <p>OIEEA sits in that gap. We translate between the two - because we have done both.</p>
          <h2>What we are not</h2>
          <p>We are not a full-service engineering firm. We do not offer ISO certification. We do not provide legal advice. Where a client needs those services, we coordinate with established partners and stay in our lane.</p>
          <h2>The differentiator</h2>
          <p>Most ESG advisors can build a reporting template. Fewer can look at a reported Scope 1 figure and ask whether the measurement methodology and boundary definition are defensible. OIEEA can, because the founder’s professional registration was earned through environmental assessment and audit work, not through a reporting course.</p>
          <p>When we support a client’s ESG disclosure, we are verifying the technical substance, not polishing the narrative.</p>
          <div class="btn-row">
            <a href="#/about/credentials" class="btn btn-outline">View credentials</a>
            <a href="#/about/transparency" class="btn btn-outline">Transparency note</a>
          </div>
        </div>
        <aside class="about-aside reveal" data-delay="2">
          <div class="photo">
            <img src="profile.jpeg" alt="Portrait of Otieno Irene, OIEEA founder">
          </div>
          <h3>Otieno Irene</h3>
          <p class="role">Founder</p>
          <p style="font-size:.88rem;color:var(--muted);">Six years in Kenyan environmental consultancy. Manufacturing and Industrial sectors focus.</p>
        </aside>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/about/credentials': () => {
    const rows = [
      ['Environmental assessment','EMCA 1999; EIA/EA Regulations 2003','Proficient (registered)','Samples 1, 2'],
      ['Environmental audit','EMCA audit requirements','Proficient (registered)','Sample 1'],
      ['Sustainability reporting','GRI Standards','Working','Samples 4, 5'],
      ['Sustainability reporting','IFRS S1 / S2 (ISSB)','Working','Samples 4, 7'],
      ['Climate disclosure','TCFD','Working','Sample 7'],
      ['E&S due diligence','IFC Performance Standards 1–8','Proficient','Sample 6'],
      ['Emissions accounting','GHG Protocol (Scope 1/2 concepts)','Foundational','Sample 5'],
      ['Environmental management','ISO 14001 principles','Working','Samples 1, 2'],
      ['Process safety interface','HAZOP output interpretation','Working','Sample 3'],
      ['Climate and Natech risk','Multi-hazard assessment; NaTech scenarios','Proficient','Samples 3, 7'],
      ['GIS','QGIS, ArcGIS Pro','Working','Samples 2, 3, 7'],
      ['Air dispersion','AERMOD (screening)','Basic','Sample 2']
    ];
    return `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/about">About</a> / Credentials</div>
        <span class="eyebrow">Credentials</span>
        <h1 class="reveal">Capability, with evidence behind each line.</h1>
        <p class="lede reveal" data-delay="1">Every depth level below has a sample behind it. Nothing is claimed without evidence.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="table-wrap reveal">
          <table class="data">
            <thead><tr><th>Area</th><th>Framework / standard</th><th>Depth</th><th>Evidence</th></tr></thead>
            <tbody>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody>
          </table>
        </div>
        <div class="callout reveal" data-delay="1" style="margin-top:32px;">
          <p><strong>Reading the levels.</strong> <em>Proficient</em> means independent performance with defensible output. <em>Working</em> means performance with review. <em>Foundational</em> or <em>Basic</em> means conceptual command and screening-level application. No level is claimed without a sample behind it.</p>
        </div>
      </div>
    </section>
    ${ctaBand()}`;
  },

  '/about/transparency': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/about">About</a> / Transparency</div>
        <span class="eyebrow">Transparency</span>
        <h1 class="reveal">What we do not do - and why we say so.</h1>
        <p class="lede reveal" data-delay="1">OIEEA is a young practice. Stating the trajectory openly builds more trust than concealing it, and prevents the practice from being oversold into work it should not take.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap reveal" style="max-width:820px;">
        <h2>Currently building</h2>
        <p><strong>IFRS S1/S2 disclosure capability.</strong> Currently at working level; targeting proficient by [Year] through ICPAK-aligned training and applied client work.</p>
        <p><strong>Power BI dashboards for client ESG data.</strong> Currently Excel-based; migration planned [Year].</p>
        <p><strong>A second associate expert</strong> to expand audit capacity.</p>
        <h2>Not currently offered - and will not be claimed until credentialed</h2>
        <p><strong>ISO 14001 certification audits.</strong> The practice can prepare clients for certification; it does not provide the certification audit.</p>
        <p><strong>Accredited ESG assurance.</strong> The practice can prepare clients for assurance and verify data defensibility; it does not provide the assurance opinion.</p>
        <p><strong>Legal compliance opinions.</strong> Regulatory interpretation beyond EMCA practice is referred to counsel.</p>
        <div class="callout"><p>Clients and partners are entitled to know where the practice is strong and where it is developing. This page exists to make that visible.</p></div>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/insights': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / Insights</div>
        <span class="eyebrow">Insights</span>
        <h1 class="reveal">Notes from the practice.</h1>
        <p class="lede reveal" data-delay="1">Methodology notes and observations from Kenyan industrial environmental work. Published quarterly, not weekly.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="grid-3">
          ${insights.map((a,i) => `
            <a href="#/insights/${a.slug}" class="card reveal" data-delay="${i+1}">
              <span class="tag">${a.tag} · ${a.date}</span>
              <h3>${a.title}</h3>
              <p>${a.excerpt}</p>
              <span class="btn-ghost">Read →</span>
            </a>`).join('')}
          <a href="#/insights/nema-to-esg-guide" class="card reveal" data-delay="1">
            <span class="tag">Guide</span>
            <h3>The NEMA-to-ESG guide</h3>
            <p>A practical overview of how to translate compliance data into a disclosure.</p>
            <span class="btn-ghost">Read →</span>
          </a>
        </div>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/insights/nema-to-esg-guide': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/insights">Insights</a> / Guide</div>
        <span class="eyebrow">Guide</span>
        <h1 class="reveal">The NEMA-to-ESG guide.</h1>
        <p class="lede reveal" data-delay="1">A practical overview for CFOs and sustainability leads: how to turn existing compliance data into a disclosure that holds up to a lender’s technical reviewer.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap" style="max-width:760px;">
        <div class="callout reveal">
          <p>The PDF download is not available yet. To ask about the guide, email <a href="mailto:info@oieeadvisory.co.ke">info@oieeadvisory.co.ke</a>.</p>
        </div>
        <h2 class="reveal">What is inside</h2>
        <ul class="reveal" data-delay="1">
          <li>The five NEMA/EIA artefacts that map to ESG disclosures</li>
          <li>The three gaps most first-cycle disclosures fail to close: boundary, consistency, restatement</li>
          <li>A worked example: monthly effluent monitoring into GRI 303</li>
          <li>A one-page checklist to run before sending a disclosure to a buyer or lender</li>
        </ul>
      </div>
    </section>
    ${ctaBand()}
  `,

  '/contact': () => `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / Contact</div>
        <span class="eyebrow">Contact</span>
        <h1 class="reveal">Start with a scoping call.</h1>
        <p class="lede reveal" data-delay="1">Tell us what triggered the need. Your email app will open with the enquiry details for you to review and send.</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap contact-grid">
        <div class="reveal">
          <form id="contact-form" novalidate>
            <div class="form-field">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required aria-describedby="name-error">
              <span class="error" id="name-error" aria-live="polite">Please enter your name.</span>
            </div>
            <div class="form-field">
              <label for="org">Organisation</label>
              <input type="text" id="org" name="org" required aria-describedby="org-error">
              <span class="error" id="org-error" aria-live="polite">Please enter your organisation.</span>
            </div>
            <div class="form-field">
              <label for="role">Role</label>
              <input type="text" id="role" name="role">
            </div>
            <div class="form-field">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required aria-describedby="email-error">
              <span class="error" id="email-error" aria-live="polite">Please enter a valid email address.</span>
            </div>
            <div class="form-field">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-field">
              <label for="need">What do you need?</label>
              <select id="need" name="need" required aria-describedby="need-error">
                <option value="">Select…</option>
                <option>NEMA compliance</option>
                <option>Environmental audit</option>
                <option>ESG readiness</option>
                <option>Technical verification</option>
                <option>Due diligence</option>
                <option>Climate risk</option>
                <option>Other</option>
              </select>
              <span class="error" id="need-error" aria-live="polite">Please select a service.</span>
            </div>
            <div class="form-field">
              <label for="message">Message</label>
              <textarea id="message" name="message" required maxlength="2000" aria-describedby="message-error"></textarea>
              <span class="error" id="message-error" aria-live="polite">Please tell us a little about your need.</span>
            </div>
            <div class="form-field consent">
              <input type="checkbox" id="consent" name="consent" required aria-describedby="consent-error">
              <label for="consent" style="font-weight:400;margin:0;">If I choose to send the email, I consent to OIEEA using these details to respond to my enquiry, in line with the privacy notice.</label>
            </div>
            <div class="form-field">
              <span class="error" id="consent-error" aria-live="polite">Please provide consent to continue.</span>
            </div>
            <button type="submit" class="btn btn-primary">Send enquiry</button>
            <p class="form-note">This website does not send the message. Review and send it in your email app.</p>
            <p class="form-note" data-form-status role="status" aria-live="polite"></p>
          </form>
        </div>
        <aside class="reveal" data-delay="2">
          <div class="info-block"><h4>Email</h4><p><a href="mailto:info@oieeadvisory.co.ke">info@oieeadvisory.co.ke</a></p></div>
          <div class="info-block"><h4>Phone</h4><p><a href="tel:+254701602188">+254 701 602 188</a></p></div>
          <div class="info-block"><h4>Location</h4><p>Nairobi, Kenya<br>See named delivery locations on the approach page.</p></div>
          <div class="info-block"><h4>Registration</h4><p>NEMA Associate Expert (EIA/EA)<br>Reg. No. 13638</p></div>
        </aside>
      </div>
    </section>
  `,

  '/privacy': () => legalPage('Privacy notice', `
    <p>This notice explains how Otieno Irene Environmental &amp; ESG Advisory (OIEEA) collects and uses personal data, in line with the Kenya Data Protection Act 2019.</p>
    <h2>What we collect</h2>
    <p>The contact form does not transmit or store information on this website. If you choose to send the message from your email app, OIEEA receives the details you included: your name, organisation, role, email, phone, selected service, and message.</p>
    <h2>Why we collect it</h2>
    <p>Information sent by email is used to respond to your enquiry. The website does not sell or store form data.</p>
    <h2>How long we keep it</h2>
    <p>The website does not retain form submissions. Email records are handled by OIEEA outside this website.</p>
    <h2>Your rights</h2>
    <p>You can request access to, correction of, or deletion of information sent by email by contacting <a href="mailto:info@oieeadvisory.co.ke">info@oieeadvisory.co.ke</a>.</p>
  `),

  '/terms': () => legalPage('Terms of use', `
    <p>This website is operated by Otieno Irene Environmental &amp; ESG Advisory (OIEEA). By using it you agree to these terms.</p>
    <h2>Content</h2>
    <p>The content of this website is general information and does not constitute professional advice. Engagement terms are agreed in writing for each assignment.</p>
    <h2>Confidentiality</h2>
    <p>Case studies are anonymised. Client identities are disclosed only with permission or under NDA.</p>
    <h2>Liability</h2>
    <p>OIEEA accepts no liability for decisions made on the basis of general website content. [Placeholder - have this reviewed before launch.]</p>
  `),

  '/404': () => `
    <section class="section" style="min-height:60vh;display:grid;place-items:center;text-align:center;">
      <div class="wrap" style="max-width:520px;">
        <span class="eyebrow">Not found</span>
        <h1 class="reveal">That page does not exist.</h1>
        <p class="lede reveal" data-delay="1" style="margin:0 auto 1.6em;">The link may be out of date. Try the services overview or the home page.</p>
        <div class="btn-row reveal" data-delay="2" style="justify-content:center;">
          <a href="#/" class="btn btn-primary">Home</a>
          <a href="#/services" class="btn btn-outline">Services</a>
        </div>
      </div>
    </section>
  `
};

export function legalPage(title, body) {
  return `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / ${title}</div>
        <span class="eyebrow">Legal</span>
        <h1 class="reveal">${title}</h1>
      </div>
    </section>
    <section class="section">
      <div class="wrap reveal" style="max-width:760px;">${body}</div>
    </section>
  `;
}

export function servicePage(s) {
  return `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/services">Services</a> / ${s.title}</div>
        <span class="eyebrow">${s.tag}</span>
        <h1 class="reveal">${s.title}</h1>
        <p class="lede reveal" data-delay="1">${s.short}</p>
      </div>
    </section>
    <div class="wrap service-body">
      <div class="reveal">
        <h2>Who this is for</h2>
        <p>${s.forWho}</p>
        <h2>What the engagement involves</h2>
        <ol class="phase-list">
          ${s.phases.map(p => `<li><h4>${p[0]}</h4><p>${p[1]}</p></li>`).join('')}
        </ol>
        <h2>Deliverables</h2>
        <ul>${s.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
        <h2>Regulatory and framework basis</h2>
        <p>${s.framework}</p>
        <h2>Related sample</h2>
        <p>Work sample: ${s.sample}. Available on request under confidentiality.</p>
      </div>
      <aside class="sidebar reveal" data-delay="2">
        <div class="side-box">
          <h4>At a glance</h4>
          <ul>
            <li><strong>Service</strong><br>${s.title}</li>
            <li><strong>Basis</strong><br>${s.framework}</li>
            <li><strong>Sample</strong><br>${s.sample}</li>
          </ul>
        </div>
        <div class="side-box">
          <h4>Discuss this engagement</h4>
          <p>Tell us what triggered the need and we will tell you what it takes.</p>
          <a href="#/contact" class="btn btn-primary" style="width:100%;justify-content:center;">Request a review</a>
        </div>
      </aside>
    </div>
    ${ctaBand()}
  `;
}

export function workPage(w) {
  return `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/work">Work</a> / ${w.sector}</div>
        <span class="eyebrow">${w.sector} · ${w.location}</span>
        <h1 class="reveal">${w.title}</h1>
        <p class="lede reveal" data-delay="1">${w.short}</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap reveal" style="max-width:820px;">
        <h2>The situation</h2>
        <p>${w.situation}</p>
        <h2>What we did</h2>
        <ul>${w.did.map(d => `<li>${d}</li>`).join('')}</ul>
        <h2>Deliverables</h2>
        <ul>${w.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
        <h2>Outcome</h2>
        <p>${w.outcome}</p>
        <p class="form-note">Client identity withheld; references available under NDA.</p>
      </div>
    </section>
    ${ctaBand()}
  `;
}

export function articlePage(a) {
  return `
    <section class="service-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/insights">Insights</a> / ${a.tag}</div>
        <span class="eyebrow">${a.tag} · ${a.date}</span>
        <h1 class="reveal">${a.title}</h1>
      </div>
    </section>
    <section class="section">
      <div class="wrap reveal" style="max-width:740px;">
        ${articles[a.slug]}
      </div>
    </section>
    ${ctaBand()}
  `;
}
