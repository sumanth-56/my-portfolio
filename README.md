# Developer Portfolio

My personal portfolio site — a single-page app with a dark glass/emerald look. Built it to showcase my projects and skills without needing a framework.

Live: [my-portfolio-sumanth.vercel.app](https://my-portfolio-chi-sepia-28.vercel.app/)

## What's in it
- Single page, no reloads — tabs are switched with plain JS, not a router
- Dark theme with glassmorphism panels (blurred backgrounds, emerald accents `#10b981` on a `#020617` background)
- Canvas background with floating code symbols (`</>`, `{ }`, `>_`) drifting around
- Typewriter effect on the hero section that cycles through my roles/skills
- Mailto link for contact, smooth scroll navigation
- Responsive — works fine on phone, tablet, desktop

## Built with
- HTML/CSS/JS, no build step
- Tailwind CSS (CDN, not compiled)
- SVGs + Lucide icons
- Hosted on Vercel, deployed from GitHub

## Files
my-portfolio/
 ├── index.html # page structure and content
 ├── style.css # glass panels, canvas styling, misc layout stuff
 ├── script.js # tab switching, canvas animation, typewriter, etc.
 ├── naruto-coder.png 
 └── README.md
