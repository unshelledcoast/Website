# Enlightenment Educator — Nick Rosado

Static site built with **Eleventy (11ty)** + **Decap CMS**, hosted on **Netlify**.

---

## Project Structure

```
/
├── index.njk                  ← Main site template (edit for layout changes)
├── blog.njk                   ← Blog placeholder page → /blog/
├── youtube.njk                ← YouTube placeholder page → /youtube/
├── .eleventy.js               ← Eleventy config + custom filters
├── netlify.toml               ← Netlify build settings
├── package.json
├── .gitignore
│
├── _data/                     ← All CMS-editable content (JSON)
│   ├── announcement.json
│   ├── hero.json
│   ├── intro.json
│   ├── featured.json
│   ├── quote.json
│   ├── enroll.json
│   ├── about.json
│   └── courses/
│       ├── iliad.json
│       ├── divine-comedy.json
│       ├── aeneid.json
│       └── paradise-lost.json
│
└── admin/
    ├── index.html             ← Decap CMS UI
    └── config.yml             ← CMS field definitions
```

---

## One-Time Setup (local)

```bash
# 1. Clone your repo
git clone https://github.com/unshelledcoast/Website.git
cd Website

# 2. Install dependencies
npm install

# 3. Run the dev server (hot-reloads on _data changes)
npm start
# → Site: http://localhost:8080
# → CMS admin: http://localhost:8080/admin/
```

---

## Connecting Decap CMS to Netlify

### Step 1 — Enable Netlify Identity

1. Go to your site in the **Netlify dashboard**
2. **Site configuration → Identity → Enable Identity**
3. Under **Registration**, set to **Invite only**
4. **Invite yourself** via email

### Step 2 — Enable Git Gateway

Still in Identity settings:
1. Scroll to **Services → Git Gateway → Enable Git Gateway**
2. This lets the CMS commit directly to your GitHub repo

### Step 3 — Accept your invite

Click the link in the email. You'll be redirected to your live site
and logged in automatically.

### Step 4 — Access the CMS

Go to `https://enlightenmenteducator.com/admin/`

---

## Using the CMS

Every editable section of the site has its own panel in the CMS:

| CMS Panel | Controls |
|-----------|----------|
| **Announcement Bar** | Banner text, link |
| **Hero Section** | Title, subtitle, buttons |
| **Intro Section** | Heading, two paragraphs |
| **Featured Course** | Iliad dark-bg section + syllabus accordion |
| **Pull Quote** | Quote text + attribution |
| **Enroll Section** | Heading, body, payment methods, email |
| **About Section** | Bio, photo upload |
| **Courses Grid → Homer's Iliad** | All course card fields |
| **Courses Grid → Dante's Divine Comedy** | All course card fields |
| **Courses Grid → Virgil's Aeneid** | All course card fields |
| **Courses Grid → Milton's Paradise Lost** | All course card fields |

**After saving in the CMS:** Decap commits the JSON to GitHub → Netlify
detects the push → rebuilds in ~30 seconds → live.

---

## Adding the Blog / YouTube pages (when ready)

Both placeholder pages already exist at `/blog/` and `/youtube/`.

When you're ready to build them out, replace the contents of
`blog.njk` or `youtube.njk` with real content, or add a Decap CMS
collection for blog posts in `admin/config.yml`.

---

## Syllabus Accordion — Markdown Format

In the CMS's **Syllabus Accordion** fields, use this mini-Markdown:

```
- Bullet item one
- Bullet item two
**Bold text** and *italic text* work inline.
Blank lines between paragraphs.
```

---

## Image Notes

Your four hero images (`homer.jpg`, `dante.jpg`, `virgil.jpg`,
`milton.jpg`) live at the repo root — keep them there.

CMS-uploaded images go into `images/uploads/` and are referenced
automatically when you use the CMS image picker.
