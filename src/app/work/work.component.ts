import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { github?: string; external?: string };
  image: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  featuredProjects: Project[] = [
    {
      title: 'Artounsi',
      description:
        'An art gallery mobile application showcasing and selling artwork. Includes secure Firebase backend, intuitive user interface, and cross-platform compatibility.',
      tech: ['Flutter', 'Firebase'],
      links: {
        github: 'https://github.com/Too-Lazy-To-Code-It/artounsi',
        external: 'https://too-lazy-to-code-it.github.io/artounsi',
      },
      image: 'https://via.placeholder.com/500x300', // Replace with actual image URL
    },
    {
      title: 'Sea of Wonders',
      description:
        'A deep-sea exploration game with advanced underwater mechanics, realistic visuals, and immersive gameplay, built using Unreal Engine.',
      tech: ['Unreal Engine', 'Blueprints'],
      links: {
        external: 'https://too-lazy-to-code-it.github.io/sea-of-wonders',
      },
      image: 'https://via.placeholder.com/500x300', // Replace with actual image URL
    },
    {
      title: 'Pac-Man AI',
      description:
        'A Pac-Man-inspired game using Unity and ML-Agents to create AI-driven gameplay for dynamic and challenging player experiences.',
      tech: ['Unity', 'ML-Agents', 'C#'],
      links: {
        github: 'https://github.com/Too-Lazy-To-Code-It/pacman-ai',
      },
      image: 'https://via.placeholder.com/500x300', // Replace with actual image URL
    },
  ];
}
