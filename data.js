/* ---------- Globe delivery data ---------- */
export const deliverySites = [
  { name: 'Nairobi',        lat: -1.29,  lon: 36.82,  count: 11 },
  { name: 'Kiambu',         lat: -1.17,  lon: 36.83,  count: 4 },
  { name: 'Athi River',     lat: -1.45,  lon: 36.98,  count: 3 },
  { name: 'Thika',          lat: -1.03,  lon: 37.07,  count: 2 },
  { name: 'Nakuru',         lat: -0.30,  lon: 36.08,  count: 2 },
  { name: 'Mombasa',        lat: -4.04,  lon: 39.67,  count: 2 },
  { name: 'Kampala',        lat:  0.35,  lon: 32.58,  count: 1 },
  { name: 'Dar es Salaam',  lat: -6.79,  lon: 39.21,  count: 1 }
];

/* ---------- Data ---------- */
export const services = [
  { slug:'nema-compliance', tag:'Compliance', title:'NEMA Compliance & Licensing',
    short:'EIA/EA studies, ESMPs, licence applications, and regulatory liaison under EMCA 1999.',
    forWho:'You are planning a new facility, expanding an existing one, or your licence renewal is due within six months.',
    phases:[
      ['Scoping and regulatory review','Define the study boundary against EMCA 1999 and NEMA guidelines; confirm licence category and required instruments.'],
      ['Baseline studies','Environmental and social baseline data collection for the licensed facility and its area of influence.'],
      ['Impact prediction and ESMP','Assess significance, apply the mitigation hierarchy, and design an ESMP with monitoring indicators and responsibilities.'],
      ['NEMA submission and liaison','Compile the application pack, manage public participation, and respond to authority queries.'],
      ['Post-licence support','Support implementation, annual monitoring, and audit readiness.']
    ],
    deliverables:['EIA report and ESMP','Licence application pack','Public participation record','Response to NEMA queries'],
    framework:'EMCA 1999 · EIA/EA Regulations 2003 · NEMA guidelines',
    sample:'Environmental audit extract and ESMP extract' },

  { slug:'environmental-audit', tag:'Compliance', title:'Environmental Audit',
    short:'Independent audits against EMCA 1999, with a corrective action plan that closes findings.',
    forWho:'You have received a NEMA audit notice, or your annual self-audit is due.',
    phases:[
      ['Document review','Review permits, monitoring records, and prior audit findings.'],
      ['Site inspection','Walk the facility; verify effluent, emissions, waste, storage, and safety controls.'],
      ['Compliance assessment','Test observed practice against EMCA and permit conditions.'],
      ['Findings and risk rating','Rate each finding for regulatory risk and consequence.'],
      ['Corrective action plan','Define actions, owners, and closure evidence the regulator will accept.']
    ],
    deliverables:['Audit report','Risk-rated findings table','Corrective action plan','Closure evidence pack'],
    framework:'EMCA 1999 audit requirements · NEMA procedures',
    sample:'Audit findings and corrective action table' },

  { slug:'esg-readiness', tag:'ESG', title:'ESG Readiness & Disclosure',
    short:'Materiality, framework gap review against GRI and IFRS S1/S2, data architecture, and a disclosure roadmap.',
    forWho:'A buyer, lender, or parent has sent an ESG questionnaire you cannot fully answer.',
    phases:[
      ['Materiality assessment','Identify the topics that matter for your sector and your stakeholders.'],
      ['Framework gap review','Compare current data and disclosure against GRI and IFRS S1/S2.'],
      ['Data architecture','Design a workbook and controls so data is collected once and used twice.'],
      ['Disclosure drafting','Write the disclosure with gaps stated honestly rather than filled with estimates.'],
      ['Roadmap','Sequence the fixes by effort and by buyer or lender priority.']
    ],
    deliverables:['Materiality matrix','Framework compliance table','ESG data workbook','Three-priority disclosure roadmap'],
    framework:'GRI Standards · IFRS S1/S2 · TCFD · GHG Protocol concepts',
    sample:'Disclosure gap review against GRI and IFRS S1/S2' },

  { slug:'technical-verification', tag:'Verification', title:'Technical Verification for ESG',
    short:'Test whether the environmental data in a disclosure is defensible before it is signed, lent against, or forwarded.',
    forWho:'You need to know whether the environmental data in a disclosure is defensible before you sign it, lend against it, or forward it.',
    phases:[
      ['Data lineage review','Trace each reported figure back to its source measurement.'],
      ['Methodology assessment','Test measurement method, unit handling, and calculation against the claimed framework.'],
      ['Boundary and restatement check','Confirm the reporting boundary and whether prior figures were restated.'],
      ['Findings memo','A short, plain-language opinion on what is defensible and what is not.']
    ],
    deliverables:['Verification memo','Data quality findings','Audit-ready documentation'],
    framework:'GRI · IFRS S1/S2 · GHG Protocol concepts',
    sample:'ESG data workbook and verification memo' },

  { slug:'due-diligence', tag:'Due diligence', title:'E&S Due Diligence',
    short:'Independent E&S risk opinions for lenders, investors, and acquirers of industrial assets.',
    forWho:'You are lending to, investing in, or acquiring an industrial asset and need an independent E&S opinion.',
    phases:[
      ['Screening against IFC PS 1–8','Assess the asset against each applicable Performance Standard.'],
      ['Risk categorisation','Assign an indicative E&S risk category with written justification.'],
      ['ESAP design','Recommend conditions that are specific, monitorable, and proportionate.'],
      ['Reporting','Deliver a memorandum the credit or investment committee can act on.']
    ],
    deliverables:['IFC PS screening memorandum','Risk register','ESAP conditions','Committee-ready summary'],
    framework:'IFC Performance Standards 1–8 · Equator Principles',
    sample:'IFC PS screening memorandum' },

  { slug:'climate-risk', tag:'Risk', title:'Climate & Industrial Risk',
    short:'Physical climate and Natech exposure for manufacturing assets, structured for TCFD and IFRS S2.',
    forWho:'You need to understand physical climate and Natech exposure to a manufacturing asset.',
    phases:[
      ['Hazard identification','Flood, seismic, chemical release, and cascading NaTech scenarios.'],
      ['Consequence assessment','Likelihood and consequence for the asset, its people, and its supply chain.'],
      ['Resilience measures','Three prioritised measures with indicative cost and benefit framing.'],
      ['Disclosure structuring','Present findings against TCFD and IFRS S2 physical-risk structure.']
    ],
    deliverables:['Hazard and Natech risk register','Resilience recommendations','Disclosure-ready summary'],
    framework:'TCFD · IFRS S2 · Natech assessment methods',
    sample:'Climate and Natech risk brief' }
];

