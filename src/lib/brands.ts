
export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  imageHint: string;
  instagramUsername: string;
  instagramUrl: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

export const brands: Brand[] = [
  {
    id: 'brand-a',
    name: 'Shaper Peach',
    logoUrl: 'https://i.postimg.cc/gX8VVGgQ/Shaper-Peach-Logo.png',
    imageHint: 'fitness apparel logo',
    instagramUsername: '@shaperpeachofficial',
    instagramUrl: 'https://www.instagram.com/shaperpeachofficial/',
    metrics: [
      { value: '250K+', label: 'Followers' },
      { value: '3.5%', label: 'Engagement' },
      { value: '100k+', label: 'Reels Views' },
    ],
  },
  {
    id: 'brand-b',
    name: 'Urban Threads',
    logoUrl: 'https://placehold.co/100x100.png',
    imageHint: 'fashion logo',
    instagramUsername: '@urbanthreads',
    instagramUrl: '#',
    metrics: [
      { value: '1.5M', label: 'Followers' },
      { value: '4.8%', label: 'Engagement' },
      { value: '120k+', label: 'Reels Views' },
    ],
  },
  {
    id: 'brand-c',
    name: 'Healthful Eats',
    logoUrl: 'https://placehold.co/100x100.png',
    imageHint: 'food logo',
    instagramUsername: '@healthfuleats',
    instagramUrl: '#',
    metrics: [
      { value: '800K', label: 'Followers' },
      { value: '6.1%', label: 'Engagement' },
      { value: '95k+', label: 'Reels Views' },
    ],
  },
  { id: 'brand-4', name: 'TechNova', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'tech logo', instagramUsername: '@technova', instagramUrl: '#', metrics: [] },
  { id: 'brand-5', name: 'Wanderlust Travel', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'travel logo', instagramUsername: '@wanderlust', instagramUrl: '#', metrics: [] },
  { id: 'brand-6', name: 'FitLife Gym', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'fitness logo', instagramUsername: '@fitlife', instagramUrl: '#', metrics: [] },
  { id: 'brand-7', name: 'EcoGoods', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'eco logo', instagramUsername: '@ecogoods', instagramUrl: '#', metrics: [] },
  { id: 'brand-8', name: 'HomeBody Decor', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'decor logo', instagramUsername: '@homebody', instagramUrl: '#', metrics: [] },
  { id: 'brand-9', name: 'PetPalace', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'pet logo', instagramUsername: '@petpalace', instagramUrl: '#', metrics: [] },
  { id: 'brand-10', name: 'Quantum Computing', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'quantum logo', instagramUsername: '@quantum', instagramUrl: '#', metrics: [] },
  { id: 'brand-11', name: 'AquaPure', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'water logo', instagramUsername: '@aquapure', instagramUrl: '#', metrics: [] },
  { id: 'brand-12', name: 'Stellar Scoops', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'icecream logo', instagramUsername: '@stellarscoops', instagramUrl: '#', metrics: [] },
  { id: 'brand-13', name: 'Momentum Motors', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'car logo', instagramUsername: '@momentum', instagramUrl: '#', metrics: [] },
  { id: 'brand-14', name: 'Bookworm Reads', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'book logo', instagramUsername: '@bookworm', instagramUrl: '#', metrics: [] },
  { id: 'brand-15', name: 'Artisan Bakes', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'bakery logo', instagramUsername: '@artisanbakes', instagramUrl: '#', metrics: [] },
  { id: 'brand-16', name: 'Summit Gear', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'outdoor logo', instagramUsername: '@summitgear', instagramUrl: '#', metrics: [] },
  { id: 'brand-17', name: 'Innovate AI', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'ai logo', instagramUsername: '@innovateai', instagramUrl: '#', metrics: [] },
  { id: 'brand-18', name: 'Zenith Watches', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'watch logo', instagramUsername: '@zenith', instagramUrl: '#', metrics: [] },
];
