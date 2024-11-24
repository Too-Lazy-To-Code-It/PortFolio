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
      madeAt: 'Academic project',
      builtWith: ['Flutter', 'Firebase'],
      link: 'https://github.com/Too-Lazy-To-Code-It/artounsi',
    },
    {
      year: 2024,
      title: 'Sea of Wonders',
      madeAt: 'Academic project',
      builtWith: ['Unreal Engine', 'Blueprints'],
      link: 'https://too-lazy-to-code-it.github.io/sea-of-wonders',
    },
    {
      year: 2024,
      title: 'Pac-Man AI',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'ML-Agents', 'C#'],
      link: 'https://github.com/Too-Lazy-To-Code-It/pacman-ai',
    },
    {
      year: 2024,
      title: 'Physics Engine',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'C#', 'Custom Physics'],
      link: 'https://github.com/Too-Lazy-To-Code-It/physics-engine',
    },
    {
      year: 2024,
      title: 'Al Moughamiroun 2',
      madeAt: 'Re:School',
      builtWith: ['Unity', '2D Game Mechanics', 'Mirror Networking'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2024,
      title: 'Akhlate',
      madeAt: 'Game Jam',
      builtWith: ['Unity', 'C#'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2023,
      title: 'Chemistry Lab (VR)',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'VR', 'Mirror Networking'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2023,
      title: 'BuyCycle',
      madeAt: 'Technologia Academy',
      builtWith: ['MEAN Stack', 'Angular', 'Node.js'],
      link: 'https://github.com/Too-Lazy-To-Code-It/buycycle',
    },
    {
      year: 2023,
      title: 'CI/CD Pipeline for Spring Project',
      madeAt: 'Academic project',
      builtWith: ['Jenkins', 'Docker', 'Spring', 'SonarQube'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2022,
      title: 'EcoInfiltrators',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'MEAN Stack', 'Angular', 'Mirror Networking'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2022,
      title: 'ARTounsi Platform',
      madeAt: 'Academic project',
      builtWith: ['Symfony', 'Twig', 'JavaFX', 'CodenameOne'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2022,
      title: 'Typing Simple Script for Linux',
      madeAt: 'Academic project',
      builtWith: ['Shell', 'Bash'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2021,
      title: 'Hogwarts',
      madeAt: 'Academic project ',
      builtWith: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      link: '#', // Replace with actual link if available
    },
    {
      year: 2021,
      title: 'First Place SDL Project',
      madeAt: 'Academic project',
      builtWith: ['C++', 'SDL'],
      link: '#', // Replace with actual link if available
    },
  ];
  
}