export const work = [
  { slug:'food-processing-kiambu', sector:'Food processing', location:'Kiambu County',
    title:'Audit, licence renewal, and a first ESG dataset',
    short:'A NEMA audit finding on effluent quality coincided with a buyer questionnaire demanding ESG data the company did not have.',
    outcomeShort:'Licence renewed; buyer questionnaire answered with verifiable data.',
    situation:'A mid-sized food processor exporting to regional markets faced a NEMA audit finding on effluent quality and a buyer questionnaire demanding ESG data the company did not have. The two problems sat in different departments and were being handled as unrelated.',
    did:[
      'Conducted the environmental audit and structured the findings as a corrective action plan accepted by NEMA.',
      'Used the same audit data to build the client’s first ESG data workbook covering water withdrawal, effluent load, energy, and waste by stream.',
      'Produced a two-page board summary identifying the three material ESG topics to address before the next buyer review.'
    ],
    deliverables:['NEMA-compliant audit report','Corrective action plan with closure evidence','ESG data workbook mapped to GRI 303/305/306','Board summary'],
    outcome:'Licence renewed. The buyer questionnaire was completed with verifiable data rather than estimates. The client subsequently engaged OIEEA for annual audit and ESG data maintenance.' },

  { slug:'chemical-athi-river', sector:'Chemical manufacturing', location:'Athi River',
    title:'Natech screening for a lender',
    short:'A development finance institution needed an independent E&S opinion before lending to a chemical manufacturer.',
    outcomeShort:'Loan proceeded subject to two ESAP conditions OIEEA recommended.',
    situation:'A development finance institution considering a loan to a chemical manufacturer required an independent E&S risk opinion. The facility sits in an industrial zone with flood exposure and stores hazardous materials.',
    did:[
      'Assessed flood and seismic exposure to the chemical storage area.',
      'Modelled a NaTech release scenario and reviewed the facility’s emergency response plan against the assessed risk.',
      'Screened the operation against IFC Performance Standards 1, 3, and 4.'
    ],
    deliverables:['Hazard and Natech risk register','Resilience recommendations integrated into the capital plan','IFC PS screening memorandum with indicative risk category and recommended ESAP conditions'],
    outcome:'The lender proceeded with the loan subject to two ESAP conditions OIEEA had recommended. The client adopted a storage re-siting measure in the following capital cycle.' },

  { slug:'plastics-nairobi', sector:'Plastics & packaging', location:'Nairobi',
    title:'ESG gap assessment against GRI and IFRS S1/S2',
    short:'A supplier to a multinational buyer was asked to complete an ESG disclosure aligned with the buyer’s own reporting.',
    outcomeShort:'Disclosure accepted on time, with two gaps disclosed transparently.',
    situation:'A plastics and packaging manufacturer supplying a multinational buyer was asked to complete an ESG disclosure aligned with the buyer’s reporting requirements. The company had operational data but no reporting structure.',
    did:[
      'Conducted a sector materiality assessment with stakeholder input.',
      'Reviewed existing data against GRI 302/305/306 and IFRS S1/S2.',
      'Identified material gaps in boundary definition and data quality.',
      'Produced a phased disclosure roadmap with indicative effort and cost.'
    ],
    deliverables:['Materiality matrix','Framework compliance table with commentary','Data quality findings','Three-priority disclosure roadmap'],
    outcome:'The client completed the buyer’s disclosure on time, with two data gaps disclosed transparently rather than filled with estimates. The buyer accepted the submission.' }
];

