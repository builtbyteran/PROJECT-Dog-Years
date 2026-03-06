# 🐶 Dog 44 — Dog Years Calculator

A fun, interactive web app that converts your dog's age into human-equivalent "dog years" based on their size and weight class.

## Getting Started

No build step required — this is plain HTML, CSS, and JavaScript.
Try it out! ( https://builtbyteran.github.io/fetch-dog-years/ )

## Features

- **Age converter** — enter your dog's age and size to get their dog-year equivalent
- **Confetti celebration** — because your dog deserves it 🎉
- **Fun facts** — golden retriever facts on demand

## How It Works

The calculator uses a research-based conversion model:

| Age      | Dog Years                  |
| -------- | -------------------------- |
| 1 year   | 15                         |
| 2 years  | 24                         |
| 3+ years | 24 + (age - 2) × size rate |

Size multipliers (years per human year after age 2):

| Size   | Weight    | Rate |
| ------ | --------- | ---- |
| Small  | < 20 lbs  | 4.32 |
| Medium | 20–50 lbs | 5.29 |
| Large  | 50–90 lbs | 6.29 |
| Giant  | > 90 lbs  | 7.29 |

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- [Sour Gummy](https://fonts.google.com/specimen/Sour+Gummy) via Google Fonts
- [canvas-confetti](https://github.com/catdad/canvas-confetti) for the celebration effect

## Roadmap

- [ ] Loading spinner before confetti fires
- [ ] Fun facts rendered on button click
- [ ] Dog breed cards in the Programs section
- [ ] Responsive / mobile styles
