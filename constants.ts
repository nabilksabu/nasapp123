
import type { NavLink, Feature } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Missions', href: '#missions' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Data', href: '#data' },
  { name: 'About', href: '#about' },
];

export const FEATURES_DATA: Feature[] = [
    {
        title: "Real-Time Tracking",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
        imageUrl: "https://picsum.photos/seed/satellite/600/400"
    },
    {
        title: "High-Res Imagery",
        description: "Cras et dui iaculis, tempor justo ut, sagittis nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        imageUrl: "https://picsum.photos/seed/earth/600/400"
    },
    {
        title: "Planetary Data",
        description: "Nullam et tortor et nisi eleifend tristique. Sed auctor sem et consequat efficitur. Mauris vel nunc at lorem auctor commodo.",
        imageUrl: "https://picsum.photos/seed/mars/600/400"
    }
];
