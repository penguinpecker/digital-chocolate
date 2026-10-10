# Digital Chocolate

The studio website at https://digitalchocolate.co. Buildless HTML, CSS and a small contact-form script; deployed to the existing `digital-chocolate` Vercel project.

## Preview

```sh
python3 -m http.server 4000 --bind 127.0.0.1
```

Open http://localhost:4000. No dependencies or build step are required.

## Identity and content

- Approved identity: **03 / Soft Power**. Coral `#F45A42`, cream `#FFF0D6`, dark ink `#302721`. Artwork is in `assets/brand/`; the studio mark is `assets/icon-512.png`.
- Contact: `digitalchocolate@gmail.com`.
- X: https://x.com/digitchocolate.
- PenguCrush: **Beyond the Horizon**, Android 0.4.0, from the **24 September 2026** handoff in the local `pengucrush-evolution` project. Uses its current v2 expedition characters/icon, original Lilita One title styling, and v3 campaign screenshots. 100 levels, ten islands, nine board shapes. The build is not yet a public store release; the site labels it in development and does not distribute a debug APK.
- Hexit: presented for **Solana Seeker** per the studio direction. The current linked web build is on a different testnet, so the site says **Coming to Solana Seeker** and does not claim a released Seeker app or invent a store URL.
- Planes: retains its original artwork and existing Seeker dApp Store deep link.

## Contact behaviour

The contact form validates locally and opens a prefilled draft addressed to the studio. It does not send email or store submissions. The direct email link works without JavaScript.

## Assets

The studio wordmark and social art were generated from the approved concept with the built-in image generation tool. Existing game art is reused from the owner's local projects. Rubik and Lilita One are self-hosted; their font licences are in `assets/fonts/`.

## Deploy

Repository: https://github.com/penguinpecker/digital-chocolate. Keep the existing Vercel project connection and domain. Verify the linked project before deployment. Policy content is retained; the redesign changes its shared navigation and visual presentation.

## Game pages

Each game has a static directory route: `/pengucrush/`, `/hexit/`, `/planes/`. These work with the local Python preview server and Vercel. The former `/pengucrush.html` address redirects to its new page. The homepage gives all three games a full-width row and uses the studio's d mark in the hero.

Planes gameplay details come from `/Users/pp/planes-solana-seeker/README.md`; its promotional artwork is the owner's existing April 2026 missile-dodging illustration.
