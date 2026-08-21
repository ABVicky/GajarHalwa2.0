# 🥕 Gajar Halwa — Wedding Socials

> **"At Gajar Halwa, we don’t just capture moments — we create memories that trend. From candid reels to instant story drops, we bring your wedding alive online — within hours."**

A bold, modern, editorial digital experience crafted for **Gajar Halwa — Wedding Socials**. Built with vibrant solid color transitions, folk-modern display typography, a centered split navbar with a hanging brand emblem, real auto-looping wedding reels with single-stream audio controls, interactive gated pricing, and a curated editorial art wall — avoiding generic wedding templates, luxury beige tropes, and boring rectangular grids.

---

## 🎨 Creative Direction & Brand Identity

The visual language is extracted directly from the iconic **Gajar Halwa** brand emblem:

| Color Token | Hex Code | Visual Role |
| :--- | :--- | :--- |
| **Gajar Teal** | `#136B69` / `#0B4443` | Hero base, solid transition blocks, brand anchors |
| **Warm Cream** | `#FCE6BA` / `#FFF7E8` | Editorial art wall fields, brand statements, cards |
| **Bright Orange** | `#F58220` | Marigold accents, CTAs, Process section highlight |
| **Hot Rani Pink** | `#E93C79` | High-energy moment tags, badge accents |
| **Fresh Green** | `#109B53` | Mehendi freshness, confirmation badges |
| **Deep Wedding Red** | `#581414` | High-contrast borders, display typography, Sindoor depth |

### 🔤 Typography
* **Display Folk Serif**: `Calistoga` / `Abril Fatface` — Grand Indian display serif with thick-thin editorial contrast.
* **Heavy Display**: `Righteous` / `Syne` — Bold contemporary festival poster display.
* **Body & Labels**: `Outfit` — Modern, ultra-clean tracked editorial sans-serif.

---

## 🔊 Interactive Features & Video Audio Controls

* **Universal Sound Toggle**: Every single video element across `index.html` and `packages.html` is equipped with a round floating sound control button (`🔇` / `🔊`).
* **Exclusive Single-Audio Playback (Auto-Mute)**: Unmuting any video automatically mutes all other active videos on the page so that audio streams never overlap or clash.
* **Interactive Gated Pricing Modal**: On `packages.html`, package charges are gated behind a quick lead capture modal (Name, Event Date, City, Phone). Unlocking a package reveals its price and auto-configures a customized WhatsApp booking link.

---

## 🏛️ Website Architecture

### 1. Homepage (`index.html`)
1. **Centered Split Navbar**:
   - Centered protruding brand logo emblem hanging across the navbar border.
   - Symmetrical split menu: `STORY` & `CONTACT` (Left) | `PACKAGES` & `WORK` (Right).
   - Animated mobile hamburger drawer with frosted backdrop blur on smaller viewports.
2. **Poster-Style Hero**:
   - Oversized asymmetric typography (`GAJAR HALWA / WEDDING SOCIALS`).
   - Scalloped editorial reel frame featuring high-definition auto-looping wedding footage with interactive sound toggle.
   - Instant action triggers: `LET'S TALK →` and `EXPLORE PACKAGES`.
3. **Brand Statement** *(Solid Warm Cream)*:
   - *"WE DON'T JUST COVER WEDDINGS. WE MAKE THEM FEEL LIKE YOU."*
   - Unfiltered candids, real human euphoria, zero corporate fluff.
4. **The Wedding Edit** *(Curated Editorial Art Wall)*:
   - **Video-first showcase with real wedding reels**: Baraat entries, Haldi ceremonies, Sangeet dance floors, Mehendi art, and Pagdi tying.
   - Dynamic rhythm of scale, vertical crops, wide frames, typographic quote breaks, and minimal moment labels with individual sound controls.
5. **What Gajar Halwa Does** *(Solid Bright Orange)*:
   - Three bold pillars: **SHOOT.** / **EDIT.** / **AMPLIFY.**
6. **Selected Work**:
   - Full cinematic frame (`Gajar Halwa_Horizontal.mp4`) and high-fashion editorial moments with direct links to collections.
7. **Interactive Inquiry & Contact Section** *(Solid Gajar Teal)*:
   - Direct WhatsApp & Email inquiry buttons.
   - Fully responsive inquiry form with dynamic package pre-selection and automatic WhatsApp message formatting.
8. **Footer**:
   - Brand logo emblem, tagline (*"MADE FOR MOMENTS THAT DON'T HAPPEN TWICE."*), and social channel links.

---

### 2. Packages Page (`packages.html`)

Three large solid color editorial compositions (with gated price unlocking and instant WhatsApp booking links):

#### 🍨 Collection 01: THE HALWA BITE (SILVER)
* **Commercials**: `₹11,001 + GST` *(Unlocked via Lead Form)*
* **Ideal For**: Intimate Weddings or Pre-Wedding Functions
* **Deliverables**:
  * Coverage of 1 event
  * 5 reels (Instagram-style)
  * Instant stories (edited & uploaded within hours of event)
  * Basic coordination with decor & photography teams

