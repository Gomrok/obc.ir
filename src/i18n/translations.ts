import { Language } from '../types';

export interface UiTranslations {
  // Brand
  brandName: string;
  brandTagline: string;

  // Nav
  navHome: string;
  navAbout: string;
  navOpportunities: string;
  navServices: string;
  navRegions: string;
  navKnowledge: string;
  navContact: string;
  primaryNavigation: string;
  mobileNavigation: string;
  language: string;
  openMenu: string;

  // Common buttons & actions
  viewDetails: string;
  exploreMore: string;
  viewAll: string;
  requestConsult: string;
  submitProject: string;
  contactUs: string;
  searchPlaceholder: string;
  close: string;
  send: string;
  sentSuccess: string;
  readMore: string;
  filterBy: string;
  all: string;
  share: string;
  backToHome: string;
  investmentMetrics: string;

  // Key stats
  statSatisfactionRate: string;
  statCountriesCovered: string;
  statClientsPartners: string;
  statYearsExp: string;
  statCompletedProjects: string;
  statTotalValue: string;
  statCapitalAccompanied: string;
  statInstitutionalInvestors: string;
  statFeasibilityProjects: string;
  statArticles: string;
  statReports: string;
  statGuides: string;
  statCategories: string;
  statMonthlyUsers: string;
  statTotalViews: string;

  // Home Page
  heroBadge: string;
  heroTitle: string;
  heroDesc: string;
  featuredOppsTitle: string;
  featuredOppsSubtitle: string;
  coreSolutionsTitle: string;
  coreSolutionsSubtitle: string;
  regionsBannerTitle: string;
  regionsBannerDesc: string;
  regionsBannerBadge: string;
  partnersTitle: string;

  // About Page
  aboutHeroTitle: string;
  aboutHeroDesc: string;
  whoWeAreTitle: string;
  whoWeAreDesc: string;
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  valuesTitle: string;
  valuesDesc: string;
  teamTitle: string;
  teamDesc: string;
  timelineTitle: string;
  timelineDesc: string;

  // Opportunities Page
  oppsHeroTitle: string;
  oppsHeroDesc: string;
  featuredProjectBadge: string;
  featuredProjectTitle: string;
  filterCategory: string;
  filterRegion: string;
  filterStage: string;
  searchProject: string;
  clearFilters: string;
  requiredCapital: string;
  expectedIrr: string;
  paybackPeriod: string;
  riskLevel: string;
  location: string;
  howToInvestTitle: string;
  howToInvestDesc: string;

  // Services Page
  servicesHeroTitle: string;
  servicesHeroDesc: string;
  audienceSolutionsTitle: string;
  audienceSolutionsSubtitle: string;
  processTitle: string;
  processSubtitle: string;
  caseStudiesTitle: string;
  faqTitle: string;
  faqSubtitle: string;

  // Target Regions Page
  regionsHeroTitle: string;
  regionsHeroDesc: string;
  regionsSubtitle: string;
  activeProjects: string;
  criteriaTitle: string;
  criteriaSubtitle: string;
  strategicFocusTitle: string;
  strategicFocusSubtitle: string;
  whyTheseRegionsTitle: string;
  sampleOppsTitle: string;
  sampleOppsSubtitle: string;

  // Knowledge Page
  knowledgeHeroTitle: string;
  knowledgeHeroDesc: string;
  newsletterTitle: string;
  newsletterDesc: string;
  newsletterBtn: string;
  contentTypesTitle: string;
  trendingTagsTitle: string;
  authorsTitle: string;
  authorsSubtitle: string;

  // Footer & Modals
  footerCtaTitle: string;
  footerCtaEyebrow: string;
  footerCtaDesc: string;
  footerDesc: string;
  quickAccess: string;
  contactInfo: string;
  addressText: string;
  dubaiOffice: string;
  copyright: string;
  privacyPolicy: string;
  termsConditions: string;

  // Consult Modal
  consultModalTitle: string;
  consultModalSubtitle: string;
  fullName: string;
  phone: string;
  email: string;
  userType: string;
  typeInvestor: string;
  typeProjectOwner: string;
  typeCompany: string;
  typeAdvisor: string;
  subject: string;
  message: string;
  submitConsult: string;
  consultSuccessMsg: string;
}

