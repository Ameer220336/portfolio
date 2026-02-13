Role: You are a World-Class UI/UX Designer and Senior Creative Frontend Architect. You specialize in winning Awwwards-level portfolios using React 19 and Framer Motion. Your design aesthetic is "Neo-Brutalism meets High-End Luxury"—clean, bold typography, authentic storytelling, and immersive micro-interactions.

The Task: I need a complete visual and User Experience (UX) redesign of my single-page portfolio website.

Critical Constraints (Non-Negotiable):

Tech Stack: You MUST use the following dependencies. Do not suggest new libraries.

react ^19.2.0 & react-dom ^19.2.0 (Utilize modern React patterns like Server Actions if applicable, or standard modern hooks).

framer-motion ^11.14.4 (This is the engine for ALL animations).

swiper ^10.0.3 (For sliders/carousels).

@emailjs/browser ^3.11.0 (For the contact form logic).

Content Preservation: You must retain ALL current sections and text content (Hero intro, About stats, Skills list, Services, Qualification timeline, Testimonials, Contact details). Do not remove content, only reimagine how it is presented.

No Generic Designs: Do not give me a standard Bootstrap-looking layout. I want "Out of the Box" thinking.

Design Direction & Vibe:

Keywords: Authentic, Kinetic, Modern, Clean, Story-driven.

Philosophy: The site should feel like an application, not a static brochure. Every scroll, hover, and click should provide immediate, fluid feedback.

Theme: Use a dark mode base with high-contrast accent colors (e.g., Electric Blue or Neon Purple) to make the text pop.

Detailed Section-by-Section Redesign Instructions:

1. The "Hero" Section (The Hook)

Current: Standard text on left, image on right.

New Concept: Create a full-screen immersive experience.

Use bold, massive typography for "Full Stack Dev" that interacts with the mouse cursor (e.g., blending modes or magnetic text using Framer Motion).

Instead of a static image, place my profile cutout inside a "glassmorphism" container or behind a dynamic, animated abstract mesh/shape.

Animation: Staggered fade-up for text on load. The "Say Hello" button should have a magnetic pull effect on hover.

2. About & Stats

Current: Text block with simple counters.

New Concept: A Bento-Grid Layout.

Break the "Introduction," "Experience (4 Years)," "Systems (10+)," and "Support" into separate, beautifully styled grid cards.

Make the cards tilt slightly on hover (3D transform).

Use an animated counter for the numbers that counts up when scrolled into view.

3. Skills (The Tech Stack)

Current: Lists of HTML/CSS/PHP.

New Concept: Interactive Floating Orbit or Marquee.

Do NOT use progress bars (they are outdated).

Create two horizontal scrolling marquees (using Framer Motion) moving in opposite directions: one for Frontend, one for Backend.

Or, create a "galaxy" view where skill icons float around my central avatar.

4. Qualification (Education & Experience)

Current: Tabbed timeline.

New Concept: Vertical Parallax Journey.

Connect the dots from "Nepal (Bachelors)" to "Sydney (Masters/Current Job)" using a visual line that draws itself down the screen as the user scrolls (useScroll hook from Framer Motion).

Each milestone (SQM Research, Zillicom, etc.) should be a card that slides in from the side as the line passes it.

5. Services & Testimonials

Current: Card grid and static quotes.

New Concept: Swiper Integration.

Use swiper to create a "Deck of Cards" effect for Testimonials. Users can swipe through the cards (stack effect).

For Services, use an "Accordion" style list. When a user clicks "Web App Developer," it expands smoothly to reveal the details, closing the others.

6. Contact (The Converter)

Current: Standard form.

New Concept: Conversational UI.

Make the form look like a chat interface. "Hi Ameer, my name is [Input] and I have a project about [Input]..."

Use @emailjs/browser to handle the submission.

Add a "Copy to Clipboard" micro-interaction for the Email and WhatsApp numbers.

Deliverables:

Provide the React Component Structure for the main App.jsx and how to split these sections into components.

Write the CSS (Tailwind or Styled Components, specify which) or the sx styles for the glassmorphism and modern typography.

Write the Framer Motion variants code for the Hero text reveal and the Scroll-triggered animations.

Show exactly how to integrate Swiper for the Testimonials section with the specific "Cards" effect.

