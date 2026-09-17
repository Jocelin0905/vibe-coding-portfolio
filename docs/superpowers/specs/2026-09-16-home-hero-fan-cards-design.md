# Home Hero Fan Cards Design

## Goal

Make the homepage feel like Jocelin's personal product lab by replacing the resume-like hero copy and presenting all three shipped products as a restrained, tactile fan of cards.

## Scope

- Change only the homepage hero copy and hero project presentation.
- Keep project data, case studies, routes, statistics, and downstream homepage sections unchanged.
- Give Life Roulette an upper-left image focal point anywhere its wide screenshot is cropped.

## Layout

Desktop uses a two-column hero. The right column contains three equally sized linked project cards: Life Progress rotated slightly left, Life Price centered and layered in front, and Life Roulette rotated slightly right. Hierarchy comes only from position, rotation, and z-index—not size. All cards receive only a subtle lift and scale on hover.

At 640px and below, the fan becomes a horizontal snap strip of upright cards. This preserves image readability and touch targets without horizontal page overflow.

## Visual Direction

Minimal editorial portfolio with generous space, restrained borders, warm paper-like surfaces, and low-intensity motion. The cards should read as finished products spread across a desk, not a carousel or decorative 3D scene.

## Accessibility and Motion

Each card is a descriptive internal link. Keyboard focus receives the same clear elevation cue as hover. Existing reduced-motion behavior removes the transition. Images retain meaningful alt text.

## Verification

- Automated tests assert the new copy and three hero project links.
- Browser verification covers 320, 375, 390, 430, tablet, and desktop widths.
- Life Roulette's cropped image uses an upper-left focal point.
- Existing routes, tests, and production build remain green.