#### 🍧 Collection 02: THE KESARIYA JALEBI (GOLD) — *Signature*
* **Commercials**: `₹21,001 + GST` *(Unlocked via Lead Form)*
* **Ideal For**: Full Wedding Weekends / 2-Day Coverage
* **Deliverables**:
  * Coverage of 2 events
  * 10 reels (mix of trending formats + couple-focused + family highlights)
  * Instant stories (live edits & uploads during events)
  * Wedding page management (uploads, aesthetic captions, community engagement)
  * Coordination with photography, decor & music teams

#### 👑 Collection 03: THE SHAHI TUKDA (PLATINUM) — *Bespoke*
* **Commercials**: `₹51,001 + GST` *(Unlocked via Lead Form)*
* **Ideal For**: Destination or High-Content Weddings Wanting Maximum Social Buzz
* **Deliverables**:
  * Coverage of 4 events
  * 20 reels (fast edits, cinematic cuts & trending viral transitions)
  * Live instant stories (uploaded within hours of each event)
  * Dedicated on-site content manager for real-time coordination
  * Wedding page setup (posting schedule, bespoke hashtags)
  * Highlight montage video (up to 90 seconds, crafted for Instagram)

#### 🛠️ Production & Infrastructure (HAMARI TARAF SE YE SAB TAY):
* Professional content creation team (videographers, editors, coordinators).
* All capture devices, specialized gimbal rigs, custom lighting, and audio equipment arranged by Gajar Halwa.
* On-site live editing station setup for immediate story drops.
* High-speed transfer & cloud pipeline support.

#### 💖 Add-Ons (THODA EXTRA PYAAR):
* **Extra Reels**: ₹3,000 / reel
* **Extra Stories**: ₹1,000 / story
* **Customisation**: Tailored packages available for multi-city & destination weddings.

#### 📋 Client Essentials & Policies:
* **Aapki Side Se Ye Zaroori Hai**: Client handles team travel, accommodation & meals, event access permissions, and pre-approves content concepts.
* **Booking Terms (Booking Pakki Kaise Hogi)**: 60% advance at booking, 40% balance on the first day of coverage.
* **Cancellation Policy (Agar Plan Change Ho Jaye)**: 25% non-refundable once booked; 50% deduction within 10 days of event; full payment due for cancellations within 48 hours.

---

## 📁 Project Directory Structure

```text
GajarHalwa/
├── index.html              # Homepage (Poster Hero, Statement, Art Wall, Process, Work, Contact)
├── packages.html           # Dedicated Packages Page (3 Collections, Gated Pricing, Gear, Add-ons, Policies)
├── styles/
│   └── main.css            # Design tokens, typography, split nav, video sound buttons, responsive system
├── scripts/
│   └── main.js             # Mobile nav, universal auto-mute video sound manager, gated pricing unlock
├── assets/
│   ├── images/             # Brand logo assets & icons
│   │   └── logo.png
│   └── videos/             # Real wedding reels & cinematic films
│       ├── (NIF) Gajar Halwa Final.mp4
│       ├── Dance_Party.mp4
│       ├── GH 29 5 2026_3 - DOC.mp4
│       ├── Gajar Halwa_Horizontal.mp4
│       ├── Package3.mp4
│       ├── hero_reel.mp4
│       ├── reel_baraat_entry.mp4
│       ├── reel_haldi_ceremony.mp4
│       ├── reel_mehendi_art.mp4
│       ├── reel_pagdi_tying.mp4
│       └── Shivam.mp4
└── README.md               # Project documentation
```

---

## 🚀 Running the Project Locally

No build tools or bundlers are required — it runs natively in any modern browser!

### Option 1: Python HTTP Server
```bash
# Start a local static server
python3 -m http.server 8888

# Open in browser:
# http://localhost:8888/index.html
# http://localhost:8888/packages.html
```

### Option 2: Node.js `serve` / `npx`
```bash
npx serve . -p 8888
```

### Option 3: VS Code / IDE Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## 📱 Responsive & Device Support

The layout is engineered to scale across all viewport dimensions:
* **Large Displays & Laptops** (`1200px+`): Asymmetric poster layouts, centered split navigation.
* **Tablets** (`768px – 1024px`, iPad Pro / Air): Animated hamburger menu with frosted backdrop drawer, 1-column art wall stacking, constrained portrait reel video frames.
* **Smartphones** (`320px – 480px`, iPhone, Samsung Galaxy, Pixel): Full-width touch targets, single-column stacked forms, iOS Safari 16px auto-zoom prevention, zero horizontal scroll overflow.
* **Ultra-Compact Screens** (`≤ 360px`): Fluid typography scaling and adaptive spacing.

---

## 👨‍💻 Credits & Developer

Designed & Developed by **[Vicky Prasad Mahato](https://abvicky.in)** ([abvicky.in](https://abvicky.in)).

---

## 📄 Copyright & License

© 2026 **Gajar Halwa — Wedding Socials**. All rights reserved.  
*Made for moments that don't happen twice.*
