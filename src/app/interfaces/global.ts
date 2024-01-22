export interface RootObject {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

interface Technology {
  name: string;
  images: Images2;
  description: string;
}

interface Images2 {
  portrait: string;
  landscape: string;
}

export interface Crew {
  name: string;
  images: Images;
  role: string;
  bio: string;
}

export interface Destination {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}

interface Images {
  png: string;
  webp: string;
}