export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  process: string;
  outcome: string;
  imageUrl: string;
  imageHint: string;
}

export const projects: Project[] = [
  {
    id: 'tech-forward',
    title: 'TechForward Annual Report',
    category: 'Corporate Communications',
    shortDescription: 'Crafted compelling narratives for the 2023 annual report, highlighting a year of innovation.',
    longDescription: 'For the TechForward 2023 Annual Report, the goal was to move beyond dry statistics and create a document that told the story of a year defined by breakthrough innovation and strategic growth. The narrative was built around key product launches and employee success stories.',
    process: 'The process involved in-depth interviews with department heads, data analysis to identify key growth metrics, and collaborative writing sessions with the design team to ensure a seamless fusion of text and visuals. The tone was crafted to be professional yet engaging, reflecting TechForward\'s brand identity.',
    outcome: 'The final report was praised by stakeholders for its clarity and engaging storytelling. It successfully communicated the company\'s vision and achievements, strengthening investor confidence and employee morale.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'corporate report',
  },
  {
    id: 'green-eats',
    title: 'GreenEats "Farm to Table" Campaign',
    category: 'Ad Campaign',
    shortDescription: 'Developed a multi-channel ad campaign emphasizing freshness and sustainability.',
    longDescription: 'The "Farm to Table" campaign for GreenEats, a sustainable food delivery service, aimed to connect consumers with the source of their food. The campaign spanned social media, email marketing, and blog content, focusing on the journey of fresh produce from local farms to the customer\'s kitchen.',
    process: 'My role was to create a unified voice across all channels. This included writing catchy social media captions, informative blog posts about partner farms, and persuasive email copy that drove conversions. I worked closely with photographers and videographers to ensure the copy complemented the vibrant visuals.',
    outcome: 'The campaign resulted in a 40% increase in user engagement on social media and a 25% uplift in new subscriptions. The "Farm to Table" tagline became a recognizable part of the GreenEats brand.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'fresh food',
  },
  {
    id: 'nomad-travel',
    title: 'Nomad Website Relaunch',
    category: 'Web Copy',
    shortDescription: 'Rewrote all web copy for a travel booking site, focusing on adventure and ease of use.',
    longDescription: 'Nomad, a boutique travel agency, needed a complete website overhaul to better reflect their brand of curated, adventurous travel experiences. I was tasked with rewriting all customer-facing copy, from the homepage hero section to detailed tour descriptions.',
    process: 'The project started with establishing a new brand voice: adventurous, trustworthy, and inspiring. I developed a content style guide and then applied it to every page, focusing on SEO optimization without sacrificing a compelling, human tone. The copy was designed to inspire wanderlust while clearly communicating the value and logistics of each travel package.',
    outcome: 'Following the relaunch, Nomad saw a 30% increase in average time on page and a 15% boost in booking conversions. The new copy was instrumental in creating a more immersive and persuasive user experience.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'travel map',
  },
  {
    id: 'mindful-app',
    title: 'Mindful App UX Writing',
    category: 'UX Writing',
    shortDescription: 'Crafted clear and empathetic microcopy for a new meditation and mindfulness app.',
    longDescription: 'For the launch of Mindful, a new wellness app, the user experience needed to be as calming and intuitive as the app\'s core function. My task was to write all the microcopy, including onboarding flows, button labels, notifications, and empty states.',
    process: 'Working within Figma alongside the design and development teams, I focused on creating copy that was encouraging, simple, and unobtrusive. Every word was chosen to guide the user gently through the app, reduce friction, and build a sense of trust and support. The tone was consistently calm and reassuring.',
    outcome: 'The app launched to positive reviews, with many users specifically praising its user-friendly and non-intrusive interface. The clear, empathetic microcopy played a key role in achieving a high user retention rate in the first three months.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'meditation nature',
  },
];
