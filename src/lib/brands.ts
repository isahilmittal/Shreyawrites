
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
      { value: '8.1K', label: 'Followers' },
      { value: '3.5%', label: 'Engagement' },
      { value: '100k+', label: 'Reels Views' },
    ],
  },
  {
    id: 'brand-b',
    name: 'Kitchen Rani',
    logoUrl: 'https://i.postimg.cc/mPKFFyRR/image.png',
    imageHint: 'food brand logo',
    instagramUsername: '@kitchenraniofficial',
    instagramUrl: 'https://www.instagram.com/kitchenraniofficial/',
    metrics: [
      { value: '1.3K', label: 'Followers' },
      { value: '5.2%', label: 'Engagement' },
      { value: '150k+', label: 'Reels Views' },
    ],
  },
  {
    id: 'brand-19',
    name: 'Ostruce',
    logoUrl: 'https://i.postimg.cc/0b6bpXf3/image.png',
    imageHint: 'fashion brand logo',
    instagramUsername: '@ostruceofficial',
    instagramUrl: 'https://www.instagram.com/ostruceofficial/',
    metrics: [
        { value: '59.9K', label: 'Followers' },
        { value: 'N/A', label: 'Engagement' },
        { value: 'N/A', label: 'Reels Views' },
    ],
  },
  { id: 'brand-4', name: 'The Wellness Shop', logoUrl: 'https://i.postimg.cc/ZBNRtGyy/image.png', imageHint: 'skincare brand logo', instagramUsername: '@thewellnessshop', instagramUrl: 'https://www.thewellnessshop.in/', metrics: [] },
  { id: 'brand-5', name: 'Karsell', logoUrl: 'https://i.postimg.cc/hJPPvJQg/image.png', imageHint: 'haircare product logo', instagramUsername: '@karseell', instagramUrl: 'https://www.karseell.com/', metrics: [] },
  { id: 'brand-6', name: 'Clearzal', logoUrl: 'https://i.postimg.cc/N5569MT6/image.png', imageHint: 'pain relief cream logo', instagramUsername: '@clearzal', instagramUrl: 'https://clearzal.com/', metrics: [] },
  { id: 'brand-7', name: 'Southmoon', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'health product logo', instagramUsername: '@southmoon', instagramUrl: '#', metrics: [] },
  { id: 'brand-8', name: 'Bee Venom Psoriasis Spray', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'skincare product logo', instagramUsername: '@beevenom', instagramUrl: '#', metrics: [] },
  { id: 'brand-9', name: 'Bee Venom Nail Treatment Serum', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'nail care product logo', instagramUsername: '@beevenomnails', instagramUrl: '#', metrics: [] },
  { id: 'brand-10', name: 'Saam', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'face cream logo', instagramUsername: '@saam', instagramUrl: '#', metrics: [] },
  { id: 'brand-11', name: 'Black Hair Shampoo', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'hair product logo', instagramUsername: '@blackhairshampoo', instagramUrl: '#', metrics: [] },
  { id: 'brand-12', name: 'Stellar Scoops', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'icecream logo', instagramUsername: '@stellarscoops', instagramUrl: '#', metrics: [] },
  { id: 'brand-13', name: 'Momentum Motors', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'car logo', instagramUsername: '@momentum', instagramUrl: '#', metrics: [] },
  { id: 'brand-14', name: 'Bookworm Reads', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'book logo', instagramUsername: '@bookworm', instagramUrl: '#', metrics: [] },
  { id: 'brand-15', name: 'Artisan Bakes', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'bakery logo', instagramUsername: '@artisanbakes', instagramUrl: '#', metrics: [] },
  { id: 'brand-16', name: 'Summit Gear', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'outdoor logo', instagramUsername: '@summitgear', instagramUrl: '#', metrics: [] },
  { id: 'brand-17', name: 'Innovate AI', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'ai logo', instagramUsername: '@innovateai', instagramUrl: '#', metrics: [] },
  { id: 'brand-18', name: 'Zenith Watches', logoUrl: 'https://placehold.co/100x100.png', imageHint: 'watch logo', instagramUsername: '@zenith', instagramUrl: '#', metrics: [] },
];
