# Changes made to the Atech Infotech website

## Removed (could not be verified, or contradicted other text on the site)
- "Trusted by 200+ companies", "200+ projects", "50+ engineers", "99% satisfaction", "12+ years" (hero)
- "Founded 2012 in Pune" (About said 2012/Pune, the timeline and footer said 2024/Indore; kept 2024/Indore)
- "Fortune 500", 97% / 92% / 88% progress bars, "Global Team" card
- Portfolio projects with invented metrics (2M+ users, 500K downloads, etc.)
- Team bios claiming Y-Combinator, "$50M+ deals", "former CTO"
- AI/ML and Cybersecurity services, Kubernetes/Go/Java/Swift/etc. in the tech list
- Dead links: Careers, Blog, Privacy/Terms/Cookie (#), social icons with "#" links
- Promises: "reply within 24 hours"

## Added / fixed
- SEO: canonical now https://www.atechinfotech.com/ (was atech.example.com), new title/description,
  og:url, JSON-LD business data, robots.txt, sitemap.xml, noscript text
- Startup-focused hero, "Book a Free Call" button, WhatsApp button in Contact
- "How we work" process block, 3 anonymised portfolio entries, trimmed services/tech lists

## Please review and edit (these use details I could not confirm)
- src/components/Portfolio.jsx: confirm the 3 entries are accurate and OK to show; add real case studies
- src/components/Team.jsx: bios are generic; put in your real ones; fill social links
- src/components/Hero.jsx: "10+ projects delivered" came from your own About timeline; confirm
- src/components/Technologies.jsx and Services.jsx: only keep what you can actually deliver
- src/components/Contact.jsx: set BOOKING_URL (free Calendly/Cal.com) and the socials URLs
- Consider a business email instead of a personal Gmail
