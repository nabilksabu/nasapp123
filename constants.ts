
import type { NavLink, Feature } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Missions', href: '#missions' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Data', href: '#data' },
  { name: 'About', href: '#about' },
];

export const FEATURES_DATA: Feature[] = [
    {
        title: "Track the ISS",
        description: "Follow the International Space Station in real-time as it orbits our planet. Access crew information, live video feeds, and experiment data.",
        imageUrl: "https://images.unsplash.com/photo-1614726343553-9defa968a35a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Journey to Mars",
        description: "Explore the Red Planet with data from rovers like Perseverance and Curiosity. Analyze geological data, weather patterns, and high-resolution imagery.",
        imageUrl: "https://images.unsplash.com/photo-1614728263952-84ea256ec346?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Deep Space Imagery",
        description: "Gaze into the cosmos with breathtaking images from the James Webb and Hubble space telescopes. Discover distant galaxies, nebulae, and stellar nurseries.",
        imageUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1918&auto=format&fit=crop"
    }
];
