import type { Language } from '../../types';

export type IconKey =
  | 'activity'
  | 'agriculture'
  | 'building'
  | 'energy'
  | 'globe'
  | 'healthcare'
  | 'industry'
  | 'infrastructure'
  | 'realEstate'
  | 'search'
  | 'shield'
  | 'technology'
  | 'tourism'
  | 'users';

interface HomeMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface HomeStep {
  title: string;
  description: string;
}

interface AudiencePath {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  steps: string[];
}

interface SectorItem {
  name: string;
  description: string;
  count: number;
  icon: IconKey;
}

interface AdvantageItem {
  title: string;
  description: string;
  icon: IconKey;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    visualLabel: string;
    visualNote: string;
  };
  metrics: HomeMetric[];
  trustChain: {
    eyebrow: string;
    title: string;
    description: string;
    progressLabel: string;
    steps: HomeStep[];
  };
  opportunities: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    viewOpportunity: string;
    sector: string;
    location: string;
    capital: string;
    stage: string;
    return: string;
    type: string;
    status: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    visualKicker: string;
    steps: HomeStep[];
  };
  audiences: {
    eyebrow: string;
    title: string;
    description: string;
    investor: AudiencePath;
    projectOwner: AudiencePath;
  };
  sectors: {
    eyebrow: string;
    title: string;
    description: string;
    opportunityLabel: string;
    viewAll: string;
    items: SectorItem[];
  };
  network: {
    eyebrow: string;
    title: string;
    description: string;
    projectsLabel: string;
    countriesLabel: string;
    activeMarketsLabel: string;
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    serviceAction: string;
    items: AdvantageItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: HomeStep[];
  };
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    capital: string;
    stage: string;
    type: string;
    location: string;
    return: string;
    action: string;
  };
  insights: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
    readArticle: string;
  };
  institutions: {
    eyebrow: string;
    title: string;
    description: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
}

const commonSectorIcons: IconKey[] = [
  'energy',
  'technology',
  'industry',
  'tourism',
  'infrastructure',
  'agriculture',
  'healthcare',
  'realEstate',
];

