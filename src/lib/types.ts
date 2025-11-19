import type { ImagePlaceholder } from './placeholder-images';

export interface Freelancer {
  id: string;
  name: string;
  title: string;
  rate: number;
  skills: string[];
  experience: number;
  image: ImagePlaceholder;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: ImagePlaceholder;
}
