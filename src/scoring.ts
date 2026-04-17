/**
 * Big Five Personality Test Scoring
 *
 * IPIP-50 scoring algorithm. Each domain has 10 items; minus-keyed items are
 * reverse-scored (1→5, 2→4, 3→3, 4→2, 5→1) before summing.
 * Raw score range: 10–50. Normalized score range: 0–100.
 */

import { DOMAIN_QUESTIONS, type Domain, QUESTIONS } from './data/questions.ts';

export type Level = 'low' | 'medium' | 'high';

export interface DomainScore {
  score: number;
  rawScore: number;
  level: Level;
}

export interface Scores {
  E: DomainScore;
  A: DomainScore;
  C: DomainScore;
  N: DomainScore;
  O: DomainScore;
}

export type Answers = Record<number, 1 | 2 | 3 | 4 | 5>;

export function reverseScore(value: number): number {
  return 6 - value;
}

export function calculateDomainRawScore(
  answers: Answers,
  domain: Domain
): number {
  const domainItems = DOMAIN_QUESTIONS[domain];
  let score = 0;

  for (const itemNum of domainItems.plus) {
    if (answers[itemNum] !== undefined) {
      score += answers[itemNum];
    }
  }

  for (const itemNum of domainItems.minus) {
    if (answers[itemNum] !== undefined) {
      score += reverseScore(answers[itemNum]);
    }
  }

  return score;
}

export function normalizeScore(rawScore: number): number {
  return Math.round(((rawScore - 10) / 40) * 100);
}

export function getLevel(score: number): Level {
  if (score <= 35) return 'low';
  if (score <= 65) return 'medium';
  return 'high';
}

export function calculateDomainScore(
  answers: Answers,
  domain: Domain
): DomainScore {
  const rawScore = calculateDomainRawScore(answers, domain);
  const score = normalizeScore(rawScore);
  const level = getLevel(score);
  return { score, rawScore, level };
}

export function calculateAllScores(answers: Answers): Scores {
  return {
    E: calculateDomainScore(answers, 'E'),
    A: calculateDomainScore(answers, 'A'),
    C: calculateDomainScore(answers, 'C'),
    N: calculateDomainScore(answers, 'N'),
    O: calculateDomainScore(answers, 'O'),
  };
}

export function isTestComplete(answers: Answers): boolean {
  return Object.keys(answers).length === QUESTIONS.length;
}

export function getCompletionPercentage(answers: Answers): number {
  return Math.round((Object.keys(answers).length / QUESTIONS.length) * 100);
}

export function isValidAnswer(value: unknown): value is 1 | 2 | 3 | 4 | 5 {
  return (
    typeof value === 'number' &&
    value >= 1 &&
    value <= 5 &&
    Number.isInteger(value)
  );
}

export function getUnansweredCount(answers: Answers): number {
  return QUESTIONS.length - Object.keys(answers).length;
}