export const insights = [
  { slug:'esmp-data-is-esg-disclosure', date:'2025-03-12', tag:'Method',
    title:'Your ESMP data is already an ESG disclosure - here is how to use it',
    excerpt:'Most Kenyan manufacturers generate usable ESG data every month through NEMA monitoring. The gap is translation, not collection.' },
  { slug:'buyer-esg-questionnaire', date:'2025-02-04', tag:'Manufacturing',
    title:'What a buyer’s ESG questionnaire actually asks a Kenyan manufacturer',
    excerpt:'The questions look like reporting questions. Most of them are measurement questions, and finance cannot answer them alone.' },
  { slug:'natech-kenyan-industrial-zones', date:'2025-01-15', tag:'Risk',
    title:'NaTech risk in Kenyan industrial zones: the hazard nobody screens for',
    excerpt:'Natural-hazard-triggered technological events sit between disaster risk and process safety. In most EIAs, neither discipline owns them.' }
];

export const articles = {
  'esmp-data-is-esg-disclosure': `
    <p class="lede">Most Kenyan manufacturers generate usable ESG data every month through NEMA monitoring. The gap is translation, not collection.</p>
    <p>A food processor monitoring effluent every month is producing the raw material for a GRI 303 water disclosure. A chemical plant tracking hazardous waste movements is producing GRI 306. A facility reporting stack emissions against permit limits is producing the basis for GRI 305. The data exists, is measured, and is audited by the regulator.</p>
    <p>Yet when a buyer or lender sends an ESG questionnaire, the same company often reports that it does not have the data. What it does not have is the translation layer.</p>
    <h2>Where the disconnect sits</h2>
    <p>NEMA monitoring is organised around permit conditions: is this parameter within this limit at this point? ESG reporting is organised around performance and boundary: what was our total withdrawal across the reporting boundary, and how does it compare to last year on a consistent basis?</p>
    <p>The measurement is shared. The framing, the boundary, and the restatement policy are not.</p>
    <h2>Three things to fix</h2>
    <p><strong>Boundary.</strong> A permit covers a licensed facility. An ESG disclosure covers a reporting boundary that may include warehouses, logistics, and contract manufacturing. Decide the boundary before the first reporting cycle, and state it.</p>
    <p><strong>Consistency.</strong> NEMA monitoring may not require month-on-month comparability across all parameters. ESG reporting does. Put the monitoring data into a structured workbook so trends and variances are visible.</p>
    <p><strong>Restatement.</strong> If the boundary or method changes, prior figures must be restated and the reason disclosed. Most first-cycle disclosures in Kenya do not do this, and it is the first thing a lender’s technical reviewer will ask about.</p>
    <div class="callout"><p>One engagement can produce both a NEMA-compliant output and an ESG-usable dataset. The cost of doing them separately is not double the work - it is double the coordination, and often a second consultant.</p></div>
    <p><a href="#/approach">Read how the NEMA-to-ESG bridge works →</a></p>`,

  'buyer-esg-questionnaire': `
    <p class="lede">The questions look like reporting questions. Most of them are measurement questions, and finance cannot answer them alone.</p>
    <p>A Kenyan manufacturer receives an ESG questionnaire from a multinational buyer. It arrives as a spreadsheet with eighty rows, and it lands on the desk of whoever handles the buyer relationship - usually commercial or finance.</p>
    <p>Half the rows ask for policy documents, which can be produced. The other half ask for numbers: energy consumption by source, water withdrawal and discharge, waste by disposal route, lost-time injury frequency, supplier environmental assessment coverage.</p>
    <h2>Why finance cannot close it alone</h2>
    <p>The numbers exist, but they sit with the environmental officer, the plant engineer, and the HR safety lead. Finance can collate them, but cannot verify them. And the buyer is increasingly asking not just for the number but for the method behind it.</p>
    <p>Two questions recur in almost every questionnaire and are almost always answered weakly: <em>What is your reporting boundary?</em> and <em>Have prior figures been restated, and why?</em></p>
    <h2>A practical response</h2>
    <p>Treat the questionnaire as a data architecture problem, not a writing problem. Map each numeric question to a source record. Where the record exists but the boundary is unclear, state the boundary you used. Where the record does not exist, say so and give a plan and a date.</p>
    <p>A buyer will accept a disclosed gap with a credible plan far more readily than an estimate that cannot be traced. The second is a credibility risk; the first is a management response.</p>
    <div class="callout"><p>If the questionnaire is recurrent - annual, or per contract - build the workbook once and maintain it. The second cycle should take a fraction of the first.</p></div>
    <p><a href="#/services/esg-readiness">See the ESG readiness service →</a></p>`,

  'natech-kenyan-industrial-zones': `
    <p class="lede">Natural-hazard-triggered technological events sit between disaster risk and process safety. In most EIAs, neither discipline owns them.</p>
    <p>A NaTech event is a technological accident - a chemical release, a fire, an explosion - triggered by a natural hazard such as a flood, an earthquake, or extreme heat. It is a well-established category in European and North American industrial regulation. In Kenyan industrial EIA practice, it is rarely screened for explicitly.</p>
    <h2>Why the gap exists</h2>
    <p>Disaster risk assessment tends to focus on the community and the asset: who is exposed, what is damaged. Process safety tends to focus on the plant: what can fail, under what conditions. NaTech sits at the intersection, and in an EIA organised around environmental and social impacts, the intersection can fall between the sections.</p>
    <p>The result is that a facility in a flood-prone industrial zone may have a flood risk assessment and a HAZOP, but no assessment of what happens when the two interact - flooded chemical storage, a release carried by water, emergency access cut off.</p>
    <h2>What a NaTech screen adds</h2>
    <p>A screen does not replace a HAZOP or a flood study. It connects them. It asks: given the natural hazards at this site, which hazardous installations are exposed, and what is the credible consequence pathway?</p>
    <p>For a lender or an acquirer, that question is increasingly material. It is a physical climate risk under IFRS S2, and it is an operational resilience question for the insurer.</p>
    <div class="callout"><p>If your EIA has a flood section and a process-safety section that never reference each other, the NaTech screen is the missing paragraph - and sometimes the missing mitigation measure.</p></div>
    <p><a href="#/services/climate-risk">See the climate and industrial risk service →</a></p>`
};

