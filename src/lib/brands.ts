
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
        { value: '2.1%', label: 'Engagement' },
        { value: '80k+', label: 'Reels Views' },
    ],
  },
  { id: 'brand-4', name: 'The Wellness Shop', logoUrl: 'https://i.postimg.cc/ZBNRtGyy/image.png', imageHint: 'skincare brand logo', instagramUsername: '@thewellnessshop', instagramUrl: 'https://www.thewellnessshop.in/', metrics: [] },
  { id: 'brand-5', name: 'Karsell', logoUrl: 'https://i.postimg.cc/hJPPvJQg/image.png', imageHint: 'haircare product logo', instagramUsername: '@karseell', instagramUrl: 'https://www.karseell.com/', metrics: [] },
  { id: 'brand-6', name: 'Clearzal', logoUrl: 'https://i.postimg.cc/N5569MT6/image.png', imageHint: 'pain relief cream logo', instagramUsername: '@clearzal', instagramUrl: 'https://clearzal.com/', metrics: [] },
];
