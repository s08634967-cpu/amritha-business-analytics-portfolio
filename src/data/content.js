// ============================================================
// EDIT THIS FILE to update the whole website.
// Any text that starts with "[" is shown as a highlighted
// placeholder, so you can spot what still needs to be filled in.
// ============================================================

export const profile = {
  name: 'Amritha Pandla',
  email: 'amrithapandla755@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amritha-pandla-375a29373',
  github: 'https://github.com/s08634967-cpu',
  resume: '', // Add your latest PDF as public/resume.pdf, then set this to '/resume.pdf'. Update this whenever your resume changes.
  college: 'Avinash College of Commerce (Osmania University)',
  city: 'Hyderabad, India',
  headline: 'I turn business questions into clear, evidence-backed answers.',
  intro:
    'Second-year B.Com (Business Analytics) student, graduating in 2028. I am building practical skills in Excel, SQL and Power BI by working on real business questions, and I am aiming for Business Analyst and Data Analyst roles.',
}

export const process = [
  ['Understand the question', 'What decision does someone need to make, and who is making it?'],
  ['Find and verify the data', 'Use published or first-hand sources and note where each number came from.'],
  ['Organise and analyse', 'Clean it in Excel or SQL, then look for patterns and differences.'],
  ['Explain what it means', 'State the finding, the likely reasons, and what could be done about it.'],
]

export const about = {
  paragraphs: [
    'I study Business Analytics at Avinash College of Commerce in Hyderabad. What interests me most is the step between a spreadsheet and a decision: working out what the business is actually asking, and explaining the answer so that a manager can use it.',
    'My first real exposure to business operations came through a management trainee internship at Universal Quartz & Natural Stone, where I researched prospects, kept lead data organised in Excel and spoke with potential customers. It showed me how much of analytics depends on clean data and clear communication.',
    'I am still early in my technical journey, and this portfolio shows that honestly: some projects are finished, some are in progress, and each one is marked that way.',
  ],
  strengths: [
    ['Analytical thinking', 'Breaking a vague problem into questions that data can answer.'],
    ['Business research', 'Finding reliable sources and separating facts from assumptions.'],
    ['Communication', 'Business calls with prospects and conversations with managers during my internship.'],
    ['Curiosity', 'Learning a new tool by applying it to a real problem.'],
  ],
  directions: ['Business Analyst', 'Data Analyst', 'Business Intelligence Analyst', 'Business and Operations Analytics'],
}

export const skills = {
  technical: [
    { name: 'Microsoft Excel', level: 'Hands-on', note: 'Used in my food delivery project and for internship lead and daily work tracking.' },
    { name: 'SQL (MySQL)', level: 'Practising', note: 'Filtering and analysis queries on a movie dataset.' },
    { name: 'Power BI', level: 'Learning', note: 'Completed a data analytics masterclass; building towards dashboard projects.' },
    { name: 'Python', level: 'Fundamentals', note: 'Core concepts only so far.' },
  ],
  business: [
    ['Business research', 'Researching prospects and company reports.'],
    ['Process analysis', 'Learning how a manufacturing business turns products into orders.'],
    ['Problem-solving', 'Structuring a question before touching the data.'],
    ['Data interpretation', 'Turning tables into observations.'],
    ['Communication', 'Calls, follow-ups and written summaries.'],
    ['Requirement gathering', 'Asking customers what they need before suggesting anything.'],
  ],
}

export const experience = {
  role: 'Management Trainee',
  company: 'Universal Quartz & Natural Stone',
  place: 'Hyderabad',
  dates: 'September to October 2026',
  summary:
    'A short trainee placement where I learned how a manufacturing business finds and serves customers, and supported its business development research.',
  highlights: [
    ['Business understanding', 'Learned the company’s manufacturing processes and product portfolio, and spoke with managers to see how operations fit together.'],
    ['Research', 'Researched architects, interior designers, furniture manufacturers and other potential business prospects.'],
    ['Data organisation', 'Collected, organised and verified lead information, and maintained Excel-based lead and daily work tracking sheets.'],
    ['Communication', 'Made business calls and follow-ups, and learned how customer requirements shape the business development process.'],
  ],
  takeaway:
    'Good analysis starts with trustworthy data. Keeping lead sheets accurate and up to date taught me why verification and consistent structure matter before any analysis begins.',
}

