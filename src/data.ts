import { Opportunity, ServiceItem, ArticleItem, TeamMember, Milestone, TargetRegion, FAQItem, Language } from './types';
import { images } from './images';
export { images };

import { 
  opportunitiesDataFA, 
  specialOpportunityFA, 
  servicesDataFA, 
  articlesDataFA, 
  targetRegionsDataFA, 
  teamMembersFA, 
  knowledgeAuthorsFA, 
  growthMilestonesFA, 
  faqListFA 
} from './i18n/data_fa';

import { 
  opportunitiesDataAR, 
  specialOpportunityAR, 
  servicesDataAR, 
  articlesDataAR, 
  targetRegionsDataAR, 
  teamMembersAR, 
  knowledgeAuthorsAR, 
  growthMilestonesAR, 
  faqListAR 
} from './i18n/data_ar';

import { 
  opportunitiesDataEN, 
  specialOpportunityEN, 
  servicesDataEN, 
  articlesDataEN, 
  targetRegionsDataEN, 
  teamMembersEN, 
  knowledgeAuthorsEN, 
  growthMilestonesEN, 
  faqListEN 
} from './i18n/data_en';

export const partnerLogos = [
  { name: 'IFC', subtitle: 'International Finance Corporation • World Bank Group' },
  { name: 'ADB', subtitle: 'ASIAN DEVELOPMENT BANK' },
  { name: 'European Bank', subtitle: 'EBRD • European Bank for Reconstruction' },
  { name: 'JICA', subtitle: 'Japan International Cooperation Agency' },
  { name: 'Proparco', subtitle: 'GROUPE AFD' },
  { name: 'IsDB', subtitle: 'Islamic Development Bank • البنك الإسلامي للتنمية' }
];

export function getLocalizedData(lang: Language) {
  if (lang === 'AR') {
    return {
      opportunities: opportunitiesDataAR,
      specialOpportunity: specialOpportunityAR,
      services: servicesDataAR,
      articles: articlesDataAR,
      targetRegions: targetRegionsDataAR,
      teamMembers: teamMembersAR,
      knowledgeAuthors: knowledgeAuthorsAR,
      growthMilestones: growthMilestonesAR,
      faqList: faqListAR,
      partnerLogos
    };
  }
  if (lang === 'EN') {
    return {
      opportunities: opportunitiesDataEN,
      specialOpportunity: specialOpportunityEN,
      services: servicesDataEN,
      articles: articlesDataEN,
      targetRegions: targetRegionsDataEN,
      teamMembers: teamMembersEN,
      knowledgeAuthors: knowledgeAuthorsEN,
      growthMilestones: growthMilestonesEN,
      faqList: faqListEN,
      partnerLogos
    };
  }
  return {
    opportunities: opportunitiesDataFA,
    specialOpportunity: specialOpportunityFA,
    services: servicesDataFA,
    articles: articlesDataFA,
    targetRegions: targetRegionsDataFA,
    teamMembers: teamMembersFA,
    knowledgeAuthors: knowledgeAuthorsFA,
    growthMilestones: growthMilestonesFA,
    faqList: faqListFA,
    partnerLogos
  };
}

// Default export for backward compatibility
export const opportunitiesData = opportunitiesDataFA;
export const specialOpportunity = specialOpportunityFA;
export const servicesData = servicesDataFA;
export const articlesData = articlesDataFA;
export const targetRegionsData = targetRegionsDataFA;
export const teamMembers = teamMembersFA;
export const knowledgeAuthors = knowledgeAuthorsFA;
export const growthMilestones = growthMilestonesFA;
export const faqList = faqListFA;