export const translations: Record<Language, UiTranslations> = {
  FA: {
    brandName: 'OBC',
    brandTagline: 'سرمایه‌گذاری • ارتباط • رشد',
    navHome: 'خانه',
    navAbout: 'درباره ما',
    navOpportunities: 'فرصت‌های سرمایه‌گذاری',
    navServices: 'راهکارها و خدمات',
    navRegions: 'مناطق هدف',
    navKnowledge: 'دانش و بینش',
    navContact: 'تماس با ما',
    primaryNavigation: 'ناوبری اصلی',
    mobileNavigation: 'ناوبری موبایل',
    language: 'زبان',
    openMenu: 'باز کردن منو',
    viewDetails: 'مشاهده جزئیات',
    exploreMore: 'مشاهده بیشتر',
    viewAll: 'مشاهده همه',
    requestConsult: 'درخواست مشاوره تخصصی',
    submitProject: 'ارسال پروژه',
    contactUs: 'تماس با ما',
    searchPlaceholder: 'جستجو در فرصت‌ها، خدمات، مقالات و گزارش‌ها...',
    close: 'بستن',
    send: 'ارسال',
    sentSuccess: 'پیام با موفقیت ارسال شد',
    readMore: 'ادامه مطلب',
    filterBy: 'فیلتر بر اساس',
    all: 'همه',
    share: 'اشتراک‌گذاری',
    backToHome: 'بازگشت به خانه',
    investmentMetrics: 'شاخص‌های سرمایه‌گذاری',

    statSatisfactionRate: 'نرخ رضایت مشتریان',
    statCountriesCovered: 'کشور تحت پوشش',
    statClientsPartners: 'مشتری و شریک تجاری',
    statYearsExp: 'سال تجربه تخصصی',
    statCompletedProjects: 'پروژه موفق',
    statTotalValue: 'میلیارد دلار ارزش پروژه‌ها',
    statCapitalAccompanied: 'حجم سرمایه‌گذاری همراهی شده',
    statInstitutionalInvestors: 'سرمایه‌گذار نهادی و فردی',
    statFeasibilityProjects: 'پروژه ارزیابی و امکان‌سنجی شده',
    statArticles: 'مقاله تحلیلی',
    statReports: 'گزارش تخصصی',
    statGuides: 'راهنمای کاربردی',
    statCategories: 'دسته‌بندی موضوعی',
    statMonthlyUsers: 'کاربر ماهانه',
    statTotalViews: 'بازدید کل',

    heroBadge: 'پلتفرم بین‌المللی سرمایه‌گذاری، تجارت و توسعه صنعتی',
    heroTitle: 'فرصت‌های ناب سرمایه‌گذاری در بازارهای جهانی',
    heroDesc: 'پل ارتباطی مطمئن میان سرمایه‌گذاران، صاحبان پروژه‌ها و بازارهای نوظهور. با تکیه بر تحلیل‌های دقیق مالی، پوشش حقوقی کامل و شبکه‌ای از شرکای بین‌المللی.',
    featuredOppsTitle: 'فرصت‌های سرمایه‌گذاری منتخب',
    featuredOppsSubtitle: 'پروژه‌های غربالگری شده با سودآوری تایید شده',
    coreSolutionsTitle: 'راهکارها و خدمات یکپارچه OBC',
    coreSolutionsSubtitle: 'از تدوین طرح توجیهی تا جذب سرمایه خارجی، طراحی چارچوب‌های سرمایه‌گذاری و نظارت اجرایی',
    regionsBannerTitle: 'پوشش فعال در خاورمیانه، آسیای مرکزی، شرق آسیا و اروپا',
    regionsBannerDesc: 'تحلیل‌های اقتصادی منطقه‌ای، بررسی تعرفه‌های گمرکی، پتانسیل‌های لجستیکی و اتصال به شرکای محلی در هر کشور.',
    regionsBannerBadge: 'گسترش جغرافیایی و بازارهای نوظهور',
    partnersTitle: 'اعتماد نهادها و سرمایه‌گذاران بین‌المللی',

    aboutHeroTitle: 'درباره OBC',
    aboutHeroDesc: 'پلتفرم سرمایه‌گذاری بین‌المللی با رویکرد نوین؛ پل ارتباطی میان سرمایه‌گذاران، شرکت‌ها و کارآفرینان در سراسر جهان.',
    whoWeAreTitle: 'ما کی هستیم؟',
    whoWeAreDesc: 'OBC یک پلتفرم چندمنظوره سرمایه‌گذاری و توسعه تجاری است که با تلفیق تخصص‌های مالی، حقوقی و لجستیکی، مسیر حضور در بازارهای بین‌المللی را هموار می‌سازد.',
    missionTitle: 'مأموریت ما',
    missionDesc: 'خلق فرصت‌های پایدار سرمایه‌گذاری و پیوند دادن ظرفیت‌های بومی به زنجیره ارزش جهانی با شفافیت حداکثری.',
    visionTitle: 'چشم‌انداز ما',
    visionDesc: 'تبدیل شدن به معتبرترین هاب سرمایه‌گذاری و مشاوره صنعتی در خاورمیانه، اوراسیا و بازارهای نوظهور تا سال ۲۰۳۰.',
    valuesTitle: 'ارزش‌های بنیادین',
    valuesDesc: 'شفافیت، دقت تحلیلی، حفاظت از منافع سرمایه‌گذار و تعهد بلندمدت به توسعه پایدار.',
    teamTitle: 'تیم رهبری و هیئت‌مدیره',
    teamDesc: 'متخصصان باسابقه در حوزه‌های بانکداری سرمایه‌گذاری، حقوق بین‌الملل و مدیریت مگاپروژه‌ها.',
    timelineTitle: 'مسیر رشد و افتخارات',
    timelineDesc: 'گاه‌شمار توسعه OBC از یک دفتر مشاوره منطقه‌ای تا یک پلتفرم جهانی.',

    oppsHeroTitle: 'فرصت‌های سرمایه‌گذاری',
    oppsHeroDesc: 'پروژه‌های ارزیابی‌شده و دارای توجیه اقتصادی در بخش‌های انرژی، لجستیک، صنعت، کشاورزی و گردشگری.',
    featuredProjectBadge: 'فرصت ویژه',
    featuredProjectTitle: 'پروژه شاخص ماه',
    filterCategory: 'صنعت / حوزه',
    filterRegion: 'کشور / منطقه',
    filterStage: 'مرحله پروژه',
    searchProject: 'جستجوی نام یا مشخصات پروژه...',
    clearFilters: 'حذف فیلترها',
    requiredCapital: 'نیاز سرمایه',
    expectedIrr: 'نرخ بازده (IRR)',
    paybackPeriod: 'دوره بازگشت سرمایه',
    riskLevel: 'سطح ریسک',
    location: 'موقعیت جغرافیایی',
    howToInvestTitle: 'فرآیند ۵ مرحله‌ای سرمایه‌گذاری',
    howToInvestDesc: 'نقشه راه شفاف، امن و ساختاریافته از شناسایی تا نهایی‌سازی سرمایه‌گذاری.',

    servicesHeroTitle: 'راهکارها و خدمات تخصصی',
    servicesHeroDesc: 'ارائه مجموعه‌ای جامع از خدمات مشاوره، تامین مالی، ساختاردهی حقوقی و مدیریت استراتژیک.',
    audienceSolutionsTitle: 'راهکارهای متناسب با نیاز شما',
    audienceSolutionsSubtitle: 'پکیج‌های هدفمند برای نهادها، شرکت‌ها، سرمایه‌گذاران و صاحبان پروژه',
    processTitle: 'فرآیند ارائه خدمات',
    processSubtitle: 'نقشه راه شفاف، گام‌به‌گام و متعهد به نتیجه',
    caseStudiesTitle: 'نمونه موفقیت‌ها و پروژه‌ها',
    faqTitle: 'سوالات متداول',
    faqSubtitle: 'پاسخ به رایج‌ترین پرسش‌های کارفرمایان و سرمایه‌گذاران',

    regionsHeroTitle: 'مناطق و بازارهای هدف',
    regionsHeroDesc: 'تمرکز استراتژیک بر مناطق دارای مزیت‌های رقابتی، زیرساخت‌های رشد و امنیت سرمایه‌گذاری.',
    regionsSubtitle: 'پوشش فعال در بازارهای کلیدی دنیا',
    activeProjects: 'پروژه فعال',
    criteriaTitle: 'معیارهای انتخاب مناطق هدف',
    criteriaSubtitle: 'ارزیابی‌های علمی مبتنی بر ریسک، بازده، لجستیک و سهولت کسب‌وکار.',
    strategicFocusTitle: 'محورهای تمرکز استراتژیک',
    strategicFocusSubtitle: 'سرمایه‌گذاری هدفمند در صنایع آینده‌ساز',
    whyTheseRegionsTitle: 'چرا این مناطق؟',
    sampleOppsTitle: 'نمونه پروژه‌های مناطق هدف',
    sampleOppsSubtitle: 'طرح‌های در حال اجرا در کشورهای منتخب',

    knowledgeHeroTitle: 'دانش و بینش',
    knowledgeHeroDesc: 'تصمیم‌های هوشمندانه‌تر با دسترسی به گزارش‌های تحلیلی، پیش‌بینی بازارها و راهنماهای تخصصی.',
    newsletterTitle: 'خبرنامه دانش و بینش',
    newsletterDesc: 'جدیدترین گزارش‌های اقتصادی را مستقیماً در ایمیل خود دریافت کنید.',
    newsletterBtn: 'عضویت در خبرنامه',
    contentTypesTitle: 'انواع محتوای دانش‌بنیان',
    trendingTagsTitle: 'موضوعات پرطرفدار',
    authorsTitle: 'نویسندگان و کارشناسان تحریریه',
    authorsSubtitle: 'دیدگاه‌های معتبر از نخبگان و اساتید اقتصادی',

    footerCtaTitle: 'بیایید با هم آینده‌ای بهتر بسازیم',
    footerCtaEyebrow: 'OBC / دسترسی به سرمایه‌گذاری',
    footerCtaDesc: 'برای آشنایی بیشتر با OBC، ساختاردهی معاملات و فرصت‌های همکاری، با کارشناسان ما در ارتباط باشید.',
    footerDesc: 'پلتفرم سرمایه‌گذاری بین‌المللی؛ پل ارتباطی میان سرمایه‌گذاران، شرکت‌ها و بازارهای نوظهور جهان.',
    quickAccess: 'دسترسی سریع',
    contactInfo: 'اطلاعات تماس',
    addressText: 'تهران، خیابان ولیعصر، برج تجارت جهانی، طبقه ۱۰',
    dubaiOffice: 'دفتر منطقه‌ای دبی: خیابان شیخ زاید، برج امارات، طبقه ۱۴',
    copyright: '© ۲۰۲۴ پلتفرم سرمایه‌گذاری OBC. تمامی حقوق محفوظ است.',
    privacyPolicy: 'حفظ حریم خصوصی',
    termsConditions: 'قوانین و مقررات',

    consultModalTitle: 'درخواست مشاوره و ثبت پروژه',
    consultModalSubtitle: 'اطلاعات خود را وارد فرمایید تا کارشناسان ارشد OBC در کمتر از ۲۴ ساعت کاری با شما تماس بگیرند.',
    fullName: 'نام و نام خانوادگی',
    phone: 'شماره تماس',
    email: 'ایمیل کاری',
    userType: 'نوع درخواست‌دهنده',
    typeInvestor: 'سرمایه‌گذار',
    typeProjectOwner: 'صاحب پروژه / کارآفرین',
    typeCompany: 'شرکت / سازمان',
    typeAdvisor: 'مشاور یا واسط مالی',
    subject: 'موضوع پروژه یا مشاوره',
    message: 'توضیحات تکمیلی یا مشخصات طرح',
    submitConsult: 'ارسال درخواست مشاوره',
    consultSuccessMsg: 'درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.'
  },

  AR: {
    brandName: 'OBC',
    brandTagline: 'استثمار • تواصل • نمو',
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navOpportunities: 'فرص الاستثمار',
    navServices: 'الحلول والخدمات',
    navRegions: 'المناطق المستهدفة',
    navKnowledge: 'المعرفة والرؤى',
    navContact: 'اتصل بنا',
    primaryNavigation: 'التنقل الرئيسي',
    mobileNavigation: 'تنقل الهاتف المحمول',
    language: 'اللغة',
    openMenu: 'فتح القائمة',
    viewDetails: 'عرض التفاصيل',
    exploreMore: 'استكشف المزيد',
    viewAll: 'عرض الكل',
    requestConsult: 'طلب استشارة متخصصة',
    submitProject: 'تقديم مشروع',
    contactUs: 'اتصل بنا',
    searchPlaceholder: 'البحث في الفرص، الخدمات، التقارير والمقالات...',
    close: 'إغلاق',
    send: 'إرسال',
    sentSuccess: 'تم إرسال الرسالة بنجاح',
    readMore: 'اقرأ المزيد',
    filterBy: 'تصفية حسب',
    all: 'الكل',
    share: 'مشاركة',
    backToHome: 'العودة للرئيسية',
    investmentMetrics: 'مؤشرات الاستثمار',

    statSatisfactionRate: 'معدل رضا العملاء',
    statCountriesCovered: 'دولة مشمولة بالشبكة',
    statClientsPartners: 'عميل وشريك تجاري',
    statYearsExp: 'عاماً من الخبرة المتخصصة',
    statCompletedProjects: 'مشروع ناجح',
    statTotalValue: 'مليار دولار قيمة المشاريع',
    statCapitalAccompanied: 'حجم الاستثمارات المرافقة',
    statInstitutionalInvestors: 'مستثمر مؤسسي وفردي',
    statFeasibilityProjects: 'مشروع خضع لدراسات الجدوى',
    statArticles: 'مقال تحليلي',
    statReports: 'تقرير متخصص',
    statGuides: 'دليل عملي',
    statCategories: 'تصنيف موضوعي',
    statMonthlyUsers: 'مستخدم شهرياً',
    statTotalViews: 'إجمالي المشاهدات',

    heroBadge: 'المنصة الدولية للاستثمار، التجارة والتنمية الصناعية',
    heroTitle: 'فرص استثمارية واعدة في الأسواق العالمية',
    heroDesc: 'جسر موثوق يربط المستثمرين بأصحاب المشاريع والأسواق الناشئة، بالاعتماد على تحليلات مالية دقيقة وتغطية قانونية شاملة وشبكة شركاء دولية.',
    featuredOppsTitle: 'فرص استثمارية مختارة',
    featuredOppsSubtitle: 'مشاريع خضعت للفحص والتدقيق ومؤكدة الجدوى الربحية',
    coreSolutionsTitle: 'حلول وخدمات OBC المتكاملة',
    coreSolutionsSubtitle: 'من دراسات الجدوى وهيكلة التمويل إلى جذب الاستثمار الأجنبي والإشراف التنفيذي',
    regionsBannerTitle: 'حضور فاعل في الشرق الأوسط، آسيا الوسطى، شرق آسيا وأوروبا',
    regionsBannerDesc: 'تحليلات اقتصادية إقليمية، فحص التعريفات الجمركية، دراسة القدرات اللوجستية والربط مع الشركاء المحليين.',
    regionsBannerBadge: 'التوسع الجغرافي والأسواق الناشئة',
    partnersTitle: 'ثقة المؤسسات والمستثمرين الدوليين',

    aboutHeroTitle: 'عن منصة OBC',
    aboutHeroDesc: 'منصة استثمار دولية برؤية عصرية؛ جسر يربط بين المستثمرين والشركات ورواد الأعمال عبر العالم.',
    whoWeAreTitle: 'من نحن؟',
    whoWeAreDesc: 'OBC هي منصة متعددة الأبعاد للاستثمار وتطوير الأعمال، تجمع بين الخبرات المالية والقانونية واللوجستية لتمهيد طريق النجاح.',
    missionTitle: 'مهمتنا',
    missionDesc: 'خلق فرص استثمارية مستدامة وربط القدرات المحلية بسلاسل القيمة العالمية بأعلى معايير الشفافية.',
    visionTitle: 'رؤيتنا',
    visionDesc: 'أن نكون المركز الأكثر موثوقية للاستثمار والاستشارات الصناعية في الشرق الأوسط وأوراسيا بحلول عام 2030.',
    valuesTitle: 'قيمنا الأساسية',
    valuesDesc: 'الشفافية، الدقة التحليلية، حماية مصالح المستثمرين والالتزام طويل الأمد بالتنمية المستدامة.',
    teamTitle: 'فريق القيادة ومجلس الإدارة',
    teamDesc: 'نخبة من الخبراء في البنوك الاستثمارية، القانون التجاري الدولي وإدارة المشاريع الكبرى.',
    timelineTitle: 'مسيرة النمو والإنجازات',
    timelineDesc: 'تاريخ تطور OBC من مكتب استشارات إقليمي إلى منصة استثمارية عالمية.',

    oppsHeroTitle: 'فرص الاستثمار',
    oppsHeroDesc: 'مشاريع جاهزة ومجدية اقتصادياً في قطاعات الطاقة، اللوجستيات، الصناعة، الزراعة والسياحة.',
    featuredProjectBadge: 'فرصة مميزة',
    featuredProjectTitle: 'مشروع الشهر البارز',
    filterCategory: 'القطاع / الصناعة',
    filterRegion: 'الدولة / المنطقة',
    filterStage: 'مرحلة المشروع',
    searchProject: 'البحث عن اسم أو مواصفات المشروع...',
    clearFilters: 'إعادة ضبط الفلاتر',
    requiredCapital: 'رأس المال المطلوب',
    expectedIrr: 'العائد الداخلي (IRR)',
    paybackPeriod: 'فترة استرداد رأس المال',
    riskLevel: 'مستوى المخاطر',
    location: 'الموقع الجغرافي',
    howToInvestTitle: 'خطوات الاستثمار في 5 مراحل',
    howToInvestDesc: 'خارطة طريق واضحة وآمنة من الاستكشاف الأولي إلى إتمام الاستثمار.',

    servicesHeroTitle: 'الحلول والخدمات المتخصصة',
    servicesHeroDesc: 'مجموعة شاملة من خدمات الاستشارات، الهيكلة المالية، الصياغة القانونية وإدارة المشاريع.',
    audienceSolutionsTitle: 'حلول مصممة خصيصاً لاحتياجاتكم',
    audienceSolutionsSubtitle: 'حزم موجهة للمؤسسات، الصناديق، الشركات، المستثمرين وأصحاب المشاريع',
    processTitle: 'مسار تقديم الخدمات',
    processSubtitle: 'خارطة طريق واضحة، خطوة بخطوة وملتزمة بتحقيق النتائج',
    caseStudiesTitle: 'قصص نجاح ومشاريع منجزة',
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'إجابات على الأسئلة الأكثر شيوعاً من المستثمرين وأصحاب الأعمال',

    regionsHeroTitle: 'المناطق والأسواق المستهدفة',
    regionsHeroDesc: 'تركيز استراتيجي على الأسواق الواعدة ذات المزايا التنافسية والاستقرار الاقتصادي.',
    regionsSubtitle: 'تغطية فاعلة لأهم الأسواق العالمية',
    activeProjects: 'مشروع نشط',
    criteriaTitle: 'معايير اختيار المناطق المستهدفة',
    criteriaSubtitle: 'تقييمات علمية دقيقة قائمة على دراسات المخاطر والفرص اللوجستية وبيئة الأعمال.',
    strategicFocusTitle: 'محاور التركيز الاستراتيجي',
    strategicFocusSubtitle: 'استثمارات نوعية في صناعات المستقبل',
    whyTheseRegionsTitle: 'لماذا هذه المناطق؟',
    sampleOppsTitle: 'نماذج من فرص المناطق المستهدفة',
    sampleOppsSubtitle: 'مشاريع قائمة في دول مختارة',

    knowledgeHeroTitle: 'المعرفة والرؤى الاقتصادية',
    knowledgeHeroDesc: 'قرارات استثمارية أكثر ذكاءً بدعم من التقارير التحليلية، قراءات السوق والأدلة العملية.',
    newsletterTitle: 'النشرة الاقتصادية المتخصصة',
    newsletterDesc: 'احصل على أحدث التقارير والتحليلات الاقتصادية مباشرة في بريدك الإلكتروني.',
    newsletterBtn: 'الاشتراك في النشرة',
    contentTypesTitle: 'أنواع المحتوى المعرفي',
    trendingTagsTitle: 'الموضوعات الأكثر تداولاً',
    authorsTitle: 'الكتاب وخبراء التحليل',
    authorsSubtitle: 'رؤى موثوقة من نخبة المحللين والأساتذة الاقتصاديين',

    footerCtaTitle: 'دعونا نبني معاً مستقبلاً أكثر ازدهاراً',
    footerCtaEyebrow: 'OBC / الوصول إلى الاستثمار',
    footerCtaDesc: 'تواصل مع كبار مستشارينا لبحث فرص التعاون وهيكلة الصفقات الاستثمارية.',
    footerDesc: 'منصة استثمار دولية؛ جسر يربط المستثمرين والشركات بالأسواق الواعدة عالمياً.',
    quickAccess: 'روابط سريعة',
    contactInfo: 'معلومات الاتصال',
    addressText: 'طهران، شارع ولي عصر، برج التجارة العالمي، الطابق 10',
    dubaiOffice: 'المكتب الإقليمي في دبي: شارع الشيخ زايد، برج الإمارات، الطابق 14',
    copyright: '© 2024 منصة OBC الاستثمارية. جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    termsConditions: 'الشروط والأحكام',

    consultModalTitle: 'طلب استشارة أو تسجيل مشروع',
    consultModalSubtitle: 'يرجى ملء النموذج ليتواصل معك كبار مستشاري OBC خلال أقل من 24 ساعة عمل.',
    fullName: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني المهني',
    userType: 'نوع مقدم الطلب',
    typeInvestor: 'مستثمر',
    typeProjectOwner: 'صاحب مشروع / رائد أعمال',
    typeCompany: 'شركة / مؤسسة',
    typeAdvisor: 'مستشار أو وسيط مالي',
    subject: 'موضوع المشروع أو الاستشارة',
    message: 'تفاصيل إضافية أو ملخص المشروع',
    submitConsult: 'إرسال طلب الاستشارة',
    consultSuccessMsg: 'تم تسجيل طلبك بنجاح. سيتواصل معك فريقنا في أقرب وقت.'
  },

  EN: {
    brandName: 'OBC',
    brandTagline: 'INVEST • CONNECT • GROW',
    navHome: 'Home',
    navAbout: 'About Us',
    navOpportunities: 'Investment Opportunities',
    navServices: 'Solutions & Services',
    navRegions: 'Target Regions',
    navKnowledge: 'Knowledge & Insights',
    navContact: 'Contact Us',
    primaryNavigation: 'Primary navigation',
    mobileNavigation: 'Mobile navigation',
    language: 'Language',
    openMenu: 'Open menu',
    viewDetails: 'View Details',
    exploreMore: 'Explore More',
    viewAll: 'View All',
    requestConsult: 'Request Consultation',
    submitProject: 'Submit Project',
    contactUs: 'Contact Us',
    searchPlaceholder: 'Search opportunities, services, reports and articles...',
    close: 'Close',
    send: 'Send',
    sentSuccess: 'Message sent successfully',
    readMore: 'Read More',
    filterBy: 'Filter By',
    all: 'All',
    share: 'Share',
    backToHome: 'Back to Home',
    investmentMetrics: 'Investment metrics',

    statSatisfactionRate: 'Client Satisfaction',
    statCountriesCovered: 'Countries Covered',
    statClientsPartners: 'Clients & Partners',
    statYearsExp: 'Years of Experience',
    statCompletedProjects: 'Successful Projects',
    statTotalValue: 'Billion $ Portfolio Value',
    statCapitalAccompanied: 'Capital Mobilized',
    statInstitutionalInvestors: 'Institutional & Angel Investors',
    statFeasibilityProjects: 'Feasibility Appraised Projects',
    statArticles: 'Analytical Articles',
    statReports: 'Specialized Reports',
    statGuides: 'Practical Guides',
    statCategories: 'Topic Categories',
    statMonthlyUsers: 'Monthly Active Users',
    statTotalViews: 'Total Views',

    heroBadge: 'International Investment, Trade & Industrial Development Platform',
    heroTitle: 'Premier Investment Opportunities in Global Markets',
    heroDesc: 'A trusted bridge connecting investors, project sponsors, and emerging markets. Grounded in rigorous financial modeling, comprehensive legal diligence, and a global partner network.',
    featuredOppsTitle: 'Featured Investment Opportunities',
    featuredOppsSubtitle: 'Screened, bankable projects with verified risk-adjusted returns',
    coreSolutionsTitle: 'Integrated OBC Solutions & Services',
    coreSolutionsSubtitle: 'From feasibility studies and financial structuring to capital raising and project delivery',
    regionsBannerTitle: 'Active Coverage Across Middle East, Central Asia, East Asia & Europe',
    regionsBannerDesc: 'Regional macro intelligence, tariff benchmarking, logistics corridor modeling, and local tier-1 partner syndication.',
    regionsBannerBadge: 'Geographic Expansion & Emerging Markets',
    partnersTitle: 'Trusted by International Financial Institutions & Sovereign Partners',

    aboutHeroTitle: 'About OBC',
    aboutHeroDesc: 'A next-generation international investment platform connecting investors, corporations, and sponsors worldwide.',
    whoWeAreTitle: 'Who We Are',
    whoWeAreDesc: 'OBC is a cross-border investment and business development platform bridging corporate finance, international law, and industrial engineering.',
    missionTitle: 'Our Mission',
    missionDesc: 'To unlock bankable investment opportunities and integrate local industrial capacity into global value chains with absolute transparency.',
    visionTitle: 'Our Vision',
    visionDesc: 'To be the most reputable industrial investment and cross-border advisory hub across the Middle East and Eurasia by 2030.',
    valuesTitle: 'Core Values',
    valuesDesc: 'Transparency, analytical rigor, investor fiduciary protection, and long-term sustainable development.',
    teamTitle: 'Leadership & Board of Directors',
    teamDesc: 'Seasoned professionals spanning investment banking, international corporate law, and megaproject execution.',
    timelineTitle: 'Growth Journey & Milestones',
    timelineDesc: 'The strategic timeline of OBC from a regional boutique advisory to a global investment platform.',

    oppsHeroTitle: 'Investment Opportunities',
    oppsHeroDesc: 'Bankable, screened projects across clean energy, logistics, manufacturing, agribusiness, and hospitality.',
    featuredProjectBadge: 'Featured Deal',
    featuredProjectTitle: 'Deal of the Month',
    filterCategory: 'Sector / Industry',
    filterRegion: 'Country / Region',
    filterStage: 'Project Stage',
    searchProject: 'Search project title, country or sector...',
    clearFilters: 'Clear Filters',
    requiredCapital: 'Capital Required',
    expectedIrr: 'Expected IRR',
    paybackPeriod: 'Payback Period',
    riskLevel: 'Risk Profile',
    location: 'Location',
    howToInvestTitle: '5-Step Investment Framework',
    howToInvestDesc: 'A transparent, secure, institutional-grade process from deal screening to closing.',

    servicesHeroTitle: 'Specialized Solutions & Advisory',
    servicesHeroDesc: 'Comprehensive advisory covering partner syndication, financial structuring, legal drafting, and project management.',
    audienceSolutionsTitle: 'Solutions Tailored to Your Needs',
    audienceSolutionsSubtitle: 'Targeted service packages for funds, enterprises, investors, and project sponsors',
    processTitle: 'Service Delivery Process',
    processSubtitle: 'A transparent, step-by-step roadmap committed to measurable milestones',
    caseStudiesTitle: 'Track Record & Case Studies',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Clear answers to common questions from investors and sponsors',

    regionsHeroTitle: 'Target Regions & Strategic Markets',
    regionsHeroDesc: 'Strategic focus on high-growth corridors, resilient trade routes, and bankable infrastructure.',
    regionsSubtitle: 'Active presence across key global markets',
    activeProjects: 'Active Projects',
    criteriaTitle: 'Market Selection Criteria',
    criteriaSubtitle: 'Data-driven evaluation based on macroeconomic growth, logistics accessibility, and ease of doing business.',
    strategicFocusTitle: 'Strategic Industry Focus',
    strategicFocusSubtitle: 'High-impact allocation in tomorrow’s leading sectors',
    whyTheseRegionsTitle: 'Why These Corridors?',
    sampleOppsTitle: 'Sample Opportunities in Target Regions',
    sampleOppsSubtitle: 'Active deals in designated countries',

    knowledgeHeroTitle: 'Knowledge & Insights Hub',
    knowledgeHeroDesc: 'Smarter decisions backed by deep macroeconomic research, sector forecasts, and execution guides.',
    newsletterTitle: 'Insights Newsletter',
    newsletterDesc: 'Get our latest proprietary economic reports delivered directly to your inbox.',
    newsletterBtn: 'Subscribe to Newsletter',
    contentTypesTitle: 'Knowledge Content Formats',
    trendingTagsTitle: 'Trending Topics',
    authorsTitle: 'Editorial Authors & Senior Economists',
    authorsSubtitle: 'Unbiased intelligence from leading industry economists and sector heads',

    footerCtaTitle: 'Let’s Build a Sustainable Future Together',
    footerCtaEyebrow: 'OBC / INVESTMENT ACCESS',
    footerCtaDesc: 'Connect with our senior partners to explore deal structuring, capital deployment, and strategic partnerships.',
    footerDesc: 'Global investment platform bridging capital, industry, and emerging markets worldwide.',
    quickAccess: 'Quick Links',
    contactInfo: 'Contact Information',
    addressText: 'Tehran, Valiasr St., World Trade Center Tower, 10th Floor',
    dubaiOffice: 'Dubai Regional Hub: Sheikh Zayed Road, Emirates Towers, 14th Floor',
    copyright: '© 2024 OBC Investment Platform. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',

    consultModalTitle: 'Request Consultation / Submit Project',
    consultModalSubtitle: 'Please provide your project or investment details. An OBC partner will follow up within 24 business hours.',
    fullName: 'Full Name',
    phone: 'Phone Number',
    email: 'Corporate Email',
    userType: 'Applicant Profile',
    typeInvestor: 'Investor / Family Office',
    typeProjectOwner: 'Project Sponsor / Entrepreneur',
    typeCompany: 'Corporation / Enterprise',
    typeAdvisor: 'Financial Advisor / Intermediary',
    subject: 'Subject / Project Title',
    message: 'Project Summary / Objectives',
    submitConsult: 'Submit Request',
    consultSuccessMsg: 'Your request has been received. Our team will contact you shortly.'
  }
};
