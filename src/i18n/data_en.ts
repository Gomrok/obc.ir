import { Opportunity, ServiceItem, ArticleItem, TeamMember, Milestone, TargetRegion, FAQItem } from '../types';
import { images } from '../images';

export const opportunitiesDataEN: Opportunity[] = [
  {
    id: 'solar-100mw',
    title: '100 MW Utility Solar PV Power Plant',
    category: 'Energy',
    location: 'Dubai, United Arab Emirates',
    stage: 'Stage: Under Construction',
    requiredCapital: '€20 - €30 Million',
    expectedIrr: '25-28%',
    paybackPeriod: '3.8 Years',
    riskLevel: 'Low',
    image: images.solarFarm,
    description: 'Construction of a 100 MW solar photovoltaic facility supported by a long-term power revenue model and institutional financing.',
    country: 'UAE',
    type: 'Co-Development & Equity',
    status: 'Active',
    tags: ['Clean Energy', 'Long-Term Revenue', 'Green Financing']
  },
  {
    id: 'chabahar-terminal',
    title: 'Multi-Purpose Container Terminal at Chabahar Port',
    category: 'Infrastructure & Logistics',
    location: 'Chabahar, Iran',
    stage: 'Stage: Detailed Engineering',
    requiredCapital: '€40 - €50 Million',
    expectedIrr: '20-24%',
    paybackPeriod: '5.2 Years',
    riskLevel: 'Medium',
    image: images.containerPort,
    description: 'Phase 2 deepwater multi-purpose terminal expansion offering direct ocean access, North-South trade corridor connectivity, and Free Zone tax incentives.',
    country: 'Iran',
    type: 'Infrastructure Concession',
    status: 'Active',
    tags: ['Maritime Shipping', 'INSTC Corridor', 'Tax Exemption']
  },
  {
    id: 'industrial-parts',
    title: 'Advanced Precision Industrial Components Plant',
    category: 'Manufacturing & Industry',
    location: 'Isfahan, Iran',
    stage: 'Stage: Construction',
    requiredCapital: '€15 - €25 Million',
    expectedIrr: '22-27%',
    paybackPeriod: '4.0 Years',
    riskLevel: 'Low',
    image: images.modernFactory,
    description: 'Automated precision machining and specialty alloy component manufacturing plant supplying Tier-1 heavy industries and regional export markets.',
    country: 'Iran',
    type: 'Greenfield Manufacturing',
    status: 'Active',
    tags: ['Advanced Tech', 'Regional Export', 'Precision Engineering']
  },
  {
    id: 'wind-50mw',
    title: '50 MW Wind Power Generation Farm',
    category: 'Energy',
    location: 'Manjil, Iran',
    stage: 'Stage: Operation & Expansion',
    requiredCapital: '€15 - €20 Million',
    expectedIrr: '22-26%',
    paybackPeriod: '4.1 Years',
    riskLevel: 'Medium',
    image: images.windFarm,
    description: 'Upgrading and repowering next-generation wind turbines in high-capacity wind corridors with direct high-voltage grid dispatch.',
    country: 'Iran',
    type: 'Capacity Expansion',
    status: 'Active',
    tags: ['Renewable Energy', 'Advanced Turbines']
  },
  {
    id: 'coastal-tourism',
    title: '5-Star Sustainable Coastal Eco-Resort',
    category: 'Tourism & Hospitality',
    location: 'Qeshm Island, Iran',
    stage: 'Stage: Construction',
    requiredCapital: '€10 - €15 Million',
    expectedIrr: '28-32%',
    paybackPeriod: '3.2 Years',
    riskLevel: 'Medium',
    image: images.citySkyline,
    description: 'Luxury seaside eco-resort and marina developed under green building certifications to cater to premium regional and international Gulf travelers.',
    country: 'Iran',
    type: 'Hospitality & Leisure',
    status: 'Active',
    tags: ['Ecotourism', 'Beachfront Resort', 'Forex Revenue']
  },
  {
    id: 'agri-processing',
    title: 'High-Tech Agri-Processing & Cold Chain Facility',
    category: 'Agriculture & Food',
    location: 'Shiraz, Iran',
    stage: 'Stage: Construction',
    requiredCapital: '€8 - €12 Million',
    expectedIrr: '24-29%',
    paybackPeriod: '3.5 Years',
    riskLevel: 'Low',
    image: images.smartAgriculture,
    description: 'Automated sorting, processing, and cold storage hub for organic agricultural produce dedicated to Eurasian and GCC premium export markets.',
    country: 'Iran',
    type: 'Agro-Industrial Export',
    status: 'Active',
    tags: ['Cold Chain', 'GCC Export', 'Organic Food']
  }
];

