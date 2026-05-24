<div align="center">
  <img src="public/volt_neon.gif" alt="Volt Parallax Motion" width="100%" />

  <h1>⚡ VOLT — Cinematic Parallax Energy Drink Website</h1>
  
  <p>
    <strong>A high-performance, scroll-driven parallax website built to showcase a fictional energy drink brand using cinematic WebP frame sequences, smooth variant switching, and modern frontend tooling.</strong>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>
</div>

<hr />

## ✨ Features

- **Scroll-Controlled Cinematic Hero**
  - Full-screen parallax background driven by WebP frame sequences.
  - Scroll down → animation advances.
  - Scroll up → animation reverses.
  - Smooth, non-time-based motion tied directly to physical scroll position.

- **High-Performance Asset Delivery**
  - WebP frame sequences hosted externally on Supabase Storage (CDN-backed).
  - Lazy loading + progressive preloading to avoid blocking renders.

- **Premium UI / UX**
  - Dark cinematic aesthetic built to frame high-fidelity imagery.
  - Minimal UI to keep focus purely on motion and product.
  - Smooth fade transitions between variants.

---

## 🥤 Multiple Drink Variants

VOLT dynamically shifts its entire theme and parallax sequence based on the active flavor variant.

<div align="center">
  <table>
    <tr>
      <td align="center">
        <h3>VOLT Blue</h3>
        <img src="public/volt_blue.png" alt="VOLT Blue Static" width="300" /><br/>
        <img src="public/volt_blue.gif" alt="VOLT Blue Parallax" width="300" />
      </td>
      <td align="center">
        <h3>VOLT Neon</h3>
        <img src="public/volt_neon.png" alt="VOLT Neon Static" width="300" /><br/>
        <img src="public/volt_neon.gif" alt="VOLT Neon Parallax" width="300" />
      </td>
      <td align="center">
        <h3>VOLT Red</h3>
        <img src="public/volt_red.png" alt="VOLT Red Static" width="300" /><br/>
        <img src="public/volt_red.gif" alt="VOLT Red Parallax" width="300" />
      </td>
    </tr>
  </table>
</div>

---

## 🧠 Technical Architecture

### Scroll → Frame Mapping
Instead of autoplaying a massive video file, the hero animation maps **scroll position → frame index**, giving absolute tactile control over the motion while saving massive amounts of memory and bandwidth.

```text
scrollProgress → normalized value → frameIndex → WebP frame
```

**Why this approach?**
- Feels physically tactile and responsive (unlike a video player).
- Bypasses heavy video decoding overhead on mobile devices.
- Gives full programmatic control over animation timing and snapping.

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

## 🚀 Local Development

```bash
# install dependencies
npm install

# run dev server
npm run dev
```

Open `http://localhost:3000` to view the application.

---

## 🌐 Deployment

Deployed using **Vercel** with automatic CI/CD from GitHub.

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add environment variables from `.env`.
4. Deploy.

---

## 📌 Purpose of This Project

This project explores how **image-sequence–driven motion**, **scroll-mapped animation**, and high-quality asset design can be combined into a production-ready marketing site. It is not a template dump — it is an engineered motion system.
