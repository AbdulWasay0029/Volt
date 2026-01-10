# ⚡ VOLT — Cinematic Parallax Energy Drink Website

A high-performance, scroll-driven parallax website built to showcase a fictional energy drink brand (**VOLT**) using cinematic WebP frame sequences, smooth variant switching, and modern frontend tooling.

This project explores how **image-sequence–driven motion**, **scroll-mapped animation**, and **AI-assisted asset generation** can be combined into a production-ready marketing site.

---

## ✨ Features

* **Scroll-Controlled Cinematic Hero**

  * Full-screen parallax background driven by WebP frame sequences
  * Scroll down → animation advances
  * Scroll up → animation reverses
  * Smooth, non-time-based motion (tied directly to scroll position)

* **Multiple Drink Variants**

  * VOLT Blue
  * VOLT Red
  * VOLT Neon
  * Seamless PREV / NEXT switching
  * Dynamic theme color updates per variant

* **High-Performance Asset Delivery**

  * WebP frame sequences hosted on Supabase Storage (CDN-backed)
  * Lazy loading + progressive preloading to avoid blocking renders

* **Premium UI / UX**

  * Dark cinematic aesthetic
  * Clean typography and spacing
  * Minimal UI to keep focus on motion
  * Smooth fade transitions between variants

* **Production-Ready Stack**

  * TypeScript
  * Next.js (App Router)
  * Tailwind CSS
  * Deployed on Vercel

---

## 🧠 Technical Architecture

### Scroll → Frame Mapping

Instead of autoplaying video, the hero animation maps **scroll position → frame index**, giving precise control over motion and performance.

```text
scrollProgress → normalized value → frameIndex → WebP frame
```

This approach:

* Feels more tactile than video
* Avoids heavy video decoding
* Gives full control over animation timing

---

## 🗂️ Project Structure

```text
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
│
├─ components/
│  ├─ hero-section.tsx
│  ├─ parallax-background.tsx
│  ├─ loading-screen.tsx
│  ├─ header.tsx
│  ├─ footer.tsx
│  └─ sections/
│     ├─ about-section.tsx
│     ├─ ingredients-section.tsx
│     ├─ nutrition-section.tsx
│     ├─ reviews-section.tsx
│     └─ faq-section.tsx
│
├─ lib/
│  ├─ drink-variants.ts
│  ├─ placeholder-images.ts
│  └─ utils.ts
```

---

## 🎞️ Assets & Hosting

* **Frame sequences** are hosted externally on **Supabase Storage**
* Only the **first frame URL** is referenced in code
* Remaining frames are inferred programmatically
* This keeps the repo lightweight and deploy-friendly

---

## 🚀 Local Development

```bash
# install dependencies
npm install

# run dev server
npm run dev
```

Open `http://localhost:3000`

---

## 🌐 Deployment

Deployed using **Vercel** with automatic CI/CD from GitHub.

Steps:

1. Push repo to GitHub
2. Import project in Vercel
3. Add environment variables from `.env`
4. Deploy

---

## 🧪 Notes on Performance

* Large image sequences are **expected** to load progressively
* Initial frames are prioritized to avoid blank states
* Additional optimizations (frame thinning, predictive loading) can be added if needed

---

## 📌 Purpose of This Project

This project was built to:

* Experiment with scroll-driven animation systems
* Explore cinematic product presentation on the web
* Demonstrate a real-world frontend architecture combining design, performance, and motion

It is **not** a template dump — it is a system.

---

## 📄 License

This project is for educational and demonstration purposes.
