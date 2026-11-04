# Vibrant Electromechanical Contracting LLC — Website

Static website (plain HTML5, CSS3, vanilla JavaScript only). No database,
no build step, no paid theme, no subscription builder, no tracking scripts.
Ready to upload to Hostinger shared hosting as-is.

**Live domain assumed in meta tags and sitemap: `vibrant.ae` — confirm this
domain before launch (see the missing-info checklist below).**

## Contents

- `index.html` — Home: hero, stats strip, Why Choose Us, sectors preview,
  projects preview, contact call-to-action
- `about.html` — Intro, commitment, delivery process, company facts
- `services.html` — The 6 services + licence footnote
- `projects.html` — 22 completed + 3 ongoing projects
- `hse-quality.html` — QA/QC plan, HSE plan, ISO table
- `company-profile.html` — Company facts, ISO summary, working company-profile PDF download
- `contact.html` — Contact details, map, mailto proposal form (no third-party service)
- `404.html` — Not-found page
- `css/style.css` — All styles (brand variables at the top of the file)
- `js/main.js` — Mobile menu, footer year, mailto form handler
- `images/` — Logo, favicon, 12 project/site photographs, 17 branded placeholder tiles (dummy-01–17) for projects without a photograph
- `documents/` — Public company profile PDF (company-profile.pdf)
- `robots.txt`, `sitemap.xml`

## How to customize — exactly which file to edit

| What to change | File to edit |
|---|---|
| Logo (header + footer) | Replace `images/logo.png`. The current logo has a **white background**, so it is shown inside a white rounded container (see `.brand-logo` in `css/style.css`). If you later obtain a transparent logo, replace the file and remove the white background/padding from `.brand-logo` and `.footer-logo`. |
| Favicon | Replace `images/favicon.ico` and `images/favicon.png` (both derived from the logo). |
| Brand colours, fonts, spacing | `css/style.css`, `:root` variables at the top (`--gold`, `--navy-*`, `--font-*`, `--radius`, `--space-*`). |
| Images / project photos | Replace files in `images/` (keep the same filenames), or update the `src` values in `projects.html` / `index.html`. Projects without a photograph use a branded navy/gold placeholder tile (dummy-XX.jpg) carrying the project name — a designed placeholder, never a faked photograph. `project-10.jpg` is generic site work only: never caption it as a specific project. `project-11.jpg` (ADCG HQ meeting room) and `project-12.jpg` (ADCG HQ washroom) are the last two mappable photos in the PQP — `project-12.jpg` is only 154 px wide and will look soft at card size, and `project-11.jpg` carries a small baked-in Vibrant watermark. The cover composite with baked-in logo/text was **not** used on this site. |
| Services (names, scopes, sub-items) | The six service cards in `services.html`. Keep the licence footnote on that page in step with any change. |
| Projects (client, location, scope, year) | The project cards in `projects.html` (and the 4 featured cards in `index.html`). Years shown are the project-table years; see the checklist about confirming project years. |
| Contact details (phone, WhatsApp, email, address) | Every page carries the footer contact block, and `contact.html` carries the details cards and map panel. Search-and-replace across all `.html` files for: `+971 2 883 0313`, `+971 55 665 2211`, `info@vibrant.ae`, and the licence address. The WhatsApp link is `https://wa.me/971556652211` (also the floating button on every page). |
| Map | See "How to replace the map" below. |
| Downloads / company-profile PDF | See "Downloads" below. |
| Page titles / descriptions | The `<title>`, `<meta name="description">` and Open Graph tags in each page's `<head>`. |

## Hostinger upload steps

1. In Hostinger hPanel, open **File Manager** (or connect by FTP).
2. Open the domain's `public_html` folder for `vibrant.ae`.
3. Upload **all files and folders** from this site folder into `public_html`,
   keeping the structure (`css/`, `js/`, `images/`, `documents/` alongside
   the `.html` files). Do not upload this folder itself as a subfolder
   unless you want the site at `vibrant.ae/Vibrant_Website/`.
4. Confirm `index.html` is directly inside `public_html` — that is the
   file Hostinger serves for the bare domain.
5. Visit `https://vibrant.ae/` and click through every nav link, the
   floating WhatsApp button, and the Get Directions button.

## .ae domain connection steps

