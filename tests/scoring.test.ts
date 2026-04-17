import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import {
  calculateAllScores,
  calculateDomainRawScore,
  getLevel,
  normalizeScore,
  QUESTIONS,
  reverseScore,
  type Answers,
} from '../src/index.ts';

test('reverseScore maps 1→5, 3→3, 5→1', () => {
  assert.equal(reverseScore(1), 5);
  assert.equal(reverseScore(2), 4);
  assert.equal(reverseScore(3), 3);
  assert.equal(reverseScore(4), 2);
  assert.equal(reverseScore(5), 1);
});

test('normalizeScore maps raw 10→0, 30→50, 50→100', () => {
  assert.equal(normalizeScore(10), 0);
  assert.equal(normalizeScore(30), 50);
  assert.equal(normalizeScore(50), 100);
});

test('getLevel bands', () => {
  assert.equal(getLevel(0), 'low');
  assert.equal(getLevel(35), 'low');
  assert.equal(getLevel(36), 'medium');
  assert.equal(getLevel(65), 'medium');
  assert.equal(getLevel(66), 'high');
  assert.equal(getLevel(100), 'high');
});

test('all-3 answers produce a neutral score of 50 across all domains', () => {
  const answers: Answers = {};
  for (const q of QUESTIONS) answers[q.id] = 3;
  const scores = calculateAllScores(answers);
  for (const domain of ['E', 'A', 'C', 'N', 'O'] as const) {
    assert.equal(scores[domain].score, 50, `${domain} should be 50`);
    assert.equal(scores[domain].level, 'medium');
  }
});

test('all-5 on plus items and all-1 on minus items maxes every domain', () => {
  const answers: Answers = {};
  for (const q of QUESTIONS) answers[q.id] = q.keyed === '+' ? 5 : 1;
  const scores = calculateAllScores(answers);
  for (const domain of ['E', 'A', 'C', 'N', 'O'] as const) {
    assert.equal(scores[domain].rawScore, 50);
    assert.equal(scores[domain].score, 100);
    assert.equal(scores[domain].level, 'high');
  }
});

test('Extraversion raw score reflects reverse-keying', () => {
  const answers: Answers = {};
  for (const q of QUESTIONS) answers[q.id] = 3;
  // E plus: 5 items × 3 = 15; E minus: 5 items × reverse(3)=3 → 15. Total 30.
  assert.equal(calculateDomainRawScore(answers, 'E'), 30);
});
