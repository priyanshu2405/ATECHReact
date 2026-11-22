/**
 * Frequently Asked Questions (Homepage & Global)
 * Covering:
 * 1. Working across time zones (UK, UAE, Canada)
 * 2. How payments work (milestone-based, multi-currency)
 * 3. IP & source code ownership
 * 4. Post-launch support
 * 5. Non-Disclosure Agreements (NDA)
 * 6. How long projects take
 * 7. Working with existing codebases
 * 8. Which technologies we use
 */

export const homepageFaqs = [
  {
    q: 'How do you collaborate across time zones with clients in the UK, Canada, UAE, and India?',
    a: 'We schedule dedicated overlap windows every working day. For India clients, our entire engineering team operates in IST with 100% full-day overlap. For UAE clients, we have near-full working alignment (only 1.5 hours difference). For UK clients, we provide daily overlap from 9:00 AM – 1:30 PM GMT / 2:30 PM BST. For Canadian clients, we schedule evening-IST calls by arrangement to align with your morning hours. We keep communication continuous through Slack, Microsoft Teams, WhatsApp, and weekly recorded video demos.'
  },
  {
    q: 'How do payments work? Do we pay everything upfront?',
    a: 'No. We work on fixed-milestone pricing. Projects are split into 3 to 5 logical phases (e.g. Discovery & Architecture, Core Build, Integration, UAT & Launch). You only release payment when you have inspected and approved the working software for that specific milestone.'
  },
  {
    q: 'Who owns the intellectual property and source code?',
    a: 'You own 100% of the intellectual property, design assets, and source code. We work as a work-for-hire engineering team and transfer full Git repository rights upon full payment of the relevant invoices. There are zero licensing traps or proprietary lock-ins.'
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes. Every fixed-price project includes an included post-launch support window to resolve any functional issues or bugs that emerge post-deployment. Afterwards, you can choose an ongoing monthly retainer for continuous feature updates or retain us on an ad-hoc basis.'
  },
  {
    q: 'Will you sign a Non-Disclosure Agreement (NDA) before we discuss details?',
    a: 'Yes, absolutely. We are happy to sign an NDA before you share confidential requirements. Your ideas, workflows, and commercial strategies remain strictly confidential.'
  },
  {
    q: 'How long do typical web and mobile development projects take?',
    a: 'A focused MVP, corporate website, or specific CRM module typically takes between 3 to 6 weeks. Larger enterprise platforms, cross-platform mobile apps, or multi-tenant ERPs generally take 8 to 14 weeks. We provide a firm timeline commitment during initial scoping.'
  },
  {
    q: 'Can you work with our existing codebase or take over a half-finished project?',
    a: 'Yes. We often assist clients whose previous agencies or developers left code incomplete. We start with a comprehensive code quality and architecture review, identify security and technical debt, and propose a structured rescue or upgrade roadmap.'
  },
  {
    q: 'Which technologies and programming frameworks do you specialize in?',
    a: 'Our core stack centers on modern JavaScript/TypeScript (React.js, Node.js, Express), PHP (Laravel for enterprise backends), mobile cross-platform (Flutter and React Native), and relational/NoSQL databases (PostgreSQL, MySQL, MongoDB). We host on AWS, DigitalOcean, Hetzner, Vercel, and Docker containerized systems.'
  }
];

export default homepageFaqs;