export const homeContent: Record<Language, HomeContent> = {
  FA: {
    hero: {
      eyebrow: 'GLOBAL INVESTMENT ACCESS',
      title: 'سرمایه، پروژه و فرصت را در یک نقطه به هم متصل می‌کنیم',
      description:
        'OBC بستری برای شناسایی فرصت‌های سرمایه‌گذاری، ارتباط سرمایه‌گذاران بین‌المللی با پروژه‌های معتبر و تسهیل مسیر سرمایه‌گذاری فرامرزی است.',
      primaryAction: 'مشاهده فرصت‌های سرمایه‌گذاری',
      secondaryAction: 'ثبت پروژه',
      visualLabel: 'شبکه سرمایه‌گذاری OBC',
      visualNote: 'اتصال بازارها، سرمایه و پروژه‌های آماده',
    },
    metrics: [
      { value: 6, label: 'فرصت منتخب فعال' },
      { value: 8, label: 'حوزه سرمایه‌گذاری' },
      { value: 6, label: 'منطقه هدف' },
      { value: 6, label: 'نهاد در شبکه فعلی' },
    ],
    trustChain: {
      eyebrow: 'INVESTMENT TRUST CHAIN',
      title: 'زنجیره اعتماد سرمایه‌گذاری',
      description:
        'هر فرصت از یک مسیر شفاف و کنترل‌شده عبور می‌کند تا ریسک تصمیم‌گیری کاهش یابد و سرمایه با پروژه مناسب پیوند بخورد.',
      progressLabel: 'پیشرفت مسیر ارزیابی',
      steps: [
        { title: 'کشف فرصت', description: 'شناسایی پروژه‌ها و بازارهای دارای ظرفیت واقعی رشد' },
        { title: 'ارزیابی اولیه', description: 'بررسی سریع تناسب، داده‌ها و آمادگی سرمایه‌پذیری' },
        { title: 'راستی‌آزمایی', description: 'تحلیل حقوقی، مالی، فنی و تجاری مستقل' },
        { title: 'تطبیق سرمایه‌گذار', description: 'انتخاب سرمایه‌گذاران متناسب با ریسک و ساختار پروژه' },
        { title: 'مذاکره', description: 'هم‌راستاسازی منافع و مدیریت فرآیند تصمیم‌گیری' },
        { title: 'ساختاردهی', description: 'طراحی مدل سرمایه، حاکمیت و برنامه خروج' },
        { title: 'اجرا', description: 'نهایی‌سازی تعهدات و انتقال کنترل‌شده سرمایه' },
        { title: 'پشتیبانی پس از سرمایه‌گذاری', description: 'پایش عملکرد و همراهی در مسیر توسعه' },
      ],
    },
    opportunities: {
      eyebrow: 'CURATED OPPORTUNITIES',
      title: 'فرصت‌هایی که ارزش بررسی دارند',
      description: 'پروژه‌های منتخب با داده‌های ساختاریافته، مرحله مشخص و چارچوب اولیه ارزیابی.',
      viewAll: 'مشاهده همه فرصت‌ها',
      viewOpportunity: 'مشاهده فرصت',
      sector: 'حوزه',
      location: 'موقعیت',
      capital: 'سرمایه موردنیاز',
      stage: 'مرحله',
      return: 'بازده مورد انتظار',
      type: 'نوع پروژه',
      status: 'وضعیت',
    },
    journey: {
      eyebrow: 'FROM PROJECT TO MARKET',
      title: 'مسیر تبدیل یک پروژه به فرصت سرمایه‌گذاری بین‌المللی',
      description:
        'یک فرآیند مرحله‌ای برای آماده‌سازی، ساختاردهی و معرفی پروژه به شبکه سرمایه‌گذاران هدف.',
      visualKicker: 'Investment readiness',
      steps: [
        { title: 'ثبت پروژه', description: 'اطلاعات پایه، نیاز سرمایه و اهداف توسعه در یک پرونده منسجم ثبت می‌شود.' },
        { title: 'ارزیابی', description: 'تیم OBC کیفیت داده، منطق اقتصادی و موانع کلیدی را بررسی می‌کند.' },
        { title: 'ساختاردهی فرصت', description: 'پیشنهاد سرمایه‌گذاری، سناریوهای مالی و روایت پروژه تدوین می‌شود.' },
        { title: 'معرفی بین‌المللی', description: 'فرصت در کانال‌های مناسب و برای سرمایه‌گذاران واجد شرایط ارائه می‌شود.' },
        { title: 'تطبیق سرمایه‌گذار', description: 'اهداف، افق سرمایه‌گذاری و ریسک‌پذیری دو طرف هم‌راستا می‌شود.' },
        { title: 'مذاکره', description: 'ساختار معامله، حاکمیت و شروط کلیدی با همراهی تخصصی نهایی می‌شود.' },
        { title: 'سرمایه‌گذاری', description: 'پس از تأیید نهایی، اجرای معامله و پایش پس از سرمایه‌گذاری آغاز می‌شود.' },
      ],
    },
    audiences: {
      eyebrow: 'TWO CLEAR PATHS',
      title: 'یک شبکه، دو مسیر تخصصی',
      description: 'تجربه OBC برای نیازهای متفاوت سرمایه‌گذار و صاحب پروژه به‌صورت مستقل طراحی شده است.',
      investor: {
        eyebrow: 'FOR INVESTORS',
        title: 'فرصت مناسب را با اطمینان بیشتر پیدا کنید',
        description: 'دسترسی به پروژه‌های غربال‌شده، داده‌های قابل مقایسه و همراهی در کل چرخه تصمیم‌گیری.',
        action: 'ورود به مسیر سرمایه‌گذار',
        steps: ['کشف فرصت‌ها', 'مقایسه پروژه‌ها', 'درخواست اطلاعات', 'گفت‌وگو با OBC', 'سرمایه‌گذاری'],
      },
      projectOwner: {
        eyebrow: 'FOR PROJECT OWNERS',
        title: 'پروژه خود را برای سرمایه بین‌المللی آماده کنید',
        description: 'از ارزیابی آمادگی تا ساختاردهی و معرفی هدفمند به شبکه سرمایه‌گذاران خارجی.',
        action: 'ثبت و ارزیابی پروژه',
        steps: ['ثبت پروژه', 'بررسی اولیه', 'آمادگی سرمایه‌پذیری', 'معرفی جهانی', 'تطبیق سرمایه‌گذار'],
      },
    },
    sectors: {
      eyebrow: 'SECTOR EXPLORER',
      title: 'حوزه‌های سرمایه‌گذاری',
      description: 'فرصت‌ها را بر اساس حوزه تخصصی، منطق بازار و ظرفیت رشد بررسی کنید.',
      opportunityLabel: 'فرصت فعال',
      viewAll: 'بررسی همه حوزه‌ها',
      items: [
        { name: 'انرژی', description: 'انرژی‌های تجدیدپذیر، بهره‌وری و زیرساخت تولید', count: 24, icon: commonSectorIcons[0] },
        { name: 'فناوری', description: 'زیرساخت دیجیتال، نرم‌افزار و فناوری‌های صنعتی', count: 16, icon: commonSectorIcons[1] },
        { name: 'صنعت', description: 'تولید پیشرفته، زنجیره تأمین و توسعه ظرفیت', count: 19, icon: commonSectorIcons[2] },
        { name: 'گردشگری', description: 'هتلداری، مقاصد تجربه‌محور و اقتصاد مهمان‌نوازی', count: 11, icon: commonSectorIcons[3] },
        { name: 'زیرساخت', description: 'حمل‌ونقل، لجستیک، آب و توسعه شهری', count: 14, icon: commonSectorIcons[4] },
        { name: 'کشاورزی', description: 'کشاورزی هوشمند، فرآوری و زنجیره سرد', count: 13, icon: commonSectorIcons[5] },
        { name: 'سلامت', description: 'خدمات درمانی، تجهیزات و زیرساخت سلامت', count: 9, icon: commonSectorIcons[6] },
        { name: 'املاک و مستغلات', description: 'پروژه‌های تجاری، صنعتی و توسعه ترکیبی', count: 14, icon: commonSectorIcons[7] },
      ],
    },
    network: {
      eyebrow: 'GLOBAL INVESTMENT NETWORK',
      title: 'دسترسی محلی، نگاه بین‌المللی',
      description: 'شبکه منطقه‌ای OBC پروژه‌ها را به بازارها، نهادها و سرمایه‌گذاران مناسب متصل می‌کند.',
      projectsLabel: 'پروژه فعال',
      countriesLabel: 'کشور در شبکه',
      activeMarketsLabel: 'بازار هدف فعال',
    },
    why: {
      eyebrow: 'WHY OBC',
      title: 'زیرساخت تصمیم‌گیری حرفه‌ای برای سرمایه‌گذاری فرامرزی',
      description: 'ترکیبی از ارزیابی مستقل، دانش بازار و همراهی اجرایی برای تصمیم‌های پیچیده سرمایه‌گذاری.',
      serviceAction: 'مشاهده جزئیات خدمت',
      items: [
        { title: 'فرصت‌های اعتبارسنجی‌شده', description: 'غربالگری پروژه‌ها پیش از معرفی به سرمایه‌گذار.', icon: 'search' },
        { title: 'راستی‌آزمایی حرفه‌ای', description: 'ارزیابی یکپارچه حقوقی، مالی، فنی و بازار.', icon: 'shield' },
        { title: 'پشتیبانی فرامرزی', description: 'هماهنگی طرف‌ها در بازارها و نظام‌های حقوقی متفاوت.', icon: 'globe' },
        { title: 'تطبیق سرمایه‌گذار', description: 'اتصال هدفمند بر اساس اندازه، حوزه و ریسک‌پذیری.', icon: 'users' },
        { title: 'راهنمایی مقرراتی', description: 'شناخت الزامات، مجوزها و چارچوب‌های ورود سرمایه.', icon: 'building' },
        { title: 'همراهی انتها‌به‌انتها', description: 'از نخستین ارزیابی تا اجرا و پایش پس از سرمایه‌گذاری.', icon: 'activity' },
      ],
    },
    process: {
      eyebrow: 'INVESTMENT PROCESS',
      title: 'از کشف تا رشد، در شش گام روشن',
      description: 'فرآیندی شفاف که تصمیم‌گیری، مذاکره و اجرای سرمایه‌گذاری را قابل مدیریت می‌کند.',
      steps: [
        { title: 'کشف', description: 'تعریف معیارها و شناسایی فرصت‌های متناسب' },
        { title: 'ارزیابی', description: 'تحلیل داده، ریسک و منطق اقتصادی پروژه' },
        { title: 'ارتباط', description: 'دسترسی کنترل‌شده به تیم پروژه و اسناد' },
        { title: 'مذاکره', description: 'طراحی ساختار معامله و شروط کلیدی' },
        { title: 'سرمایه‌گذاری', description: 'نهایی‌سازی تعهدات و اجرای تراکنش' },
        { title: 'رشد', description: 'پایش عملکرد و حمایت از توسعه پروژه' },
      ],
    },
    featured: {
      eyebrow: 'FEATURED OPPORTUNITY',
      title: 'فرصت منتخب این دوره',
      description: 'یک پرونده سرمایه‌گذاری با مقیاس، اطلاعات و آمادگی متمایز برای بررسی عمیق‌تر.',
      capital: 'سرمایه موردنیاز',
      stage: 'مرحله پروژه',
      type: 'نوع سرمایه‌گذاری',
      location: 'موقعیت',
      return: 'بازده مورد انتظار',
      action: 'مشاهده فرصت',
    },
    insights: {
      eyebrow: 'REPORTS & INSIGHTS',
      title: 'تحلیل برای تصمیم‌های دقیق‌تر',
      description: 'گزارش‌های سرمایه‌گذاری، تحلیل بازار، راهنماهای ورود و تازه‌ترین دیدگاه‌های اقتصادی.',
      action: 'مشاهده همه بینش‌ها',
      readArticle: 'مطالعه گزارش',
    },
    institutions: {
      eyebrow: 'INSTITUTIONAL TRUST',
      title: 'شبکه‌ای برای همکاری در مقیاس بین‌المللی',
      description: 'استانداردهای حرفه‌ای، ارتباطات نهادی و تجربه بازارهای متعدد، پایه اعتماد در هر تعامل OBC است.',
    },
    finalCta: {
      eyebrow: 'START THE NEXT MOVE',
      title: 'سرمایه‌گذاری بعدی شما می‌تواند از اینجا شروع شود',
      description: 'فرصت مناسب را پیدا کنید یا پروژه خود را برای دسترسی به سرمایه بین‌المللی آماده سازید.',
      primaryAction: 'مشاهده فرصت‌ها',
      secondaryAction: 'ثبت پروژه',
    },
  },
  AR: {
    hero: {
      eyebrow: 'GLOBAL INVESTMENT ACCESS',
      title: 'نربط رأس المال والمشاريع والفرص في نقطة واحدة',
      description:
        'توفر OBC منصة لاكتشاف فرص الاستثمار، وربط المستثمرين الدوليين بالمشاريع الموثوقة، وتيسير مسار الاستثمار العابر للحدود.',
      primaryAction: 'استكشف فرص الاستثمار',
      secondaryAction: 'قدّم مشروعك',
      visualLabel: 'شبكة OBC الاستثمارية',
      visualNote: 'ربط الأسواق ورأس المال والمشاريع الجاهزة',
    },
    metrics: [
      { value: 6, label: 'فرص مختارة نشطة' },
      { value: 8, label: 'قطاعات استثمارية' },
      { value: 6, label: 'مناطق مستهدفة' },
      { value: 6, label: 'مؤسسات في الشبكة الحالية' },
    ],
    trustChain: {
      eyebrow: 'INVESTMENT TRUST CHAIN',
      title: 'سلسلة الثقة الاستثمارية',
      description: 'تمر كل فرصة بمسار واضح ومنضبط لتقليل مخاطر القرار وربط رأس المال بالمشروع الأنسب.',
      progressLabel: 'تقدم مسار التقييم',
      steps: [
        { title: 'اكتشاف الفرصة', description: 'تحديد المشاريع والأسواق ذات القدرة الحقيقية على النمو' },
        { title: 'التقييم الأولي', description: 'مراجعة الملاءمة والبيانات والجاهزية للاستثمار' },
        { title: 'العناية الواجبة', description: 'تحليل قانوني ومالي وفني وتجاري مستقل' },
        { title: 'مطابقة المستثمر', description: 'اختيار المستثمرين الملائمين للمخاطر وهيكل المشروع' },
        { title: 'التفاوض', description: 'مواءمة المصالح وإدارة عملية اتخاذ القرار' },
        { title: 'هيكلة الاستثمار', description: 'تصميم رأس المال والحوكمة وخطة الخروج' },
        { title: 'التنفيذ', description: 'إتمام الالتزامات وتحويل رأس المال بصورة منضبطة' },
        { title: 'دعم ما بعد الاستثمار', description: 'متابعة الأداء والمساندة خلال مرحلة النمو' },
      ],
    },
    opportunities: {
      eyebrow: 'CURATED OPPORTUNITIES',
      title: 'فرص تستحق الدراسة',
      description: 'مشاريع مختارة ببيانات منظمة ومرحلة واضحة وإطار تقييم أولي.',
      viewAll: 'عرض جميع الفرص',
      viewOpportunity: 'عرض الفرصة',
      sector: 'القطاع',
      location: 'الموقع',
      capital: 'رأس المال المطلوب',
      stage: 'المرحلة',
      return: 'العائد المتوقع',
      type: 'نوع المشروع',
      status: 'الحالة',
    },
    journey: {
      eyebrow: 'FROM PROJECT TO MARKET',
      title: 'تحويل المشروع إلى فرصة استثمارية دولية',
      description: 'عملية مرحلية لإعداد المشروع وهيكلته وعرضه على شبكة المستثمرين المستهدفين.',
      visualKicker: 'Investment readiness',
      steps: [
        { title: 'تقديم المشروع', description: 'تسجيل المعلومات الأساسية واحتياجات التمويل وأهداف النمو.' },
        { title: 'التقييم', description: 'مراجعة جودة البيانات والمنطق الاقتصادي والعوائق الرئيسية.' },
        { title: 'هيكلة الفرصة', description: 'إعداد العرض الاستثماري والسيناريوهات المالية ورواية المشروع.' },
        { title: 'الظهور الدولي', description: 'تقديم الفرصة عبر القنوات المناسبة للمستثمرين المؤهلين.' },
        { title: 'مطابقة المستثمر', description: 'مواءمة الأهداف والأفق الاستثماري ومستوى المخاطر.' },
        { title: 'التفاوض', description: 'إتمام هيكل الصفقة والحوكمة والشروط الأساسية بمساندة متخصصة.' },
        { title: 'الاستثمار', description: 'تنفيذ الصفقة وبدء المتابعة بعد الاعتماد النهائي.' },
      ],
    },
    audiences: {
      eyebrow: 'TWO CLEAR PATHS',
      title: 'شبكة واحدة، مساران متخصصان',
      description: 'صُممت تجربة OBC لتلبية احتياجات المستثمر وصاحب المشروع بصورة مستقلة.',
      investor: {
        eyebrow: 'FOR INVESTORS',
        title: 'اعثر على الفرصة المناسبة بثقة أكبر',
        description: 'الوصول إلى مشاريع منتقاة وبيانات قابلة للمقارنة ودعم شامل خلال دورة القرار.',
        action: 'ابدأ مسار المستثمر',
        steps: ['اكتشاف الفرص', 'مقارنة المشاريع', 'طلب المعلومات', 'التواصل مع OBC', 'الاستثمار'],
      },
      projectOwner: {
        eyebrow: 'FOR PROJECT OWNERS',
        title: 'جهّز مشروعك لرأس المال الدولي',
        description: 'من تقييم الجاهزية إلى الهيكلة والعرض الموجه على المستثمرين الأجانب.',
        action: 'قدّم مشروعك للتقييم',
        steps: ['تقديم المشروع', 'المراجعة الأولية', 'الجاهزية الاستثمارية', 'الظهور العالمي', 'مطابقة المستثمر'],
      },
    },
    sectors: {
      eyebrow: 'SECTOR EXPLORER',
      title: 'قطاعات الاستثمار',
      description: 'استكشف الفرص حسب القطاع ومنطق السوق وإمكانات النمو.',
      opportunityLabel: 'فرصة نشطة',
      viewAll: 'استكشف جميع القطاعات',
      items: [
        { name: 'الطاقة', description: 'الطاقة المتجددة والكفاءة وبنية الإنتاج', count: 24, icon: commonSectorIcons[0] },
        { name: 'التكنولوجيا', description: 'البنية الرقمية والبرمجيات والتقنيات الصناعية', count: 16, icon: commonSectorIcons[1] },
        { name: 'الصناعة', description: 'التصنيع المتقدم وسلاسل الإمداد وتوسعة القدرات', count: 19, icon: commonSectorIcons[2] },
        { name: 'السياحة', description: 'الضيافة والوجهات التجريبية واقتصاد الزوار', count: 11, icon: commonSectorIcons[3] },
        { name: 'البنية التحتية', description: 'النقل والخدمات اللوجستية والمياه والتطوير الحضري', count: 14, icon: commonSectorIcons[4] },
        { name: 'الزراعة', description: 'الزراعة الذكية والتصنيع وسلسلة التبريد', count: 13, icon: commonSectorIcons[5] },
        { name: 'الرعاية الصحية', description: 'الخدمات الطبية والمعدات والبنية الصحية', count: 9, icon: commonSectorIcons[6] },
        { name: 'العقارات', description: 'المشاريع التجارية والصناعية ومتعددة الاستخدامات', count: 14, icon: commonSectorIcons[7] },
      ],
    },
    network: {
      eyebrow: 'GLOBAL INVESTMENT NETWORK',
      title: 'وصول محلي برؤية دولية',
      description: 'تربط شبكة OBC الإقليمية المشاريع بالأسواق والمؤسسات والمستثمرين المناسبين.',
      projectsLabel: 'مشروعاً نشطاً',
      countriesLabel: 'دولة في الشبكة',
      activeMarketsLabel: 'أسواق مستهدفة',
    },
    why: {
      eyebrow: 'WHY OBC',
      title: 'بنية قرار احترافية للاستثمار العابر للحدود',
      description: 'مزيج من التقييم المستقل ومعرفة السوق والدعم التنفيذي للقرارات الاستثمارية المعقدة.',
      serviceAction: 'عرض تفاصيل الخدمة',
      items: [
        { title: 'فرص موثقة', description: 'فرز المشاريع قبل تقديمها إلى المستثمر.', icon: 'search' },
        { title: 'عناية واجبة احترافية', description: 'تقييم قانوني ومالي وفني وسوقي متكامل.', icon: 'shield' },
        { title: 'دعم عابر للحدود', description: 'تنسيق الأطراف عبر أسواق وأنظمة قانونية مختلفة.', icon: 'globe' },
        { title: 'مطابقة المستثمر', description: 'ربط موجه حسب الحجم والقطاع ومستوى المخاطر.', icon: 'users' },
        { title: 'إرشاد تنظيمي', description: 'فهم المتطلبات والتراخيص وأطر دخول رأس المال.', icon: 'building' },
        { title: 'دعم متكامل', description: 'من التقييم الأول إلى التنفيذ والمتابعة.', icon: 'activity' },
      ],
    },
    process: {
      eyebrow: 'INVESTMENT PROCESS',
      title: 'من الاكتشاف إلى النمو في ست خطوات',
      description: 'عملية واضحة تجعل اتخاذ القرار والتفاوض والتنفيذ أكثر قابلية للإدارة.',
      steps: [
        { title: 'اكتشف', description: 'تحديد المعايير والعثور على الفرص المناسبة' },
        { title: 'قيّم', description: 'تحليل البيانات والمخاطر والمنطق الاقتصادي' },
        { title: 'تواصل', description: 'الوصول المنضبط إلى فريق المشروع والوثائق' },
        { title: 'تفاوض', description: 'تصميم هيكل الصفقة والشروط الرئيسية' },
        { title: 'استثمر', description: 'إتمام الالتزامات وتنفيذ المعاملة' },
        { title: 'انمُ', description: 'متابعة الأداء ودعم توسع المشروع' },
      ],
    },
    featured: {
      eyebrow: 'FEATURED OPPORTUNITY',
      title: 'فرصة هذا الشهر المختارة',
      description: 'ملف استثماري مميز من حيث الحجم والبيانات والجاهزية للدراسة المتعمقة.',
      capital: 'رأس المال المطلوب',
      stage: 'مرحلة المشروع',
      type: 'نوع الاستثمار',
      location: 'الموقع',
      return: 'العائد المتوقع',
      action: 'عرض الفرصة',
    },
    insights: {
      eyebrow: 'REPORTS & INSIGHTS',
      title: 'تحليل لقرارات أكثر دقة',
      description: 'تقارير استثمارية ورؤى سوقية وأدلة دخول وأحدث التحليلات الاقتصادية.',
      action: 'عرض جميع الرؤى',
      readArticle: 'اقرأ التقرير',
    },
    institutions: {
      eyebrow: 'INSTITUTIONAL TRUST',
      title: 'شبكة للتعاون على نطاق دولي',
      description: 'المعايير المهنية والعلاقات المؤسسية والخبرة متعددة الأسواق هي أساس الثقة في كل تفاعل مع OBC.',
    },
    finalCta: {
      eyebrow: 'START THE NEXT MOVE',
      title: 'قد يبدأ استثمارك التالي من هنا',
      description: 'اكتشف الفرصة المناسبة أو جهّز مشروعك للوصول إلى رأس المال الدولي.',
      primaryAction: 'استكشف الفرص',
      secondaryAction: 'قدّم مشروعك',
    },
  },
  EN: {
    hero: {
      eyebrow: 'GLOBAL INVESTMENT ACCESS',
      title: 'Where capital, projects and opportunity converge',
      description:
        'OBC identifies investable opportunities, connects international investors with credible projects, and facilitates every stage of cross-border investment.',
      primaryAction: 'Explore opportunities',
      secondaryAction: 'Submit a project',
      visualLabel: 'OBC investment network',
      visualNote: 'Connecting markets, capital and investment-ready projects',
    },
    metrics: [
      { value: 6, label: 'Active curated opportunities' },
      { value: 8, label: 'Investment sectors' },
      { value: 6, label: 'Target regions' },
      { value: 6, label: 'Institutions in the current network' },
    ],
    trustChain: {
      eyebrow: 'INVESTMENT TRUST CHAIN',
      title: 'The investment trust chain',
      description:
        'Every opportunity moves through a transparent, controlled path designed to reduce decision risk and connect capital with the right project.',
      progressLabel: 'Assessment path progress',
      steps: [
        { title: 'Opportunity discovery', description: 'Identify projects and markets with genuine growth potential' },
        { title: 'Initial assessment', description: 'Review strategic fit, evidence and investment readiness' },
        { title: 'Due diligence', description: 'Independent legal, financial, technical and market review' },
        { title: 'Investor matching', description: 'Select investors aligned with the project profile' },
        { title: 'Negotiation', description: 'Align interests and manage the decision process' },
        { title: 'Investment structuring', description: 'Design capital, governance and exit frameworks' },
        { title: 'Execution', description: 'Close commitments and deploy capital with control' },
        { title: 'Post-investment support', description: 'Monitor performance and support expansion' },
      ],
    },
    opportunities: {
      eyebrow: 'CURATED OPPORTUNITIES',
      title: 'Opportunities worth examining',
      description: 'Selected projects with structured data, a defined stage and an initial assessment framework.',
      viewAll: 'View all opportunities',
      viewOpportunity: 'View opportunity',
      sector: 'Sector',
      location: 'Location',
      capital: 'Capital required',
      stage: 'Stage',
      return: 'Expected return',
      type: 'Project type',
      status: 'Status',
    },
    journey: {
      eyebrow: 'FROM PROJECT TO MARKET',
      title: 'Turning a project into an international investment opportunity',
      description: 'A staged process to prepare, structure and introduce a project to the right investor network.',
      visualKicker: 'Investment readiness',
      steps: [
        { title: 'Project submission', description: 'Core information, capital needs and growth objectives enter one coherent file.' },
        { title: 'Evaluation', description: 'OBC reviews evidence quality, commercial logic and critical barriers.' },
        { title: 'Opportunity structuring', description: 'The investment proposition, financial scenarios and project narrative are shaped.' },
        { title: 'Investor exposure', description: 'The opportunity is presented through appropriate channels to qualified investors.' },
        { title: 'Investor match', description: 'Objectives, investment horizon and risk appetite are brought into alignment.' },
        { title: 'Negotiation', description: 'Transaction structure, governance and key terms are finalized with expert support.' },
        { title: 'Investment', description: 'Following approval, execution and post-investment monitoring begin.' },
      ],
    },
    audiences: {
      eyebrow: 'TWO CLEAR PATHS',
      title: 'One network, two specialist paths',
      description: 'OBC provides distinct experiences for the needs of investors and project owners.',
      investor: {
        eyebrow: 'FOR INVESTORS',
        title: 'Find the right opportunity with greater confidence',
        description: 'Access screened projects, comparable information and support across the decision cycle.',
        action: 'Enter the investor path',
        steps: ['Discover opportunities', 'Compare projects', 'Request information', 'Contact OBC', 'Invest'],
      },
      projectOwner: {
        eyebrow: 'FOR PROJECT OWNERS',
        title: 'Prepare your project for international capital',
        description: 'From readiness assessment to structuring and targeted exposure to foreign investors.',
        action: 'Submit a project',
        steps: ['Submit project', 'Initial review', 'Investment readiness', 'Global exposure', 'Investor matching'],
      },
    },
    sectors: {
      eyebrow: 'SECTOR EXPLORER',
      title: 'Investment sectors',
      description: 'Explore opportunities through sector expertise, market logic and growth capacity.',
      opportunityLabel: 'active opportunities',
      viewAll: 'Explore all sectors',
      items: [
        { name: 'Energy', description: 'Renewables, efficiency and generation infrastructure', count: 24, icon: commonSectorIcons[0] },
        { name: 'Technology', description: 'Digital infrastructure, software and industrial technology', count: 16, icon: commonSectorIcons[1] },
        { name: 'Industry', description: 'Advanced manufacturing, supply chains and capacity growth', count: 19, icon: commonSectorIcons[2] },
        { name: 'Tourism', description: 'Hospitality, experience-led destinations and visitor economy', count: 11, icon: commonSectorIcons[3] },
        { name: 'Infrastructure', description: 'Transport, logistics, water and urban development', count: 14, icon: commonSectorIcons[4] },
        { name: 'Agriculture', description: 'Smart farming, processing and cold-chain systems', count: 13, icon: commonSectorIcons[5] },
        { name: 'Healthcare', description: 'Care delivery, medical equipment and health infrastructure', count: 9, icon: commonSectorIcons[6] },
        { name: 'Real estate', description: 'Commercial, industrial and mixed-use developments', count: 14, icon: commonSectorIcons[7] },
      ],
    },
    network: {
      eyebrow: 'GLOBAL INVESTMENT NETWORK',
      title: 'Local access, international perspective',
      description: 'OBC’s regional network connects projects with the right markets, institutions and investors.',
      projectsLabel: 'active projects',
      countriesLabel: 'network countries',
      activeMarketsLabel: 'active target markets',
    },
    why: {
      eyebrow: 'WHY OBC',
      title: 'Professional decision infrastructure for cross-border investment',
      description: 'Independent assessment, market insight and execution support for complex investment decisions.',
      serviceAction: 'View service details',
      items: [
        { title: 'Validated opportunities', description: 'Projects screened before they reach an investor.', icon: 'search' },
        { title: 'Professional due diligence', description: 'Integrated legal, financial, technical and market review.', icon: 'shield' },
        { title: 'Cross-border support', description: 'Coordination across markets and legal systems.', icon: 'globe' },
        { title: 'Investor matching', description: 'Targeted connections by scale, sector and risk appetite.', icon: 'users' },
        { title: 'Regulatory guidance', description: 'Clarity on permissions and capital-entry frameworks.', icon: 'building' },
        { title: 'End-to-end support', description: 'From first assessment to execution and monitoring.', icon: 'activity' },
      ],
    },
    process: {
      eyebrow: 'INVESTMENT PROCESS',
      title: 'From discovery to growth in six clear steps',
      description: 'A transparent process that makes investment decisions, negotiation and execution manageable.',
      steps: [
        { title: 'Discover', description: 'Set criteria and identify aligned opportunities' },
        { title: 'Evaluate', description: 'Assess evidence, risk and commercial logic' },
        { title: 'Connect', description: 'Access the project team and documents with control' },
        { title: 'Negotiate', description: 'Design transaction structure and key terms' },
        { title: 'Invest', description: 'Finalize commitments and execute the transaction' },
        { title: 'Grow', description: 'Monitor performance and support project expansion' },
      ],
    },
    featured: {
      eyebrow: 'FEATURED OPPORTUNITY',
      title: 'This period’s featured opportunity',
      description: 'An investment file distinguished by its scale, evidence and readiness for deeper review.',
      capital: 'Capital required',
      stage: 'Project stage',
      type: 'Investment type',
      location: 'Location',
      return: 'Expected return',
      action: 'View opportunity',
    },
    insights: {
      eyebrow: 'REPORTS & INSIGHTS',
      title: 'Analysis for more precise decisions',
      description: 'Investment reports, market insight, entry guides and the latest economic analysis.',
      action: 'View all insights',
      readArticle: 'Read report',
    },
    institutions: {
      eyebrow: 'INSTITUTIONAL TRUST',
      title: 'A network built for international collaboration',
      description: 'Professional standards, institutional relationships and multi-market experience underpin every OBC interaction.',
    },
    finalCta: {
      eyebrow: 'START THE NEXT MOVE',
      title: 'Your next investment can start here',
      description: 'Find the right opportunity or prepare your project for access to international capital.',
      primaryAction: 'Explore opportunities',
      secondaryAction: 'Submit a project',
    },
  },
};
