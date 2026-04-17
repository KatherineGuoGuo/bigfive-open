/**
 * IPIP-50 Big Five Personality Test Questions
 *
 * Source: International Personality Item Pool (IPIP)
 * URL: https://ipip.ori.org/new_ipip-50-item-scale.htm
 * License: Public Domain
 *
 * Citation:
 * Goldberg, L. R. (1992). The development of markers for the Big-Five factor structure.
 * Psychological Assessment, 4, 26-42.
 */

export type Domain = 'E' | 'A' | 'C' | 'N' | 'O';
export type Keyed = '+' | '-';

export interface Question {
  id: number;
  text: string;
  domain: Domain;
  keyed: Keyed;
}

export const DOMAINS = {
  E: {
    code: 'E',
    name: 'Extraversion',
    description: 'Reflects sociability, assertiveness, and positive emotions',
  },
  A: {
    code: 'A',
    name: 'Agreeableness',
    description: 'Reflects cooperation, trust, and consideration for others',
  },
  C: {
    code: 'C',
    name: 'Conscientiousness',
    description: 'Reflects organization, dependability, and self-discipline',
  },
  N: {
    code: 'N',
    name: 'Neuroticism',
    description:
      'Reflects emotional sensitivity and tendency to experience negative emotions',
  },
  O: {
    code: 'O',
    name: 'Openness',
    description:
      'Reflects creativity, curiosity, and openness to new experiences',
  },
} as const;

export const QUESTIONS: Question[] = [
  { id: 1, text: 'Am the life of the party', domain: 'E', keyed: '+' },
  { id: 2, text: 'Feel little concern for others', domain: 'A', keyed: '-' },
  { id: 3, text: 'Am always prepared', domain: 'C', keyed: '+' },
  { id: 4, text: 'Get stressed out easily', domain: 'N', keyed: '+' },
  { id: 5, text: 'Have a rich vocabulary', domain: 'O', keyed: '+' },
  { id: 6, text: "Don't talk a lot", domain: 'E', keyed: '-' },
  { id: 7, text: 'Am interested in people', domain: 'A', keyed: '+' },
  { id: 8, text: 'Leave my belongings around', domain: 'C', keyed: '-' },
  { id: 9, text: 'Am relaxed most of the time', domain: 'N', keyed: '-' },
  { id: 10, text: 'Have difficulty understanding abstract ideas', domain: 'O', keyed: '-' },
  { id: 11, text: 'Feel comfortable around people', domain: 'E', keyed: '+' },
  { id: 12, text: 'Insult people', domain: 'A', keyed: '-' },
  { id: 13, text: 'Pay attention to details', domain: 'C', keyed: '+' },
  { id: 14, text: 'Worry about things', domain: 'N', keyed: '+' },
  { id: 15, text: 'Have a vivid imagination', domain: 'O', keyed: '+' },
  { id: 16, text: 'Keep in the background', domain: 'E', keyed: '-' },
  { id: 17, text: "Sympathize with others' feelings", domain: 'A', keyed: '+' },
  { id: 18, text: 'Make a mess of things', domain: 'C', keyed: '-' },
  { id: 19, text: 'Seldom feel blue', domain: 'N', keyed: '-' },
  { id: 20, text: 'Am not interested in abstract ideas', domain: 'O', keyed: '-' },
  { id: 21, text: 'Start conversations', domain: 'E', keyed: '+' },
  { id: 22, text: "Am not interested in other people's problems", domain: 'A', keyed: '-' },
  { id: 23, text: 'Get chores done right away', domain: 'C', keyed: '+' },
  { id: 24, text: 'Am easily disturbed', domain: 'N', keyed: '+' },
  { id: 25, text: 'Have excellent ideas', domain: 'O', keyed: '+' },
  { id: 26, text: 'Have little to say', domain: 'E', keyed: '-' },
  { id: 27, text: 'Have a soft heart', domain: 'A', keyed: '+' },
  { id: 28, text: 'Often forget to put things back in their proper place', domain: 'C', keyed: '-' },
  { id: 29, text: 'Get upset easily', domain: 'N', keyed: '+' },
  { id: 30, text: 'Do not have a good imagination', domain: 'O', keyed: '-' },
  { id: 31, text: 'Talk to a lot of different people at parties', domain: 'E', keyed: '+' },
  { id: 32, text: 'Am not really interested in others', domain: 'A', keyed: '-' },
  { id: 33, text: 'Like order', domain: 'C', keyed: '+' },
  { id: 34, text: 'Change my mood a lot', domain: 'N', keyed: '+' },
  { id: 35, text: 'Am quick to understand things', domain: 'O', keyed: '+' },
  { id: 36, text: "Don't like to draw attention to myself", domain: 'E', keyed: '-' },
  { id: 37, text: 'Take time out for others', domain: 'A', keyed: '+' },
  { id: 38, text: 'Shirk my duties', domain: 'C', keyed: '-' },
  { id: 39, text: 'Have frequent mood swings', domain: 'N', keyed: '+' },
  { id: 40, text: 'Use difficult words', domain: 'O', keyed: '+' },
  { id: 41, text: "Don't mind being the center of attention", domain: 'E', keyed: '+' },
  { id: 42, text: "Feel others' emotions", domain: 'A', keyed: '+' },
  { id: 43, text: 'Follow a schedule', domain: 'C', keyed: '+' },
  { id: 44, text: 'Get irritated easily', domain: 'N', keyed: '+' },
  { id: 45, text: 'Spend time reflecting on things', domain: 'O', keyed: '+' },
  { id: 46, text: 'Am quiet around strangers', domain: 'E', keyed: '-' },
  { id: 47, text: 'Make people feel at ease', domain: 'A', keyed: '+' },
  { id: 48, text: 'Am exacting in my work', domain: 'C', keyed: '+' },
  { id: 49, text: 'Often feel blue', domain: 'N', keyed: '+' },
  { id: 50, text: 'Am full of ideas', domain: 'O', keyed: '+' },
];

export const DOMAIN_QUESTIONS: Record<
  Domain,
  { plus: number[]; minus: number[] }
> = {
  E: { plus: [1, 11, 21, 31, 41], minus: [6, 16, 26, 36, 46] },
  A: { plus: [7, 17, 27, 37, 42, 47], minus: [2, 12, 22, 32] },
  C: { plus: [3, 13, 23, 33, 43, 48], minus: [8, 18, 28, 38] },
  N: { plus: [4, 14, 24, 29, 34, 39, 44, 49], minus: [9, 19] },
  O: { plus: [5, 15, 25, 35, 40, 45, 50], minus: [10, 20, 30] },
};

export function getQuestionsByDomain(domain: Domain): Question[] {
  return QUESTIONS.filter((q) => q.domain === domain);
}

export function getQuestionById(id: number): Question | undefined {
  return QUESTIONS.find((q) => q.id === id);
}

export const TOTAL_QUESTIONS = QUESTIONS.length;
