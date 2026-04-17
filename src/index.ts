export {
  DOMAINS,
  DOMAIN_QUESTIONS,
  QUESTIONS,
  TOTAL_QUESTIONS,
  getQuestionById,
  getQuestionsByDomain,
} from './data/questions.ts';
export type { Domain, Keyed, Question } from './data/questions.ts';

export {
  calculateAllScores,
  calculateDomainRawScore,
  calculateDomainScore,
  getCompletionPercentage,
  getLevel,
  getUnansweredCount,
  isTestComplete,
  isValidAnswer,
  normalizeScore,
  reverseScore,
} from './scoring.ts';
export type { Answers, DomainScore, Level, Scores } from './scoring.ts';
