
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
    name: 'Glamour Cosmetics',
    logoUrl: 'https://placehold.co/100x100.png',
    imageHint: 'cosmetics logo',
    instagramUsername: '@glamourcos',
    instagramUrl: '#',
    metrics: [
      { value: '2M+', label: 'Followers' },
      { value: '5.2%', label: 'Engagement' },
      { value: '150k+', label: 'Reels Views' },
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
  { id: 'brand-19', name: 'Creative Minds', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'creative logo', instagramUsername: '@creativeminds', instagramUrl: '#', metrics: [] },
  { id: 'brand-20', name: 'GreenLeaf Naturals', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'natural logo', instagramUsername: '@greenleaf', instagramUrl: '#', metrics: [] },
  { id: 'brand-21', name: 'SoundWave Audio', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'audio logo', instagramUsername: '@soundwave', instagramUrl: '#', metrics: [] },
  { id: 'brand-22', name: 'PixelPerfect Gaming', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'gaming logo', instagramUsername: '@pixelperfect', instagramUrl: '#', metrics: [] },
  { id: 'brand-23', name: 'UrbanEdge Fashion', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'fashion logo', instagramUsername: '@urbanedge', instagramUrl: '#', metrics: [] },
  { id: 'brand-24', name: 'Gourmet Kitchen', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'kitchen logo', instagramUsername: '@gourmetkitchen', instagramUrl: '#', metrics: [] },
  { id: 'brand-25', name: 'Aperture Films', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'film logo', instagramUsername: '@aperturefilms', instagramUrl: '#', metrics: [] },
  { id: 'brand-26', name: 'Serenity Spa', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'spa logo', instagramUsername: '@serenityspa', instagramUrl: '#', metrics: [] },
  { id: 'brand-27', name: 'Nova Robotics', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'robotics logo', instagramUsername: '@novarobotics', instagramUrl: '#', metrics: [] },
  { id: 'brand-28', name: 'RocketFuel Coffee', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'coffee logo', instagramUsername: '@rocketfuel', instagramUrl: '#', metrics: [] },
  { id: 'brand-29', name: 'Helios Energy', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'energy logo', instagramUsername: '@helios', instagramUrl: '#', metrics: [] },
  { id: 'brand-30', name: 'Odyssey Bikes', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'bike logo', instagramUsername: '@odysseybikes', instagramUrl: '#', metrics: [] },
  { id: 'brand-31', name: 'CloudScape', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'cloud logo', instagramUsername: '@cloudscape', instagramUrl: '#', metrics: [] },
  { id: 'brand-32', name: 'SilverScreen Cinemas', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'cinema logo', instagramUsername: '@silverscreen', instagramUrl: '#', metrics: [] },
  { id: 'brand-33', name: 'MindBloom', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'wellness logo', instagramUsername: '@mindbloom', instagramUrl: '#', metrics: [] },
  { id: 'brand-34', name: 'DataSphere', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'data logo', instagramUsername: '@datasphere', instagramUrl: '#', metrics: [] },
  { id: 'brand-35', name: 'Heritage Homes', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'home logo', instagramUsername: '@heritagehomes', instagramUrl: '#', metrics: [] },
  { id: 'brand-36', name: 'Apex Security', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'security logo', instagramUsername: '@apexsecurity', instagramUrl: '#', metrics: [] },
];
