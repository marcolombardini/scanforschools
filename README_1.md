# Scan for Schools

The website for **Scan for Schools** — a community fundraiser that places receipt collection boxes in local grocery stores. Shoppers drop in their receipts, volunteers scan them through Box Tops for Education, and the proceeds go straight to local schools.

Live site: **[scanforschools.com](https://scanforschools.com)**

Currently supporting Locust Valley Elementary, Bayville Primary, Bayville Intermediate School, and Deasy Elementary School — with more joining all the time.

---

## How the site is built

This is a plain **static website** — no framework, no build step, no server. It's hosted free on **GitHub Pages** straight from the `main` branch.

The site is a single HTML file that reads all of its live content (money raised, receipts scanned, participating stores, and supported schools) from a separate **`data.js`** file. That means you almost never touch the HTML — all routine updates happen in `data.js`.

---

## Files in this repo

| File | What it is |
|------|-----------|
| `index.html` | The entire website — layout, styles, and behavior in one file. You rarely need to edit this. |
| `data.js` | **The one file you'll edit regularly.** Holds the money raised, receipt count, stores, and schools. |
| `logo.svg` | The Scan for Schools badge (receipt with a yellow scan beam). Reusable for signage, print, or social. |
| `favicon.svg` | Browser-tab icon (modern browsers). |
| `favicon-32.png` | Fallback tab icon. |
| `apple-touch-icon.png` | Home-screen icon for iPhones/iPads. |
| `.nojekyll` | Empty file that tells GitHub Pages to skip Jekyll. **Required** — see below. |

---

## Making updates (the easy way)

Everything you'll change day to day lives in **`data.js`**. To edit it on GitHub: open `data.js` → click the pencil (**Edit**) icon → make your change → **Commit changes**. The site redeploys in a minute or two.

### Update the money raised or receipt count
Change the numbers:

```js
raisedUSD: 4.30,        // total dollars raised
receiptsScanned: 16,    // total receipts scanned
```

### Add or remove a store
Each store is one line in the `stores` list. To **add** one, copy an existing line and edit the details (keep the comma at the end). To **remove** one, delete its whole line.

```js
stores: [
  { name: "Green Valley Grocers", area: "Mahwah, NJ", since: "2026" },
],
```

If the list is empty, the site shows a "be the first store in town" prompt instead.

### Add a school
Add the name to the `schools` list — just quotes and a comma:

```js
schools: [
  "Locust Valley Elementary",
  "Another School Name",
],
```

`data.js` also has plain-English instructions written right into the file itself.

---

## Deploying / hosting

The site is served by **GitHub Pages** from the root of the `main` branch.

**To confirm or re-enable it:** repo **Settings → Pages** → set **Source** to *Deploy from a branch*, **Branch** = `main`, folder = `/ (root)`. You can watch deploy status under the **Actions** tab.

**To publish any change:** upload or edit files in the repo and commit. Pages rebuilds automatically.

### Why `.nojekyll` matters
By default GitHub Pages runs everything through Jekyll, which can break a plain HTML site (and did, on the first deploy). The empty **`.nojekyll`** file at the repo root disables Jekyll so the site serves as-is. **Don't delete it.**

---

## Contact form (Formspree)

The contact form submits through [Formspree](https://formspree.io) — a free service that emails you each submission, since a static site has no server of its own.

**One-time setup:** create a free Formspree account, make a form to get its ID, then in `index.html` replace the placeholder `YOUR_FORM_ID` with your real ID and commit. Until that's done, the form won't deliver messages.

---

## Custom domain (scanforschools.com)

To point the domain at this site, add these DNS records at your domain registrar:

- **Four A records** for the apex domain (`@`), pointing to GitHub's Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **One CNAME** for `www` → `<your-github-username>.github.io`

Then set the custom domain under **Settings → Pages**, and enable **Enforce HTTPS** once the certificate provisions.

> Note: GitHub's IP addresses can change over time — check the current values in [GitHub's Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) before setting them.

---

## Design

- **Palette:** register green + marker yellow
- **Logo:** a receipt with a yellow scan beam on a green rounded badge

---

## About

Scan for Schools was started by a local high school student who wanted to give back to the community — turning everyday grocery receipts into real funding for neighborhood schools, one box at a time.
