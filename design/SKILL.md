---
name: tide-design
description: Use this skill to generate well-branded interfaces and assets for Tide (liquid staking + stable vaults on Vara Network), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Quick facts: dark-only brand — plum-charcoal inks (#211C30), periwinkle accent `--tide-400 #A3A4FF` + white support, Clash Display headlines / Clash Grotesk body (Fontshare CDN) / JetBrains Mono for all exact numbers. Sentence case, mechanism-over-hype copy, no emoji. Tokens live in `tokens/*.css` (entry: `styles.css`); React primitives in `components/`; full screens in `ui_kits/landing` and `ui_kits/app`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
