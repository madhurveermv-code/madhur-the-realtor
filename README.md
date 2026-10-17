# Madhur The Realtor — site files

Two files that matter:

- `index.html` — the page itself (design, form, everything except listings)
- `listings.js` — just the property data. This is the only file you'll usually touch.

Three more files are included for search engines and AI assistants (`robots.txt`,
`sitemap.xml`, `llms.txt`). You don't need to edit these day to day — see "Search and AI
visibility" below for the one thing in `llms.txt` worth updating once you have it.

## Deploy (same flow as Lead Bridge Systems)

1. Create a new GitHub repo (e.g. `madhur-the-realtor`), push these two files to it.
2. In Cloudflare Pages, connect that repo. No build command needed, no build output
   directory needed (leave both blank, or set output directory to `/`) since this is
   plain static HTML with no build step.
3. Point your domain at the Cloudflare Pages project the same way you did for LBS.

## Before you go live

Open `index.html`, find this line near the bottom (inside the `<script>` tag):

```js
var WHATSAPP_NUMBER = "91XXXXXXXXXX"; // TODO: replace with real number
```

Replace `91XXXXXXXXXX` with your real WhatsApp number: country code + number, digits
only, no spaces or symbols (e.g. `919876543210`). Commit and push; Cloudflare Pages
redeploys automatically.

## Updating listings

Open `listings.js`. Each property is one block:

```js
{
  tag: "Land parcel",
  title: "Naina Tikkar Hilltop Parcel",
  location: "Naina Tikkar",
  size: "19 Bigha 11 Biswa",
  price: "₹1 crore per bigha",
  description: "A rare, large-format land parcel...",
  status: "Available, site visit on request",
  image: "images/naina-tikkar.jpg"
}
```

To add a property: copy a block, change the values, add a comma after the `}` of the
block before it. To remove one: delete its block (and the trailing comma if it was
the last one). To update one: just edit the text inside the quotes.

Commit and push. Cloudflare Pages picks it up within a minute or two, no other step
needed.

## Adding photos

Create a folder called `images` next to `index.html` and `listings.js`, and drop each
listing's photo in there. Then point that listing's `image` field at the filename, e.g.
`image: "images/naina-tikkar.jpg"`.

One photo per listing is all the page shows. If a listing doesn't have a photo yet, set
`image: null` and the card will show a clean "Photos on request" placeholder instead of
a broken image, so nothing looks wrong, you can add the real photo any time by editing
that one line.

## Search and AI visibility

`index.html` already has a title, description, and structured data (the hidden
`<script type="application/ld+json">` blocks) describing the business and the current
listings, so Google and AI assistants like ChatGPT or Claude can read your prices and
locations directly instead of guessing.

The one thing to fix in `llms.txt` once you have it: find the line that says
`Email: TO CONFIRM` and replace it with your real email address (or delete the line if
you don't want to list one). If you also want your Instagram and Facebook linked from the
structured data, tell me the page URLs and I'll add them in.

Whenever you add, remove, or change a listing's price in `listings.js`, the matching entry
in the structured data block near the top of `index.html` should be updated to match, so
the two don't drift out of sync. Flag it and I'll keep them in step.