export const projects = [
  {
    slug: 'food-delivery-customer-experience',
    title: 'Food Delivery Customer Experience Analysis',
    status: 'Completed',
    kind: 'Mini-project',
    tools: ['Microsoft Excel'],
    summary: 'An Excel mini-project analysing customer experience data and presenting what it shows.',
    objective: 'Analyse food delivery customer experience data in Excel and present clear, meaningful observations.',
    context: 'Food delivery businesses compete on speed, order accuracy and service quality. Understanding where customers are satisfied or frustrated helps a business decide where to improve. This was completed as part of my Excel learning.',
    approach: [
      'Reviewed the available customer-experience records and organised the information for analysis in Excel.',
      'Used the workbook to explore customer experience patterns; detailed cleaning steps are not claimed here without the working file.',
      'Applied Excel-based analysis and summarised the observations in a mini-project format.'
    ],
    findings: ['This mini-project explored customer experience data and how it can inform service improvement. The supporting workbook is not yet linked, so no numerical findings are published on this page.'],
    recommendations: ['A delivery business can use customer feedback and service metrics to identify recurring friction points, then prioritise improvements using evidence from its own data.'],
    learned: ['Practised organising information in Excel and communicating observations in a business-friendly way.'],
    links: [{ label: 'Excel workbook', url: '' }, { label: 'Summary report', url: '' }],
  },
  {
    slug: 'nike-regional-performance',
    title: 'Global Nike Business and Regional Performance Analysis',
    status: 'In progress',
    kind: 'Business research project',
    tools: ['Microsoft Excel', 'Public company reports'],
    summary: 'A study of how Nike performs across regions, using only published company reports and data.',
    objective: 'Examine how Nike’s business differs across geographic markets, explore possible reasons for those differences, and develop hypothetical recommendations for stakeholders.',
    context: 'Global brands rarely perform evenly across markets. Comparing regions can show where a company is strong, where it is exposed, and which factors may explain the gap. This is independent research based on publicly available information; it is not affiliated with Nike.',
    approach: [
      'Collect genuine published information from Nike’s official company reports and other credible public sources.',
      'Organise and clean the relevant figures so regions can be compared fairly.',
      'Examine regional and geographical performance and investigate differences between markets.',
      'Identify possible business factors behind those differences, and label them as hypotheses.',
      'Develop insights and hypothetical recommendations for stakeholders.',
    ],
    sourceRules: [
      ['Published fact', 'A figure or statement taken from a named public source, with the report and page noted.'],
      ['My analysis', 'A calculation, comparison or pattern that I derived from published figures.'],
      ['Assumption', 'A reasoned guess about why something happened. It is a hypothesis, not a finding.'],
    ],
    findings: [
      'Analysis is in progress. Regional figures will be added only after checking them against Nike’s published reports and recording the fiscal year and source.',
      'Calculated comparisons and interpretations will be labelled separately from the original published facts.',
      'Possible explanations will be presented as hypotheses, not confirmed causes.'
    ],
    recommendations: ['Hypothetical recommendations will be added after the regional comparisons are complete, and will be tied directly to the evidence.'],
    learned: ['This project is strengthening my ability to read company reports and distinguish published facts, my own calculations and assumptions.'],
    links: [{ label: 'Source list', url: '' }, { label: 'Analysis workbook', url: '' }, { label: 'Final report', url: '' }],
  },
  {
    slug: 'sql-practice',
    title: 'SQL Practice: Movie Dataset',
    status: 'Ongoing practice',
    kind: 'Learning project',
    tools: ['MySQL'],
    summary: 'Hands-on MySQL exercises on a movie dataset: filtering records and writing analysis queries.',
    objective: 'Build fluency in SQL by writing filtering and analysis queries against a movie dataset.',
    context: 'SQL is how analysts pull the right records out of a database. Practising on a dataset I find interesting helps me learn how a question in plain English becomes a query.',
    approach: [
      'Loaded a movie dataset into MySQL and explored its tables and columns.',
      'Wrote queries to filter records and to answer analytical questions about the data.',
      'Practised filtering and sorting records, including WHERE conditions such as feedback_rate >= 8, using the top_10_movies table.'
    ],
    findings: ['Used SQL queries to filter movie records and explore which entries met selected conditions. This is ongoing practice rather than a completed business analysis.'],
    recommendations: ['The same filtering and aggregation approach can later be applied to business datasets such as orders, sales and customer records.'],
    learned: ['Practised translating a question into a SQL condition and checking the returned records.'],
    links: [{ label: 'SQL scripts on GitHub', url: '' }],
  },
  {
    slug: 'tata-iam-simulation',
    title: 'Tata Cybersecurity Analyst Job Simulation',
    status: 'Completed (November 2026)',
    kind: 'Forage virtual job simulation',
    tools: ['IAM concepts', 'RBAC', 'MFA', 'SSO'],
    summary: 'A simulated enterprise Identity and Access Management project, finished with a 90% score in the final quiz.',
    objective: 'Assess an enterprise’s IAM readiness and plan an identity and access management solution, as part of a virtual job simulation.',
    context: 'Companies must control who can access which systems and data. This simulation approached that as a structured business project: assess the current state, design a solution, then plan how to deliver it. It is a cybersecurity simulation rather than an analytics project, and it taught me structured planning and requirements thinking.',
    approach: [
      'IAM readiness assessment.',
      'Designing an identity and access management solution.',
      'Identity lifecycle management, from joining an organisation to leaving it.',
      'Access control concepts including role-based access control (RBAC), multi-factor authentication (MFA) and single sign-on (SSO).',
      'IAM implementation planning: resource planning, integration challenges, testing and deployment strategy.',
    ],
    findings: ['Scored 90% in the final quiz.', 'Prepared an IAM implementation plan covering readiness, identity lifecycle, access controls, integration considerations and rollout stages.']
    recommendations: ['Use role-based access control to align permissions with job responsibilities, strengthen sign-in with multi-factor authentication, and test the solution through a controlled pilot before wider rollout.']
    learned: ['Breaking a large technical rollout into assessment, design, planning and testing stages.', 'Considering user access, security, integration and change management together rather than treating implementation as a purely technical task.']
    links: [{ label: 'Forage certificate', url: '' }],
  },
  {
    slug: 'online-retail-simulation',
    title: 'Online Retail Simulation',
    status: 'Completed',
    kind: 'Forage virtual job simulation',
    tools: ['Forage virtual job simulation'],
    summary: 'A completed Forage virtual job simulation based on an online retail business scenario.'
    objective: 'Explore business tasks in an online retail context and practise approaching workplace-style problems through a guided simulation.'
    context: 'The simulation provided a structured online retail scenario. This portfolio records it as a learning experience and does not claim employment or real client work.'
    approach: ['Worked through the activities provided in the Forage simulation.', 'Completed the simulation and reflected on how structured analysis supports retail business decisions.']
    findings: ['Completed the assigned simulation activities. A detailed task-by-task breakdown is not included because the original deliverables are not linked here.']
    recommendations: ['In a real retail business, recommendations should be based on verified customer, product and transaction data rather than assumptions.']
    learned: ['Practised following a business scenario, structuring tasks and communicating work clearly.']
    links: [{ label: 'Forage certificate', url: '' }, { label: 'Deliverables', url: '' }],
  },
]