/* ---------- Approach mapping data ---------- */
export const mappingRows = [
  { id: 'mon',   artefact: 'ESMP monitoring data', artefactSub: 'effluent, emissions, waste',
    esg: 'GRI 303 / 305 / 306', esgSub: 'water · emissions · waste',
    gap: 'Boundary definition beyond the licensed facility; restatement policy for prior-period figures.' },
  { id: 'audit', artefact: 'Environmental audit findings', artefactSub: 'compliance status · actions · risk ratings',
    esg: 'IFRS S1 internal control', esgSub: 'governance disclosure',
    gap: 'Linkage to financial materiality; board-level reporting line and assurance trail.' },
  { id: 'stake', artefact: 'Stakeholder engagement record', artefactSub: 'consultation log · grievances',
    esg: 'GRI 413 local communities', esgSub: 'social performance disclosure',
    gap: 'Consistency of engagement across the reporting period; vulnerable-group inclusion and evidence.' },
  { id: 'hazard', artefact: 'Hazard and risk assessment', artefactSub: 'physical risk · likelihood · consequence',
    esg: 'IFRS S2 / TCFD', esgSub: 'physical risk disclosure',
    gap: 'Scenario analysis, defined time horizons, and financial quantification of the assessed risk.' },
  { id: 'ps', artefact: 'Process safety / Natech assessment', artefactSub: 'major accident hazard · cascading risk',
    esg: 'Operational resilience', esgSub: 'supply-chain continuity disclosure',
    gap: 'Supplier-tier visibility and linkage to insurance and business continuity disclosure.' }
];
