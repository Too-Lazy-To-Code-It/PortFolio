import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  externalLink?: string;
}

@Component({
  selector: 'app-other-noteworthy-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './other-noteworthy-projects.component.html',
  styleUrls: ['./other-noteworthy-projects.component.scss'],
})
export class OtherNoteworthyProjectsComponent {
  projects: Project[] = [
    {
      title: 'Artounsi',
      description:
        'An art gallery mobile application showcasing and selling artwork. Built with Flutter and integrated with Firebase for secure backend functionality.',
      technologies: ['Flutter', 'Firebase'],
      githubLink: 'https://github.com/Too-Lazy-To-Code-It/artounsi',
      externalLink: 'https://too-lazy-to-code-it.github.io/artounsi',
    },
    {
      title: 'Sea of Wonders',
      description:
        'A deep-sea exploration game built with Unreal Engine, featuring advanced underwater mechanics and immersive visuals.',
      technologies: ['Unreal Engine', 'Blueprints'],
      externalLink: 'https://too-lazy-to-code-it.github.io/sea-of-wonders',
    },
    {
      title: 'Pac-Man AI',
      description:
        'A Pac-Man-inspired game using Unity and ML-Agents to enhance gameplay with AI-driven agents.',
      technologies: ['Unity', 'ML-Agents', 'C#'],
      githubLink: 'https://github.com/Too-Lazy-To-Code-It/pacman-ai',
    },
    {
      title: 'Physics Engine',
      description:
        'A custom rigid body simulation engine developed with Unity and C# for realistic physics-based gameplay.',
      technologies: ['Unity', 'C#', 'Physics'],
      githubLink: 'https://github.com/Too-Lazy-To-Code-It/physics-engine',
    },
    {
      title: 'CI/CD Pipeline for Spring Project',
      description:
        'Designed and implemented an automated CI/CD pipeline for a Spring project using Jenkins, Docker, and SonarQube.',
      technologies: ['Jenkins', 'Docker', 'Spring', 'SonarQube'],
    },
    {
      title: 'BuyCycle',
      description:
        'A web application for buying and selling bicycles, featuring a user-friendly interface and secure backend.',
      technologies: ['MEAN Stack', 'Angular', 'Node.js'],
      githubLink: 'https://github.com/Too-Lazy-To-Code-It/buycycle',
    },
  ];

  showMore() {
    console.log('Show more clicked');
    // Add functionality to load more projects if needed
  }
}