export const certifications = [
  { title: 'SQL & Relational Databases', issuer: 'IBM SkillsBuild / Cognitive Class', type: 'Course certificate', url: '', issued: 'Completed', credentialId: '' },
  { title: 'Excel with ChatGPT Automation', issuer: 'Simplilearn', type: 'Certificate of completion', url: '', issued: 'Completed', credentialId: '' },
  { title: 'Power BI Data Analytics Masterclass', issuer: 'InfraOne', type: 'Masterclass', url: '', issued: 'Completed', credentialId: '' },
  { title: 'TCS IAM Job Simulation', issuer: 'Forage', type: 'Job simulation', url: '', issued: 'November 2026', credentialId: '' },
  { title: 'Online Retail Simulation', issuer: 'Forage', type: 'Job simulation', url: '', issued: 'Completed', credentialId: '' },
]

export const certTypeNotes = [
  ['Course certificate / Certificate of completion', 'Awarded for completing a structured online course.'],
  ['Masterclass', 'A focused, instructor-led learning programme.'],
  ['Job simulation', 'A virtual project that mirrors real workplace tasks. It is not employment.'],
]

export const journey = [
  { stage: 'Foundation', text: 'Started B.Com Business Analytics (expected graduation 2028) and learned Excel, including automating work with ChatGPT.' },
  { stage: 'Building', text: 'Practised SQL on MySQL, completed an SQL course, joined a Power BI masterclass, and covered Python fundamentals.' },
  { stage: 'Applying', text: 'Used Excel at Universal Quartz & Natural Stone for lead research and daily tracking, and completed Forage job simulations in cybersecurity (IAM) and online retail.' },
  { stage: 'Now', text: 'Researching Nike’s regional performance from published reports, and writing up each project as a case study.' },
  { stage: 'Next', text: 'Build a Power BI dashboard project, strengthen SQL, and keep developing case studies that connect data analysis with business decisions.' },
]