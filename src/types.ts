export type Language = 'FA' | 'AR' | 'EN';

export type NavigationTab = 
  | 'خانه' 
  | 'درباره ما' 
  | 'فرصت‌های سرمایه‌گذاری' 
  | 'راهکارها و خدمات' 
  | 'مناطق هدف' 
  | 'دانش و بینش' 
  | 'تماس با ما'
  | 'home'
  | 'about'
  | 'opportunities'
  | 'services'
  | 'regions'
  | 'knowledge'
  | 'contact';

export interface Opportunity {
  id: string;
  title: string;
  category: string;
  location: string;
  stage: string;
  requiredCapital: string;
  expectedIrr: string;
  paybackPeriod: string;
  riskLevel: 'پایین' | 'متوسط' | 'بالا' | 'Low' | 'Medium' | 'High' | 'منخفض' | 'متوسط' | 'مرتفع' | string;
  image: string;
  description: string;
  isSpecial?: boolean;
  country?: string;
  type?: string;
  status?: string;
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  date: string;
  image: string;
  readTime: string;
  views?: string;
  likes?: number;
  category?: string;
  region?: string;
  contentType?: string;
  summary: string;
  content: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin?: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export interface TargetRegion {
  id: string;
  name: string;
  desc: string;
  coordinates: { x: number; y: number };
  activeProjects: number;
  keySectors: string[];
  highlights: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