export const specialOpportunityEN: Opportunity = {
  id: 'special-energy-complex',
  title: 'Clean Energy Equipment Manufacturing Complex',
  category: 'Energy & Industry',
  location: 'Salafchegan Special Economic Zone',
  stage: 'Detailed Engineering & Permitting',
  requiredCapital: '€50 Million',
  expectedIrr: '18-22%',
  paybackPeriod: '4-5 Years',
  riskLevel: 'Low',
  image: images.modernFactory,
  description: 'A modern industrial manufacturing complex producing critical components and turbines for renewable energy plants across the Middle East and Central Asia.',
  isSpecial: true,
  country: 'Iran',
  type: 'Strategic Megaproject',
  status: 'Featured Deal'
};

export const servicesDataEN: ServiceItem[] = [
  {
    id: 'attracting-partners',
    title: 'Partner & Capital Syndication',
    category: 'Investment',
    iconName: 'Users',
    shortDesc: 'Identifying and matching qualified institutional co-investors and cross-border commercial partners.',
    fullDesc: 'Directly connecting bankable projects with global sovereign wealth funds, family offices, angel networks, and strategic equity partners.',
    features: [
      'Target Investor Profiling & Qualification',
      'Investment Teaser & CIM Preparation',
      'Term Sheet Negotiation & Governance Alignment',
      'Shareholder Alignment & Capital Readiness'
    ]
  },
  {
    id: 'financial-structuring',
    title: 'Financial Structuring & Modeling',
    category: 'Finance',
    iconName: 'Coins',
    shortDesc: 'Optimizing capital stack models, senior debt packaging, and FX risk management.',
    fullDesc: 'Custom debt/equity structuring, cashflow waterfalls, currency hedging protocols, and capital cost (WACC) minimization.',
    features: [
      'Advanced DCF & Multi-Scenario Sensitivity Analysis',
      'Sukuk, Green Bonds & Syndicated Facilities',
      'Foreign Exchange & Interest Rate Hedging',
      'Exit Strategy Modeling & Yield Optimization'
    ]
  },
  {
    id: 'feasibility-evaluation',
    title: 'Feasibility & Market Appraisal',
    category: 'Market',
    iconName: 'BarChart3',
    shortDesc: 'Comprehensive technical, commercial, financial, and environmental due diligence.',
    fullDesc: 'Bankable Feasibility Studies compliant with UNIDO, IFC, and multilateral development bank guidelines for debt sanctioning.',
    features: [
      'Supply, Demand & Pricing Elasticity Studies',
      'Technical Evaluation & Technology Selection',
      'NPV, IRR & Payback Period Modeling',
      'Environmental & Social Impact Assessment (ESIA)'
    ]
  },
  {
    id: 'investment-consulting',
    title: 'Strategic Investment Consulting',
    category: 'Investment',
    iconName: 'TrendingUp',
    shortDesc: 'Opportunity screening, asset allocation, and macro strategy for superior risk-adjusted returns.',
    fullDesc: 'Guiding global investors in emerging market entry, portfolio diversification, and institutional asset management frameworks.',
    features: [
      'Bespoke Risk-Return Portfolio Calibration',
      'Geographic & Cross-Sector Diversification',
      'Continuous Asset Monitoring & Rebalancing',
      'Commodity & Currency Advisory'
    ]
  },
  {
    id: 'international-networking',
    title: 'International Business Networks',
    category: 'Investment',
    iconName: 'Globe',
    shortDesc: 'Unlocking bilateral trade chambers, development finance institutions, and global deal flow.',
    fullDesc: 'Direct institutional access to multilateral lenders, sovereign investment councils, and high-level bilateral trade platforms in 24 countries.',
    features: [
      'Multilateral Development Bank Engagement',
      'Cross-Border Consortium Formation',
      'B2B Investment Summits & Roadshows',
      'Regulatory & Government Stakeholder Liaison'
    ]
  },
  {
    id: 'legal-contracts',
    title: 'Regulatory & Risk Advisory',
    category: 'Risk & Compliance',
    iconName: 'ShieldCheck',
    shortDesc: 'Regulatory mapping, ownership review, and investment risk governance.',
    fullDesc: 'Cross-border regulatory analysis, ownership verification, and risk-control frameworks for international investments.',
    features: [
      'Project Delivery & Revenue Model Analysis',
      'Comprehensive Regulatory & Title Due Diligence',
      'International Tax Optimization & IP Security',
      'Regulatory Risk Monitoring & Conflict Prevention'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Delivery & PMC',
    category: 'Operations',
    iconName: 'Briefcase',
    shortDesc: 'End-to-end Project Management Consultancy from inception to commissioning.',
    fullDesc: 'Turnkey Project Management Consultancy (PMC) enforcing PMBOK guidelines, rigorous milestone verification, and agile cost controls.',
    features: [
      'Comprehensive Work Breakdown & Budget Tracking',
      'Independent QA/QC & Technical Inspections',
      'Tendering, Procurement & Vendor Management',
      'Real-Time Stakeholder Progress Dashboards'
    ]
  },
  {
    id: 'market-research',
    title: 'Market Entry & Intelligence',
    category: 'Market',
    iconName: 'Store',
    shortDesc: 'Target market research, competitor benchmarking, and cross-border distribution channels.',
    fullDesc: 'Custom Go-to-Market blueprints, regional distributor vetting, and commercialization strategies across Middle East and Central Asia.',
    features: [
      'In-Depth Competitor & Market Share Analysis',
      'Value Chain & Strategic Pricing Frameworks',
      'B2B Positioning & Trade Distribution Strategy',
      'Regulatory Compliance & Standardization Support'
    ]
  }
];

export const articlesDataEN: ArticleItem[] = [
  {
    id: 'smart-agri-challenges',
    title: 'Investing in Smart Agri-Tech: Opportunities & Realities in Emerging Markets',
    tag: 'Agriculture',
    tagColor: 'bg-emerald-600 text-white',
    date: '2024/07/15',
    image: images.smartAgriculture,
    readTime: '5 min read',
    views: '4.2K',
    likes: 184,
    category: 'Agriculture & Food',
    region: 'Middle East',
    contentType: 'Analytical Articles',
    summary: 'An exploration of automated smart farming, hydroponic ROI models, and soil and water optimization strategies in arid climates.',
    content: [
      'Smart agriculture powered by IoT sensors, drone soil scanning, and precision drip irrigation is redefining regional food sovereignty.',
      'Investment in climate-controlled hydroponic greenhouses yields over 30% IRR while slashing water consumption by 90%, offering ideal resilience in the Middle East.',
      'This comprehensive brief analyzes successful blended finance models and direct channels into premium organic export markets.'
    ]
  },
  {
    id: 'global-economy-outlook',
    title: 'Global Macro Outlook: Capital Allocation in H2 2024',
    tag: 'Economy',
    tagColor: 'bg-blue-600 text-white',
    date: '2024/06/18',
    image: images.citySkyline,
    readTime: '6 min read',
    views: '3.2K',
    likes: 240,
    category: 'Economy & Markets',
    region: 'Global',
    contentType: 'Market Reports',
    summary: 'Macroeconomic trend analysis and its profound impact on emerging market Foreign Direct Investment (FDI) flows.',
    content: [
      'As major central bank interest rates stabilize, capital rotation toward productive industrial and logistics real assets is accelerating in emerging hubs.',
      'Sophisticated institutional investors are rebalancing portfolios away from fixed-income instruments toward renewable energy, transport hubs, and advanced manufacturing.',
      'Evaluating global supply chain near-shoring, inflation trends, and the pivotal role of Gulf transit corridors in H2 2024.'
    ]
  },
  {
    id: 'renewable-middle-east-2030',
    title: 'Middle East Renewable Energy Outlook to 2030',
    tag: 'Energy',
    tagColor: 'bg-teal-600 text-white',
    date: '2024/05/20',
    image: images.windFarm,
    readTime: '5 min read',
    views: '4.3K',
    likes: 310,
    category: 'Energy & Natural Resources',
    region: 'Middle East',
    contentType: 'Market Reports',
    summary: 'An in-depth forecast of solar PV, onshore wind, and green hydrogen project pipelines across the region.',
    content: [
      'National Net-Zero commitments by 2050 have unlocked over $200 billion in bankable solar and wind generation tenders across the GCC and neighboring regions.',
      'Plummeting solar module and grid-scale battery storage costs have made clean energy one of the most attractive infrastructure asset classes globally.',
      'A review of bankable power revenue models and public-private delivery structures in UAE, Oman, and regional energy markets.'
    ]
  },
  {
    id: 'supply-chain-risk-mgmt',
    title: 'Comprehensive Risk Management Guide for Cross-Border Supply Chains',
    tag: 'Logistics',
    tagColor: 'bg-indigo-600 text-white',
    date: '2024/05/24',
    image: images.containerPort,
    readTime: '7 min read',
    views: '5.1K',
    likes: 195,
    category: 'Logistics & Shipping',
    region: 'International',
    contentType: 'Practical Guides',
    summary: 'Actionable strategies for assessing, mitigating, and insuring risks across international shipping hubs and multimodal corridors.',
    content: [
      'Geopolitical shifts and shipping choke-points make corridor diversification mandatory for international trading houses and conglomerates.',
      'Deploying AI in inventory tracking, risk monitoring, and comprehensive maritime insurance forms the cornerstone of supply chain resilience.',
      'A step-by-step blueprint for vendor risk audits, multimodal terminal operations, and freight cost containment.'
    ]
  }
];

export const targetRegionsDataEN: TargetRegion[] = [
  {
    id: 'middle-east',
    name: 'Middle East',
    desc: 'High-liquidity markets with robust macroeconomic stability and ambitious national vision transformations.',
    coordinates: { x: 55, y: 45 },
    activeProjects: 156,
    keySectors: ['Renewable Energy', 'Luxury Hospitality', 'Ports & Logistics', 'Petrochemicals'],
    highlights: [
      'Preferential trade corridors and strong investor protections',
      'Massive government-backed infrastructure initiatives with guaranteed off-take',
      'Direct oceanic access to Strait of Hormuz and Arabian Sea trade lanes'
    ]
  },
  {
    id: 'central-asia-caucasus',
    name: 'Central Asia & Caucasus',
    desc: 'Strategic transit corridors, vast mineral resources, and high-growth industrial markets.',
    coordinates: { x: 62, y: 35 },
    activeProjects: 82,
    keySectors: ['Mining & Processing', 'Rail & Road Corridors', 'Mechanized Agriculture', 'Clean Energy'],
    highlights: [
      'Key links along the New Silk Road connecting Asia to Europe',
      'Generous state incentives and tax exemptions for manufacturing',
      'A dynamic consumer market exceeding 80 million people'
    ]
  },
  {
    id: 'east-asia',
    name: 'East Asia',
    desc: 'Global epicenter of high-tech innovation, robotics, and advanced industrial supply chains.',
    coordinates: { x: 80, y: 48 },
    activeProjects: 46,
    keySectors: ['High-Tech Manufacturing', 'Electronics', 'Renewable Tech', 'Artificial Intelligence'],
    highlights: [
      'The world’s primary technology export hub',
      'Flexible currency exchange and trade finance mechanisms',
      'Vast consumer markets with exceptional purchasing power'
    ]
  },
  {
    id: 'africa',
    name: 'Africa',
    desc: 'Fast-growing opportunities in utility solar, critical minerals, and agro-technology.',
    coordinates: { x: 48, y: 65 },
    activeProjects: 38,
    keySectors: ['Utility Solar', 'Copper & Lithium Mining', 'Agri-Tech', 'Affordable Housing'],
    highlights: [
      'World’s fastest-growing youth population and urban development',
      'Tariff-free trade under African Continental Free Trade Area (AfCFTA)',
      'Substantial co-financing from regional and international development banks'
    ]
  },
  {
    id: 'europe',
    name: 'Europe',
    desc: 'Mature, high-governance markets with strict ESG benchmarks and unmatched legal security.',
    coordinates: { x: 45, y: 30 },
    activeProjects: 23,
    keySectors: ['Green Tech', 'R&D Innovation', 'Sustainable Real Estate', 'Biotech'],
    highlights: [
      'Top-tier institutional rule of law and intellectual property defense',
      'Favorable green bond financing for net-zero industrial projects',
      'Direct integration into the European Single Market'
    ]
  },
  {
    id: 'south-east-asia',
    name: 'Southeast Asia',
    desc: 'Dynamic economies with booming industrial output, digital commerce, and young demographics.',
    coordinates: { x: 75, y: 60 },
    activeProjects: 20,
    keySectors: ['E-Commerce', 'Cold Chain Logistics', 'Light Manufacturing', 'Hospitality'],
    highlights: [
      'Regional Comprehensive Economic Partnership (RCEP) benefits',
      'Highly skilled workforce with competitive operating costs',
      'Consistent 5%+ annual GDP expansion'
    ]
  }
];

export const teamMembersEN: TeamMember[] = [
  {
    name: 'Saeed Mohammadi',
    role: 'CEO & Co-Founder',
    avatar: images.avatarCeo,
    bio: 'Over 18 years of executive experience in cross-border investment banking and industrial business development across Europe and Middle East.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Nazanin Rezaei',
    role: 'Chief Operating Officer (COO)',
    avatar: images.avatarWoman,
    bio: 'Specialist in deal structuring, capital advisory, and managing multi-million euro infrastructure and energy projects.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Arman Kazemi',
    role: 'Head of Investment',
    avatar: images.avatarDirector,
    bio: 'Extensive track record in project screening, emerging market syndications, and institutional investor relations.',
    linkedin: 'https://linkedin.com'
  }
];

export const knowledgeAuthorsEN: TeamMember[] = [
  {
    name: 'Dr. Ali Rezaei',
    role: 'Chief Economist',
    avatar: images.avatarExpertMale,
    bio: 'Specialist in international macroeconomics and emerging market industrial policy.',
  },
  {
    name: 'Dr. Sara Mohammadi',
    role: 'Clean Energy Lead',
    avatar: images.avatarExpertFemale,
    bio: 'Expert in renewable energy project finance and carbon credit markets.',
  },
  {
    name: 'Eng. Mehdi Karimi',
    role: 'Logistics & Ports Advisor',
    avatar: images.avatarDirector,
    bio: 'Consultant in supply chain optimization, multimodal transit, and port concessions.',
  },
  {
    name: 'Dr. Nikoo Kazemi',
    role: 'International Trade Counsel',
    avatar: images.avatarWoman,
    bio: 'Senior advisor specializing in foreign direct investment risk and regulatory governance.',
  },
  {
    name: 'Eng. Reza Sharifi',
    role: 'Market Analyst',
    avatar: images.avatarCeo,
    bio: 'Financial modeler specializing in risk appraisal and capital stack structuring.',
  }
];

export const growthMilestonesEN: Milestone[] = [
  {
    year: '2010',
    title: 'Foundation of OBC & Inception',
    desc: 'Boutique advisory established to connect regional private sponsors with strategic investors.'
  },
  {
    year: '2012',
    title: 'First International Office in Dubai',
    desc: 'Regional expansion across GCC markets and entry into syndicated financing and Sukuk packaging.'
  },
  {
    year: '2016',
    title: 'Expansion into Europe & Asia',
    desc: 'Established dedicated transaction desks in Germany and East Asia for infrastructure mandates.'
  },
  {
    year: '2019',
    title: 'Surpassed $1 Billion Milestone',
    desc: 'Exceeded $1 Billion in cumulative deal volume, advisory mandates, and syndicated transactions.'
  },
  {
    year: '2022',
    title: 'Launch of Digital Investment Platform',
    desc: 'Automated deal screening and institutional digital data rooms for accredited investors.'
  },
  {
    year: '2024',
    title: 'Global Network in 24 Countries',
    desc: 'Active footprint in 24 countries, 1,600+ network investors, and a managed deal pipeline exceeding $4.5B.'
  }
];

export const faqListEN: FAQItem[] = [
  {
    question: 'What core advisory services does OBC provide?',
    answer: 'Our institutional services include deal screening, Bankable Feasibility Studies (FS), financial structuring, legal due diligence, partner/equity syndication, and PMC supervision to project close.'
  },
  {
    question: 'How can an investor or project sponsor begin partnering with OBC?',
    answer: 'Sponsors and investors can submit their project brief via our online portal, contact our Tehran or Dubai offices, or schedule a consultation with our senior partners for an expedited preliminary review.'
  },
  {
    question: 'What is the typical timeline for advisory and capital raising?',
    answer: 'Initial project screening takes 7 business days. Full Feasibility Studies require 3 to 6 weeks, while capital syndication and financial close typically range from 2 to 4 months.'
  },
  {
    question: 'Does OBC operate in markets outside Iran and the Middle East?',
    answer: 'Yes. OBC maintains active desks and institutional partners in the UAE, Oman, Germany, and Central Asia, managing cross-border mandates across 24 countries worldwide.'
  }
];
