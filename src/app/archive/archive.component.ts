import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ArchiveProject {
  year: number;
  title: string;
  madeAt: string;
  builtWith: string[];
  link: string;
}

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent {
  archiveProjects: ArchiveProject[] = [
    {
      year: 2024,
      title: 'Artounsi',
      madeAt: 'Personal Project',
      builtWith: ['Flutter', 'Firebase'],
      link: 'https://github.com/Too-Lazy-To-Code-It/artounsi',
    },
    {
      year: 2024,
      title: 'Sea of Wonders',
      madeAt: 'Personal Project',
      builtWith: ['Unreal Engine', 'Blueprints'],
      link: 'https://too-lazy-to-code-it.github.io/sea-of-wonders',
    },
    {
      year: 2024,
      title: 'Pac-Man AI',
      madeAt: 'Personal Project',
      builtWith: ['Unity', 'ML-Agents', 'C#'],
      link: 'https://github.com/Too-Lazy-To-Code-It/pacman-ai',
    },
    {
      year: 2023,
      title: 'CI/CD Pipeline for Spring Project',
      madeAt: 'Technologia Academy',
      builtWith: ['Jenkins', 'Docker', 'Spring', 'SonarQube'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2023,
      title: 'BuyCycle',
      madeAt: 'Personal Project',
      builtWith: ['MEAN Stack', 'Angular', 'Node.js'],
      link: 'https://github.com/Too-Lazy-To-Code-It/buycycle',
    },
    {
      year: 2024,
      title: 'Physics Engine',
      madeAt: 'Personal Project',
      builtWith: ['Unity', 'C#', 'Custom Physics'],
      link: 'https://github.com/Too-Lazy-To-Code-It/physics-engine',
    },
    {
      year: 2024,
      title: 'Al Moughamiroun 2',
      madeAt: 'Re:School',
      builtWith: ['Unity', '2D Game Mechanics'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2022,
      title: 'EcoInfiltrators',
      madeAt: 'University Project',
      builtWith: ['MEAN Stack', 'Angular', 'MongoDB'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2022,
      title: 'Chemistry Lab (VR)',
      madeAt: 'Personal Project',
      builtWith: ['Unity', 'VR', 'Mirror Networking'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2021,
      title: 'First Place SDL Project',
      madeAt: 'University',
      builtWith: ['C++', 'SDL'],
      link: '#', // Replace with actual link if available
    },
  ];
}
