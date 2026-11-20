# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/taufan98/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/taufan98/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up the world news of **Friday 20 November 2026**, built for the make.fun competition [news-image-20261120](https://make.fun/bounty/news-image-20261120) ("Sum up 20 November's world news in one image").

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The image

A newspaper front page for **Friday 20 November 2026**, drawn with Python (PIL) from the day's reporting:

1. **Trump puts the Iran decision off to 2027** — "We'll see what happens after Jan 1," the president says; in no rush on new strikes (Reuters).
2. **Voyager 1 passes one light-day** — NASA confirms the 1977 probe is the first craft 16 billion miles from Earth.
3. **Cyclone Akvan bears down on Odisha** — 300,000 evacuated as the storm nears India's east coast.
4. **Europe ready for talks with Russia** — leaders say they are open to negotiations to end the war in Ukraine (BBC).
5. **Hayabusa2 drops its asteroid landing** — engine trouble forces Japan's probe to abandon its touchdown plan.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. No network; deterministic — every run writes the same bytes.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=va8excfs&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
