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
    id: 'peachfix-body-glue',
    title: 'PeachFix Body Adhesive Glue',
    category: 'Product Page Copy',
    shortDescription: 'Crafted compelling product page copy and promotional content for a niche beauty product.',
    longDescription: 'Crafted compelling product page copy and promotional content for a niche beauty product, highlighting skin safety, usability, and effectiveness. Delivered engaging, conversion-focused storytelling tailored for D2C e-commerce.',
    process: 'The project involved developing a brand voice that was both playful and trustworthy. I wrote all website copy, including the product description, FAQs, and brand story, ensuring it was SEO-friendly and aligned with ShaperPeach\'s marketing goals.',
    outcome: 'The new product page copy contributed to a successful launch, with high engagement rates and a 20% increase in conversion within the first month. The content effectively communicated the product\'s unique value proposition.',
    imageUrl: 'https://i.postimg.cc/bZ08b4Gq/image.png',
    imageHint: 'beauty product',
  },
];
