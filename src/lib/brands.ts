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
];

    