# bigfive-open

Open-source **[Big Five personality test](https://bigfivepersonality.me)** — questions, scoring algorithm, and TypeScript types based on the public-domain IPIP-50 inventory. This is the engine behind [bigfivepersonality.me](https://bigfivepersonality.me), a free, anonymous, no-sign-up Big Five test.

[![Live demo](https://img.shields.io/badge/live%20demo-bigfivepersonality.me-6d5efc)](https://bigfivepersonality.me)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Questions](https://img.shields.io/badge/items-IPIP--50-blue)](https://ipip.ori.org/new_ipip-50-item-scale.htm)
[![Types](https://img.shields.io/badge/TypeScript-strict-3178c6)](./tsconfig.json)

---

## Why

Existing open Big Five implementations are either heavy full-stack apps or unmaintained. This repo is the opposite — just the **core** (items + scoring) in plain TypeScript, zero runtime dependencies, so you can drop it into any project.

Use it to build:

- A personality test web app
- A research tool or survey
- A Discord / Slack bot
- A mobile app
- An internal HR / team-building tool

## What's inside

```
src/
  data/questions.ts   # IPIP-50 items (public domain, with OCEAN + keying)
  scoring.ts          # reverse-score, raw score, 0–100 normalize, low/medium/high bands
  index.ts            # public API
tests/
  scoring.test.ts     # algorithm invariants
```

No React. No Next.js. No i18n framework. Just functions and types.

## Install

```bash
# via git (until published to npm)
pnpm add github:KatherineGuoGuo/bigfive-open
```

## Usage

```ts
import { QUESTIONS, calculateAllScores, type Answers } from 'bigfive-open';

// Collect user responses on a 1–5 Likert scale, keyed by question id
const answers: Answers = {};
for (const q of QUESTIONS) {
  answers[q.id] = 3; // user answer goes here
}

const scores = calculateAllScores(answers);
// {
//   E: { score: 50, rawScore: 30, level: 'medium' },
//   A: { score: 50, rawScore: 30, level: 'medium' },
//   C: { score: 50, rawScore: 30, level: 'medium' },
//   N: { score: 50, rawScore: 30, level: 'medium' },
//   O: { score: 50, rawScore: 30, level: 'medium' },
// }
```

### Scoring details

- **Items**: 50 (10 per domain)
- **Scale**: 1 (Strongly Disagree) → 5 (Strongly Agree)
- **Reverse-keying**: minus-keyed items are flipped (1↔5, 2↔4, 3→3) before summing
- **Raw score per domain**: 10–50
- **Normalized score**: 0–100, rounded
- **Level bands**: `low` ≤ 35 · `medium` 36–65 · `high` ≥ 66

## Scientific basis

The item pool is from the **International Personality Item Pool (IPIP)**, a public-domain collection curated by Lewis R. Goldberg and colleagues for open psychological research.

- IPIP-50 source: <https://ipip.ori.org/new_ipip-50-item-scale.htm>
- Goldberg, L. R. (1992). *The development of markers for the Big-Five factor structure.* Psychological Assessment, 4, 26–42.
- Goldberg, L. R., Johnson, J. A., Eber, H. W., Hogan, R., Ashton, M. C., Cloninger, C. R., & Gough, H. G. (2006). *The International Personality Item Pool and the future of public-domain personality measures.* Journal of Research in Personality, 40, 84–96.

## Disclaimer

This test is for self-reflection and educational purposes. It is **not a clinical instrument** and should not be used to diagnose mental-health conditions. For clinical use, consult a licensed psychologist and use a validated, scored inventory (e.g. NEO-PI-R).

## Contributing

Contributions welcome. Easiest wins:

- **Add translations** — drop a new file under `src/data/translations/<lang>.json` (open an issue first)
- **Report bugs** in scoring or documentation
- **Citations** — if you've published work using this, PR a link

Please keep the core dependency-free.

## Related

- **Live demo — [take the Big Five personality test](https://bigfivepersonality.me)** (free, anonymous, no sign-up)
- [The Big Five personality traits explained](https://bigfivepersonality.me/big-five-personality-traits) — the OCEAN model and each of the five dimensions
- [How to interpret your Big Five scores](https://bigfivepersonality.me/big-five-score-interpretation) — what low / medium / high mean per domain
- IPIP (authoritative source): <https://ipip.ori.org/>

## License

[MIT](./LICENSE). The IPIP-50 item set is in the public domain.