1. If the domain is registered elsewhere, point it to Hostinger: in the
   registrar's DNS settings, set the nameservers to the two Hostinger
   nameservers shown in hPanel (or, if you prefer to keep DNS at the
   registrar, set an `A` record for `@` and for `www` to the hosting
   account's IP address shown in hPanel).
2. In hPanel, add the domain under **Websites / Domains** if it is not
   already assigned to this hosting plan, and make sure its document root
   is the `public_html` folder you uploaded to.
3. Allow DNS propagation (usually minutes to a few hours), then confirm
   `https://vibrant.ae/` loads the new site, not a Hostinger placeholder.

## SSL / HTTPS steps

1. In hPanel, open **SSL** for the domain and install the free SSL
   certificate (Lifetime SSL where offered, otherwise Let's Encrypt).
2. Turn on **Force HTTPS** for the domain so all visits redirect to
   `https://`.
3. Re-check the site over `https://`: all embeds on this site already use
   `https` (Google Maps embed, WhatsApp, directions links), so no
   mixed-content warnings should appear.

## How to replace the map

The Contact page uses the user-supplied exact pin **24.479896, 54.357960**:

- Embed iframe: `https://maps.google.com/maps?q=24.479896,54.357960&output=embed`
- Get Directions: `https://www.google.com/maps/dir/?api=1&destination=24.479896,54.357960`

To replace it with a different location:

1. Open Google Maps, find the location, click **Share → Embed a map**,
   and copy the `src` URL from the embed code.
2. In `contact.html`, replace the `<iframe ... src="...">` value in the
   `.map-frame` block with the new `src`.
3. Update the Get Directions link (`MAP_DIR` in the same file and in the
   footer on every page) to the new destination coordinates or place.
4. Update the address text next to the map to match the new pin.

Live checks that remain for the site owner (not testable from here, and
**not** reported as passed): confirm the pin renders on the correct
building on the live site, and test the Get Directions button once live.

## Contact form — how it works (no third-party service)

The proposal form on `index.html` and `contact.html` works **without any
form service**. On submit, `js/main.js` builds a `mailto:` link addressed
to `info@vibrant.ae` (subject "New Proposal Request - [name]", body with
all five fields, cleanly labelled) and opens the **visitor's own email
app**. The email genuinely comes from the visitor's own email account
once they press Send. The plain `mailto:` form action is the fallback
when JavaScript is unavailable.

**Honest limitation — do not oversell this:** the form never sends
anything by itself. If the visitor has no email app configured, or
closes the compose window without pressing Send, nothing arrives, and
there is no dashboard or record of the attempt. That is a browser
security rule, not a bug: no website can silently send email from a
visitor's account without a service and the visitor's action.

If fully automatic sending is ever wanted later, the path is a free form
backend (Formspree free: 50 submissions/month, or Basin): point the form
`action` at the service endpoint, remove the mailto handler in
`js/main.js`, set the notification email to `info@vibrant.ae`, and test
a real submission end-to-end before claiming it works.

## Downloads

The public company-profile PDF is **live**: `documents/company-profile.pdf`
(4 pages — introduction, services, completed and ongoing projects, HSE &
quality, certifications, contact), linked from the download card on
`company-profile.html` and from the CTA band on `about.html`.
No internal pre-qualification document is offered on this site.

## Content rules applied on this site (do not undo casually)

- Project values are hidden everywhere; only client, location, scope and
  table year are shown.
- No founding-year claim and no invented history, clients or achievements.
- ISO details list only what the certificates prove (see checklist).
- The contact page publishes only the decided phone, WhatsApp, email and
  licence address — no other addresses, numbers, department addresses or
  office hours.
- All links are relative (except `tel:`, `mailto:`, `wa.me` and map links),
  so the site works from any folder or domain.

## Missing-info checklist — confirm with the company before / after launch

- [ ] **Confirm domain:** is `vibrant.ae` the correct live domain? Update
      meta tags, canonical URLs, `robots.txt` and `sitemap.xml` if not.
- [ ] **Confirm project years:** profile pages differ from the project
      tables for several projects — the site uses table years. Confirm
      which source is correct before treating any year as final.
- [ ] **ISO surveillance-date anomaly:** check with the certifier before
      relying on validity — the site shows only the dates printed on
      the certificates, and no surveillance-audit date is published
      anywhere on the site.
- [ ] **Authority registration re-confirmation:** a prior registration
      certificate on file expired on its own one-year term and is
      therefore **not** presented on this site as current. Re-confirm
      current status before adding any such claim.
- [ ] **Classification certificate missing:** the three licence activities
      marked as requiring a classification certificate from the Department
      of Urban Planning and Municipalities are flagged as such on the
      Services and Company Profile pages. Supply the certificate before
      describing them as unconditionally licensed.
- [x] **Public profile PDF:** live — documents/company-profile.pdf, linked from company-profile.html and the About page CTA.
- [ ] **WhatsApp already supplied — do not re-ask:** +971 55 665 2211
      (`https://wa.me/971556652211`) is live on every page, the Contact
      page and the footer.
- [ ] **Map live checks:** confirm the pin renders on the correct building
      and test Get Directions once live (see above).
- [x] **Proposal form:** works via the visitor's own email app (mailto, no third-party service). Automatic sending would need a form backend — see "Contact form" above.

## Build notes

- Logo (revised build): the current logo is the detailed logo from
  `DETAILED_LOGO.pdf` (orange circle, white pulse line, "VIBRANT" arched
  above, "ELECTRO MECHANICAL CONTRACTING LLC" curved below), rendered
  at high resolution. A transparency attempt (rembg, local u2net model)
  removed ALL of the lettering, so it was rejected: the white-background
  version is used inside a white rounded container in the header and
  footer, sized by height because the badge is near-square. Replace with
  a genuinely transparent logo only if one is supplied with its text
  intact (see "How to customize").
- Images were copied from the extracted project photographs and resized
  to a maximum width of 1200 px (JPEG quality 82) for web use. The cover
  composite with baked-in logo/text was not used; the home hero uses a
  project photograph instead.
- Verified by the builder before handover: every internal link target
  exists, every image `src` resolves to a file in `images/`, and the
  `tel:` / `mailto:` / map / WhatsApp links match the decided values
  exactly. Forbidden-content greps were run (see handover report).
