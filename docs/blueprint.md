# **App Name**: VOLT Parallax

## Core Features:

- WebP Sequence Hero: Display a full-screen WebP image sequence that animates based on scroll position, creating a parallax effect. Use urls to each image frame. Implemented as a tool in an LLM to help the content generator incorporate imagery and branding throughout.
- Drink Variant Switching: Enable users to switch between drink variants, updating the text, theme color, and WebP sequence. Use urls for fetching resources.
- Dynamic Content: Allow the user to modify drink name, description, and theme color via a configuration panel.
- Dark/Light Mode Toggle: Include a toggle for switching between dark and light color modes, with customizable color palettes.
- Loading Experience: Implement a full-screen loading overlay while the initial WebP sequence loads and a loading indicator when switching variants.
- Navigation and Sections: Create a sticky navigation bar with links to sections like Product, Ingredients, Nutrition, etc.
- CTA Image Generation: Generate product images for CTAs.

## Style Guidelines:

- Primary color: Electric blue (#7DF9FF), mirroring the brand's electric aesthetic. This vivid hue conveys energy, modernity, and innovation, perfectly aligning with VOLT's futuristic branding. 
- Background color: Near-black (#121212) to provide a cinematic, high-contrast backdrop that makes the primary color pop and emphasizes the product's high-voltage feel.
- Accent color: Neon purple (#BC13FE) to create visual interest and a sense of forward-thinking energy, drawing the user's eye to interactive elements like CTA buttons.
- Headline font: 'Space Grotesk' sans-serif for a tech-inspired, modern feel; body text: 'Inter' sans-serif for readability.
- Use clean, minimalist monochrome social icons.
- Hero section: full-screen with WebP sequence background, overlay text on the left, and variant navigation on the right.
- Smooth fade-in/fade-out animations when switching drink variants. Map scroll position precisely to the WebP sequence frames for accurate parallax.